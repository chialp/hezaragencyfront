import { Shield, Clock, Users, Zap, ArrowRight, Headphones, Settings, Sparkles } from "lucide-react";
import Image from 'next/image';

export default function HeroSupport() {
  const stats = [
    { 
      icon: Clock, 
      value: "24/7", 
      label: "پشتیبانی", 
      desc: "همه روزه، حتی تعطیلات" 
    },
    { 
      icon: Users, 
      value: "98%", 
      label: "رضایت", 
      desc: "از مشتریان ما" 
    },
    { 
      icon: Zap, 
      value: "15 دقیقه", 
      label: "پاسخگویی", 
      desc: "میانگین زمان پاسخ" 
    },
    { 
      icon: Shield, 
      value: "100%", 
      label: "تضمین", 
      desc: "پشتیبانی دائمی" 
    }
  ];

  return (
    <section className="relative lg:h-[75rem] h-[100rem] bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-100/30 to-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-blue-50/20 to-cyan-50/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Enhanced Content */}
          <div className="lg:order-2">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full shadow-sm mb-10 group hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="w-2 h-2 bg-gradient-to-l from-blue-500 to-blue-600 rounded-full"></div>
                <div className="absolute -inset-1 bg-blue-400/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">
                پشتیبانی مادام‌العمر
              </span>
              <Sparkles className="w-4 h-4 text-blue-400 mr-1" />
            </div>

            {/* Enhanced Title */}
            <div className="mb-8 text-right">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                   پشتیبانی رایگان سایت
              </h1>
              <div className="relative">
              
                <div className="absolute -bottom-3 right-0 w-full h-px bg-gradient-to-l from-transparent via-blue-400 to-transparent"></div>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-lg text-gray-600 mb-10 leading-relaxed text-right">
              پشتیبانی <span className="font-semibold text-blue-600">۲۴/۷ هوشمند</span>، 
              مدیریت <span className="font-semibold text-cyan-600">فوقالعاده آسان</span> و 
              دشبوردهای <span className="font-semibold text-indigo-600">شخصی‌سازی شده</span>
              برای رشد پیوسته کسب‌وکار شما
            </p>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-5 mb-14">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3 flex-row-reverse">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-bl from-blue-50 to-cyan-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 pr-16 text-right">{stat.desc}</div>
                  </div>
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-100/20 to-cyan-100/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </div>
              ))}
            </div>

          

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm justify-end">
              <div className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg flex-row-reverse">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="font-medium">تضمین کیفیت</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg flex-row-reverse">
                <Zap className="w-5 h-5 text-amber-500" />
                <span className="font-medium">سرعت بالا</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg flex-row-reverse">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="font-medium">تیم متخصص</span>
              </div>
            </div>

          </div>

          {/* Right Column - Enhanced Dashboard */}
          <div className="relative lg:order-1">
            
            {/* Enhanced Dashboard Container with Rectangle Aspect Ratio */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/50">
              
              {/* Image Container with Rectangle Aspect Ratio (16:9) */}
              <div className="relative w-full pt-[56.25%] overflow-hidden rounded-t-2xl">
                <Image
                  src="/media/dashboard.webp"
                  alt="داشبورد مدیریت سایت هوشمند"
                  fill
                  className="absolute inset-0 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                
                {/* Floating Border */}
                <div className="absolute inset-0 border-8 border-white/20 rounded-xl pointer-events-none"></div>
              </div>
              
              {/* Enhanced Caption */}
              <div className="bg-gradient-to-l from-white to-blue-50/50 border-t border-blue-100/50 px-6 py-5 backdrop-blur-sm">
                <div className="flex items-center justify-between flex-row-reverse">
                  <div className="flex items-center gap-4 flex-row-reverse">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg"></div>
                      <div className="absolute -inset-1 bg-green-400/30 rounded-full blur-sm"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-semibold text-gray-900">داشبورد مدیریت پیشرفته</div>
                      <div className="text-xs text-gray-600 mt-0.5">نمایش زنده • آپ‌تایم ۹۹.۹٪</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-medium text-blue-600">آنلاین</div>
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -left-4 z-10">
              <div className="bg-gradient-to-l from-emerald-500 to-green-500 text-white rounded-xl px-4 py-2 shadow-xl flex items-center gap-2 flex-row-reverse">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <span className="text-sm font-semibold">زنده</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 z-10">
              <div className="bg-gradient-to-l from-blue-600 to-blue-700 text-white rounded-xl px-4 py-2 shadow-xl">
                <span className="text-sm font-semibold">واکنش‌گرا</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 left-12 hidden lg:block">
              <div className="w-14 h-14 bg-gradient-to-bl from-blue-100/80 to-cyan-100/60 rounded-xl border border-white/30 shadow-lg backdrop-blur-sm flex items-center justify-center">
                <div className="text-2xl">📊</div>
              </div>
            </div>

          </div>

        </div>

      </div>


    </section>
  );
}