import Footer from "../components/FooterServer";
import Header from "../servercomponents/HeaderServer";
import HerosectionSeo from "./HerosectionSeo";
import ExampleCeo from "./ExampleCeo";

// ✅ metadata برای صفحه اصلی
export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hezaragency.com";
  const canonicalUrl = `${baseUrl}/seo`;

  const title = "سئو حرفه‌ای وبسایت | افزایش رتبه در گوگل - هەزار";
  const description =
    "خدمات حرفه‌ای سئو و بهینه‌سازی وبسایت برای افزایش رتبه سایت شما در گوگل توسط تیم هەزار";

  return {
    title, 
    description,

    // canonical
    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      type: "website",
      locale: "fa_IR",
      url: canonicalUrl,
      images: [
        {
          url: `${baseUrl}/images/og-seo.png`, // تصویر مناسب OG
          width: 1200,
          height: 630,
          alt: "سئو حرفه‌ای هەزار",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/og-seo.png`],
    },
  };
}
export default function Webpage() {
  return (
    <>
      <Header />
      <HerosectionSeo />
      <ExampleCeo />
      <Footer />
    </>
  );
}
