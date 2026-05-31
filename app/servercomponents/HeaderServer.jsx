import React from "react";
import HeaderClient from "../components/Header";

const Header = ({ articleSlugs = null }) => {
  const defaultTranslations = {
    home: "خانه",
    articles: "مقالات",
    products: "محصولات",
    about: "درباره ما",
    contact: "تماس با ما",
    freeConsultation: "ورود به قسمت سه بعدی",
    blog: "بلاگ",
    services: "خدمات",
    portfolio: "نمونه کارها",
  };

  // اصلاح آیکون‌های خدمات (serverProducts)
  const serverProducts = [
    {
      id: 1,
      href: `/web`,
      label: "طراحی سایت",
      iconType: "Layout", // آیکون لایه بندی
      description: "طراحی سایت اختصاصی ",
    },
    {
      id: 2,
      href: `/3d`,
      label: "طراحی سایت سه‌بعدی",
      iconType: "Rotate3d", // آیکون چرخش سه بعدی
      description: "تجربه تعاملی سه‌بعدی",
      special: true,
    },
    {
      id: 3,
      href: `/seo`,
      label: "سئو و بهینه‌سازی",
      iconType: "TrendingUp", // آیکون رشد و صعود
      description: "رتبه اول در گوگل",
    },
    {
      id: 4,
      href: `/support`,
      label: "پشتیبانی سایت",
      iconType: "Users", // آیکون تیم و کاربران
      description: "پشتیبانی 24/7",
    },
  ];

  // اصلاح آیکون‌های پروژه‌ها (serverProjects) بر اساس ماهیت بیزینس
  const serverProjects = [
    {
      id: "projectdarktube",
      href: `/projects/darktube`,
      label: "سایت پلتفرم پخش ویدیو",
      iconType: "Play", // تغییر به آیکون پخش
      description: "پلتفرم اشتراک دمو و تریلر در تمام زمینه‌ها",
    },
    {
      id: "projectlawyer",
      href: `/projects/lawyer`,
      label: "سایت وکالت",
      iconType: "Sparkles", // یا آیکون ترازوی عدالت (در صورت وجود) - فعلاً از Sparkles برای جنبه حرفه‌ای استفاده شد
      description: "طراحی و توسعه وبسایت وکالت",
    },
    {
      id: "project2",
      href: `/projects/imdb`,
      label: "سایت IMDB",
      iconType: "Smartphone", // تغییر به Smartphone برای نمایش ریسپانسیو عالی
      description: "پلتفرم مخصوص سینما فیلم و سریال با آپدیت آنی",
    },
    {
      id: "projectlema",
      href: `/projects/lema`,
      label: "سایت قهوه",
      iconType: "Package", // آیکون پکیج و محصول
      description: "سایت فروش آنلاین قهوه با پنل کاملا اختصاصی",
    },
    {
      id: "projectnike",
      href: `/projects/nike`,
      label: "سایت فروشگاه کفش",
      iconType: "Palette", // آیکون پلت برای طراحی و دیزاین کفش
      description: "فروشگاه اختصاصی کفش با درگاه پرداخت بین‌المللی",
    },
  ];

  const navItems = [
    { href: `/`, label: defaultTranslations.home },
    { href: `/articles`, label: defaultTranslations.articles },
    { href: `/aboutus`, label: defaultTranslations.about },
    { href: `/contact`, label: defaultTranslations.contact },
  ];

  return (
    <HeaderClient
      articleSlugs={articleSlugs}
      serverProducts={serverProducts}
      serverProjects={serverProjects}
      navItems={navItems}
      ctaInfo={{
        buttonText: defaultTranslations.freeConsultation,
      }}
    />
  );
};

export default Header;