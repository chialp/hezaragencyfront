// app/support/page.jsx
import dynamic from "next/dynamic";
import HeaderServer from "../servercomponents/HeaderServer";
import Footer from "../components/FooterServer";

// Lazy load components
const HeroSupport = dynamic(() => import("./HeroSupport"));
const DashboardShowcase = dynamic(() => import("./DashboardShowcase"));
const SupportServices = dynamic(() => import("./SupportServices"));

export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hezaragency.com";
  const canonicalUrl = `${baseUrl}/support`;

  return {
    title: "پشتیبانی و خدمات حرفه‌ای | هەزار",
    description:
      "خدمات پشتیبانی و راهنمایی تخصصی سایت‌ها و محصولات دیجیتال توسط تیم هەزار",

    // canonical URL
    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: "پشتیبانی و خدمات حرفه‌ای | هەزار",
      description:
        "خدمات پشتیبانی و راهنمایی تخصصی سایت‌ها و محصولات دیجیتال توسط تیم هەزار",
      type: "website",
      locale: "fa_IR",
      url: canonicalUrl,
      images: [
        {
          url: `${baseUrl}/images/og-support.png`, // تصویر مناسب OG
          width: 1200,
          height: 630,
          alt: "پشتیبانی حرفه‌ای هەزار",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "پشتیبانی و خدمات حرفه‌ای | هەزار",
      description:
        "خدمات پشتیبانی و راهنمایی تخصصی سایت‌ها و محصولات دیجیتال توسط تیم هەزار",
      images: [`${baseUrl}/images/og-support.png`],
    },
  };
}

export default async function SupportPage() {
  return (
    <>
      <HeaderServer />
      <HeroSupport />
      <DashboardShowcase />
      <SupportServices />
      <Footer />
    </>
  );
}
