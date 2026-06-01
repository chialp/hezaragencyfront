"use client";
import React, { useEffect, useState } from "react";

const API = "/api/auth";

export default function AdminAuthorsPanel() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [adminInfo, setAdminInfo] = useState(null);

  const [form, setForm] = useState({
    username: "",
    password: "",
    isActive: true,
    role: "author",
  });

  const [addForm, setAddForm] = useState({
    username: "",
    password: "",
    isActive: true,
    role: "author",
  });

  // بارگذاری اطلاعات ادمین و نویسنده‌ها
  useEffect(() => {
    fetchAdminInfo();
    fetchAuthors();
  }, []);

  const fetchAdminInfo = async () => {
    try {
      const res = await fetch(`${API}/admin/profile`, {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setAdminInfo(data.user || data);
      }
    } catch (err) {
      console.error("خطا در دریافت اطلاعات ادمین:", err);
    }
  };

  const fetchAuthors = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/admin/authors`, {
        credentials: "include",
      });
      const data = await res.json();
      setAuthors(data.authors || []);
    } catch (err) {
      console.error("خطا در دریافت نویسنده‌ها:", err);
      alert("خطا در دریافت نویسنده‌ها");
    }
    setLoading(false);
  };

  // شروع ادیت
  const startEdit = (author) => {
    setEditing(author._id);
    setForm({
      username: author.username,
      password: "",
      isActive: author.isActive,
      role: author.role,
    });
  };

  // ارسال فرم ادیت
  const submitEdit = async () => {
    try {
      const res = await fetch(`${API}/admin/authors/${editing}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        alert("ویرایش با موفقیت انجام شد");
        setEditing(null);
        fetchAuthors();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("خطا در ویرایش:", err);
      alert("خطا در ویرایش");
    }
  };

  // افزودن نویسنده جدید
  const submitAddAuthor = async () => {
    if (!addForm.username || !addForm.password) {
      alert("نام کاربری و رمز عبور الزامی هستند");
      return;
    }

    try {
      const res = await fetch(`${API}/admin/authors`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addForm),
      });
      const data = await res.json();

      if (data.success) {
        alert("نویسنده جدید با موفقیت اضافه شد");
        setShowAddForm(false);
        setAddForm({
          username: "",
          password: "",
          isActive: true,
          role: "author",
        });
        fetchAuthors();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("خطا در افزودن نویسنده:", err);
      alert("خطا در افزودن نویسنده");
    }
  };

  // حذف نویسنده
  const deleteAuthor = async (id) => {
    if (!confirm("آیا مطمئن هستید که می‌خواهید حذف کنید؟")) return;

    try {
      const res = await fetch(`${API}/admin/authors/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();

      if (data.success) {
        fetchAuthors();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("خطا در حذف:", err);
      alert("خطا در حذف نویسنده");
    }
  };

  // خروج از سیستم
  const handleLogout = async () => {
    if (!confirm("آیا می‌خواهید از سیستم خارج شوید؟")) return;

    try {
      const res = await fetch(`${API}/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        // تغییر به آدرس کامل
        window.location.href = "https://hezaragency.com/13x77";
      } else {
        alert("خطا در خروج از سیستم");
      }
    } catch (err) {
      console.error("خطا در خروج:", err);
      alert("خطا در خروج از سیستم");
    }
  };

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600">در حال بارگذاری...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* هدر اصلی */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 text-white p-2 rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  پنل مدیریت
                </h1>
                <p className="text-sm text-gray-600">
                  {adminInfo
                    ? `خوش آمدید، ${adminInfo.username}`
                    : "در حال بارگذاری..."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {adminInfo ? adminInfo.username.charAt(0).toUpperCase() : "A"}
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {adminInfo?.username || "ادمین"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {adminInfo?.role === "admin" ? "مدیر سیستم" : "نویسنده"}
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                خروج
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* محتوای اصلی */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* هدر پنل نویسندگان */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                مدیریت نویسنده‌ها
              </h1>
              <p className="text-gray-600 mt-1">
                مدیریت حساب‌های کاربری نویسندگان و ادمین‌ها
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                {authors.length} نویسنده
              </div>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                افزودن نویسنده
              </button>
            </div>
          </div>

          {/* جدول نویسنده‌ها */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      نام کاربری
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      وضعیت
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      نقش
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      آخرین ورود
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      عملیات
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {authors.length > 0 ? (
                    authors.map((a) => (
                      <tr
                        key={a._id}
                        className={`hover:bg-gray-50 transition-colors ${
                          !a.isActive ? "bg-gray-100" : ""
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                              {a.username.charAt(0).toUpperCase()}
                            </div>
                            <div className="mr-4">
                              <div className="text-sm font-medium text-gray-900">
                                {a.username}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                              a.isActive
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {a.isActive ? "فعال" : "غیرفعال"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                              a.role === "admin"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {a.role === "admin" ? "ادمین" : "نویسنده"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {a.lastLogin
                            ? new Date(a.lastLogin).toLocaleString("fa-IR")
                            : "—"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex gap-2">
                            <button
                              onClick={() => startEdit(a)}
                              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                              <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                              </svg>
                              ویرایش
                            </button>
                            <button
                              onClick={() => deleteAuthor(a._id)}
                              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                            >
                              <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                              حذف
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center justify-center text-gray-500">
                          <svg
                            className="w-16 h-16 mb-4 text-gray-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                            />
                          </svg>
                          <p className="text-lg font-medium">
                            هیچ نویسنده‌ای یافت نشد
                          </p>
                          <p className="mt-1">
                            هنوز هیچ حساب کاربری ایجاد نشده است.
                          </p>
                          <button
                            onClick={() => setShowAddForm(true)}
                            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                          >
                            افزودن اولین نویسنده
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* مودال‌ها */}
          {/* مودال افزودن نویسنده */}
          {showAddForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    افزودن نویسنده جدید
                  </h3>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نام کاربری *
                    </label>
                    <input
                      type="text"
                      value={addForm.username}
                      onChange={(e) =>
                        setAddForm({ ...addForm, username: e.target.value })
                      }
                      className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="نام کاربری را وارد کنید"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رمز عبور *
                    </label>
                    <input
                      type="password"
                      placeholder="رمز عبور را وارد کنید"
                      value={addForm.password}
                      onChange={(e) =>
                        setAddForm({ ...addForm, password: e.target.value })
                      }
                      className="w-full px-3 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      وضعیت
                    </label>
                    <select
                      value={addForm.isActive}
                      onChange={(e) =>
                        setAddForm({
                          ...addForm,
                          isActive: e.target.value === "true",
                        })
                      }
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="true">فعال</option>
                      <option value="false">غیرفعال</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نقش
                    </label>
                    <select
                      value={addForm.role}
                      onChange={(e) =>
                        setAddForm({ ...addForm, role: e.target.value })
                      }
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="author">نویسنده</option>
                      <option value="admin">ادمین</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 p-6 border-t border-gray-200">
                  <button
                    onClick={submitAddAuthor}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium"
                  >
                    ایجاد نویسنده
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
                  >
                    لغو
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* مودال ویرایش */}
          {editing && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    ویرایش نویسنده
                  </h3>
                  <button
                    onClick={() => setEditing(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نام کاربری
                    </label>
                    <input
                      type="text"
                      value={form.username}
                      onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رمز جدید (اختیاری)
                    </label>
                    <input
                      type="password"
                      placeholder="رمز جدید"
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      وضعیت
                    </label>
                    <select
                      value={form.isActive}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          isActive: e.target.value === "true",
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="true">فعال</option>
                      <option value="false">غیرفعال</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نقش
                    </label>
                    <select
                      value={form.role}
                      onChange={(e) =>
                        setForm({ ...form, role: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="author">نویسنده</option>
                      <option value="admin">ادمین</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 p-6 border-t border-gray-200">
                  <button
                    onClick={submitEdit}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                  >
                    ثبت ویرایش
                  </button>
                  <button
                    onClick={() => setEditing(null)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
                  >
                    لغو
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
