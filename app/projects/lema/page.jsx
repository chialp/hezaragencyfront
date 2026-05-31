// app/projects/coffee-shop/page.jsx
import {

  UserCheck,
  Monitor,
  Cloud,
  Headphones,
  Zap,
  BarChart3,
  Award,
  Code,
  CheckCircle,
  Users,
  Shield,
  Cpu,
  Database,
  Type,
  Server,
  Palette,
  ShieldCheck,
  Sparkles,
  Bell,
  TrendingUp,
  Coffee,
  Package,
  ShoppingBag,
  CreditCard,
  Coffee as CoffeeIcon,
  Award as AwardIcon,
  Bean,
} from "lucide-react";
import Footer from "../../components/FooterServer";
import Header from "../../servercomponents/HeaderServer";
import Link from "next/link";

export async function generateMetadata() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://hezaragency.com";

  const canonicalUrl = `${baseUrl}/projects/lema`;

  const title =
    "پروژه Lema | طراحی و توسعه وب‌سایت حرفه‌ای توسط هەزار";
  const description =
    "نمونه‌کار پروژه Lema – طراحی UI/UX واکنش‌گرا و توسعه وب‌سایت حرفه‌ای توسط تیم هەزار، با تمرکز بر تجربه کاربری و استانداردهای روز.";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      locale: "fa_IR",
      type: "website",
      images: [
        {
          url: `${baseUrl}/projects/lema/og-image.png`,
          width: 1200,
          height: 630,
          alt: "پروژه Lema طراحی سایت حرفه‌ای توسط هەزار",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/projects/lema/og-image.png`],
    },
  };
}


export default function CoffeeShopPage() {
  const projectData = {
    id: 2,
    title: "وبسایت فروشگاه قهوه",
    tagline: "پلتفرم فروش آنلاین قهوه با ترکیب‌ساز پیشرفته",
    description:
      "سایت فروش آنلاین قهوه با انتخاب ترکیب قهوه دلخواه با پنل کاملاً اختصاصی",
    media: "/media/demo/Lema.mp4",
    mediaType: "video",
    thumbnail: "/media/shot/lema.webp",
    liveUrl: "#",
    performance: { speed: 98, accessibility: 96, seo: 100 },
    features: [
      "انبارداری و مدیریت محصولات",
      "پرداخت امن",
      "دشبورد اختصاصی",
      "ساخت ترکیب قهوه دلخواه",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],
    accentColor: "#8B4513", // قهوه‌ای
    pages: 20,
    hasAdminPanel: true,
    userTypes: ["مشتری", "نویسنده بلاگ", "مدیر محصول", "ادمین سیستم"],
    isModernDesign: true,
    isOptimized: true,
    dataSources: ["تأمین‌کنندگان محلی", "دیتابیس داخلی", "نظرات کاربران"],
    maxResolution: "4K UHD",
    storage: "ذخیره‌سازی ابری ایمن",
    launched: "بهمن ۱۴۰۲",
    users: "۲۰۰۰+ کاربر فعال",
    orderCount: "۵۰۰۰+ سفارش ثبت شده",
  };

  const stats = [
    {
      label: "سرعت",
      value: "۹۸",
      unit: "/۱۰۰",
      icon: <Zap className="w-5 h-5" />,
      color: "text-amber-700",
    },
    {
      label: "دسترسی‌پذیری",
      value: "۹۶",
      unit: "/۱۰۰",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "text-blue-600",
    },
    {
      label: "سئو",
      value: "۱۰۰",
      unit: "/۱۰۰",
      icon: <Award className="w-5 h-5" />,
      color: "text-purple-600",
    },
    {
      label: "سفارشات فعال",
      value: "۵,۰۰۰",
      unit: "+",
      icon: <ShoppingBag className="w-5 h-5" />,
      color: "text-green-600",
    },
  ];

  const coreFeatures = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "انبارداری هوشمند",
      description:
        "سیستم مدیریت پیشرفته محصولات با ردیابی خودکار موجودی و تاریخ انقضا",
      details: [
        "ردیابی لحظه‌ای موجودی",
        "هشدار اتوماتیک",
        "گزارش‌گیری پیشرفته",
      ],
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "پرداخت امن",
      description:
        "درگاه پرداخت ایمن با پشتیبانی از کارت‌های بانکی و کیف‌پول‌های دیجیتال",
      details: ["رمزنگاری SSL", "تأیید دو مرحله‌ای", "پشتیبانی از درگاه‌های متعدد"],
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "دشبورد اختصاصی",
      description:
        "پنل مدیریت کامل با امکان کنترل تمام جنبه‌های فروشگاه",
      details: ["تحلیل فروش", "مدیریت کاربران", "کنترل محتوا", "تنظیمات پیشرفته"],
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "ترکیب‌ساز قهوه",
      description: "سیستم ساخت ترکیب شخصی قهوه با انتخاب نوع دانه، طعم و روش دم‌آوری",
      details: ["انتخاب از ۵۰+ دانه", "تنظیم درجه برشته‌شدگی", "انتخاب طعم‌دهنده", "ذخیره ترکیب‌ها"],
    },
  ];

  const technologyDetails = [
    {
      category: "فرانت‌اند",
      technologies: [
        {
          name: "Next.js 14",
          description: "رندرینگ سمت سرور و بهینه‌سازی سئو",
          icon: <Server className="w-5 h-5" />,
        },
        {
          name: "TypeScript",
          description: "نوع‌دهی امن و کاهش خطاهای زمان اجرا",
          icon: <Type className="w-5 h-5" />,
        },
        {
          name: "Tailwind CSS",
          description: "طراحی واکنشگرا و سریع",
          icon: <Palette className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "بک‌اند",
      technologies: [
        {
          name: "Node.js",
          description: "سرور سریع و مقیاس‌پذیر برای API",
          icon: <Cpu className="w-5 h-5" />,
        },
        {
          name: "MongoDB",
          description: "دیتابیس NoSQL مقیاس‌پذیر",
          icon: <Database className="w-5 h-5" />,
        },
        {
          name: "Stripe",
          description: "درگاه پرداخت امن بین‌المللی",
          icon: <CreditCard className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "خدمات",
      technologies: [
        {
          name: "Cloudinary",
          description: "مدیریت و بهینه‌سازی تصاویر محصولات",
          icon: <Cloud className="w-5 h-5" />,
        },
        {
          name: "SendGrid",
          description: "سیستم ارسال ایمیل و نوتیفیکیشن",
          icon: <Bell className="w-5 h-5" />,
        },
        {
          name: "Redis",
          description: "کشینگ برای عملکرد فوق‌العاده",
          icon: <Sparkles className="w-5 h-5" />,
        },
      ],
    },
  ];

  const userBenefits = [
    { icon: <Coffee className="w-5 h-5" />, text: "انتخاب از صدها نوع قهوه" },
    { icon: <Bean className="w-5 h-5" />, text: "ترکیب‌ساز شخصی قهوه" },
    { icon: <Bell className="w-5 h-5" />, text: "اعلان موجودی جدید" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "پیگیری سفارش لحظه‌ای" },
    { icon: <Shield className="w-5 h-5" />, text: "پرداخت ۱۰۰% امن" },
    { icon: <Headphones className="w-5 h-5" />, text: "پشتیبانی تخصصی قهوه" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900 pt-[10rem]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-white via-amber-50 to-stone-100 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <CoffeeIcon className="w-4 h-4 ml-2" />
                  فروشگاه تخصصی قهوه
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="block text-gray-900">
                    {projectData.title}
                  </span>
                  <span className="block text-gray-600 mt-2 text-2xl md:text-3xl">
                    {projectData.tagline}
                  </span>
                </h1>

                <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                  یک پلتفرم کامل فروش آنلاین قهوه با قابلیت ساخت ترکیب شخصی. این فروشگاه امکان خرید آسان، مدیریت هوشمند انبار و تجربه‌ای منحصربه‌فرد از نوشیدن قهوه را فراهم می‌کند.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link
                    href={"/contact"}
                    className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 rounded-lg font-medium hover:from-amber-800 hover:to-amber-900 transition-all shadow-lg"
                  >
                    تماس با ما
                  </Link>
                  <Link
                    href={"/web"}
                    className="bg-white border border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    بقیه نمونه کارها
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl p-2 shadow-2xl">
                  <video
                    src={projectData.media}
                    poster={projectData.thumbnail}
                    controls
                    controlsList="nodownload noplaybackrate nofullscreen"
                    disablePictureInPicture
                    preload="metadata"
                    className="bg-gradient-to-br from-stone-900 to-black rounded-xl p-2 h-64 md:h-80 w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-3 bg-amber-100 rounded-lg ml-3">
                      <Coffee className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">۹۸</div>
                      <div className="text-sm text-gray-600">سرعت لایتهاوس</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          {/* Core Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ویژگی‌های اصلی فروشگاه
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                این فروشگاه قهوه با تمرکز بر تجربه کاربری و عملکرد Real-time، امکانات کاملی را برای علاقه‌مندان به قهوه ارائه می‌دهد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-gradient-to-r from-amber-700 to-amber-800 rounded-lg inline-block mb-4">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-amber-600 ml-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                تکنولوژی‌های به کار رفته
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                استفاده از مدرن‌ترین تکنولوژی‌ها برای ایجاد فروشگاهی سریع، ایمن و مقیاس‌پذیر
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {technologyDetails.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="p-2 bg-gray-100 rounded-lg ml-4">
                          <div className="text-gray-700">{tech.icon}</div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {tech.name}
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16 bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  مزایای استفاده از فروشگاه قهوه
                </h2>
                <p className="text-gray-600 mb-8">
                  این پلتفرم با تمرکز بر تجربه کاربری قهوه‌دوستان، امکانات متعددی برای کشف، خرید و لذت بردن از قهوه فراهم می‌کند.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white p-4 rounded-lg border border-gray-200"
                    >
                      <div className="p-2 bg-gradient-to-r from-amber-700 to-amber-800 rounded-lg ml-4">
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <span className="text-gray-800">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-stone-900 to-black rounded-2xl p-8">
                  <div className="text-white mb-6">
                    <h3 className="text-2xl font-bold mb-4">
                      سیستم چندکاربره پیشرفته
                    </h3>
                    <p className="text-gray-300 mb-6">
                      پشتیبانی از سطوح دسترسی مختلف با قابلیت‌های متنوع برای هر نقش در سیستم
                    </p>
                  </div>

                  <div className="space-y-4">
                    {projectData.userTypes.map((type, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-stone-800/50 p-4 rounded-lg"
                      >
                        <div className="flex items-center">
                          <UserCheck className="w-5 h-5 text-amber-500 ml-3" />
                          <span className="text-white">{type}</span>
                        </div>
                        <div className="text-gray-400 text-sm">
                          دسترسی{" "}
                          {index === 0
                            ? "مشتری"
                            : index === 1
                            ? "نویسنده"
                            : index === 2
                            ? "مدیر"
                            : "کامل"}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-stone-800">
                    <div className="flex items-center text-gray-400">
                      <ShieldCheck className="w-5 h-5 ml-3 text-amber-500" />
                      <span className="text-sm">
                        سیستم امنیتی پیشرفته برای محافظت از اطلاعات مشتریان
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                عملکرد و بهینه‌سازی
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                امتیازات عالی در تست‌های استاندارد نشان‌دهنده کیفیت بالای توسعه این فروشگاه است
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    امتیازات لایتهاوس
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <Zap className="w-5 h-5 text-amber-700 ml-2" />
                          <span className="font-medium text-gray-700">
                            سرعت
                          </span>
                        </div>
                        <span className="font-bold text-gray-900">۹۸/۱۰۰</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                          style={{ width: "98%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <BarChart3 className="w-5 h-5 text-blue-600 ml-2" />
                          <span className="font-medium text-gray-700">
                            دسترسی‌پذیری
                          </span>
                        </div>
                        <span className="font-bold text-gray-900">۹۶/۱۰۰</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                          style={{ width: "96%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <AwardIcon className="w-5 h-5 text-purple-600 ml-2" />
                          <span className="font-medium text-gray-700">
                            بهینه‌سازی SEO
                          </span>
                        </div>
                        <span className="font-bold text-gray-900">۱۰۰/۱۰۰</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    مشخصات فنی
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">منابع محصولات</span>
                      <span className="font-medium text-gray-900">
                        {projectData.dataSources.join("، ")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">حداکثر رزولوشن تصاویر</span>
                      <span className="font-medium text-gray-900">
                        {projectData.maxResolution}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">ذخیره‌سازی</span>
                      <span className="font-medium text-gray-900">
                        {projectData.storage}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">تعداد صفحات</span>
                      <span className="font-medium text-gray-900">
                        {projectData.pages}+ صفحه
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-700">سفارشات ثبت شده</span>
                      <span className="font-medium text-gray-900">
                        {projectData.orderCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Philosophy */}
          <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-6">
                  فلسفه طراحی فروشگاه قهوه
                </h3>
                <p className="text-amber-100 mb-6 text-lg">
                  طراحی الهام‌گرفته از دنیای قهوه با ترکیبی از رنگ‌های گرم و طبیعی، همراه با بهبود‌های مدرن در تجربه کاربری.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-amber-800 rounded-lg ml-4">
                      <Bean className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        ترکیب‌ساز هوشمند
                      </h4>
                      <p className="text-amber-200">
                        امکان ساخت ترکیب شخصی قهوه با انتخاب نوع دانه، طعم و روش دم‌آوری
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-amber-800 rounded-lg ml-4">
                      <Palette className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        پالت رنگی طبیعی
                      </h4>
                      <p className="text-amber-200">
                        استفاده از رنگ‌های قهوه‌ای، طلایی و بژ برای ایجاد حس گرم و طبیعی
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-amber-800 rounded-lg ml-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        تحلیل فروش پیشرفته
                      </h4>
                      <p className="text-amber-200">
                        ارائه آمار و گراف‌های تعاملی از روند فروش و علایق مشتریان
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-amber-800 to-amber-900 rounded-xl p-8">
                  <div className="text-center">
                    <AwardIcon className="w-16 h-16 text-white mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-4">
                      طراحی کاربرپسند و مدرن
                    </h4>
                    <p className="text-amber-200 mb-6">
                      رابط کاربری ساده و قدرتمند با تمرکز بر تجربه خرید آسان و لذت‌بخش
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-amber-800/50 p-4 rounded-lg">
                        <div className="text-xl font-bold mb-2">۹۵٪</div>
                        <div className="text-sm text-amber-300">
                          رضایت مشتریان
                        </div>
                      </div>
                      <div className="bg-amber-800/50 p-4 rounded-lg">
                        <div className="text-xl font-bold mb-2">۴۰٪</div>
                        <div className="text-sm text-amber-300">
                          افزایش فروش
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              آماده تجربه فروشگاه آنلاین قهوه؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              این فروشگاه با تکنولوژی‌های روز و طراحی کاربرپسند، فضایی ایده‌آل برای شروع کسب‌وکار قهوه‌ای شما است.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={"/contact"}
                className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-3 rounded-lg font-medium hover:from-amber-800 hover:to-amber-900 transition-all shadow-lg"
              >
                ارتباط با ما
              </Link>
              <Link
                href={"/web"}
                className="bg-white border border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                بقیه نمونه کارها
              </Link>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}