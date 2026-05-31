// components/PortfolioSection.js
"use client";
import { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  X, 
  ExternalLink,
  Github,
  Eye,
  Filter,
  ChevronDown
} from "lucide-react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("همه");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filters = ["همه", "وب‌سایت", "اپلیکیشن", "برندینگ", "سئو"];

  const projects = [
    {
      id: 1,
      title: "فروشگاه اینترنتی Nike",
      description: "طراحی و توسعه فروشگاه آنلاین مدرن با قابلیت‌های پیشرفته تجارت الکترونیک",
      category: "وب‌سایت",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
      images: [
        "/media/nike1.png",
        "/media/nike2.png",
        "/media/nike3.png"
      ],
      liveUrl: "https://nike-shop.com",
      githubUrl: "https://github.com/username/nike-shop",
      features: [
        "طراحی ریسپانسیو",
        "سیستم پرداخت امن",
        "بهینه‌سازی سئو",
        "سرعت بارگذاری بالا"
      ],
      stats: {
        duration: "3 ماه",
        budget: "۱۵۰ میلیون تومان",
        satisfaction: "۹۸٪"
      }
    },
    {
      id: 2,
      title: "اپلیکیشن مدیریت مالی",
      description: "اپلیکیشن موبایل برای مدیریت هوشمند دارایی‌ها و سرمایه‌گذاری",
      category: "اپلیکیشن",
      technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
      images: [
        "/media/finance1.png",
        "/media/finance2.png",
        "/media/finance3.png"
      ],
      liveUrl: "https://finance-app.com",
      githubUrl: "https://github.com/username/finance-app",
      features: [
        "مدیریت پرتفوی",
        "تحلیل بازار",
        "هشدار هوشمند",
        "گزارش‌گیری پیشرفته"
      ],
      stats: {
        duration: "4 ماه",
        budget: "۲۰۰ میلیون تومان",
        satisfaction: "۹۵٪"
      }
    },
    {
      id: 3,
      title: "برندینگ رستوران لاکچری",
      description: "طراحی هویت بصری کامل برای رستوران پنج ستاره با تمرکز بر تجربه کاربری",
      category: "برندینگ",
      technologies: ["Adobe Illustrator", "Photoshop", "Figma", "After Effects"],
      images: [
        "/media/brand1.png",
        "/media/brand2.png",
        "/media/brand3.png"
      ],
      liveUrl: "https://luxury-restaurant.com",
      features: [
        "لوگو و هویت بصری",
        "منو دیجیتال",
        "بسته‌بندی محصولات",
        "طراحی فضای داخلی"
      ],
      stats: {
        duration: "2 ماه",
        budget: "۸۰ میلیون تومان",
        satisfaction: "۱۰۰٪"
      }
    },
    {
      id: 4,
      title: "سئو و بهینه‌سازی سایت پزشکی",
      description: "بهینه‌سازی کامل سئو برای کلینیک تخصصی با افزایش ۳۰۰٪ی ترافیک ارگانیک",
      category: "سئو",
      technologies: ["SEO Audit", "Technical SEO", "Content Strategy", "Analytics"],
      images: [
        "/media/seo1.png",
        "/media/seo2.png",
        "/media/seo3.png"
      ],
      features: [
        "آزمایش فنی سئو",
        "استراتژی محتوا",
        "لینک‌سازی حرفه‌ای",
        "آنالیز رقبا"
      ],
      stats: {
        duration: "6 ماه",
        budget: "۱۲۰ میلیون تومان",
        satisfaction: "۹۲٪"
      }
    },
    {
      id: 5,
      title: "پورتال سازمانی بزرگ",
      description: "سیستم مدیریت محتوای سازمانی با قابلیت‌های پیشرفته و امنیت بالا",
      category: "وب‌سایت",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker"],
      images: [
        "/media/portal1.png",
        "/media/portal2.png",
        "/media/portal3.png"
      ],
      liveUrl: "https://company-portal.com",
      features: [
        "سیستم چندزبانه",
        "مدیریت کاربران",
        "گزارش‌گیری Real-time",
        "API پیشرفته"
      ],
      stats: {
        duration: "5 ماه",
        budget: "۲۵۰ میلیون تومان",
        satisfaction: "۹۷٪"
      }
    },
    {
      id: 6,
      title: "اپلیکیشن ورزشی",
      description: "اپلیکیشن جامع تناسب اندام با قابلیت‌های شخصی‌سازی شده",
      category: "اپلیکیشن",
      technologies: ["Flutter", "Dart", "Firebase", "Google Fit API"],
      images: [
        "/media/fitness1.png",
        "/media/fitness2.png",
        "/media/fitness3.png"
      ],
      liveUrl: "https://fitness-app.com",
      githubUrl: "https://github.com/username/fitness-app",
      features: [
        "ردیاب فعالیت",
        "برنامه تمرینی",
        "آنالیز تغذیه",
        "جامعه ورزشی"
      ],
      stats: {
        duration: "4 ماه",
        budget: "۱۸۰ میلیون تومان",
        satisfaction: "۹۴٪"
      }
    }
  ];

  const filteredProjects = activeFilter === "همه" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const nextSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    if (selectedProject) {
      setCurrentSlide(0);
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-[#fef7ed] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* هدر بخش */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white rounded-full text-[#1e40af] text-sm font-medium shadow-lg border border-[#1e40af]/10 mb-4">
            🎯 نمونه کارهای ما
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1e293b] mb-6">
            پروژه‌های <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] to-[#1e3a8a]">برجسته</span>
          </h2>
          <p className="text-lg lg:text-xl text-[#64748b] max-w-3xl mx-auto leading-relaxed">
            نمونه‌ای از پروژه‌های موفق ما که با خلاقیت و تخصص اجرا شده‌اند
          </p>
        </div>

        {/* فیلترها */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-[#64748b] hover:text-[#1e40af] shadow-md border border-gray-100 hover:border-[#1e40af]/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* گالری پروژه‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* تصویر پروژه */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* آبشاری تکنولوژی‌ها */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#1e40af] border border-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* دسته‌بندی */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#1e40af] text-white rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* آیکون مشاهده */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <Eye className="w-6 h-6 text-[#1e40af]" />
                  </div>
                </div>
              </div>

              {/* محتوای پروژه */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e293b] mb-3 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* آمارهای پروژه */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-xs text-[#64748b]">مدت زمان</div>
                    <div className="text-sm font-semibold text-[#1e40af]">{project.stats.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-[#64748b]">رضایت</div>
                    <div className="text-sm font-semibold text-[#1e40af]">{project.stats.satisfaction}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-[#64748b]">بودجه</div>
                    <div className="text-sm font-semibold text-[#1e40af]">{project.stats.budget}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* دکمه مشاهده بیشتر */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
            مشاهده تمام پروژه‌ها
          </button>
        </div>
      </div>

      {/* مودال نمایش پروژه */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* هدر مودال */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div>
                <h3 className="text-2xl font-bold text-[#1e293b]">{selectedProject.title}</h3>
                <p className="text-[#64748b] mt-1">{selectedProject.description}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-2xl flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-[#64748b]" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* اسلایدر تصاویر */}
              <div className="relative aspect-video bg-gray-100">
                <img
                  src={selectedProject.images[currentSlide]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                
                {/* کنترل‌های اسلایدر */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-all"
                >
                  <ArrowRight className="w-6 h-6 text-[#1e40af]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-all"
                >
                  <ArrowLeft className="w-6 h-6 text-[#1e40af]" />
                </button>

                {/* نشانگر اسلاید */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-[#1e40af] w-8"
                          : "bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* محتوای پروژه */}
              <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* اطلاعات اصلی */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#1e293b] mb-4">ویژگی‌های پروژه</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
                          <div className="w-2 h-2 bg-[#1e40af] rounded-full"></div>
                          <span className="text-[#64748b] text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#1e293b] mb-4">تکنولوژی‌های استفاده شده</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] text-white rounded-2xl text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* آمار و لینک‌ها */}
                <div className="space-y-6">
                  {/* آمار پروژه */}
                  <div className="bg-gradient-to-br from-[#fef7ed] to-white rounded-3xl p-6 shadow-lg border border-[#1e40af]/10">
                    <h4 className="text-lg font-semibold text-[#1e293b] mb-4">آمار پروژه</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[#64748b]">مدت زمان</span>
                        <span className="font-semibold text-[#1e40af]">{selectedProject.stats.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#64748b]">بودجه</span>
                        <span className="font-semibold text-[#1e40af]">{selectedProject.stats.budget}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#64748b]">رضایت مشتری</span>
                        <span className="font-semibold text-[#1e40af]">{selectedProject.stats.satisfaction}</span>
                      </div>
                    </div>
                  </div>

                  {/* لینک‌های پروژه */}
                  <div className="space-y-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] text-white rounded-2xl font-semibold hover:shadow-lg transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                        مشاهده پروژه زنده
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-2xl font-semibold hover:shadow-lg transition-all"
                      >
                        <Github className="w-5 h-5" />
                        مشاهده کد منبع
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}