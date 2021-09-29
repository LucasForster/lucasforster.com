import "react-i18next";

import { defaultNS, ResourcesType } from "../src/model/i18next";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: ResourcesType;
  }
}
