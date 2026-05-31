"use client";
import React, { useState, useEffect } from "react";
import { User, LogOut, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [user, setUser] = useState({ username: "نویسنده نمونه" });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const res = await fetch("https://hezaragencyback.liara.run/api/auth/author/profile", {
        credentials: "include",
      });
      
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setUser(data.user);
        }
      }
    } catch (error) {
      console.error("خطا در دریافت اطلاعات کاربر:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    if (!confirm("آیا از خروج از حساب کاربری اطمینان دارید؟")) return;

    try {
      const res = await fetch("https://hezaragencyback.liara.run/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        // هدایت به صفحه لاگین
        router.push("/fa/13x77");
      } else {
        alert("خطا در خروج از حساب");
      }
    } catch (error) {
      console.error("خطا در خروج:", error);
      alert("خطا در اتصال به سرور");
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-blue-600 ml-2" />
            <h1 className="text-2xl font-bold text-gray-900">داشبورد نویسنده</h1>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center text-gray-700">
              <User className="h-5 w-5 ml-1" />
              <span>{loading ? "در حال بارگذاری..." : user.username}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5 ml-1" />
              <span>خروج</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}