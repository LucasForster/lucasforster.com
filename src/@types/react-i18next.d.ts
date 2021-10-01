import "react-i18next";

import { defaultNS, fallbackLngResources } from "../model/i18next.config";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof fallbackLngResources;
  }
}
