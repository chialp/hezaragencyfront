"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Clock,
  Users,
  Briefcase,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const TeamCarouselClient = ({ teamMembers = [], headerInfo = {} }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const safeTeamMembers = teamMembers || [];
  const safeHeaderInfo = headerInfo || {};

  const handleNextSlide = useCallback(() => {
    if (isAnimating || !safeTeamMembers.length) return;

    setIsAnimating(true);
    setCurrent((prev) =>
      prev === safeTeamMembers.length - 1 ? 0 : prev + 1
    );

    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, safeTeamMembers.length]);

  const handlePrevSlide = () => {
    if (isAnimating || !safeTeamMembers.length) return;

    setIsAnimating(true);
    setCurrent((prev) =>
      prev === 0 ? safeTeamMembers.length - 1 : prev - 1
    );

    setTimeout(() => setIsAnimating(false), 600);
  };

  const selectSlide = (index) => {
    if (isAnimating || index === current) return;

    setIsAnimating(true);
    setCurrent(index);

    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    if (!safeTeamMembers.length) return;
    const interval = setInterval(handleNextSlide, 8000);
    return () => clearInterval(interval);
  }, [handleNextSlide, safeTeamMembers.length]);

  if (!safeTeamMembers.length) {
    return (
      <section className="h-[600px] flex items-center justify-center bg-white">
        <p className="text-gray-500">تیم در دسترس نیست</p>
      </section>
    );
  }

  const currentMember = safeTeamMembers[current];

  return (
    <section className="py-12 h-[60em] px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-5">
            <Users className="w-4 h-4" />
            {safeHeaderInfo.we}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {safeHeaderInfo.title}
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative mb-10">

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-30 px-2 pointer-events-none">
            <button
              onClick={handlePrevSlide}
              disabled={isAnimating}
              className="pointer-events-auto bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg h-12 w-12 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-50"
            >
              <ChevronRight size={24} />
            </button>

            <button
              onClick={handleNextSlide}
              disabled={isAnimating}
              className="pointer-events-auto bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg h-12 w-12 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-50"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* Main Card — HEIGHT FIXED */}
          <div
            className={`bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden transition-all duration-700 ease-in-out ${
              isAnimating ? "opacity-40 scale-95" : "opacity-100 scale-100"
            } h-[600px]`}
          >
            <div className="flex flex-col lg:flex-row h-full">

              {/* Image Section */}
              <div className="relative w-full lg:w-2/5 h-[300px] lg:h-full">
                <Image
                  key={`img-${current}`}
                  src={currentMember.image}
                  alt={currentMember.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />

                <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-md text-white px-4 py-2 rounded-xl shadow-lg text-sm flex items-center gap-2 z-20">
                  <Clock size={16} />
                  {currentMember.experience}
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden">
                <div
                  className={`transition-all duration-500 ${
                    isAnimating
                      ? "translate-y-4 opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm mb-4 font-semibold">
                    <Briefcase size={16} />
                    {currentMember.position}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    {currentMember.name}
                  </h3>

                  <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8" />

                  <p className="text-gray-600 leading-relaxed text-lg md:text-xl mb-10 line-clamp-4">
                    {currentMember.description}
                  </p>

                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100">
                      <Star className="text-yellow-500 fill-yellow-500 w-6 h-6" />
                      <span className="font-bold text-gray-800 text-lg">
                        {currentMember.rating}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100">
                      <Award className="text-green-600 w-6 h-6" />
                      <span className="font-bold text-gray-800 text-lg">
                        {currentMember.projects}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-wrap justify-center gap-4">
          {safeTeamMembers.map((member, index) => (
            <button
              key={member.id || index}
              onClick={() => selectSlide(index)}
              disabled={isAnimating}
              className={`group relative p-1 rounded-2xl transition-all duration-300 border-2 ${
                index === current
                  ? "border-blue-600 bg-blue-50 scale-110 shadow-md"
                  : "border-transparent hover:border-blue-200"
              }`}
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="80px"
                  className={`object-cover transition-all duration-300 ${
                    index === current
                      ? "grayscale-0"
                      : "grayscale opacity-60 group-hover:opacity-100"
                  }`}
                />
              </div>

              {index === current && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles size={12} className="text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarouselClient;