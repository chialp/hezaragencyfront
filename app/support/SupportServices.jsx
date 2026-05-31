// app/components/SupportServices.jsx
import {
  Headphones,
  MessageCircle,
  Video,
  Mail,
  FileText,
  Users,
  Shield,
  Zap,
  Clock,
  Award,
} from "lucide-react";

const supportFeatures = [
  {
    icon: Headphones,
    title: "پشتیبانی تلفنی ۲۴/۷",
    description:
      "تیم پشتیبانی ما در تمام ساعات شبانه‌روز حتی روزهای تعطیل پاسخگوی شماست",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: MessageCircle,
    title: "پشتیبانی واتساپ و تلگرام",
    description:
      "پاسخگویی فوری در پیام‌رسان‌ها با ارسال تصویر و ویدیو برای رفع مشکل",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Video,
    title: "پشتیبانی ویدیویی",
    description: "اتصال ویدیویی مستقیم با متخصص برای رفع مشکلات پیچیده",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Mail,
    title: "تیکتینگ پیشرفته",
    description: "سیستم تیکت هوشمند با اولویت‌بندی و پیگیری خودکار",
    color: "from-amber-500 to-orange-600",
  },
];

const guaranteeItems = [
  {
    icon: Shield,
    title: "تضمین ۱۰۰٪ کیفیت",
    description: "اگر از خدمات ما راضی نبودید، کل مبلغ بازگشت داده می‌شود",
  },
  {
    icon: Clock,
    title: "پاسخگویی زیر ۱۵ دقیقه",
    description: "میانگین زمان پاسخگویی تیم پشتیبانی ما کمتر از ۱۵ دقیقه است",
  },
  {
    icon: Users,
    title: "تیم اختصاصی",
    description: "برای هر پروژه یک تیم ۳ نفره متخصص اختصاص می‌دهیم",
  },
  {
    icon: Award,
    title: "گواهینامه‌های بین‌المللی",
    description: "دارای گواهینامه‌های ISO در زمینه کیفیت و پشتیبانی",
  },
];

export default function SupportServices() {
  return (
    <section className="bg-gradient-to-b lg:h-[75rem] h-[105rem] from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-900 font-bold">
              پشتیبانی رایگان مادام‌العمر
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            ما <span className="text-[#1e40af]">هرگز</span> شما را تنها
            نمی‌گذاریم
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            پشتیبانی فقط یک سرویس اضافی نیست، برای ما{" "}
            <span className="text-[#1e40af] font-bold">تعهد دائمی</span> است
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Support Channels */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              کانال‌های ارتباطی متنوع
            </h3>

            <div className="space-y-6">
              {supportFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1e40af] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Guarantee */}
          <div>
            <div className="bg-gradient-to-br from-[#1e40af] to-blue-700 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-yellow-300" />
                <h3 className="text-2xl font-bold">تضمین‌های ما</h3>
              </div>

              <div className="space-y-6">
                {guaranteeItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-white/90">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-5xl font-black mb-2">۱۰۰٪</div>
                  <div className="text-lg">رضایت مشتریان از پشتیبانی</div>
                  <div className="text-sm text-white/70 mt-2">
                    بر اساس نظرسنجی‌های ۶ ماه گذشته
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}