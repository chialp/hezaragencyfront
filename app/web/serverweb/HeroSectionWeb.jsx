// app/components/HeroSection.jsx
import { Sparkles, Rocket, Star, TrendingUp, Shield } from "lucide-react";
import HeroDevices from "../HeroSectionWeb";

export default function HeroSection({ lang = "fa" }) {
  const slide = {
    desktop: "/media/main.png",
    tablet: "/media/tablet1.png",
    mobile: "/media/example.png",
    title: "سایت‌هایی که فروش را چندبرابر می‌کنند",
    description:
      "طراحی هوشمند با تحلیل رفتار کاربران و بهینه‌سازی برای تبدیل بیشتر",
    color: "from-blue-600 to-[#1e40af]",
    gradient: "bg-gradient-to-r from-blue-600 to-[#1e40af]",
    technologies: ["Next.js 14", "React 18", "TypeScript", "Tailwind"],
    stats: "افزایش ۴۰٪ی فروش",
    icon: <TrendingUp className="w-5 h-5" />,
  };

  const services = [
    "طراحی سایت فروشگاهی",
    "طراحی سایت شرکتی",
    "طراحی سایت خدماتی",
    "پشتیبانی ۲۴ ساعته",
  ];

  return (
    <section
      className="relative h-[95em] flex items-center justify-center bg-white overflow-hidden px-4 sm:px-6 lg:px-8 py-8 md:py-16"
      dir="rtl"
    >
      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#1e40af]/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

        {/* Static dots */}
        {[
          { left: 36.79, top: 2.86 },
          { left: 67.94, top: 8.58 },
          { left: 88.92, top: 41.51 },
          { left: 47.24, top: 7.43 },
          { left: 0.59, top: 16.06 },
          { left: 0.02, top: 43.64 },
          { left: 3.2, top: 75.4 },
          { left: 36.63, top: 20.45 },
          { left: 83.99, top: 0.85 },
          { left: 81.33, top: 11.25 },
          { left: 73.98, top: 60.25 },
          { left: 71.62, top: 50.03 },
          { left: 5.37, top: 18.77 },
          { left: 25.84, top: 54.71 },
          { left: 2.01, top: 71.28 },
        ].map((dot, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-[#1e40af]/30 rounded-full"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8 lg:space-y-12 text-right order-2 lg:order-1">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2.5 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl md:rounded-2xl shadow-lg">
              <div className="relative">
                <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-[#1e40af]" />
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#1e40af] rounded-full"></div>
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-800">
                آژانس طراحی سایت حرفه‌ای
              </span>
              <div className="hidden md:flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={`star-${i}`}
                    className="w-3 h-3 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
            </div>

            {/* Main Title & Description */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl  font-black text-gray-900 leading-tight">
                طراحی سایت حرفه‌ای و مدرن با تکنولوژی روز برای کسب‌وکارها
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                {slide.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                <span className="text-[#1e40af]">⚡</span>
                <span className="text-xs md:text-sm">
                  پیشرفته‌ترین تکنولوژی‌های روز
                </span>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {slide.technologies.map((tech, index) => (
                  <span
                    key={`tech-${index}`}
                    className={`px-3 py-1.5 md:px-4 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-medium ${
                      index === 0
                        ? "bg-[#1e40af] text-white shadow-lg"
                        : "bg-white border border-gray-300 text-gray-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Service Highlights */}
            <div className="pt-2 md:pt-4">
              <div className="text-xs md:text-sm font-bold text-gray-700 mb-2 md:mb-3">
                خدمات اصلی ما
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {services.map((service, index) => (
                  <span
                    key={`service-${index}`}
                    className="px-2.5 py-1 md:px-3 md:py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs md:text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-3 md:pt-4">
              <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-[#1e40af] text-white font-bold rounded-xl md:rounded-2xl shadow-lg hover:bg-blue-700 transition-colors duration-300">
                <span className="sr-only">
                  Start professional project with our team
                </span>
                <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  <Rocket className="w-4 md:w-5 h-4 md:h-5" />
                  <span className="text-sm md:text-lg">
                    تجربه طراحی سه بعدی
                  </span>
                </div>
              </button>

              <button className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-[#1e40af] text-[#1e40af] font-bold rounded-xl md:rounded-2xl hover:bg-[#1e40af]/5 transition-colors duration-300">
                <span className="text-sm md:text-lg">مشاوره رایگان</span>
              </button>
            </div>
          </div>

          {/* Right Column - Devices Showcase */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* کلاینت کامپوننت برای دستگاه‌ها */}
            <HeroDevices slides={[slide]} />
          </div>
        </div>
      </div>
    </section>
  );
}
