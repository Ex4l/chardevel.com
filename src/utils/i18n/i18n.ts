import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "src/content/cv/en-GB/translation.json";
import translationFR from "src/content/cv/fr-FR/translation.json";

const resources = {
  fr: {
    translation: translationFR,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en-GB",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
