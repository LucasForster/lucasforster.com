import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useI18nextTranslation,
} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { useMemo } from "react";

// languages
const fallbackLng = "en";
const targetLngs = ["de"] as const;

// resources
const keys = [
  "Contact",
  "Hi, my name is",
  "I'm a developer available for hire.",
] as const;

const translations: {
  [language in typeof targetLngs[number]]: {
    translation: {
      [key in typeof keys[number]]: string;
    };
  };
} = {
  de: {
    translation: {
      Contact: "Kontakt",
      "Hi, my name is": "Hallo, mein Name ist",
      "I'm a developer available for hire.":
        "Ich bin ein verfügbarer Entwickler.",
    },
  },
};

// config
const keyIdentities = {
  [fallbackLng]: {
    translation: keys.reduce((acc, key) => ({ ...acc, key: key }), {}) as {
      [key in typeof keys[number]]: key;
    },
  },
};

const resources = {
  ...keyIdentities,
  ...translations,
} as const;

i18next.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
  fallbackLng,
  resources,
});

// exports
export const languages = [fallbackLng, ...targetLngs] as const;

export const useTranslation = () => {
  const { t: i18nextT, i18n } = useI18nextTranslation();

  const t = useMemo(
    () => (key: typeof keys[number]) => i18nextT(key),
    [i18nextT]
  );
  const changeLanguage = useMemo(
    () => (language: typeof languages[number]) => i18n.changeLanguage(language),
    [i18n.changeLanguage]
  );
  const currentLanguage = useMemo(
    () => i18n.resolvedLanguage as typeof languages[number],
    [i18n.resolvedLanguage]
  );

  return { t, changeLanguage, currentLanguage };
};
