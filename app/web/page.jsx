// app/web/page.jsx
import HeaderServer from "../servercomponents/HeaderServer";
import ExampleWeb from "./ExampleWeb";
import HeroSectionWeb from "./serverweb/HeroSectionWeb";
import PriceWeb from "./PriceWeb";
import WebArticle from "./WebArticle";
import Footer from "../components/FooterServer";

// ✅ metadata برای صفحه web
export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hezaragency.com";
  const canonicalUrl = `${baseUrl}/web`;
  const ogImage = `${baseUrl}/images/og-web.png`; // تصویر مناسب OG

  return {
    title: "طراحی سایت حرفه‌ای | هەزار",
    description: "طراحی سایت حرفه‌ای با جدیدترین تکنولوژی‌ها توسط آژانس هەزار",
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: "طراحی سایت حرفه‌ای | هەزار",
      description:
        "طراحی سایت حرفه‌ای با جدیدترین تکنولوژی‌ها توسط آژانس هەزار",
      type: "website",
      locale: "fa_IR",
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "طراحی سایت حرفه‌ای هەزار",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "طراحی سایت حرفه‌ای | هەزار",
      description:
        "طراحی سایت حرفه‌ای با جدیدترین تکنولوژی‌ها توسط آژانس هەزار",
      images: [ogImage],
    },
  };
}
export default function Webpage() {
  return (
    <>
      <HeaderServer  />
      <HeroSectionWeb  />
      <ExampleWeb
        key="example-web-component"
      />
      <PriceWeb  />
      {/* <WebArticle translations={translations} /> */}
      <Footer  />
    </>
  );
}
