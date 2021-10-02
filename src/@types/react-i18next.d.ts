import "react-i18next";

import { defaultNS } from "../model/i18next-config";
import fallbackLngResources from "../model/i18next-fallback-resources";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof fallbackLngResources;
  }
}
