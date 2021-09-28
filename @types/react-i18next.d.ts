import "react-i18next";

import { ResourcesType } from "../src/model/translation";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: ResourcesType;
  }
}
