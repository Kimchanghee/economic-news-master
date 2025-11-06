import axios from "axios";

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const fetchWithToken = async (url: string, token: string) => {
  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

