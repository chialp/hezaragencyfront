// components/FooterClient.jsx
"use client";

import { useState } from "react";
import { Send } from "lucide-react";

// کامپوننت کلاینت که فقط قسمت فرم را مدیریت می‌کند
const FooterForm = ({ variant = "default", lang = "fa", translations }) => {
  const [email, setEmail] = useState("");
  const isRTL = lang === "fa" || lang === "ku";
  const textAlignClass = isRTL ? "text-right" : "text-left";

  const footerStyles = {
    default: {
      input:
        "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    article: {
      input:
        "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/30",
      button:
        "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
    },
    dark: {
      input:
        "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-600 focus:ring-blue-600/30",
      button: "bg-blue-700 hover:bg-blue-800 text-white",
    },
  };

  const currentStyle = footerStyles[variant] || footerStyles.default;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscription successful for: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="space-y-4">
      <h4
        className={`text-lg font-semibold text-gray-900 dark:text-white pb-2 border-b border-gray-200 dark:border-gray-700 ${textAlignClass}`}
      >
        {translations.newsletterTitle}
      </h4>
      <p className={`text-gray-600 dark:text-gray-300 ${textAlignClass}`}>
        {translations.newsletterDesc}
      </p>

      <form onSubmit={handleSubscribe} className="space-y-3">
        <div
          className={`flex flex-col sm:flex-row gap-3 ${
            isRTL ? "sm:flex-row-reverse" : ""
          }`}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={translations.emailPlaceholder}
            required
            className={`flex-1 px-4 py-3 rounded-lg text-sm transition-all ${currentStyle.input}`}
            aria-label="Email address"
          />
          <button
            type="submit"
            className={`px-6 py-3 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${currentStyle.button}`}
          >
            <Send className="w-4 h-4" />
            {translations.subscribe}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FooterForm;
