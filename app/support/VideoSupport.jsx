// app/components/VideoTutorial.jsx
import { Shield, Zap, Headphones } from "lucide-react";

export default function VideoTutorial() {
  // نحوه کار ما - نقاط قوت خدمات
  const ourStrengths = [
    { 
      icon: Shield, 
      title: "پشتیبانی اختصاصی", 
      desc: "تیم پشتیبانی متخصص و همیشه در دسترس برای هر گونه سوال یا مشکل فنی." 
    },
    { 
      icon: Zap, 
      title: "راه‌حل‌های هوشمند", 
      desc: "ارائه راهکارهای نوآورانه و متناسب با نیازهای خاص کسب‌وکار شما." 
    },
    { 
      icon: Headphones, 
      title: "مشاوره رایگان", 
      desc: "جلسات مشاوره تخصصی قبل و بعد از خرید برای اطمینان از بهترین نتیجه." 
    },
    { 
      title: "آموزش کامل", 
      desc: "پکیج‌های آموزشی ویدیویی و مستندات جامع برای استفاده بهینه از سیستم." 
    }
  ];

  return (
    <section className="bg-white lg:h-[85rem] h-[105rem] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1e40af]/10 to-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#1e40af] rounded-full"></div>
            <span className="text-[#1e40af] font-bold">معرفی خدمات و پشتیبانی</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            ما چگونه <span className="text-[#1e40af]">کار می‌کنیم</span>؟
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            در این ویدیو، <span className="font-semibold text-[#1e40af]">فرآیند کامل همکاری</span>، کیفیت خدمات و مزایای منحصربه‌فرد ما را مشاهده خواهید کرد.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Video Section */}
          <div className="relative">
            {/* Video Player */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative aspect-video">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-black">
                    {/* Play Button */}
                    <button 
                      type="button"
                      className="absolute inset-0 flex items-center justify-center group"
                      aria-label="پخش ویدیو"
                    >
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#1e40af] to-blue-600 rounded-full flex items-center justify-center">
                          <svg 
                            className="w-8 h-8 text-white ml-1" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    {/* Video Thumbnail Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-sm font-medium mb-1">ویدیوی معرفی خدمات</div>
                        <div className="text-xs opacity-80">مدت زمان: ۴:۳۰ دقیقه</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Stats */}
            <div className="flex items-center justify-between mt-6 px-4">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">۱۵K+</div>
                  <div className="text-sm text-gray-500">بازدید</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">۹۵٪</div>
                  <div className="text-sm text-gray-500">رضایت</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">۴.۹</div>
                  <div className="text-sm text-gray-500">امتیاز</div>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                آپلود شده در ۲ هفته پیش
              </div>
            </div>
          </div>

          {/* Right Column - Features Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              چرا همکاری با ما متفاوت است؟
            </h3>
            
            <div className="space-y-6">
              {ourStrengths.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-5 border border-gray-200 hover:border-[#1e40af] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {item.icon && (
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#1e40af]" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#1e40af] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-10 p-6 bg-gradient-to-r from-[#1e40af]/5 to-blue-100/50 rounded-2xl border border-blue-200">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  آماده شروع همکاری هستید؟
                </h4>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  برای دریافت مشاوره رایگان و دموی اختصاصی از خدمات ما، فرم زیر را پر کنید.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    type="button"
                    className="px-6 py-3 bg-gradient-to-r from-[#1e40af] to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-shadow whitespace-nowrap"
                  >
                    درخواست مشاوره رایگان
                  </button>
                  <button 
                    type="button"
                    className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-bold rounded-xl hover:border-[#1e40af] hover:text-[#1e40af] transition-colors whitespace-nowrap"
                  >
                    دانلود کاتالوگ خدمات
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}