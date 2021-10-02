import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { defaultNS, fallbackLng, ns, supportedLngs } from "./i18next-config";

// init
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    defaultNS,
    fallbackLng,
    ns,
    react: {
      useSuspense: false,
      wait: true,
    },
    supportedLngs,
  });

export default i18next;
