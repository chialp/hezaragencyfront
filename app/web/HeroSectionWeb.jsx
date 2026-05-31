// app/components/HeroDevices.jsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroDevices({ slides }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Responsive layout configurations
  const getResponsiveLayout = () => {
    if (isMobile) {
      return {
        deviceScale: 0.7,
        tabletPosition: "bottom-24 left-4",
        mobilePosition: "bottom-8 right-4",
      };
    } else if (isTablet) {
      return {
        deviceScale: 0.8,
        tabletPosition: "bottom-16 left-8",
        mobilePosition: "bottom-8 right-8",
      };
    } else {
      return {
        deviceScale: 1,
        tabletPosition: "bottom-12 left-12",
        mobilePosition: "bottom-8 right-12",
      };
    }
  };

  const responsive = getResponsiveLayout();
  const currentSlide = slides[0]; // فقط اولین اسلاید

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mb-8 lg:mb-0"
      style={{
        transform: `scale(${responsive.deviceScale})`,
        transformOrigin: "center",
      }}
    >
      {/* Main Device Showcase Container */}
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Desktop Monitor */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl md:rounded-t-3xl rounded-b-lg shadow-2xl border border-gray-700 overflow-hidden">
          {/* Monitor Top Section */}
          <div className="relative h-6 md:h-8 bg-gradient-to-b from-gray-900 to-gray-800 border-b border-gray-700 flex items-center justify-center">
            <div className="absolute top-2 md:top-3 w-8 md:w-12 h-0.5 md:h-1 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full"></div>
            <div className="absolute top-2 md:top-3 right-3 md:right-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          {/* Screen */}
          <div className="relative bg-black">
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
                {/* Website mockup content */}
                <div className="h-8 md:h-12 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-between px-3 md:px-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                    <div className="w-16 h-1 md:w-32 md:h-2 bg-gray-700 rounded-full"></div>
                  </div>
                  <div className="flex gap-2 md:gap-3">
                    {["صفحه اصلی", "خدمات", "نمونه کار", "تماس"].map(
                      (item, idx) => (
                        <div
                          key={`menu-${idx}`}
                          className="w-6 h-1 md:w-12 md:h-2 bg-gray-700 rounded-full"
                        ></div>
                      )
                    )}
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="w-2/3 md:w-3/4 h-3 md:h-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full mb-3 md:mb-4"></div>
                  <div className="w-full h-2 md:h-3 bg-gray-800 rounded-full mb-1.5 md:mb-2"></div>
                  <div className="w-3/4 md:w-2/3 h-2 md:h-3 bg-gray-800 rounded-full mb-4 md:mb-6"></div>
                  <div className="flex gap-2 md:gap-3">
                    <div className="w-16 h-6 md:w-24 md:h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg"></div>
                    <div className="w-16 h-6 md:w-24 md:h-8 bg-gray-800 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monitor Bottom */}
          <div className="h-6 md:h-10 bg-gradient-to-b from-gray-800 to-gray-900 border-t border-gray-700"></div>
        </div>

        {/* Monitor Stand */}
        <div className="relative mx-auto w-40 md:w-64">
          <div className="relative mx-auto w-6 md:w-8 h-16 md:h-24 bg-gradient-to-b from-gray-700 to-gray-800">
          </div>

          <div className="relative mx-auto w-32 md:w-56 h-2 md:h-3 bg-gradient-to-b from-gray-900 to-gray-950 rounded-t-lg">
          </div>
        </div>

        {/* Tablet Device */}
        <motion.div
          className={`absolute ${responsive.tabletPosition} w-32 md:w-40 lg:w-48`}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
        >
          <div className="relative bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl md:rounded-3xl shadow-2xl border-2 md:border-3 border-gray-900 overflow-hidden">
            {/* Tablet Status Bar */}
            <div
              className={`h-6 md:h-8 bg-black border-b border-gray-800 flex items-center justify-center ${currentSlide.gradient}`}
            >
              <div className="w-12 h-2 md:w-16 md:h-4 rounded-full bg-gradient-to-r from-black/30 to-black/10 flex items-center justify-center">
                <div className="w-4 h-0.5 md:w-6 md:h-1 bg-white/40 rounded-full"></div>
              </div>
            </div>

            {/* Tablet Screen */}
            <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
              <div className="p-3 md:p-4 space-y-2 md:space-y-4">
                <div className="flex justify-between items-center mb-2 md:mb-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-[#1e40af] to-blue-500"></div>
                  <div className="w-16 h-2 md:w-24 md:h-3 bg-gray-800 rounded-full"></div>
                </div>

                <div className="space-y-2">
                  <div className="w-full h-2 md:h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3/4 h-2 md:h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-1/2 h-6 md:h-8 bg-gradient-to-r from-[#1e40af] to-blue-500 rounded-lg mt-2 md:mt-4"></div>
                </div>
              </div>
            </div>

            {/* Home Button */}
            <div className="h-4 md:h-6 bg-black flex items-center justify-center">
              <div className="w-6 h-1 md:w-8 md:h-1.5 bg-white/40 rounded-full"></div>
            </div>

            {/* Tablet Shadow */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 md:w-32 h-3 bg-black/20 blur-lg rounded-full"></div>
          </div>
        </motion.div>

        {/* Mobile Device */}
        <motion.div
          className={`absolute ${responsive.mobilePosition} w-24 md:w-32 lg:w-40`}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl md:rounded-3xl shadow-2xl border-2 md:border-3 border-gray-950 overflow-hidden">
            {/* Mobile Status Bar */}
            <div
              className={`h-5 md:h-8 bg-black border-b border-gray-800 flex items-center justify-center ${currentSlide.gradient}`}
            >
              <div className="w-8 h-1.5 md:w-16 md:h-4 rounded-full bg-gradient-to-r from-black/30 to-black/10 flex items-center justify-center">
                <div className="w-3 h-0.5 md:w-6 md:h-1 bg-white/40 rounded-full"></div>
              </div>
            </div>

            {/* Mobile Screen */}
            <div className="relative aspect-[9/19] bg-gray-900 overflow-hidden">
              <div className="p-2 md:p-4 space-y-2">
                <div className="flex justify-between items-center mb-2">
                  <div className="w-4 h-4 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-[#1e40af] to-blue-500"></div>
                  <div className="w-12 h-1.5 md:w-24 md:h-3 bg-gray-800 rounded-full"></div>
                </div>

                <div className="space-y-1.5">
                  <div className="w-full h-1.5 bg-gray-800 rounded-full"></div>
                  <div className="w-2/3 h-1.5 bg-gray-800 rounded-full"></div>
                  <div className="w-1/2 h-4 md:h-6 bg-gradient-to-r from-[#1e40af] to-blue-500 rounded-lg mt-2"></div>
                </div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="h-3 md:h-6 bg-black flex items-center justify-center">
              <div className="w-4 h-0.5 md:w-12 md:h-1 bg-white/40 rounded-full"></div>
            </div>

            {/* Mobile Shadow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 md:w-28 h-2 bg-black/20 blur-lg rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}