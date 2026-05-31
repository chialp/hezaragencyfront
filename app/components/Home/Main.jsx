"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDE_DURATION = 5000;

export default function HeroDevices({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});

  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  const handleImageLoad = (type) => {
    setImageLoaded((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  if (!slide) return null;

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8 select-none">

      {/* Desktop Device */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">

        <div className="h-6 md:h-8 bg-gradient-to-b from-gray-900 to-gray-800 border-b border-gray-700 flex items-center justify-center relative">
          <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full"></div>
          <div className="absolute right-3 md:right-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>

        <div className="relative aspect-video bg-black overflow-hidden">

          <div className={`absolute inset-0 hero-slide transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform will-change-opacity
            ${isTransitioning ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"}`}>

            {!imageLoaded.desktop && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse" />
            )}

            <Image
              src={slide.desktop}
              alt={slide.title || ""}
              fill
              priority={currentSlide === 0}
              fetchPriority={currentSlide === 0 ? "high" : "low"}
              quality={65}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover will-change-transform will-change-opacity"
              onLoad={() => handleImageLoad("desktop")}
              loading={currentSlide === 0 ? "eager" : "lazy"}
              decoding="async"
            />

            <div className={`absolute inset-0 ${slide.gradient || ""} opacity-10`} />
          </div>

        </div>

        <div className="h-6 md:h-10 bg-gradient-to-b from-gray-800 to-gray-900 border-t border-gray-700"></div>
      </div>

      {/* Stand */}
      <div className="relative mx-auto w-40 md:w-64">
        <div className="w-6 md:w-8 h-16 md:h-24 bg-gradient-to-b from-gray-700 to-gray-800 mx-auto"></div>

        <div className="relative w-32 md:w-56 h-2 bg-gradient-to-b from-gray-900 to-gray-950 rounded-t-lg mx-auto">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-40 md:w-64 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
        </div>
      </div>

      {/* Mobile Device */}
      <div className="absolute bottom-8 right-12 w-32 lg:w-40">

        <div className="relative aspect-[9/19] w-full rounded-2xl shadow-2xl border-2 border-gray-950 overflow-hidden bg-gray-900">

          <div className={`absolute inset-0 hero-slide transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform will-change-opacity
            ${isTransitioning ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"}`}>

            {!imageLoaded.mobile && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse" />
            )}

            <Image
              src={slide.mobile || slide.desktop}
              alt={slide.title || ""}
              fill
              quality={65}
              sizes="(max-width: 768px) 35vw, 20vw"
              className="object-cover will-change-transform will-change-opacity"
              loading="lazy"
              decoding="async"
              onLoad={() => handleImageLoad("mobile")}
            />

            <div className={`absolute inset-0 ${slide.gradient || ""} opacity-10`} />
          </div>

        </div>
      </div>

      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center w-full max-w-md mx-auto">
        <h2 className="text-sm md:text-base font-bold text-gray-800 mb-1">
          {slide.title}
        </h2>

        <p className="text-xs md:text-sm text-gray-600 max-w-md">
          {slide.description}
        </p>
      </div>

    </div>
  );
}