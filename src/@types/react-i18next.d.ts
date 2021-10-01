import "react-i18next";

import { defaultNS, ResourcesType } from "../model/i18next.config";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: ResourcesType;
  }
}
