import HeaderServer from "./servercomponents/HeaderServer";
import MainServer from "./servercomponents/HomeServer/MainServer";
import About3d from "./servercomponents/HomeServer/3dAboutServer";
import Features from "./servercomponents/HomeServer/FeaturesServer";
import AboutUs from "./servercomponents/HomeServer/AboutUsHomeServer";
import HomeSlider from "./servercomponents/HomeServer/HomeSliderServer";
import FAQSection from "./servercomponents/HomeServer/FAQsectionServer";
import Footer from "./components/FooterServer";

const BASE_URL = "https://hezaragency.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: "هزار - آژانس طراحی سایت",
  description:
    "آژانس تخصصی طراحی سایت، توسعه و سئو با ارائه خدمات حرفه‌ای برای رشد کسب‌وکار شما",

  alternates: {
    canonical: BASE_URL, // ✅ full URL
  },

  openGraph: {
    title: "هزار - آژانس طراحی سایت",
    description:
      "آژانس تخصصی طراحی سایت، توسعه و سئو با ارائه خدمات حرفه‌ای برای رشد کسب‌وکار شما",
    type: "website",
    locale: "fa_IR",
    url: BASE_URL, // ✅ full URL
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`, // ✅ full URL
        width: 1200,
        height: 630,
        alt: "هزار - آژانس طراحی سایت",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: [`${BASE_URL}/og-image.jpg`], // ✅ full URL
  },
};

export default function Home() {
  return (
    <>
      <HeaderServer />
      <MainServer />
      <About3d />
      <Features />
      <AboutUs />
      <HomeSlider />
      <FAQSection />
      <Footer variant="default" />
    </>
  );
}

export const dynamic = "force-static";
