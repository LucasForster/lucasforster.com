import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useI18nextTranslation,
} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

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
  const {
    t: i18nextT,
    i18n: { changeLanguage },
  } = useI18nextTranslation();

  const t = (key: typeof keys[number]) => i18nextT(key);

  return { t, changeLanguage };
};
