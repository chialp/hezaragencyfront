// app/agency/page.jsx

import AgencyContent from "./AgencyContent";
import Agency3DClient from "./Agency3DClient";

export const metadata = {
  title: "طراحی سایت سه‌بعدی | آژانس طراحی و توسعه وب هزار",
  description:
    "آژانس هزار با طراحی سایت‌های سه‌بعدی مدرن و تعاملی، تجربه‌ای متفاوت برای برند شما خلق می‌کند. توسعه وب با Three.js، Next.js و تکنولوژی‌های روز دنیا.",
  keywords: [
    "طراحی سایت سه بعدی",
    "طراحی وب سه بعدی",
    "سایت 3D",
    "آژانس دیجیتال مارکتینگ",
    "طراحی سایت مدرن",
    "طراحی سایت با Three.js",
    "توسعه وب پیشرفته",
    "آژانس هزار"
  ],
  alternates: {
    canonical: "https://hezaragency.com/3d",
  },
  openGraph: {
    title: "طراحی سایت سه‌بعدی | آژانس هزار",
    description:
      "طراحی و توسعه وب‌سایت‌های سه‌بعدی تعاملی با جدیدترین تکنولوژی‌ها. برند خود را متفاوت بسازید.",
    url: "https://hezaragency.com/3d",
    siteName: "Hezar Agency",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "طراحی سایت سه‌بعدی | آژانس هزار",
    description:
      "تجربه‌ای متفاوت در طراحی سایت‌های سه‌بعدی و تعاملی با تکنولوژی‌های مدرن.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AgencyPage() {
  return (
    <>
      <AgencyContent />
      <Agency3DClient />
    </>
  );
}