import dynamic from "next/dynamic";

// کامپوننت را به صورت داینامیک ایمپورت کنید
const TeamCarouselClient = dynamic(() =>
  import("../../components/Home/Slider")
);
// داده‌های استاتیک
const teamMembers = [
  {
    id: 2,
    name: "چیاکو فرهادی",
    position: "برنامه نویس فول استک",
    image: "/media/lp.webp",
    description:
      "توسعه دهنده ارشد وبسایت با بیش پنج سال سابقه کاری و تجربه طراحی و توسعه وبسایت های سه بعدی ",
    email: "chialp1337@gmail.com",
    github: "chialp",
    experience: "5 سال تجربه",
    projects: "20+",
    skills: ["DevOps", "backend", "frontend", "threejs"],
  },
  {
    id: 4,
    name: "رامین ناصری",
    position: "متخصص سئو",
    image: "/media/ramin.webp",
    description: "متخصص سئو با 3 سال سابقه کاری و تجربه بهبود پرفورمنس سایت",
    email: "raminnaseri@gmail.com",
    github: "ramin-naseri",
    experience: "3 سال تجربه",
    projects: "10+",
    skills: ["site performance", "seo"],
  },
  {
    id: 5,
    name: "مبین ضروری",
    position: "توسعه دهنده سایت ",
    image: "/media/mobin.webp",
    description: "مسئول طراحی وتوسعه ی سایت های وردپرسی.",
    email: "emergency@gamil.com",
    github: "emergency",
    experience: "3 سال تجربه",
    projects: "8+",
    rating: "4.9",
    skills: ["wordpress","frontend"],
  },
];

const headerInfo = {
  we: " تیم متخصص هزار",
  title: "با تیم هزار آشنا شوید",
  subtitle: "تیمی متشکل از متخصصان با تجربه در زمینه طراحی و توسعه ی وبسیات",
  gradientColors: "from-blue-600 to-indigo-600",
};

export default function TeamCarousel() {
  return (
    <TeamCarouselClient teamMembers={teamMembers} headerInfo={headerInfo} />
  );
}
