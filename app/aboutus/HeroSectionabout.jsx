// app/components/HeroSectionAbout/ClientHeroAnimation.jsx
"use client";

import { useRef, useEffect, useState } from "react";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function ClientHeroAnimation() {
  const [containerSize, setContainerSize] = useState(300);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      
      if (width < 640) {
        setContainerSize(240); // موبایل کوچک
      } else if (width < 768) {
        setContainerSize(280); // موبایل بزرگ
      } else if (width < 1024) {
        setContainerSize(320); // تبلت
      } else {
        setContainerSize(360); // دسکتاپ
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const containerStyle = {
    width: containerSize,
    height: containerSize,
    minWidth: containerSize,
    minHeight: containerSize,
    maxWidth: containerSize,
    maxHeight: containerSize,
  };

  const innerSize = containerSize * 0.7;

  return (
    <div className="relative" style={containerStyle}>
      {/* Outer Ring */}
      {!isMobile && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-[-8px] border-2 border-blue-500/20 rounded-full"></div>
          <div className="absolute inset-[-16px] border border-blue-400/10 rounded-full"></div>
        </motion.div>
      )}

      {/* Image Container */}
      <div className="absolute inset-8 md:ins-10 rounded-full overflow-hidden">
        {/* Gradient Border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full blur opacity-20"></div>
        
        {/* Main Image */}
        <div className="absolute inset-1 rounded-full overflow-hidden bg-gradient-to-br from-white to-blue-50">
          {/* Abstract Geometric Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute top-1/4 left-1/4 rounded-full blur-xl"
              style={{
                width: innerSize * 0.4,
                height: innerSize * 0.4,
                background: 'linear-gradient(to right, #1e40af, transparent)'
              }}
            ></div>
            <div 
              className="absolute bottom-1/4 right-1/4 rounded-full blur-xl"
              style={{
                width: innerSize * 0.4,
                height: innerSize * 0.4,
                background: 'linear-gradient(to left, #1e40af, transparent)'
              }}
            ></div>
          </div>
          
          {/* Animated Dots Pattern */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-blue-600/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
          
          {/* 3D Cube Animation */}
          {!isMobile && (
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ width: innerSize * 0.5, height: innerSize * 0.5 }}
            >
              <motion.div
                animate={{
                  rotateX: 360,
                  rotateY: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-full h-full relative"
              >
                <div className="absolute inset-0 border border-blue-600/20 rounded-lg transform rotate-45"></div>
                <div className="absolute inset-2 border border-blue-500/20 rounded-lg transform -rotate-45"></div>
              </motion.div>
            </div>
          )}

          {/* Floating Tech Icons */}
          {!isMobile && (
            <div className="absolute inset-0">
              {[
                { icon: "⚛️", left: "15%", top: "25%" },
                { icon: "🎨", left: "75%", top: "35%" },
                { icon: "🔍", left: "20%", top: "65%" },
                { icon: "🚀", left: "80%", top: "70%" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute text-xl md:text-2xl"
                  style={{ left: item.left, top: item.top }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Elements Around Image */}
      {!isMobile && (
        <>
        

          <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4">
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center shadow-lg"
            >
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </motion.div>
          </div>

          {/* Stats Badges */}
          <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/90 border border-blue-200 shadow-sm"
            >
              <span className="text-xs md:text-sm font-semibold text-gray-900">
                🏆 <span className="text-blue-600">۲۵۰+</span> پروژه
              </span>
            </motion.div>
          </div>

          <div className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/90 border border-blue-200 shadow-sm"
            >
              <span className="text-xs md:text-sm font-semibold text-gray-900">
                ⭐ <span className="text-blue-700">۱۰۰٪</span> رضایت
              </span>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}