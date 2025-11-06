"use client";

import { LoginForm } from "@/ui/components/admin/LoginForm";
import { Dashboard } from "@/ui/components/admin/Dashboard";
import { useAdminAuth } from "@/ui/hooks/useAdminAuth";

export default function AdminPage() {
  const { token, view, handleLogin, handleLogout } = useAdminAuth();

  if (view === "login" || !token) {
    return <LoginForm onSubmit={handleLogin} />;
  }

  return <Dashboard token={token} onLogout={handleLogout} />;
}
