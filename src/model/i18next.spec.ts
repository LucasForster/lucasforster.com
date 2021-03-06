import fs from "fs";

import { fallbackLng, loadPath, ns, supportedLngs } from "./i18next-config";
import fallbackLngResources from "./i18next-fallback-resources";

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

describe(`fallback language (${fallbackLng})`, () => {
  const resources = requireResources([fallbackLng], ns)[fallbackLng];

  it("maps all keys to themself", () => {
    for (const namespace in ns) {
      for (const key in resources[namespace]) {
        expect(key).toEqual(resources[key]);
      }
    }
  });

  it("matches the resource object provided to i18next for typing", () => {
    expect(resources).toEqual(fallbackLngResources);
  });
});

const targetLngs = supportedLngs.filter((lng) => lng !== fallbackLng);
describe(`target language(s) (${targetLngs})`, () => {
  it("define translations of all keys from fallback language", () => {
    const resources = requireResources(supportedLngs, ns);
    for (const lng of targetLngs) {
      for (const nmsp of ns) {
        for (const key in resources[fallbackLng][nmsp]) {
          expect(typeof resources[lng][nmsp][key]).toBeDefined();
        }
      }
    }
  });
});
