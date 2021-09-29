import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import enTranslation from "../../static/locales/en/translation.json";

// languages
const fallbackLng = "en";
export const supportedLngs = [fallbackLng, "de"] as const;

// namespaces
export const defaultNS = "translation";
const ns = [defaultNS] as const;

// type
export type ResourcesType = {
  translation: typeof enTranslation;
};

// init
i18next.use(LanguageDetector).use(initReactI18next).use(HttpApi).init({
  defaultNS,
  fallbackLng,
  ns,
  supportedLngs,
});

export default i18next;
