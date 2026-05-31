// components/agency/AgencyStaticContent.jsx
import {
  Code,
  Palette,
  Layers,
  Shield,
  Rocket,
  Users,
} from "lucide-react";

export default function AgencyStaticContent({ lang }) {
  // ترجمه‌های مختلف
  const translations = {
    fa: {
      title: "نوآوری دیجیتال",
      subtitle: "آژانس توسعه وب",
      shortDescription: "خلاقیت و تکنولوژی برای موفقیت شما",
      fullDescription:
        "ما با ترکیب تکنولوژی‌های پیشرفته و خلاقیت بی‌نهایت، برند شما را در دنیای دیجیتال متمایز می‌کنیم.",
      projects: "پروژه",
      clients: "مشتری",
      viewServices: "خدمات",
      requestConsultation: "مشاوره",
      technologies: "تکنولوژی‌ها",
      features: [
        {
          icon: Code,
          title: "توسعه وب",
          shortDescription: "سایت‌های مدرن",
        },
        {
          icon: Palette,
          title: "طراحی UI/UX",
          shortDescription: "تجربه کاربری",
        },
        {
          icon: Layers,
          title: "راه‌حل جامع",
          shortDescription: "ایده تا اجرا",
        },
        {
          icon: Shield,
          title: "امنیت",
          shortDescription: "پایداری کامل",
        },
      ],
      techStack: ["React", "Next.js", "TS", "Node.js", "MongoDB", "AWS"],
    },
    en: {
      title: "Digital Innovation",
      subtitle: "Web Agency",
      shortDescription: "Creativity & Technology for Your Success",
      fullDescription:
        "We combine advanced technologies and unlimited creativity to distinguish your brand.",
      projects: "Projects",
      clients: "Clients",
      viewServices: "Services",
      requestConsultation: "Consultation",
      technologies: "Technologies",
      features: [
        {
          icon: Code,
          title: "Web Dev",
          shortDescription: "Modern Sites",
        },
        {
          icon: Palette,
          title: "UI/UX Design",
          shortDescription: "User Experience",
        },
        {
          icon: Layers,
          title: "Full Solution",
          shortDescription: "Idea to Launch",
        },
        {
          icon: Shield,
          title: "Security",
          shortDescription: "Full Stability",
        },
      ],
      techStack: ["React", "Next.js", "TS", "Node.js", "MongoDB", "AWS"],
    },
    ku: {
      title: "نوێکاری دیجیتاڵی",
      subtitle: "ئاژانسی وێب",
      shortDescription: "داهێنان و تەکنەلۆژیا بۆ سەرکەوتنی تۆ",
      fullDescription:
        "ئێمە تەکنەلۆجیای پێشکەوتوو و خەڵکێنێکی بێسنوور تێکەڵ دەکەین.",
      projects: "پرۆژە",
      clients: "کڕیار",
      viewServices: "خزمەتگوزاری",
      requestConsultation: "ڕاوێژکاری",
      technologies: "تەکنەلۆژیا",
      features: [
        {
          icon: Code,
          title: "پەرەپێدانی وێب",
          shortDescription: "ماڵپەڕی مۆدێرن",
        },
        {
          icon: Palette,
          title: "دیزاینی UI/UX",
          shortDescription: "ئەزموونی بەکارهێنەر",
        },
        {
          icon: Layers,
          title: "چارەسەری گشتگیر",
          shortDescription: "بیرۆکە بۆ جێبەجێکردن",
        },
        {
          icon: Shield,
          title: "ئاسایش",
          shortDescription: "جێگیری تەواو",
        },
      ],
      techStack: ["React", "Next.js", "TS", "Node.js", "MongoDB", "AWS"],
    },
  };

  const t = translations[lang] || translations.fa;

  return (
    <div className="absolute inset-0 z-20">
      <div className="absolute inset-0 flex items-center justify-center pt-12 md:pt-0">
        <div className="w-full max-w-3xl px-4">
          <div className="text-center space-y-6">
            {/* تیتر اصلی */}
            <div className="space-y-2">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  طراحی و توسعه ی وبسایت سه بعدی
                </span>
              </h1>

              {/* توضیحات */}
              <h2 className="text-gray-200  text-sm leading-relaxed max-w-xl mx-auto">
                آژانس طراحی سایت با تمرکز بر سرعت، کیفیت و کسب بالاترین امتیاز
                سئو. ارائه خدمات طراحی وبسایت سه‌بعدی مدرن.
              </h2>
            </div>

            {/* دکمه مشاوره */}
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white font-bold text-base hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              درخواست مشاوره رایگان
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
