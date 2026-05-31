import { Monitor, Smartphone, BarChart3, PieChart, Settings, Users, TrendingUp, Calendar, FileText, Bell } from "lucide-react";

const dashboardSamples = [
  {
    id: "ecommerce",
    title: "دشبورد فروشگاهی",
    description: "مدیریت کامل محصولات، سفارشات، موجودی و گزارش‌گیری پیشرفته",
    color: "from-blue-500 to-blue-600",
    features: [
      { icon: BarChart3, text: "گزارش‌گیری لحظه‌ای فروش" },
      { icon: Users, text: "مدیریت مشتریان وفادار" },
      { icon: TrendingUp, text: "تحلیل ترند محصولات" },
      { icon: Bell, text: "هشدار موجودی و تخفیف" }
    ],
    stats: "کاهش ۷۰٪ زمان مدیریت"
  },
  {
    id: "company",
    title: "دشبورد شرکتی",
    description: "سیستم مدیریت محتوا، فرم‌ها، تماس‌ها و گزارش‌های سازمانی",
    color: "from-purple-500 to-purple-600",
    features: [
      { icon: FileText, text: "مدیریت چندزبانه محتوا" },
      { icon: Calendar, text: "سیستم قرارملاقات هوشمند" },
      { icon: Users, text: "پنل چند کاربره امن" },
      { icon: Settings, text: "تنظیمات پیشرفته" }
    ],
    stats: "افزایش ۴۰٪ بهره‌وری"
  },
  {
    id: "service",
    title: "دشبورد خدماتی",
    description: "سیستم نوبت‌دهی، پیگیری درخواست‌ها و مدیریت پروژه‌ها",
    color: "from-emerald-500 to-emerald-600",
    features: [
      { icon: Calendar, text: "نوبت‌دهی آنلاین" },
      { icon: Bell, text: "اطلاع‌رسانی خودکار" },
      { icon: TrendingUp, text: "تحلیل رضایت مشتری" },
      { icon: FileText, text: "گزارش‌گیری عملکرد" }
    ],
    stats: "کاهش ۶۰٪ خطای انسانی"
  }
];

export default function DashboardShowcase() {
  return (
    <section className="bg-white lg:h-[90rem] h-[130rem] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-l from-[#1e40af]/10 to-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#1e40af] rounded-full"></div>
            <span className="text-[#1e40af] font-bold">مدیریت آسان، کنترل کامل</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            دشبوردهای
            <span className="text-[#1e40af] block mt-2">شخصی‌سازی شده</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            هر کسب‌وکار نیازهای خاص خود را دارد. ما دشبوردی می‌سازیم که دقیقاً با نیازهای شما هماهنگ باشد
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Dashboard Preview */}
          <div className="relative">
            {/* Desktop Dashboard */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              {/* Status Bar */}
              <div className="h-10 bg-gradient-to-l from-gray-900 to-gray-800 border-b border-gray-700 flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="w-32 h-2 bg-gray-700 rounded-full"></div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-2 bg-gray-700 rounded-full"></div>
                  <div className="w-8 h-2 bg-gray-700 rounded-full"></div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-gradient-to-bl from-gray-900 to-black">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8 flex-row-reverse">
                  <div className="flex items-center gap-4 flex-row-reverse">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-l from-blue-500 to-cyan-400"></div>
                    <div className="text-right">
                      <div className="w-32 h-3 bg-gray-700 rounded-full mb-2"></div>
                      <div className="w-24 h-2 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-24 h-8 bg-gradient-to-l from-[#1e40af] to-blue-600 rounded-lg"></div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-gray-800 rounded-xl p-4">
                      <div className="w-16 h-2 bg-gray-700 rounded-full mb-3"></div>
                      <div className="w-24 h-6 bg-gradient-to-l from-blue-500 to-blue-400 rounded-lg mb-2"></div>
                      <div className="w-20 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                  ))}
                </div>
                
                {/* Chart Area */}
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="w-32 h-3 bg-gray-700 rounded-full mb-4"></div>
                  <div className="h-32 flex items-end gap-2">
                    {[30, 60, 45, 80, 65, 90, 70].map((height, idx) => (
                      <div
                        key={idx}
                        className="flex-1 bg-gradient-to-t from-[#1e40af] to-blue-500 rounded-t-lg"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Devices */}
            <div className="absolute -bottom-6 -left-6">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-2xl border-2 border-gray-300 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-[#1e40af]" />
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-2xl border-2 border-gray-300 flex items-center justify-center">
                <Tablet className="w-6 h-6 text-[#1e40af]" />
              </div>
            </div>
          </div>

          {/* Right - Dashboard Types */}
          <div className="space-y-6">
            {dashboardSamples.map((dashboard) => (
              <div
                key={dashboard.id}
                className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-right">
                    <div className="flex items-center gap-3 mb-2 flex-row-reverse justify-end">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-l ${dashboard.color}`}></div>
                      <h3 className="text-xl font-bold text-gray-900">{dashboard.title}</h3>
                    </div>
                    <p className="text-gray-600">{dashboard.description}</p>
                  </div>
                  <Monitor className="w-6 h-6 text-gray-400" />
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {dashboard.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 flex-row-reverse justify-end">
                      <feature.icon className="w-4 h-4 text-[#1e40af]" />
                      <span className="text-sm text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                {/* Stat */}
                <div className="flex items-center justify-between">
                  <div className="px-4 py-2 bg-gradient-to-l from-[#1e40af]/10 to-blue-100 rounded-full">
                    <span className="text-[#1e40af] font-bold">{dashboard.stats}</span>
                  </div>
                
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Responsive Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-l from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900 mb-1">مدیریت سایت در جیب شما</div>
              <p className="text-gray-600">دشبورد کاملاً واکنش‌گرا - قابل دسترسی از موبایل، تبلت و دسکتاپ</p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Tablet className="w-7 h-7 text-[#1e40af]" />
              <Smartphone className="w-6 h-6 text-[#1e40af]" />
              <Monitor className="w-8 h-8 text-[#1e40af]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Icon component
const Tablet = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);