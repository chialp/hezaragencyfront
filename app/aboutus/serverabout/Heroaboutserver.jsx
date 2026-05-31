// app/components/HeroSectionAbout/HeroSectionAbout.jsx
import { Sparkles, ArrowRight, Users, Zap, Shield, Globe } from "lucide-react";
import dynamic from "next/dynamic";

// مسیر صحیح import
const ClientHeroAnimation = dynamic(
  () => import("../HeroSectionabout"),
  {
    loading: () => (
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-white to-blue-50 animate-pulse"></div>
      </div>
    ),
  }
);

export default function HeroSectionAbout() {
  return (
    <section className="h-auto flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
    

      {/* Main Content */}
      <div className=" mt-[12rem] z-10 max-w-7xl mx-auto px-4 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-blue-50 border border-blue-200">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">
                تیم نخبه طراحی سایت
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
               تیم‌ای که
                  استانداردها را تغییر می‌دهد
                
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                ما در هەزار، با ترکیب هنر و تکنولوژی، سایت‌هایی می‌سازیم که نه
                تنها زیبا هستند، بلکه{" "}
                <span className="text-blue-700 font-semibold">
                  کسب‌وکار شما را متحول می‌کنند
                </span>
                .
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />, text: "سایت‌های سه‌بعدی" },
                { icon: <Shield className="w-4 h-4 md:w-5 md:h-5" />, text: "پشتیبانی مادام‌العمر" },
                { icon: <Globe className="w-4 h-4 md:w-5 md:h-5" />, text: "سئو پیشرفته" },
                { icon: <Users className="w-4 h-4 md:w-5 md:h-5" />, text: "تیم متخصص" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3 rounded-xl bg-blue-50/50 border border-blue-100"
                >
                  <div className="text-blue-600">{feature.icon}</div>
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden">
                <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  <span className="text-sm md:text-base">شروع پروژه</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>

              <button className="px-6 py-3 md:px-8 md:py-4 bg-white/80 border border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300">
                <span className="text-sm md:text-base">مشاهده نمونه‌کارها</span>
              </button>
            </div>
          </div>

          {/* Right Column - Animated Image */}
          <div className="relative flex justify-center items-center h-full">
            <ClientHeroAnimation />
          </div>
        </div>
      </div>

     
      

    </section>
  );
}