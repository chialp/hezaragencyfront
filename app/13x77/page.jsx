"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   console.log(process.env.NEXT_PUBLIC_SITE_URL)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(`https://hezaragencyback.liara.run/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ⚡ اضافه شد

        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "خطا در ورود");
        return;
      }

      // هدایت بر اساس نقش
      if (data.user.role === "admin") {
        router.push("dashboard/admin");
      } else {
        router.push("dashboard/author");
      }
    } catch (err) {
      setError("ارتباط با سرور برقرار نشد");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1A2F] text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 p-10 rounded-3xl border border-white/10 w-96 space-y-6"
      >
        <h2 className="text-2xl font-bold text-yellow-400">ورود</h2>
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/50"
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/50"
        />
        <button
          type="submit"
          className="w-full py-2 bg-yellow-400 text-[#0A1A2F] rounded-2xl font-bold hover:bg-yellow-500 transition-all"
        >
          ورود
        </button>
      </form>
    </div>
  );
}
