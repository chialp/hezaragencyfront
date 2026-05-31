"use client";

import { useRef, useState, useEffect } from "react";
import { Power } from "lucide-react";

export default function VintageTV3D() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isOn, setIsOn] = useState(true);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const playVideo = async () => {
      if (!videoRef.current) return;

      try {
        await videoRef.current.play();
      } catch {}
    };

    playVideo();
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current || window.innerWidth < 1024) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setRotate({
      x: y * -10,
      y: x * 15,
    });
  };

  const togglePower = () => setIsOn((prev) => !prev);

  return (
    <div className="flex flex-col items-center justify-center py-6 md:py-12 w-full select-none overflow-hidden">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
        className="relative transition-transform duration-500 ease-out touch-none"
        style={{
          perspective: "1500px",
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Body */}
        <div className="relative w-[90vw] sm:w-[500px] md:w-[600px] lg:w-[min(45vw,650px)] xl:w-[700px] aspect-[4/3] bg-[#3e2723] rounded-[2rem] md:rounded-[3rem] p-3 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-b-[12px] border-r-[8px] border-[#2d1b18]">
          <div className="w-full h-full bg-[#1a1a1a] rounded-[1.5rem] md:rounded-[2rem] p-2 md:p-4 flex gap-2 md:gap-4 border-4 border-[#2d1b18] shadow-inner">
            {/* Screen */}
            <div className="relative flex-[4] bg-black rounded-[1.2rem] md:rounded-[2.5rem] overflow-hidden border-[6px] md:border-[10px] border-[#222] shadow-2xl">
              {/* Glass Noise Layer */}
              <div className="absolute inset-0 pointer-events-none z-20">
                <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,1)]" />
              </div>

              {/* Off Screen Overlay */}
              <div
                className={`absolute inset-0 bg-black z-10 transition-opacity duration-500 ${isOn ? "opacity-0" : "opacity-100"}`}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full blur-[1px] opacity-20 animate-pulse" />
              </div>

              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                tabIndex={-1}
                className="w-full h-full object-cover grayscale-[0.1] contrast-125 brightness-110"
              >
                <source src="/media/demo/3Dvideo.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Control Panel */}
            <div className="flex-[1.2] md:flex-[1] flex flex-col justify-around py-2 items-center bg-[#2d1b18]/50 rounded-xl border border-white/5">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-[#111] to-[#444] border-4 border-[#222] shadow-inner flex items-center justify-center cursor-pointer active:rotate-45 transition-transform">
                <div className="w-1 h-6 md:h-8 bg-stone-500 rounded-full" />
              </div>

              <div className="w-full px-2 md:px-4 space-y-1.5 opacity-60">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-[2px] md:h-[3px] bg-black rounded-full shadow-inner"
                  />
                ))}
              </div>

              <button
                onClick={togglePower}
                type="button"
                aria-label={isOn ? "خاموش کردن تلویزیون" : "روشن کردن تلویزیون"}
                aria-pressed={isOn}
                className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-b-4 active:border-b-0 active:translate-y-1 transition-all ${
                  isOn
                    ? "bg-red-600 border-red-950 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                    : "bg-stone-800 border-black"
                }`}
              >
                <Power
                  size={22}
                  aria-hidden="true"
                  className={`${isOn ? "text-white" : "text-stone-500"} transition-colors`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Legs */}
        <div className="flex justify-between px-16 md:px-32 -mt-2">
          <div className="w-5 md:w-6 h-10 md:h-16 bg-[#2d1b18] origin-top rotate-[25deg] rounded-b-xl shadow-2xl border-t border-black/20" />
          <div className="w-5 md:w-6 h-10 md:h-16 bg-[#2d1b18] origin-top -rotate-[25deg] rounded-b-xl shadow-2xl border-t border-black/20" />
        </div>
      </div>
    </div>
  );
}
