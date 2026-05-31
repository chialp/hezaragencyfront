"use client";
import { useState, useEffect } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const h = document.documentElement;
      const scroll = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(scroll);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-gray-200">
      <div className="h-full bg-blue-600 transition-all" style={{ width: `${progress}%` }} />
    </div>
  );
}