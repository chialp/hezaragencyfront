// app/projects/dark-tube/page.jsx
import {
  Video,
  PlayCircle,
  Upload,

  Lock,
  UserCheck,
  Film,
  Monitor,
  Cloud,
  Headphones,
  Zap,
  BarChart3,
  Award,
  CheckCircle,
  Users,
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
} from "lucide-react";
import Footer from "../../components/FooterServer";
import Header from "../../servercomponents/HeaderServer";
import Link from "next/link";

export async function generateMetadata() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://hezaragency.com";

  const canonicalUrl = `${baseUrl}/projects/darktube`;

  const title = "پروژه Darktube | طراحی و توسعه حرفه‌ای توسط هەزار";
  const description =
    "نمونه پروژه طراحی و توسعه Darktube – طراحی UI/UX حرفه‌ای، واکنش‌گرا و بهینه توسط تیم هەزار";

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
          url: `${baseUrl}/projects/darktube/og-image.png`,
          width: 1200,
          height: 630,
          alt: "پروژه Darktube توسط هەزار",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/projects/darktube/og-image.png`],
    },
  };
}

export default function DarkTubePage() {
  const projectData = {
    id: 5,
    title: "Dark Tube",
    tagline: "پلتفرم تخصصی اشتراک دمو و تریلر",
    description: "سیستم مدرن اشتراک ویدیو در تمام زمینه‌ها با طراحی اختصاصی",
    media: "/media/demo/darktube.mp4",
    mediaType: "video",
    thumbnail: "/media/shot/darktube.webp",
    liveUrl: "#",
    performance: { speed: 98, accessibility: 96, seo: 100 },
    features: [
      "طرح کاملا اختصاصی",
      "احراز هویت پیشرفته",
      "دسترسی آسان",
      "سیستم حرفه‌ای پخش ویدیو",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "MongoDB",
      "FFmpeg",
    ],
    accentColor: "#000000",
    pages: 20,
    hasAdminPanel: true,
    userTypes: ["کاربر عادی", "آپلودکننده", "مدیر سیستم"],
    isModernDesign: true,
    isOptimized: true,
    videoFormats: ["MP4", "WebM", "MOV"],
    maxResolution: "4K UHD",
    storage: "فضای ابری نامحدود",
    launched: "دی ۱۴۰۲",
    users: "۱۰۰۰+ کاربر فعال",
  };

  const stats = [
    {
      label: "سرعت",
      value: "۹۸",
      unit: "/۱۰۰",
      icon: <Zap className="w-5 h-5" />,
      color: "text-emerald-600",
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
      label: "کاربران فعال",
      value: "۱,۰۰۰",
      unit: "+",
      icon: <Users className="w-5 h-5" />,
      color: "text-red-600",
    },
  ];

  const coreFeatures = [
    {
      icon: <Film className="w-8 h-8" />,
      title: "پلتفرم تخصصی",
      description:
        "سکویی اختصاصی برای آپلود، مدیریت و اشتراک دمو و تریلرهای تخصصی",
      details: [
        "پشتیبانی از تمام فرمت‌ها",
        "پردازش خودکار ویدیو",
        "مدیریت دسته‌بندی‌ها",
      ],
    },
    {
      icon: <PlayCircle className="w-8 h-8" />,
      title: "پخش حرفه‌ای",
      description:
        "پخش‌کننده ویدیویی بهینه شده با قابلیت پخش کیفیت‌های مختلف تا 4K",
      details: ["پخش زنده", "کنترل پیشرفته", "پشتیبانی از زیرنویس"],
    },
    {
      icon: <Upload className="w-8 h-8" />,
      title: "آپلود هوشمند",
      description: "سیستم آپلود هوشمند با پردازش خودکار و ایجاد تامبنیل",
      details: ["آپلود دسته‌ای", "فشرده‌سازی خودکار", "کنترل کیفیت"],
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "امنیت بالا",
      description: "سیستم امنیتی پیشرفته برای محافظت از محتوای ویدیویی",
      details: ["احراز هویت دو عاملی", "کنترل دسترسی", "رمزنگاری end-to-end"],
    },
  ];

  const technologyDetails = [
    {
      category: "Frontend",
      technologies: [
        {
          name: "Next.js 14",
          description: "رندرینگ سمت سرور و بهینه‌سازی سئو",
          icon: <Server className="w-5 h-5" />,
        },
        {
          name: "TypeScript",
          description: "نوع‌دهی امن و کدنویسی تمیز",
          icon: <Type className="w-5 h-5" />,
        },
        {
          name: "Tailwind CSS",
          description: "استایل‌دهی سریع و واکنشگرا",
          icon: <Palette className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "Backend",
      technologies: [
        {
          name: "Node.js",
          description: "پردازش سنگین ویدیو و عملیات بک‌اند",
          icon: <Cpu className="w-5 h-5" />,
        },
        {
          name: "MongoDB",
          description: "ذخیره‌سازی مقیاس‌پذیر داده‌ها",
          icon: <Database className="w-5 h-5" />,
        },
        {
          name: "FFmpeg",
          description: "پردازش و بهینه‌سازی ویدیوها",
          icon: <Video className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "Infrastructure",
      technologies: [
        {
          name: "Cloud Storage",
          description: "ذخیره‌سازی ابری نامحدود",
          icon: <Cloud className="w-5 h-5" />,
        },
        {
          name: "CDN",
          description: "توزیع محتوای جهانی",
          icon: <Globe className="w-5 h-5" />,
        },
        {
          name: "Redis",
          description: "کشینگ و افزایش عملکرد",
          icon: <Sparkles className="w-5 h-5" />,
        },
      ],
    },
  ];

  const userBenefits = [
    { icon: <Download className="w-5 h-5" />, text: "دانلود با سرعت بالا" },
    { icon: <Bell className="w-5 h-5" />, text: "اعلان‌های هوشمند" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "تحلیل پیشرفته آمار" },
    { icon: <Settings className="w-5 h-5" />, text: "تنظیمات شخصی‌سازی" },
    { icon: <Layers className="w-5 h-5" />, text: "پنل مدیریت چندسطحی" },
    { icon: <Headphones className="w-5 h-5" />, text: "پشتیبانی ۲۴/۷" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900 pt-[10rem]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Video className="w-4 h-4 ml-2" />
                  پلتفرم تخصصی ویدیو
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
                  Dark Tube یک پلتفرم تخصصی و منحصر به فرد برای اشتراک دمو و
                  تریلر در تمام زمینه‌ها است. طراحی کاملاً اختصاصی و تم مدرن این
                  پلتفرم، تجربه تماشای ویدیو را متحول کرده است.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link
                    href={"/contact"}
                    className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
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
                <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-2 shadow-2xl">
                  <video
                    src="/media/demo/darktube.mp4"
                    poster="/media/shot/darktube.webp"
                    controls
                    controlsList="nodownload noplaybackrate nofullscreen"
                    disablePictureInPicture
                    preload="metadata"
                    className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-2 h-64 md:h-80 w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-3 bg-emerald-100 rounded-lg ml-3">
                      <Zap className="w-6 h-6 text-emerald-600" />
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
                Dark Tube با ترکیبی از تکنولوژی‌های پیشرفته و طراحی کاربرپسند،
                تجربه بی‌نظیری از اشتراک ویدیو ارائه می‌دهد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-black rounded-lg inline-block mb-4">
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
                        <CheckCircle className="w-4 h-4 text-emerald-600 ml-2" />
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
                استفاده از بروزترین تکنولوژی‌ها برای ایجاد پلتفرمی مقیاس‌پذیر و
                با عملکرد عالی
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
          <div className="mb-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  مزایای استفاده از Dark Tube
                </h2>
                <p className="text-gray-600 mb-8">
                  این پلتفرم با تمرکز بر تجربه کاربری و عملکرد فنی، مزایای
                  متعددی برای کاربران و مدیران سیستم فراهم می‌کند.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white p-4 rounded-lg border border-gray-200"
                    >
                      <div className="p-2 bg-black rounded-lg ml-4">
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <span className="text-gray-800">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8">
                  <div className="text-white mb-6">
                    <h3 className="text-2xl font-bold mb-4">
                      سیستم چندکاربره پیشرفته
                    </h3>
                    <p className="text-gray-300 mb-6">
                      پشتیبانی از سطوح دسترسی مختلف با قابلیت‌های منحصر به فرد
                      برای هر نقش در سیستم
                    </p>
                  </div>

                  <div className="space-y-4">
                    {projectData.userTypes.map((type, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg"
                      >
                        <div className="flex items-center">
                          <UserCheck className="w-5 h-5 text-gray-400 ml-3" />
                          <span className="text-white">{type}</span>
                        </div>
                        <div className="text-gray-400 text-sm">
                          دسترسی{" "}
                          {index === 0
                            ? "محدود"
                            : index === 1
                            ? "متوسط"
                            : "کامل"}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <div className="flex items-center text-gray-400">
                      <ShieldCheck className="w-5 h-5 ml-3" />
                      <span className="text-sm">
                        سیستم امنیتی چندلایه و کنترل دسترسی پیشرفته
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
                امتیازات عالی در تست‌های استاندارد صنعت نشان‌دهنده کیفیت بالای
                توسعه این پلتفرم است
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
                          <Zap className="w-5 h-5 text-emerald-600 ml-2" />
                          <span className="font-medium text-gray-700">
                            سرعت
                          </span>
                        </div>
                        <span className="font-bold text-gray-900">۹۸/۱۰۰</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
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
                          <Award className="w-5 h-5 text-purple-600 ml-2" />
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
                      <span className="text-gray-700">فرمت‌های پشتیبانی</span>
                      <span className="font-medium text-gray-900">
                        {projectData.videoFormats.join(", ")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">حداکثر رزولوشن</span>
                      <span className="font-medium text-gray-900">
                        {projectData.maxResolution}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">فضای ذخیره‌سازی</span>
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
                      <span className="text-gray-700">زمان راه‌اندازی</span>
                      <span className="font-medium text-gray-900">
                        {projectData.launched}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Philosophy */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-6">
                  فلسفه طراحی Dark Tube
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  طراحی مدرن و مینیمال Dark Tube با تمرکز بر تجربه کاربری
                  بی‌نظیر، این پلتفرم را از سایر رقبا متمایز کرده است.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-gray-800 rounded-lg ml-4">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        واکنشگرایی کامل
                      </h4>
                      <p className="text-gray-400">
                        تجربه یکسان و بی‌نظیر در تمام دستگاه‌ها از موبایل تا
                        دسکتاپ
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-gray-800 rounded-lg ml-4">
                      <Palette className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">پالت رنگی مدرن</h4>
                      <p className="text-gray-400">
                        ترکیب سیاه و سفید با تأکید بر قرمز برای ایجاد کنتراست
                        مناسب
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-gray-800 rounded-lg ml-4">
                      <Settings className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">کاربری آسان</h4>
                      <p className="text-gray-400">
                        رابط کاربری ساده و روان برای کاربران در تمام سطوح
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8">
                  <div className="text-center">
                    <Monitor className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-4">
                      طراحی مینیمال و کاربرپسند
                    </h4>
                    <p className="text-gray-400 mb-6">
                      تمرکز بر محتوا و حذف عناصر اضافی برای ایجاد تجربه تماشای
                      بی‌نظیر
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="text-xl font-bold mb-2">۹۵٪</div>
                        <div className="text-sm text-gray-400">
                          رضایت کاربران
                        </div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="text-xl font-bold mb-2">۴۰٪</div>
                        <div className="text-sm text-gray-400">
                          کاهش زمان یادگیری
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
              آماده تغییر تجربه اشتراک ویدیو؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Dark Tube با ترکیب تکنولوژی‌های پیشرفته و طراحی مدرن، استانداردهای
              جدیدی در زمینه پلتفرم‌های ویدیویی تعریف کرده است.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={"/contact"}
                className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
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
