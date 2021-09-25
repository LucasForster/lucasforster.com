import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "Hi, my name is": "Hi, my name is",
          "I'm a developer available for hire.":
            "I'm a developer available for hire.",
        },
      },
      de: {
        translation: {
          "Hi, my name is": "Hallo, mein Name ist",
          "I'm a developer available for hire.":
            "Ich bin ein verfügbarer Entwickler.",
        },
      },
    },
  });

export default i18next;
