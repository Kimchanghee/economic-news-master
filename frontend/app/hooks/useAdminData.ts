import useSWR from "swr";
import axios from "axios";
import { API_BASE, fetcher, fetchWithToken } from "@/app/utils/api";
import type { DashboardResponse, AdminNewsResponse } from "@/app/types/admin";

export function useAdminData(token: string | null) {
  const dashboardKey = token ? `${API_BASE}/admin/dashboard` : null;
  
  const { data: dashboard, mutate: refreshDashboard } = useSWR<DashboardResponse>(
    token ? dashboardKey : null,
    (url) => fetchWithToken(url!, token!)
  );

  const { data: news, mutate: refreshNews } = useSWR<AdminNewsResponse>(`${API_BASE}/news`, fetcher);

  const handleCollect = async () => {
    if (!token) return;
    try {
      await axios.post(
        `${API_BASE}/admin/collect`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await Promise.all([refreshDashboard(), refreshNews()]);
    } catch (error) {
      console.error("Collect failed", error);
      alert("수집에 실패했습니다. 잠시 후 다시 시도하세요.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!token) return;
    if (!confirm("해당 뉴스를 삭제하시겠습니까?")) return;
    try {
      await axios.delete(`${API_BASE}/admin/news/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await refreshNews();
    } catch (error) {
      console.error("Delete failed", error);
      alert("삭제에 실패했습니다.");
    }
  };

  return { dashboard, news, handleCollect, handleDelete };
}

