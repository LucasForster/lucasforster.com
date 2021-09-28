import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enTranslation from "../../static/locales/en/translation.json";
import deTranslation from "../../static/locales/de/translation.json";

const fallbackLng = "en";

const resources = {
  en: {
    translation: enTranslation,
  },
  de: {
    translation: deTranslation,
  },
} as const;
export type ResourcesType = typeof resources[typeof fallbackLng];

i18next.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng,
  resources,
});

export default i18next;
