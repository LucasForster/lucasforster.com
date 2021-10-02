// languages
export const fallbackLng = "en";
export const supportedLngs = [fallbackLng, "de"] as const;

// namespaces
export const defaultNS = "translation";
export const ns = [defaultNS] as const;

// path
// [string] instead of string[] as no multiloading is supported
export const loadPath = (lngs: [string], ns: [string]) =>
  `/locales/${lngs[0]}/${ns[0]}.json`;
