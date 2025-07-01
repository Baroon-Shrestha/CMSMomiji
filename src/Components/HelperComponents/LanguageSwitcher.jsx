import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  const languages = [
    { code: "en", label: "EN", flag: "🇺🇸", name: "English" },
    { code: "ja", label: "JA", flag: "🇯🇵", name: "日本語" },
  ];

  const toggleLanguage = () => {
    const currentIndex = languages.findIndex(
      (lang) => lang.code === currentLang
    );
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLang = languages[nextIndex].code;

    i18n.changeLanguage(nextLang);
    setCurrentLang(nextLang);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  return (
    <div className="fixed bottom-4 right-6 z-50">
      <button
        onClick={toggleLanguage}
        className="group flex items-center gap-6 px-2 py-2 bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/30 active:scale-95"
      >
        <span className="text-xl group-hover:scale-110 transition-transform duration-200">
          {currentLanguage.flag}
        </span>
        <div className="flex flex-col items-start">
          <span className="font-medium text-gray-700 text-sm">
            {currentLanguage.label}
          </span>
          <span className="text-xs text-gray-500">{currentLanguage.name}</span>
        </div>
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white transition-transform duration-200 group-hover:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
