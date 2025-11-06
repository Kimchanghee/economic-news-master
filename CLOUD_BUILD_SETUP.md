# Cloud Build 설정 가이드

## ⚠️ 중요: Dockerfile 오류 해결

**오류 메시지**: `unable to prepare context: unable to evaluate symlinks in Dockerfile path: lstat /workspace/Dockerfile: no such file or directory`

**원인**: Cloud Build 트리거가 Dockerfile 모드로 설정되어 있어 `cloudbuild.yaml`을 사용하지 않음

**해결 방법**: 아래 "1. Cloud Build 트리거 설정 확인" 섹션 참조

---

## 문제 해결: 브랜치 패턴 불일치 오류

Cloud Build 트리거가 "구성된 브랜치 패턴과 일치하는 브랜치를 찾을 수 없습니다" 오류를 발생시키는 경우, 다음 단계를 따르세요.

## 1. Cloud Build 트리거 설정 확인 ⭐ 가장 중요!

Google Cloud Console에서 트리거 설정을 확인하고 수정하세요:

### 단계별 가이드:

1. **[Cloud Build 트리거 페이지](https://console.cloud.google.com/cloud-build/triggers)로 이동**

2. **트리거 선택 및 편집**
   - 해당 트리거 찾기 (저장소 이름으로 검색)
   - 트리거 오른쪽의 **⋮ (점 3개)** 클릭 → **편집** 선택

3. **Configuration (구성) 섹션 수정** ← 가장 중요!
   
   아래로 스크롤하여 **Configuration** 섹션을 찾으세요.
   
   **현재 설정 (문제 발생):**
   ```
   Type: Autodetected 또는 Dockerfile
   ```
   
   **변경할 설정 (올바른 설정):**
   ```
   Type: Cloud Build configuration file (yaml or json)
   Location: Repository
   Cloud Build configuration file location: cloudbuild.yaml
   ```
   
   드롭다운 메뉴에서 **"Cloud Build configuration file (yaml or json)"**을 선택하세요!

4. **Source (소스) 섹션에서 브랜치 패턴 확인**
   - 브랜치: `^main$` 또는 `^master$` 또는 `^(main|master)$`

5. **저장 버튼 클릭**

6. **테스트**
   - 트리거 오른쪽의 **RUN** 버튼으로 수동 실행
   - 또는 Git 커밋/푸시로 자동 실행

## 2. 브랜치 패턴 수정

현재 저장소의 기본 브랜치는 `master`입니다. 트리거를 다음 중 하나로 설정하세요:

### 옵션 A: 특정 브랜치 (권장)
```
^master$
```

### 옵션 B: 모든 브랜치
```
.*
```

### 옵션 C: 특정 패턴만
```
^(master|main|release/.*)$
```

## 3. Cloud Build 트리거 생성 (처음 설정하는 경우)

### gcloud CLI 사용:

```bash
gcloud builds triggers create github \
  --name="economic-news-deploy" \
  --repo-name="economic-news" \
  --repo-owner="ympartnersuk-alt" \
  --branch-pattern="^master$" \
  --build-config="cloudbuild.yaml"
```

### Console 사용:

1. [Cloud Build 트리거](https://console.cloud.google.com/cloud-build/triggers) 페이지로 이동
2. **트리거 만들기** 클릭
3. 다음 정보 입력:
   - **이름**: `economic-news-deploy`
   - **이벤트**: `브랜치에 푸시`
   - **소스**: GitHub 저장소 선택
   - **브랜치**: `^master$` (정규식)
   - **Cloud Build 구성 파일**: `cloudbuild.yaml`

## 4. 필요한 환경 변수 설정

Cloud Build 트리거에서 다음 대체 변수(substitution variables)를 설정하세요:

- `_REGION`: Cloud Run 리전 (예: `us-central1`, `asia-northeast3`)
- `_API_BASE_URL`: Backend API URL (배포 후 자동 생성됨)

## 5. 권한 설정

Cloud Build 서비스 계정에 필요한 권한 부여:

```bash
PROJECT_ID=$(gcloud config get-value project)
PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format="value(projectNumber)")

# Cloud Run Admin 권한
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/run.admin"

# Service Account User 권한
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"
```

## 6. master 브랜치로 푸시

변경 사항을 master 브랜치에 병합하여 배포 트리거:

```bash
# 현재 브랜치에서 작업 완료 후
git checkout master
git pull origin master
git merge claude/fix-cloud-build-branch-pattern-011CUq2DD9pqbty4ZSsJ6ZXX
git push origin master
```

## 7. 배포 확인

Cloud Build가 시작되면:

1. [Cloud Build 기록](https://console.cloud.google.com/cloud-build/builds) 페이지에서 빌드 상태 확인
2. 빌드가 완료되면 [Cloud Run](https://console.cloud.google.com/run) 페이지에서 서비스 확인
3. 제공된 URL로 서비스에 접근

## 문제 해결

### 브랜치가 여전히 감지되지 않는 경우:

1. 저장소 연결 상태 확인:
   ```bash
   gcloud builds triggers list
   ```

2. GitHub 앱 권한 확인:
   - [GitHub Settings > Applications](https://github.com/settings/installations)에서 Google Cloud Build 권한 확인

3. 수동 빌드 실행으로 테스트:
   ```bash
   gcloud builds submit --config=cloudbuild.yaml
   ```

## Artifact Registry 사용 (선택사항)

Container Registry 대신 Artifact Registry를 사용하려면:

1. Artifact Registry 저장소 생성:
   ```bash
   gcloud artifacts repositories create economic-news \
     --repository-format=docker \
     --location=us-central1
   ```

2. `cloudbuild.yaml`에서 이미지 URL을 다음과 같이 변경:
   ```
   gcr.io/$PROJECT_ID → us-central1-docker.pkg.dev/$PROJECT_ID/economic-news
   ```
