import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Eye,
  Trophy,
  Briefcase,
  Sparkles,
  Target,
  Play,
  Gavel,
  Coffee,
  ShoppingBag,
  Clapperboard,
} from "lucide-react";
import Image from "next/image";

export default async function LuxuryPortfolioShowcase() {
  const portfolioItems = [
    {
      id: "project-1",
      title: "وبسایت وکالت",
      href: "/projects/lawyer",
      description:
        "توسعه وبسایت وکالت جناب مهران محمدی با استفاده از بروز ترین تکنولوژی های روز و قابلیت چند زبانه",
      image: "/media/shot/mehran.webp",
      performance: { speed: 98, accessibility: 95, seo: 100 },
      features: ["واقعیت افزوده", "پرداخت امن", "مدیریت هوشمند"],
      technologies: ["Next.js 14", "TypeScript", "Tailwind", "Prisma"],
      accentColor: "#1e40af",
    },
    {
      id: "project-2",
      title: "وبسایت فروشگاه قهوه",
      href: "/projects/lema",
      description:
        "توسعه فروشگاه تخصصی قهوه با قابلیت سفارش آنلاین و سیستم مدیریت انبار",
      image: "/media/shot/lema.webp",
      performance: { speed: 95, accessibility: 92, seo: 98 },
      features: ["سفارش آنلاین", "سیستم انبارداری", "پنل مدیریت"],
      technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
      accentColor: "#8B4513",
    },
    {
      id: "project-3",
      title: "دموی وبسایت IMDB",
      href: "/projects/imdb",
      description:
        "پلتفرم مخصوص سینما فیلم و سریال و رتبه بندی با قابلیت به روز شدن اطلاعات بدون رفرش",
      image: "/media/shot/imdb.webp",
      performance: { speed: 90, accessibility: 86, seo: 100 },
      features: ["ورود با گیت‌هاب", "تغییرات بدون رفرش", "سیستم امتیازدهی"],
      technologies: ["Next.js 14", "Socket.io", "Tailwind CSS", "Node.js"],
      accentColor: "#F5C518",
    },
    {
      id: "project-4",
      title: "فروشگاه Nike",
      href: "/projects/nike",
      description:
        "فروشگاه اختصاصی فروش کفش با قابلیت سرچ حرفه ای و درگاه پرداخت بین المللی",
      image: "/media/shot/nike.webp",
      performance: { speed: 98, accessibility: 96, seo: 100 },
      features: ["انبارداری", "پرداخت امن", "جستجوی پیشرفته"],
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      accentColor: "#ef4444",
    },
    {
      id: "project-5",
      title: "Dark Tube",
      href: "/projects/darktube",
      description:
        "پلتفرم اشتراک ویدیو با قابلیت احراز هویت پیشرفته و داشبورد اختصاصی کاربر",
      image: "/media/shot/darktube.webp",
      performance: { speed: 90, accessibility: 88, seo: 100 },
      features: ["احراز هویت", "اشتراک ویدیو", "داشبورد کاربر"],
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      accentColor: "#000000",
    },
  ];

  if (portfolioItems.length === 0) {
    return (
      <div className="relative min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-900">
            در حال بارگذاری پروژه‌ها...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            نمونه کارهای طراحی و توسعه سایت
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            هر پروژه داستان موفقیت، خلاقیت و فناوری است
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {portfolioItems.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl border border-blue-100 overflow-hidden hover:shadow-2xl transition-all duration-500 shadow-xl"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-800" />

              {/* Project Image with Link */}
              <Link
                href={project.href}
                className="block relative h-64 md:h-72 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority={false} // lazy load پیش‌فرض
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                {/* Project Badge */}
                <div className="absolute bottom-4 left-4">
                  <span
                    style={{ backgroundColor: project.accentColor }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold shadow-lg"
                  >
                    {index + 1}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Object.entries(project.performance).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-blue-50/50 rounded-xl p-3 border border-blue-100 text-center"
                    >
                      <div className="text-xs text-blue-700 font-medium mb-1">
                        {key === "speed" && "سرعت"}
                        {key === "accessibility" && "دسترسی"}
                        {key === "seo" && "سئو"}
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {value}%
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Final Action Link */}
                <div className="pt-6 border-t border-gray-100">
                  <Link
                    href={project.href}
                    className="group/btn flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200"
                  >
                    <Eye size={20} />
                    <span>مشاهده جزئیات پروژه</span>
                    <ArrowUpRight
                      size={18}
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}
