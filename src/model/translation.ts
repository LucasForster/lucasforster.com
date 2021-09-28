import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const fallbackLng = "en";
export const lngs = [fallbackLng, "de"] as const;

i18next.use(LanguageDetector).use(initReactI18next).use(HttpApi).init({
  supportedLngs: lngs,
  fallbackLng,
});

export default i18next;
