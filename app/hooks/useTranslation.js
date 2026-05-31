import en from "../locales/en/common.json";
import fa from "../locales/fa/common.json";
import ku from "../locales/ku/common.json";

const locales = { en, fa, ku };

export default function useTranslation(lang = "fa") {
  const t = (key) => {
    const translation = locales[lang]?.[key];
    // اگر ترجمه پیدا نشد، کلید اصلی را برگردان
    return translation !== undefined ? translation : key;
  };
  
  return { t };
}