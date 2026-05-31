// app/components/OurStorySection.jsx
import { 
  Code, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Users, 
  Zap,
  Check
} from "lucide-react";

export default function OurStorySection() {
  const specialties = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "توسعه سایت‌های سه‌بعدی",
      description: "با جدیدترین تکنولوژی‌های WebGL و Three.js",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "سیستم‌های پیچیده",
      description: "مدیریت سفارشی، پنل‌های پیشرفته، API اختصاصی",
      color: "from-blue-700 to-blue-800"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "بهینه‌سازی سئو",
      description: "رتبه اول گوگل در کمتر از ۳ ماه",
      color: "from-blue-800 to-blue-900"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "امنیت و سرعت",
      description: "لود زیر ۲ ثانیه با بالاترین سطح امنیت",
      color: "from-blue-900 to-blue-950"
    }
  ];

  return (
    <section className="h-auto py-24  overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Static Background */}
      <div className="absolute inset-0">
        {/* Static Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-500/5 to-blue-600/5 blur-3xl"
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
          />
        ))}

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 30% 30%, rgba(30, 64, 175, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)
              `
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Story */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">داستان ما</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                از <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">کجا</span> شروع کردیم؟
                <br />
                مأموریت ما <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">چیست</span>؟
              </h2>
            </div>

            {/* Story Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                در سال ۱۴۰۰، گروهی از توسعه‌دهندگان با یک هدف مشترک گرد هم آمدیم: 
                <strong className="text-gray-900"> ساخت سایت‌هایی که استانداردهای جهانی را رعایت کنند</strong>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                ما متوجه شدیم بازار ایران به سایت‌های مدرن، سه‌بعدی و با پشتیبانی واقعی نیاز دارد. 
                نه سایت‌های ساده، بلکه <strong className="text-gray-900">سیستم‌های جامع با تجربه کاربری بی‌نظیر</strong>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                امروز افتخار می‌کنیم که:
              </p>
              
              <ul className="space-y-4 mt-6">
                {[
                  "اولین ارائه‌دهنده تخصصی سایت‌های سه‌بعدی در ایران",
                  "تنها تیم با پشتیبانی رایگان مادام‌العمر",
                  "ارائه‌دهنده داشبورد مدیریتی اختصاصی برای هر پروژه",
                  "دارای تیم متخصص در حوزه‌های مختلف"
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column - Specialties */}
          <div className="relative">
            {/* Background Card */}
            <div className="relative bg-white/80 rounded-3xl p-8 border border-blue-100 shadow-xl overflow-hidden group">
              {/* Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-600/10 to-blue-700/10" />
              </div>

              {/* Header */}
              <div className="relative mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  تخصص‌های منحصربه‌فرد ما
                </h3>
                <p className="text-gray-600">
                  آنچه ما را از دیگران متمایز می‌کند
                </p>
                
                {/* Decorative Line */}
                <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full" />
              </div>

              {/* Specialties Grid */}
              <div className="grid grid-cols-2 gap-6">
                {specialties.map((specialty, index) => (
                  <div
                    key={index}
                    className="relative group-hover:transform group-hover:-translate-y-1 transition-transform duration-300"
                  >
                    {/* Glow Effect */}
                    <div 
                      className={`absolute -inset-0.5 bg-gradient-to-r ${specialty.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`} 
                    />
                    
                    <div className="relative bg-white/90 rounded-2xl p-6 border border-blue-100">
                      {/* Icon */}
                      <div className="mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${specialty.color} flex items-center justify-center shadow-lg`}>
                          <div className="text-white">
                            {specialty.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {specialty.title}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {specialty.description}
                        </p>
                      </div>

                      {/* Bottom Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 opacity-10">
                  <div className="absolute inset-0 border-2 border-blue-200 rounded-full" />
                  <div className="absolute inset-8 border border-blue-100 rounded-full" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-sm">۳D</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-700 to-blue-800 flex items-center justify-center shadow-2xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}