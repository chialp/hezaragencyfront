//!metadata for single language

export  function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL|| 'https://hezaragency.com';
  // ✅ canonical برای صفحه اصلی
  const canonicalUrl = `${baseUrl}`
  
  const titles = "hezar"
  const descriptions = "راهای ارتباطی با آژانس هەزار"
  
 
  
  return {
    title: titles,
    description: descriptions,
    
    // ✅ canonical تعریف شده
    alternates: {
      canonical: canonicalUrl,
    },
    
    openGraph: {
      title: titles ,
      description: descriptions,
      type: 'website',
      sitename:"آژانس هەزار",
      locale: "fa",
      url: canonicalUrl,
    },
  };
}

//!metadata for multi language

// ----------------------------
// ترجمه
// ----------------------------
export async function getTranslations(lang) {
  const filePath = path.join(
    process.cwd(),  // این مسیر ریشه پروژه (frontend/) است
    "app",
    "locales",
    lang,
    "common.json"
  );

  try {
    const fileContents = await fs.promises.readFile(filePath, "utf-8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading translations:", error);
    return {};
  }
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL|| 'https://hezaragency.com';
  
  // ✅ canonical برای صفحه اصلی
  const canonicalUrl = `${baseUrl}/${lang}/contact`;
  
  const titles = {
    fa: "هەزار - تماس با ما  ",
    // ku: "هەزار - ئاژانسی دیزاینی ماڵپەڕ",
    // en: "Hezar - Website Design Agency"
  };
  
  const descriptions = {
    fa: "راهای ارتباطی با آژانس هەزار",
    // ku: "ئاژانسی تایبەتی دیزاینی ماڵپەڕ، گەشەپێدان و SEO",
    // en: "Professional website design, development and SEO agency"
  };
  
  return {
    title: titles[lang] || titles.fa,
    description: descriptions[lang] || descriptions.fa,
    
    // ✅ canonical تعریف شده
    alternates: {
      canonical: canonicalUrl,
    },
    
    openGraph: {
      title: titles[lang] || titles.fa,
      description: descriptions[lang] || descriptions.fa,
      type: 'website',
      sitename:"آژانس هەزار",
      locale: lang === 'fa' ? 'fa_IR' : 
              lang === 'ku' ? 'ku_IQ' : 'en_US',
      url: canonicalUrl,
    },
  };
}
