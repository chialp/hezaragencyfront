// app/projects/imdb-demo/page.jsx
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
  Star,
  Heart,
  Film as FilmIcon,
  Award as AwardIcon,
  RefreshCw,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";
import Footer from "../../components/FooterServer";
import Header from "../../servercomponents/HeaderServer";
import Link from "next/link";

export async function generateMetadata() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://hezaragency.com";

  const canonicalUrl = `${baseUrl}/projects/imdb`;

  const title =
    "پروژه IMDB | طراحی و توسعه وب‌سایت اختصاصی مشابه IMDb";
  const description =
    "نمونه‌کار پروژه IMDB – طراحی و توسعه UI/UX واکنش‌گرا و بهینه یک وب‌سایت فیلم مشابه IMDb توسط تیم هەزار.";

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
          url: `${baseUrl}/projects/imdb/og-image.png`,
          width: 1200,
          height: 630,
          alt: "پروژه IMDB طراحی سایت فیلم توسط هەزار",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/projects/imdb/og-image.png`],
    },
  };
}


export default function ImdbDemoPage() {
  const projectData = {
    id: 3,
    title: "دموی وبسایت IMDB",
    tagline: "پلتفرم فیلم، سریال و رتبه‌بندی پیشرفته",
    description:
      "پلتفرم مخصوص سینما، فیلم و سریال با قابلیت به‌روز شدن اطلاعات بدون رفرش",
    media: "/media/demo/imdb.mp4",
    mediaType: "video",
    thumbnail: "/media/shot/imdb.webp",
    liveUrl: "#",
    performance: { speed: 90, accessibility: 86, seo: 100 },
    features: [
      "پنل لیست علاقه‌مندی‌های فیلم و بازیگر",
      "ورود با گیت‌هاب و گوگل",
      "ایجاد تغییرات بدون رفرش",
      "سیستم امتیازدهی و نظر سنجی",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
    ],
    accentColor: "#F5C518", // زرد IMDB
    pages: 25,
    hasAdminPanel: true,
    userTypes: ["کاربر عادی", "کاربر ویژه", "مدیر محتوا", "ادمین سیستم"],
    isModernDesign: true,
    isOptimized: true,
    dataSources: ["API های عمومی فیلم", "دیتابیس اختصاصی", "کاربران"],
    maxResolution: "4K UHD",
    storage: "ذخیره‌سازی ابری مقیاس‌پذیر",
    launched: "اسفند ۱۴۰۲",
    users: "۵۰۰۰+ کاربر فعال",
    ratingCount: "۱۰۰۰۰+ امتیاز ثبت شده",
  };

  const stats = [
    {
      label: "سرعت",
      value: "۹۰",
      unit: "/۱۰۰",
      icon: <Zap className="w-5 h-5" />,
      color: "text-yellow-600",
    },
    {
      label: "دسترسی‌پذیری",
      value: "۸۶",
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
      label: "کاربران فعال",
      value: "۵,۰۰۰",
      unit: "+",
      icon: <Users className="w-5 h-5" />,
      color: "text-red-600",
    },
  ];

  const coreFeatures = [
    {
      icon: <FilmIcon className="w-8 h-8" />,
      title: "پنل علاقه‌مندی‌ها",
      description:
        "سیستم پیشرفته مدیریت لیست‌های شخصی فیلم‌ها، سریال‌ها و بازیگران مورد علاقه",
      details: [
        "دسته‌بندی هوشمند",
        "جستجوی پیشرفته",
        "اشتراک‌گذاری لیست‌ها",
      ],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "سیستم امتیازدهی",
      description:
        "امکان امتیازدهی و نظر دادن برای هر فیلم و سریال با تحلیل هوشمند داده‌ها",
      details: ["امتیازدهی ۱ تا ۱۰ ستاره", "تحلیل آمار", "نظرات تایید شده"],
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "به‌روزرسانی زنده",
      description:
        "آپدیت اطلاعات و محتوا بدون نیاز به رفرش صفحه (Real-time Updates)",
      details: ["WebSocket ارتباط", "ایمیل/نوتیفیکیشن", "تغییرات لحظه‌ای"],
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "احراز هویت پیشرفته",
      description: "ورود امن با حساب‌های گیت‌هاب و گوگل با سیستم دسترسی چند سطحی",
      details: ["OAuth 2.0", "احراز دو مرحله‌ای", "پروفایل پیشرفته"],
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
          name: "PostgreSQL",
          description: "دیتابیس رابطه‌ای پیشرفته",
          icon: <Database className="w-5 h-5" />,
        },
        {
          name: "Prisma ORM",
          description: "مدیریت ایمن و آسان دیتابیس",
          icon: <Code className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "خدمات",
      technologies: [
        {
          name: "Cloudinary",
          description: "مدیریت و بهینه‌سازی تصاویر",
          icon: <Cloud className="w-5 h-5" />,
        },
        {
          name: "Socket.io",
          description: "ارتباط زنده و Real-time",
          icon: <Globe className="w-5 h-5" />,
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
    { icon: <Star className="w-5 h-5" />, text: "امتیازدهی به هزاران فیلم" },
    { icon: <Heart className="w-5 h-5" />, text: "لیست‌های علاقه‌مندی شخصی" },
    { icon: <Bell className="w-5 h-5" />, text: "اعلان‌های جدیدترین آثار" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "تحلیل روندهای سینمایی" },
    { icon: <MessageSquare className="w-5 h-5" />, text: "جامعه‌ی فعال کاربران" },
    { icon: <ThumbsUp className="w-5 h-5" />, text: "توصیه‌های هوشمند" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900 pt-[10rem]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-white via-yellow-50 to-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <FilmIcon className="w-4 h-4 ml-2" />
                  پلتفرم تخصصی فیلم و سریال
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
                  یک دموی پیشرفته و کاملاً کاربردی از وبسایت IMDB با قابلیت‌های
                  مدرن. این پلتفرم امکان کشف، امتیازدهی و مدیریت لیست‌های
                  علاقه‌مندی فیلم‌ها و سریال‌ها را به صورت Real-time فراهم می‌کند.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link
                    href={"/contact"}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg"
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
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl p-2 shadow-2xl">
                  <video
                    src={projectData.media}
                    poster={projectData.thumbnail}
                    controls
                    controlsList="nodownload noplaybackrate nofullscreen"
                    disablePictureInPicture
                    preload="metadata"
                    className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-2 h-64 md:h-80 w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-3 bg-yellow-100 rounded-lg ml-3">
                      <Star className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">۹۰</div>
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
                این دموی IMDB با تمرکز بر تجربه کاربری و عملکرد Real-time،
                امکانات کاملی را برای علاقه‌مندان به سینما ارائه می‌دهد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg inline-block mb-4">
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
                        <CheckCircle className="w-4 h-4 text-yellow-600 ml-2" />
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
                استفاده از مدرن‌ترین تکنولوژی‌ها برای ایجاد پلتفرمی سریع، ایمن و
                مقیاس‌پذیر
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
          <div className="mb-16 bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  مزایای استفاده از دموی IMDB
                </h2>
                <p className="text-gray-600 mb-8">
                  این پلتفرم با تمرکز بر تجربه کاربری سینمادوستان، امکانات
                  متعددی برای کشف، ارزیابی و سازماندهی محتوای سینمایی فراهم
                  می‌کند.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white p-4 rounded-lg border border-gray-200"
                    >
                      <div className="p-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg ml-4">
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
                      پشتیبانی از سطوح دسترسی مختلف با قابلیت‌های متنوع برای هر
                      نقش در سیستم
                    </p>
                  </div>

                  <div className="space-y-4">
                    {projectData.userTypes.map((type, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg"
                      >
                        <div className="flex items-center">
                          <UserCheck className="w-5 h-5 text-yellow-500 ml-3" />
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
                            : "کامل"}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <div className="flex items-center text-gray-400">
                      <ShieldCheck className="w-5 h-5 ml-3 text-yellow-500" />
                      <span className="text-sm">
                        سیستم امنیتی پیشرفته برای محافظت از داده‌های کاربران
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
                امتیازات عالی در تست‌های استاندارد نشان‌دهنده کیفیت بالای توسعه
                این پلتفرم است
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
                          <Zap className="w-5 h-5 text-yellow-600 ml-2" />
                          <span className="font-medium text-gray-700">
                            سرعت
                          </span>
                        </div>
                        <span className="font-bold text-gray-900">۹۰/۱۰۰</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                          style={{ width: "90%" }}
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
                        <span className="font-bold text-gray-900">۸۶/۱۰۰</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                          style={{ width: "86%" }}
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
                      <span className="text-gray-700">منابع داده</span>
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
                      <span className="text-gray-700">امتیازات ثبت شده</span>
                      <span className="font-medium text-gray-900">
                        {projectData.ratingCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Philosophy */}
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-6">
                  فلسفه طراحی دموی IMDB
                </h3>
                <p className="text-yellow-100 mb-6 text-lg">
                  طراحی الهام‌گرفته از برند اصلی IMDB با ترکیبی از زرد مشخصه و
                  مشکی، همراه با بهبود‌های مدرن در تجربه کاربری.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-yellow-800 rounded-lg ml-4">
                      <RefreshCw className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        به‌روزرسانی Real-time
                      </h4>
                      <p className="text-yellow-200">
                        نمایش تغییرات اطلاعات و تعاملات کاربران بدون نیاز به
                        رفرش صفحه
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-yellow-800 rounded-lg ml-4">
                      <Palette className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        پالت رنگی منحصربه‌فرد
                      </h4>
                      <p className="text-yellow-200">
                        استفاده از زرد (#F5C518) و مشکی برند IMDB با کنتراست عالی
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-yellow-800 rounded-lg ml-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        تحلیل داده پیشرفته
                      </h4>
                      <p className="text-yellow-200">
                        ارائه آمار و گراف‌های تعاملی از روندهای سینمایی و نظرات
                        کاربران
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-yellow-800 to-yellow-900 rounded-xl p-8">
                  <div className="text-center">
                    <AwardIcon className="w-16 h-16 text-white mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-4">
                      طراحی کاربرپسند و مدرن
                    </h4>
                    <p className="text-yellow-200 mb-6">
                      رابط کاربری ساده و قدرتمند با تمرکز بر محتوای سینمایی و
                      تعامل روان
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-yellow-800/50 p-4 rounded-lg">
                        <div className="text-xl font-bold mb-2">۹۲٪</div>
                        <div className="text-sm text-yellow-300">
                          رضایت کاربران
                        </div>
                      </div>
                      <div className="bg-yellow-800/50 p-4 rounded-lg">
                        <div className="text-xl font-bold mb-2">۶۰٪</div>
                        <div className="text-sm text-yellow-300">
                          افزایش تعامل
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
              آماده تجربه پلتفرم پیشرفته فیلم و سریال؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              این دموی IMDB با تکنولوژی‌های روز و طراحی کاربرپسند، فضایی ایده‌آل
              برای تست قابلیت‌های یک پلتفرم کامل سینمایی است.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={"/contact"}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg"
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