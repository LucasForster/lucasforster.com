import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

export const languageCodes = ["en", "de"] as const;

const resourceKeys = [
  "Contact",
  "Hi, my name is",
  "I'm a developer available for hire.",
] as const;

export const resources: {
  [key in typeof languageCodes[number]]: {
    translation: { [key in typeof resourceKeys[number]]: string };
  };
} = {
  en: {
    translation: {
      Contact: "Contact",
      "Hi, my name is": "Hi, my name is",
      "I'm a developer available for hire.":
        "I'm a developer available for hire.",
    },
  },
  de: {
    translation: {
      Contact: "Kontakt",
      "Hi, my name is": "Hallo, mein Name ist",
      "I'm a developer available for hire.":
        "Ich bin ein verfügbarer Entwickler.",
    },
  },
};

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18next;
