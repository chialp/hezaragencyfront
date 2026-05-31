import React from "react";
import Footer from "../components/FooterServer";
import Header from "../servercomponents/HeaderServer";
import HomeSliderServer from "../servercomponents/HomeServer/HomeSliderServer";
import dynamic from "next/dynamic";
const AboutHeroSection = dynamic(() => import("./serverabout/Heroaboutserver"));
const OurStorySection = dynamic(() => import("./OurStorySection"));

export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hezaragency.com";

  // ✅ canonical برای صفحه اصلی
  const canonicalUrl = `${baseUrl}/aboutus`;

  const titles = "هەزار - درباره ی ما  ";

  const descriptions = "داستان شروع آژانس هەزار";
  return {
    title: titles,
    description: descriptions,

    // ✅ canonical تعریف شده
    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: titles,
      description: descriptions,
      type: "website",
      sitename: "آژانس هەزار",
      locale: "fa",
      url: canonicalUrl,
    },
  };
}

/* ------------------ Server Component ------------------ */
const ContactServer = () => {
  return (
    <>
      <Header />
      <AboutHeroSection />
      <OurStorySection />
      <Footer />
    </>
  );
};

export default ContactServer;
