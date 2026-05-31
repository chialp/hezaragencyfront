import dynamic from "next/dynamic";

// کامپوننت را به صورت داینامیک ایمپورت کنید
const AboutSectionClient = dynamic(
  () => import("../../components/Home/AboutUsHome")
);
// داده‌های استاتیک
const contactMethods = [
  {
    id: 1,
    name: "اینستاگرام",
    role: " پروژه‌ها",
    bio: "آخرین پروژه‌ها و نمونه کارها",
    link: "https://instagram.com/hezaragency",
    image:"/icon/instagram.png",
    username: "@hezaragency"
  },
  {
    id: 2,
    name: "تلگرام",
    role: "کانال آموزشی",
    bio: "مقالات آموزشی و فرصت‌های همکاری",
    link: "https://t.me/hezaragency",
     image:"/icon/telegram.png",
    username: "@hezaragency"
  },
  {
    id: 3,
    name: "ایمیل",
    role: "ارتباط رسمی",
    bio: "درخواست‌های رسمی و پروپوزال",
    link: "mailto:info@hezaragency.com",
     image:"/icon/gmail.png",
    username: "info@hezaragency.com"
  }
];

const quickContacts = [

  {
    id: 5,
    name: "تلفن تماس",
    role: "پشتیبانی تخصصی",
    color: "from-blue-700 to-blue-800",
    link: "tel:+989910111132",
  },
  {
    id: 6,
    name: "آدرس دفتر",
    role: "مشاوره حضوری",
    color: "from-blue-800 to-blue-900",
    link: "https://www.google.com/maps/place/35%C2%B018'24.9%22N+46%C2%B058'59.0%22E/@35.3069051,46.9824133,19z/data=!3m1!4b1!4m4!3m3!8m2!3d35.306904!4d46.983057?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
  }
];

const tabs = [
  { id: "vision", label: "چشم‌انداز" },
  { id: "mission", label: "ماموریت" },
  { id: "values", label: "ارزش‌ها" }
];

const tabContent = {
  vision: {
    title: "چشم‌انداز ما",
    description: "تبدیل شدن به پیشروترین آژانس طراحی سایت در ایران با استفاده از جدیدترین تکنولوژی‌های سه‌بعدی و رابط کاربری پیشرفته.",
    features: [
      "اولین ارائه‌دهنده سایت‌های سه‌بعدی در ایران",
      "توسعه دهنده‌ی راهکارهای نوآورانه دیجیتال",
      "توسعه اکوسیستم دیجیتال کسب‌وکارها"
    ]
  },
  mission: {
    title: "ماموریت ما",
    description: "ارائه راهکارهای طراحی و توسعه جامع که نیازهای امروز کسب‌وکارها را برآورده و برای چالش‌های آینده آماده می‌کند.",
    features: [
      "طراحی سایت‌های واکنش‌گرا و مدرن",
      "پیاده‌سازی سیستم‌های مدیریت محتوا",
      "بهینه‌سازی سئو و تجربه کاربری"
    ]
  },
  values: {
    title: "ارزش‌های ما",
    description: "تعهد به کیفیت، شفافیت در ارتباطات، نوآوری مستمر، رضایت مشتری و اخلاق حرفه‌ای پایه‌های اصلی کار ما هستند.",
    features: [
      "کیفیت در اجرای پروژه‌ها",
      "شفافیت کامل در فرآیند کار",
      "پشتیبانی دائمی و رایگان"
    ]
  }
};



const ctaInfo = {
  whatsapp: "https://wa.me/+989910111132",
  phone: "tel:+989910111132",
  email: "mailto:info@hezaragency.com",
  address: "سنندج- تکیه و چمن ساختمان آرین واحد9"
};

export default function AboutSection() {
  return (
    <AboutSectionClient 
      contactMethods={contactMethods}
      quickContacts={quickContacts}
      tabs={tabs}
      tabContent={tabContent}
      ctaInfo={ctaInfo}
    />
  );
}