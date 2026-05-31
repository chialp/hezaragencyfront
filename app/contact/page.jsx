import React from "react";
import MainAbout from "./clientcontact";
import Footer from "../components/FooterServer";
import HeaderServer from "../servercomponents/HeaderServer";

export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hezaragency.com";

  // ✅ canonical برای صفحه اصلی
  const canonicalUrl = `${baseUrl}/contact`;

  const titles = "هەزار - تماس با ما ";

  const descriptions = "راهای ارتباطی با آژانس هەزار";

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
const AboutusServer = ({ params }) => {
  return (
    <>
      <HeaderServer />
      <MainAbout />
      <Footer />
    </>
  );
};

export default AboutusServer;
