import enTranslation from "../../static/locales/en/translation.json";

/**
 * Contains the fallback language resource for each namespace.
 *
 * Used by `react-i18next.d.ts` to give the t function a proper type.
 * Checked by `i18next.spec.ts` to ensure correctness and completeness.
 *
 * Do not import this into files that aren't type declarations or tests
 * to avoid loading all fallback language resources into the application.
 */
const fallbackLngResources = {
  translation: enTranslation,
} as const;

export default fallbackLngResources;
