import fs from "fs";

import { loadPath, ns, supportedLngs } from "./i18next-config";

const FS_PREFIX = "static/";
const RQ_PREFIX = "../../" + FS_PREFIX;

const requireResources = (lngs: readonly string[], ns: readonly string[]) =>
  lngs.reduce(
    (resources, lng) => ({
      ...resources,
      [lng]: ns.reduce(
        (resource, nmsp) => ({
          ...resource,
          [nmsp]: require(RQ_PREFIX + loadPath([lng], [nmsp])),
        }),
        {}
      ),
    }),
    {}
  );

describe("locales path", () => {
  it("contains a file for each combination of language and namespace", () => {
    for (const lng of supportedLngs) {
      for (const nmsp of ns) {
        fs.existsSync(FS_PREFIX + loadPath([lng], [nmsp]));
      }
    }
  });

  it("contains only string keys and values", () => {
    const resources = requireResources(supportedLngs, ns);
    for (const lng of supportedLngs) {
      for (const nmsp of ns) {
        const resource = resources[lng][nmsp];
        for (const key in resource) {
          expect(typeof key).toEqual("string");
          expect(typeof resource[key]).toEqual("string");
        }
      }
    }
  });
});
