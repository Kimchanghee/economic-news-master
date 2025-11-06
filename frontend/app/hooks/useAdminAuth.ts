import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "@/app/utils/api";

export function useAdminAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [view, setView] = useState<"login" | "dashboard">("login");

  useEffect(() => {
    const stored = localStorage.getItem("econnews-token");
    if (stored) {
      setToken(stored);
      setView("dashboard");
    }
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_BASE}/admin/login`, { email, password });
      const accessToken = response.data.access_token as string;
      setToken(accessToken);
      localStorage.setItem("econnews-token", accessToken);
      setView("dashboard");
    } catch (error) {
      console.error("Login failed", error);
      alert("로그인에 실패했습니다. 자격 증명을 확인하세요.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("econnews-token");
    setToken(null);
    setView("login");
  };

  return { token, view, handleLogin, handleLogout };
}

