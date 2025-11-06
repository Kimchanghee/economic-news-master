import axios from "axios";
import { API_BASE } from "@/app/utils/api";

export function useNewsActions(mutate: () => void) {
  const handleLike = async (id: string) => {
    try {
      await axios.post(`${API_BASE}/news/${id}/like`);
      mutate();
    } catch (error) {
      console.error("Failed to like", error);
    }
  };

  const handleView = async (id: string) => {
    try {
      await axios.post(`${API_BASE}/news/${id}/view`);
      mutate();
    } catch (error) {
      console.error("Failed to record view", error);
    }
  };

  return { handleLike, handleView };
}

