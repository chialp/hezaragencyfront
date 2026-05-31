// app/projects/lawyer-website/page.jsx
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
  Gavel,
  Scale,
  BookOpen,
  FileText,
  MapPin,
  Languages,
  Award as AwardIcon,
  Briefcase,
  Clock,
  Calendar1,
  CreditCardIcon,
} from "lucide-react";
import Footer from "../../components/FooterServer";
import Header from "../../servercomponents/HeaderServer";
import Link from "next/link";

export async function generateMetadata() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://hezaragency.com";

  const canonicalUrl = `${baseUrl}/projects/lawyer`;

  const title = "پروژه Lawyer | طراحی سایت حرفه‌ای وکلا توسط هەزار";
  const description =
    "نمونه پروژه طراحی سایت Lawyer – طراحی واکنش‌گرا، مدرن و بهینه برای وکلا و شرکت‌های حقوقی توسط تیم هەزار.";

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
          url: `${baseUrl}/projects/lawyer/og-image.png`,
          width: 1200,
          height: 630,
          alt: "پروژه Lawyer – طراحی سایت حرفه‌ای هەزار",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/projects/lawyer/og-image.png`],
    },
  };
}

export default function LawyerWebsitePage() {
  const projectData = {
    id: "project-1",
    title: "وبسایت وکالت",
    tagline: "پلتفرم تخصصی وکالت با طراحی حرفه‌ای",
    description:
      "توسعه وبسایت وکالت جناب مهران محمدی با استفاده از بروزترین تکنولوژی‌های روز و قابلیت چندزبانه",
    media: "/media/demo/lawyer.mp4",
    mediaType: "video",
    thumbnail: "/media/shot/mehran.webp",
    liveUrl: "#",
    performance: { speed: 98, accessibility: 95, seo: 100 },
    features: [
      "پنل مدیریت پرونده‌ها",
      "پرداخت امن حق‌الوکاله",
      "سیستم قرار ملاقات",
      "آرشیو قوانین و مقررات",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "Redis",
      "Stripe",
    ],
    accentColor: "#1e40af", // آبی
    pages: 18,
    hasAdminPanel: true,
    userTypes: ["کاربر عمومی", "موکل", "منشی", "وکیل", "ادمین"],
    isModernDesign: true,
    isOptimized: true,
    dataSources: ["قوانین روز", "پرونده‌های نمونه", "نظرات موکلین"],
    maxResolution: "4K UHD",
    storage: "ذخیره‌سازی ابری ایمن",
    launched: "فروردین ۱۴۰۳",
    users: "۱۰۰۰+ کاربر",
    consultationCount: "۵۰۰+ مشاوره ثبت شده",
  };

  const stats = [
    {
      label: "سرعت",
      value: "۹۸",
      unit: "/۱۰۰",
      icon: <Zap className="w-5 h-5" />,
      color: "text-blue-600",
    },
    {
      label: "دسترسی‌پذیری",
      value: "۹۵",
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
      label: "کاربران",
      value: "۱,۰۰۰",
      unit: "+",
      icon: <Users className="w-5 h-5" />,
      color: "text-green-600",
    },
  ];

  const coreFeatures = [
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "پنل مدیریت پرونده‌ها",
      description:
        "سیستم جامع مدیریت پرونده‌های حقوقی با ردیابی کامل مراحل و مستندات",
      details: [
        "ردیابی وضعیت پرونده",
        "آرشیو اسناد حقوقی",
        "تقویم جلسات دادگاه",
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "پرداخت امن حق‌الوکاله",
      description:
        "درگاه پرداخت ایمن برای واریز حق‌الوکاله با پشتیبانی از کارت‌های بانکی",
      details: ["پرداخت آنلاین", "صورتحساب خودکار", "تاریخچه تراکنش‌ها"],
    },
    {
      icon: <Calendar1 className="w-8 h-8" />,
      title: "سیستم قرار ملاقات",
      description:
        "سیستم رزرو وقت مشاوره آنلاین با هماهنگی خودکار تاریخ و ساعت",
      details: ["تقویم هوشمند", "اعلان یادآوری", "کنفرانس ویدیویی"],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "آرشیو قوانین",
      description:
        "کتابخانه دیجیتالی قوانین و مقررات با قابلیت جستجوی پیشرفته",
      details: ["به‌روزرسانی خودکار", "جستجوی موضوعی", "نظرات کارشناسی"],
    },
  ];

  const technologyDetails = [
    {
      category: "فرانت‌اند",
      technologies: [
        {
          name: "Next.js 14",
          description: "رندرینگ سمت سرور و بهینه‌سازی سئو برای سایت وکالت",
          icon: <Server className="w-5 h-5" />,
        },
        {
          name: "TypeScript",
          description: "نوع‌دهی امن و کاهش خطاهای حقوقی در کدنویسی",
          icon: <Type className="w-5 h-5" />,
        },
        {
          name: "Tailwind CSS",
          description: "طراحی واکنشگرا و حرفه‌ای مناسب حوزه حقوق",
          icon: <Palette className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "بک‌اند",
      technologies: [
        {
          name: "Node.js",
          description: "سرور سریع و امن برای APIهای حقوقی",
          icon: <Cpu className="w-5 h-5" />,
        },
        {
          name: "Prisma ORM",
          description: "مدیریت پایگاه داده پرونده‌ها و کاربران",
          icon: <Database className="w-5 h-5" />,
        },
        {
          name: "Stripe",
          description: "درگاه پرداخت امن برای حق‌الوکاله",
          icon: <CreditCardIcon className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "خدمات",
      technologies: [
        {
          name: "i18next",
          description: "سیستم چندزبانه فارسی، انگلیسی و کوردی",
          icon: <Languages className="w-5 h-5" />,
        },
        {
          name: "Redis",
          description: "کشینگ برای عملکرد فوق‌العاده سایت",
          icon: <Sparkles className="w-5 h-5" />,
        },
        {
          name: "WebSocket",
          description: "ارتباط زنده برای مشاوره آنلاین",
          icon: <Globe className="w-5 h-5" />,
        },
      ],
    },
  ];

  const userBenefits = [
    { icon: <Briefcase className="w-5 h-5" />, text: "مدیریت هوشمند پرونده‌ها" },
    { icon: <Shield className="w-5 h-5" />, text: "امنیت بالا اطلاعات حقوقی" },
    { icon: <Clock className="w-5 h-5" />, text: "صرفه‌جویی در زمان مشاوره" },
    { icon: <MapPin className="w-5 h-5" />, text: "دسترسی آنلاین از هر مکان" },
    { icon: <Users className="w-5 h-5" />, text: "ارتباط بهتر با موکلین" },
    { icon: <Award className="w-5 h-5" />, text: "افزایش اعتبار حرفه‌ای" },
  ];

  // آیکون Calendar از lucide-react
  const Calendar = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  // آیکون CreditCard از lucide-react
  const CreditCard = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900 pt-[10rem]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-white via-blue-50 to-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Gavel className="w-4 h-4 ml-2" />
                  پلتفرم تخصصی وکالت
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
                  یک پلتفرم کامل و حرفه‌ای برای مدیریت امور وکالت با قابلیت چندزبانه. این سایت امکان ارائه خدمات حقوقی، مدیریت پرونده‌ها و ارتباط موثر با موکلین را فراهم می‌کند.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link
                    href={"/contact"}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
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
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-2 shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-2 h-64 md:h-80 w-full flex items-center justify-center">
                    <img
                      src={projectData.thumbnail}
                      alt={projectData.title}
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg ml-3">
                      <Gavel className="w-6 h-6 text-blue-600" />
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
                ویژگی‌های اصلی پلتفرم
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                این پلتفرم وکالت با تمرکز بر امنیت و کارایی، امکانات کاملی را برای مدیریت حرفه‌ای امور حقوقی ارائه می‌دهد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg inline-block mb-4">
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
                        <CheckCircle className="w-4 h-4 text-blue-600 ml-2" />
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
                استفاده از مدرن‌ترین تکنولوژی‌ها برای ایجاد پلتفرمی امن، سریع و مقیاس‌پذیر
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
          <div className="mb-16 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  مزایای استفاده از پلتفرم وکالت
                </h2>
                <p className="text-gray-600 mb-8">
                  این پلتفرم با تمرکز بر نیازهای حقوقی، امکانات متعددی برای وکلا و موکلین فراهم می‌کند.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white p-4 rounded-lg border border-gray-200"
                    >
                      <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg ml-4">
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <span className="text-gray-800">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8">
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
                        className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg"
                      >
                        <div className="flex items-center">
                          <UserCheck className="w-5 h-5 text-blue-400 ml-3" />
                          <span className="text-white">{type}</span>
                        </div>
                        <div className="text-gray-400 text-sm">
                          دسترسی{" "}
                          {index === 0
                            ? "محدود"
                            : index === 1
                            ? "ویژه"
                            : index === 2
                            ? "متوسط"
                            : index === 3
                            ? "پیشرفته"
                            : "کامل"}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <div className="flex items-center text-gray-400">
                      <ShieldCheck className="w-5 h-5 ml-3 text-blue-400" />
                      <span className="text-sm">
                        سیستم امنیتی پیشرفته برای محافظت از اطلاعات حقوقی
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
                امتیازات عالی در تست‌های استاندارد نشان‌دهنده کیفیت بالای توسعه این پلتفرم است
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
                          <Zap className="w-5 h-5 text-blue-600 ml-2" />
                          <span className="font-medium text-gray-700">
                            سرعت
                          </span>
                        </div>
                        <span className="font-bold text-gray-900">۹۸/۱۰۰</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
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
                        <span className="font-bold text-gray-900">۹۵/۱۰۰</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                          style={{ width: "95%" }}
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
                      <span className="text-gray-700">منابع اطلاعاتی</span>
                      <span className="font-medium text-gray-900">
                        {projectData.dataSources.join("، ")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">حداکثر رزولوشن</span>
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
                      <span className="text-gray-700">مشاوره‌های ثبت شده</span>
                      <span className="font-medium text-gray-900">
                        {projectData.consultationCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Philosophy */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-6">
                  فلسفه طراحی سایت وکالت
                </h3>
                <p className="text-blue-100 mb-6 text-lg">
                  طراحی الهام‌گرفته از مفاهیم حقوقی با ترکیبی از رنگ آبی (نماد اعتماد و ثبات) و مشکی، همراه با بهبود‌های مدرن در تجربه کاربری.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-blue-800 rounded-lg ml-4">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        طراحی بر پایه اعتماد
                      </h4>
                      <p className="text-blue-200">
                        تمرکز بر ایجاد حس اطمینان و حرفه‌ای‌گری برای مراجعین حقوقی
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-blue-800 rounded-lg ml-4">
                      <Palette className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        پالت رنگی حرفه‌ای
                      </h4>
                      <p className="text-blue-200">
                        استفاده از آبی (#1e40af) و مشکی با کنتراست مناسب برای حوزه حقوق
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-blue-800 rounded-lg ml-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        تحلیل عملکرد حقوقی
                      </h4>
                      <p className="text-blue-200">
                        ارائه آمار و گزارش‌های تحلیلی از پرونده‌ها و موفقیت‌ها
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-8">
                  <div className="text-center">
                    <AwardIcon className="w-16 h-16 text-white mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-4">
                      طراحی کاربرپسند و حرفه‌ای
                    </h4>
                    <p className="text-blue-200 mb-6">
                      رابط کاربری ساده و قدرتمند با تمرکز بر سهولت استفاده برای مراجعین حقوقی
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="text-xl font-bold mb-2">۹۷٪</div>
                        <div className="text-sm text-blue-300">
                          رضایت کاربران
                        </div>
                      </div>
                      <div className="bg-blue-800/50 p-4 rounded-lg">
                        <div className="text-xl font-bold mb-2">۵۰٪</div>
                        <div className="text-sm text-blue-300">
                          افزایش کارایی
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
              آماده تجربه پلتفرم حرفه‌ای وکالت؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              این پلتفرم با تکنولوژی‌های روز و طراحی حرفه‌ای، فضایی ایده‌آل برای ارائه خدمات حقوقی مدرن است.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={"/contact"}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
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