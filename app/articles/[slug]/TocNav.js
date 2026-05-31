"use client";
import { List } from "lucide-react";

export default function TocNav({ items }) {
  const scrollTo = (id) => {
    const element = document.getElementById(`block-${id}`);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex items-center gap-2 text-blue-600 mb-6 font-black text-[11px] uppercase">
        <List className="w-4 h-4" /> فهرست مطالب
      </div>
      <nav className="space-y-1 border-r-2 border-gray-200">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="block w-full text-right py-2 pr-4 text-[11px] text-gray-500 hover:text-blue-600 transition-all"
          >
            {item.text}
          </button>
        ))}
      </nav>
    </>
  );
}