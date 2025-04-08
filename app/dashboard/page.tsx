"use client";

import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) return null;

  return (
    <div className="max-w-xl mx-auto mt-20 text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h2>
      <p className="mb-6">Email: {user?.email}</p>
      <button
        onClick={() => {
          logout();
          router.push("/login");
        }}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
