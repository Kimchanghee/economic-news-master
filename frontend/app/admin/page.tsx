"use client";

import { LoginForm } from "../components/admin/LoginForm";
import { Dashboard } from "../components/admin/Dashboard";
import { useAdminAuth } from "../hooks/useAdminAuth";

export default function AdminPage() {
  const { token, view, handleLogin, handleLogout } = useAdminAuth();

  if (view === "login" || !token) {
    return <LoginForm onSubmit={handleLogin} />;
  }

  return <Dashboard token={token} onLogout={handleLogout} />;
}
