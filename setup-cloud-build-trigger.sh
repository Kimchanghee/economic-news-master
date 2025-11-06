#!/bin/bash

# Cloud Build 트리거 생성 스크립트
# 사용법: ./setup-cloud-build-trigger.sh

# 프로젝트 ID 설정 (실제 프로젝트 ID로 변경하세요)
PROJECT_ID=$(gcloud config get-value project)

echo "현재 프로젝트: $PROJECT_ID"
echo ""
echo "기존 트리거 목록:"
gcloud builds triggers list

echo ""
echo "새 트리거를 생성하시겠습니까? (기존 트리거가 있다면 먼저 삭제하세요)"
echo "트리거 이름을 입력하거나, Enter를 눌러 건너뛰세요:"
read TRIGGER_NAME

if [ -z "$TRIGGER_NAME" ]; then
  echo "트리거 생성을 건너뜁니다."
  exit 0
fi

echo ""
echo "GitHub 저장소 소유자 (예: Kimchanghee):"
read REPO_OWNER

echo "GitHub 저장소 이름 (예: economic-news-master):"
read REPO_NAME

# 트리거 생성
gcloud builds triggers create github \
  --name="$TRIGGER_NAME" \
  --repo-name="$REPO_NAME" \
  --repo-owner="$REPO_OWNER" \
  --branch-pattern="^main$|^master$" \
  --build-config="cloudbuild.yaml" \
  --substitutions="_REGION=asia-northeast1,_API_BASE_URL=https://economic-news-backend-CHANGE-THIS.run.app"

echo ""
echo "트리거가 생성되었습니다!"
echo "Cloud Build 콘솔에서 확인하세요: https://console.cloud.google.com/cloud-build/triggers"

