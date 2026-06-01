import React, { useState, useEffect } from "react";
import { User, Activity, Info, Calendar, RefreshCw } from "lucide-react";

export default function Profile() {
  const [userProfile, setUserProfile] = useState({
    username: "",
    role: "",
    isActive: false,
    lastLogin: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      setError("");
      
      const res = await fetch("/api/auth/author/profile", {
        credentials: "include",
      });
      
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setUserProfile(data.user);
        }
      } else {
        if (res.status === 401) {
          setError("لطفاً ابتدا وارد حساب کاربری خود شوید");
        } else {
          setError("خطا در دریافت اطلاعات پروفایل");
        }
      }
    } catch (error) {
      console.error("خطا در دریافت اطلاعات:", error);
      setError("خطا در اتصال به سرور");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "---";
    const date = new Date(dateString);
    return date.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (isActive) => {
    return isActive 
      ? { text: "فعال", color: "text-green-800", bg: "bg-green-100" }
      : { text: "غیرفعال", color: "text-red-800", bg: "bg-red-100" };
  };

  const getRoleBadge = (role) => {
    return role === 'admin' 
      ? { text: "مدیر سیستم", color: "text-purple-800", bg: "bg-purple-100" }
      : { text: "نویسنده", color: "text-blue-800", bg: "bg-blue-100" };
  };

  if (loading) {
    return (
      <div className="px-4 py-6 sm:px-0">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-6 sm:px-0">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="text-center py-12">
            <div className="text-red-500 text-lg mb-4">⚠️</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{error}</h3>
            <button
              onClick={fetchUserProfile}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <RefreshCw className="h-4 w-4 ml-1" />
              تلاش مجدد
            </button>
          </div>
        </div>
      </div>
    );
  }

  const statusBadge = getStatusBadge(userProfile.isActive);
  const roleBadge = getRoleBadge(userProfile.role);

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        {/* هدر پروفایل */}
        <div className="px-6 py-5 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">پروفایل کاربر</h3>
              <p className="mt-1 text-sm text-gray-600">اطلاعات حساب کاربری</p>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${roleBadge.bg} ${roleBadge.color}`}>
                {roleBadge.text}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadge.bg} ${statusBadge.color}`}>
                {statusBadge.text}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <dl>
            {/* نام کاربری */}
            <div className="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="flex items-center text-sm font-medium text-gray-500">
                <User className="h-4 w-4 ml-2" />
                نام کاربری
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
                {userProfile.username || "---"}
              </dd>
            </div>

            {/* نقش کاربر */}
            <div className="bg-gray-50 px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="flex items-center text-sm font-medium text-gray-500">
                <Activity className="h-4 w-4 ml-2" />
                نقش در سیستم
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${roleBadge.bg} ${roleBadge.color}`}>
                  {roleBadge.text}
                </span>
              </dd>
            </div>

            {/* وضعیت حساب */}
            <div className="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="flex items-center text-sm font-medium text-gray-500">
                <Info className="h-4 w-4 ml-2" />
                وضعیت حساب
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadge.bg} ${statusBadge.color}`}>
                  {statusBadge.text}
                </span>
              </dd>
            </div>

            {/* آخرین ورود */}
            <div className="bg-gray-50 px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="flex items-center text-sm font-medium text-gray-500">
                <Calendar className="h-4 w-4 ml-2" />
                آخرین ورود
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {formatDate(userProfile.lastLogin)}
              </dd>
            </div>
          </dl>
        </div>

        {/* دکمه بروزرسانی */}
        <div className="px-6 py-4 bg-gray-50 border-t">
          <button
            onClick={fetchUserProfile}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <RefreshCw className="h-4 w-4 ml-1" />
            بروزرسانی اطلاعات
          </button>
        </div>
      </div>
    </div>
  );
}