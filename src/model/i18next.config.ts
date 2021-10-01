import enTranslation from "../../static/locales/en/translation.json";

// languages
export const fallbackLng = "en";
export const supportedLngs = [fallbackLng, "de"] as const;

// namespaces
export const defaultNS = "translation";
export const ns = [defaultNS] as const;

// type
export type ResourcesType = {
  translation: typeof enTranslation;
};
