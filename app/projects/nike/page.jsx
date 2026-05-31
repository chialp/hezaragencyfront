// app/projects/nike-store/page.jsx
import {
  Video,
  PlayCircle,
  Upload,
  Eye,
  Lock,
  UserCheck,
  Film,
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
  Smartphone,
  ShieldCheck,
  Globe,
  Sparkles,
  Layers,
  Download,
  Bell,
  TrendingUp,
  Settings,
  ShoppingBag,
  Search,
  Package,
  CreditCard,
  Shirt,
  Footprints,
  Filter,
  ShoppingCart,
  Award as AwardIcon,
  RefreshCw,
  TrendingUp as TrendingUpIcon,
} from "lucide-react";
import Footer from "../../components/FooterServer";
import Header from "../../servercomponents/HeaderServer";
import Link from "next/link";

export async function generateMetadata() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://hezaragency.com";

  const canonicalUrl = `${baseUrl}/projects/nike`;

  const title =
    "پروژه Nike | طراحی و توسعه وب‌سایت حرفه‌ای توسط هەزار";
  const description =
    "نمونه‌کار پروژه Nike – طراحی UI/UX حرفه‌ای، توسعه واکنش‌گرا و بهینه‌سازی وب‌سایت توسط تیم هەزار؛ تجربه‌ای کاربرپسند و استانداردهای روز.";

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
          url: `${baseUrl}/projects/nike/og-image.png`,
          width: 1200,
          height: 630,
          alt: "پروژه Nike طراحی سایت حرفه‌ای توسط هەزار",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/projects/nike/og-image.png`],
    },
  };
}

export default function NikeStorePage() {
  const projectData = {
    id: "project-4",
    title: "فروشگاه Nike",
    tagline: "فروشگاه اختصاصی کفش با جستجوی پیشرفته",
    description:
      "فروشگاه اختصاصی فروش کفش با قابلیت سرچ حرفه‌ای و درگاه پرداخت بین‌المللی",
    media: "/media/demo/nike.mp4",
    mediaType: "video",
    thumbnail: "/media/shot/nike.webp",
    liveUrl: "#",
    performance: { speed: 98, accessibility: 96, seo: 100 },
    features: [
      "انبارداری هوشمند",
      "پرداخت امن بین‌المللی",
      "داشبورد مدیریت",
      "جستجوی پیشرفته",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "CSS3",
      "Stripe",
    ],
    accentColor: "#E4002B", // تغییر به قرمز Nike
    pages: 22,
    hasAdminPanel: true,
    userTypes: ["مشتری", "کاربر ویژه", "مدیر محصول", "ادمین فروشگاه"],
    isModernDesign: true,
    isOptimized: true,
    dataSources: ["کاتالوگ Nike", "موجودی انبار", "نظرات کاربران"],
    maxResolution: "4K UHD",
    storage: "ذخیره‌سازی ابری مقیاس‌پذیر",
    launched: "اردیبهشت ۱۴۰۳",
    users: "۱۰۰۰۰+ کاربر",
    orderCount: "۲۰۰۰۰+ سفارش ثبت شده",
  };

  const stats = [
    {
      label: "سرعت",
      value: "۹۸",
      unit: "/۱۰۰",
      icon: <Zap className="w-5 h-5" />,
      color: "text-red-600",
    },
    {
      label: "دسترسی‌پذیری",
      value: "۹۶",
      unit: "/۱۰۰",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "text-red-500",
    },
    {
      label: "سئو",
      value: "۱۰۰",
      unit: "/۱۰۰",
      icon: <Award className="w-5 h-5" />,
      color: "text-red-400",
    },
    {
      label: "سفارشات",
      value: "۲۰,۰۰۰",
      unit: "+",
      icon: <ShoppingBag className="w-5 h-5" />,
      color: "text-red-600",
    },
  ];

  const coreFeatures = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "انبارداری هوشمند",
      description:
        "سیستم مدیریت موجودی پیشرفته با ردیابی لحظه‌ای و هشدار اتوماتیک",
      details: [
        "ردیابی موجودی Real-time",
        "سفارش خودکار به تامین‌کننده",
        "مدیریت چند انباره",
      ],
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "پرداخت بین‌المللی",
      description:
        "درگاه پرداخت امن با پشتیبانی از ارزهای مختلف و کارت‌های بین‌المللی",
      details: ["پشتیبانی از ۱۰+ ارز", "تراکنش‌های امن", "پرداخت اقساطی"],
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "داشبورد مدیریت",
      description:
        "پنل جامع مدیریت فروش، کاربران، محصولات و تحلیل‌های فروشگاه",
      details: ["تحلیل فروش پیشرفته", "مدیریت کاربران", "گزارش‌گیری لحظه‌ای"],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "جستجوی پیشرفته",
      description:
        "سیستم جستجوی هوشمند با فیلترهای متعدد برای یافتن سریع محصولات",
      details: ["جستجوی تصویری", "فیلتر ۲۰+ معیار", "پیشنهاد هوشمند"],
    },
  ];

  const technologyDetails = [
    {
      category: "فرانت‌اند",
      technologies: [
        {
          name: "React",
          description: "کتابخانه قدرتمند برای رابط کاربری پویا و واکنشگرا",
          icon: <Code className="w-5 h-5" />,
        },
        {
          name: "Tailwind CSS",
          description: "فریمورک CSS برای طراحی سریع و ریسپانسیو",
          icon: <Palette className="w-5 h-5" />,
        },
        {
          name: "CSS3",
          description: "آخرین استاندارد CSS برای افکت‌ها و انیمیشن‌های مدرن",
          icon: <Layers className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "بک‌اند",
      technologies: [
        {
          name: "Node.js",
          description: "محیط اجرای جاوااسکریپت برای سرور سریع و مقیاس‌پذیر",
          icon: <Cpu className="w-5 h-5" />,
        },
        {
          name: "MongoDB",
          description: "پایگاه داده NoSQL برای ذخیره‌سازی محصولات و کاربران",
          icon: <Database className="w-5 h-5" />,
        },
        {
          name: "Stripe",
          description: "درگاه پرداخت امن برای تراکنش‌های بین‌المللی",
          icon: <CreditCard className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "خدمات",
      technologies: [
        {
          name: "Cloudinary",
          description: "مدیریت و بهینه‌سازی تصاویر محصولات با کیفیت بالا",
          icon: <Cloud className="w-5 h-5" />,
        },
        {
          name: "Algolia",
          description: "موتور جستجوی پیشرفته برای محصولات",
          icon: <Search className="w-5 h-5" />,
        },
        {
          name: "Redis",
          description: "سیستم کشینگ برای افزایش عملکرد فروشگاه",
          icon: <Sparkles className="w-5 h-5" />,
        },
      ],
    },
  ];

  const userBenefits = [
    { icon: <Footprints className="w-5 h-5" />, text: "انواع کفش‌های ورزشی و روزمره" },
    { icon: <Filter className="w-5 h-5" />, text: "فیلترهای پیشرفته جستجو" },
    { icon: <ShoppingCart className="w-5 h-5" />, text: "تجربه خرید آسان و سریع" },
    { icon: <TrendingUpIcon className="w-5 h-5" />, text: "تخفیف‌های ویژه و پیشنهادات" },
    { icon: <Shield className="w-5 h-5" />, text: "ضمانت اصل بودن کالا" },
    { icon: <Headphones className="w-5 h-5" />, text: "پشتیبانی ۲۴/۷ مشتریان" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900 pt-[10rem]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-white via-red-50 to-red-100 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <ShoppingBag className="w-4 h-4 ml-2" />
                  فروشگاه تخصصی کفش
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="block text-gray-900">
                    {projectData.title}
                  </span>
                  <span className="block text-red-600 mt-2 text-2xl md:text-3xl">
                    {projectData.tagline}
                  </span>
                </h1>

                <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                  یک فروشگاه آنلاین کامل و اختصاصی برای برند Nike با قابلیت جستجوی پیشرفته و پرداخت بین‌المللی. این پلتفرم امکان خرید آسان، مدیریت هوشمند و تجربه‌ای منحصربه‌فرد از خرید کفش‌های ورزشی را فراهم می‌کند.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link
                    href={"/contact"}
                    className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-lg font-medium hover:from-red-700 hover:to-red-900 transition-all shadow-lg"
                  >
                    تماس با ما
                  </Link>
                  <Link
                    href={"/web"}
                    className="bg-white border border-red-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors"
                  >
                    بقیه نمونه کارها
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-2 shadow-2xl">
                  <div className="bg-gradient-to-br from-red-900 to-red-950 rounded-xl p-2 h-64 md:h-80 w-full flex items-center justify-center overflow-hidden">
                    {/* ویدیو جایگزین تصویر */}
                    <video
                      src={projectData.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="rounded-xl w-full h-full object-cover"
                      poster={projectData.thumbnail}
                    >
                      <source src={projectData.media} type="video/mp4" />
                      مرورگر شما از تگ ویدیو پشتیبانی نمی‌کند.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4 bg-red-600/80 rounded-full">
                        <PlayCircle className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-red-200">
                  <div className="flex items-center">
                    <div className="p-3 bg-red-100 rounded-lg ml-3">
                      <ShoppingBag className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">۹۸</div>
                      <div className="text-sm text-red-600">سرعت لایتهاوس</div>
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
                این فروشگاه Nike با تمرکز بر تجربه کاربری و عملکرد بالا، امکانات کاملی را برای علاقه‌مندان به کفش‌های ورزشی ارائه می‌دهد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-red-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-gradient-to-r from-red-600 to-red-800 rounded-lg inline-block mb-4">
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
                        <CheckCircle className="w-4 h-4 text-red-600 ml-2" />
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
                  className="bg-white rounded-xl p-6 border border-red-100 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-red-200">
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="p-2 bg-red-50 rounded-lg ml-4">
                          <div className="text-red-600">{tech.icon}</div>
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
          <div className="mb-16 bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-200">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  مزایای استفاده از فروشگاه Nike
                </h2>
                <p className="text-gray-600 mb-8">
                  این پلتفرم با تمرکز بر نیازهای مشتریان کفش‌های ورزشی، امکانات متعددی برای خرید آسان و مطمئن فراهم می‌کند.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white p-4 rounded-lg border border-red-200"
                    >
                      <div className="p-2 bg-gradient-to-r from-red-600 to-red-800 rounded-lg ml-4">
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <span className="text-gray-800">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-8">
                  <div className="text-white mb-6">
                    <h3 className="text-2xl font-bold mb-4">
                      سیستم چندکاربره پیشرفته
                    </h3>
                    <p className="text-red-100 mb-6">
                      پشتیبانی از سطوح دسترسی مختلف با قابلیت‌های متنوع برای هر نقش در سیستم
                    </p>
                  </div>

                  <div className="space-y-4">
                    {projectData.userTypes.map((type, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-red-700/50 p-4 rounded-lg"
                      >
                        <div className="flex items-center">
                          <UserCheck className="w-5 h-5 text-red-300 ml-3" />
                          <span className="text-white">{type}</span>
                        </div>
                        <div className="text-red-300 text-sm">
                          دسترسی{" "}
                          {index === 0
                            ? "مشتری"
                            : index === 1
                            ? "ویژه"
                            : index === 2
                            ? "مدیر"
                            : "کامل"}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-red-700">
                    <div className="flex items-center text-red-300">
                      <ShieldCheck className="w-5 h-5 ml-3 text-red-300" />
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

            <div className="bg-white rounded-2xl p-8 border border-red-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    امتیازات لایتهاوس
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <Zap className="w-5 h-5 text-red-600 ml-2" />
                          <span className="font-medium text-gray-700">
                            سرعت
                          </span>
                        </div>
                        <span className="font-bold text-gray-900">۹۸/۱۰۰</span>
                      </div>
                      <div className="h-2 bg-red-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                          style={{ width: "98%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <BarChart3 className="w-5 h-5 text-red-500 ml-2" />
                          <span className="font-medium text-gray-700">
                            دسترسی‌پذیری
                          </span>
                        </div>
                        <span className="font-bold text-gray-900">۹۶/۱۰۰</span>
                      </div>
                      <div className="h-2 bg-red-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-300 to-red-400 rounded-full"
                          style={{ width: "96%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <AwardIcon className="w-5 h-5 text-red-400 ml-2" />
                          <span className="font-medium text-gray-700">
                            بهینه‌سازی SEO
                          </span>
                        </div>
                        <span className="font-bold text-gray-900">۱۰۰/۱۰۰</span>
                      </div>
                      <div className="h-2 bg-red-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-red-200 to-red-300 rounded-full"
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
                    <div className="flex justify-between items-center py-3 border-b border-red-200">
                      <span className="text-gray-700">منابع محصولات</span>
                      <span className="font-medium text-red-600">
                        {projectData.dataSources.join("، ")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-red-200">
                      <span className="text-gray-700">حداکثر رزولوشن تصاویر</span>
                      <span className="font-medium text-red-600">
                        {projectData.maxResolution}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-red-200">
                      <span className="text-gray-700">ذخیره‌سازی</span>
                      <span className="font-medium text-red-600">
                        {projectData.storage}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-red-200">
                      <span className="text-gray-700">تعداد صفحات</span>
                      <span className="font-medium text-red-600">
                        {projectData.pages}+ صفحه
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-700">سفارشات ثبت شده</span>
                      <span className="font-medium text-red-600">
                        {projectData.orderCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Philosophy */}
          <div className="bg-gradient-to-br from-red-800 to-red-950 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-6">
                  فلسفه طراحی فروشگاه Nike
                </h3>
                <p className="text-red-100 mb-6 text-lg">
                  طراحی الهام‌گرفته از هویت برند Nike با ترکیبی از قرمز و سفید، همراه با المان‌های پویا و ورزشی.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-red-700 rounded-lg ml-4">
                      <Search className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        جستجوی هوشمند
                      </h4>
                      <p className="text-red-100">
                        سیستم جستجوی پیشرفته با فیلترهای متعدد برای یافتن سریع محصولات
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-red-700 rounded-lg ml-4">
                      <Palette className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        پالت رنگی پرانرژی
                      </h4>
                      <p className="text-red-100">
                        استفاده از قرمز برند Nike با تأکید بر انرژی و تحرک
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-red-700 rounded-lg ml-4">
                      <TrendingUpIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        تحلیل فروش پیشرفته
                      </h4>
                      <p className="text-red-100">
                        ارائه آمار و گراف‌های تعاملی از روند فروش و رفتار مشتریان
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-red-900 to-red-950 rounded-xl p-8">
                  <div className="text-center">
                    <AwardIcon className="w-16 h-16 text-white mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-4">
                      طراحی کاربرپسند و مدرن
                    </h4>
                    <p className="text-red-100 mb-6">
                      رابط کاربری ساده و قدرتمند با تمرکز بر تجربه خرید سریع و لذت‌بخش
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-700/50 p-4 rounded-lg">
                        <div className="text-xl font-bold mb-2">۹۵٪</div>
                        <div className="text-sm text-red-100">
                          رضایت مشتریان
                        </div>
                      </div>
                      <div className="bg-red-700/50 p-4 rounded-lg">
                        <div className="text-xl font-bold mb-2">۴۵٪</div>
                        <div className="text-sm text-red-100">
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
              آماده تجربه فروشگاه آنلاین حرفه‌ای؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              این فروشگاه Nike با تکنولوژی‌های روز و طراحی کاربرپسند، فضایی ایده‌آل برای شروع کسب‌وکار آنلاین کفش است.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={"/contact"}
                className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-lg font-medium hover:from-red-700 hover:to-red-900 transition-all shadow-lg"
              >
                ارتباط با ما
              </Link>
              <Link
                href={"/web"}
                className="bg-white border border-red-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors"
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