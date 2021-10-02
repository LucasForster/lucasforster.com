import fs from "fs";

import { ns, supportedLngs } from "./i18next-config";

const FS_PATH = "static/locales";
const RQ_PATH = `../../${FS_PATH}`;

const requireResources = (lngs: readonly string[], ns: readonly string[]) =>
  lngs.reduce(
    (resources, lng) => ({
      ...resources,
      [lng]: ns.reduce(
        (resource, namespace) => ({
          ...resource,
          [namespace]: require(`${RQ_PATH}/${lng}/${namespace}.json`),
        }),
        {}
      ),
    }),
    {}
  );

describe(FS_PATH, () => {
  it("contains a folder for each supported language", () => {
    const folderEntries = fs.readdirSync(FS_PATH);
    for (const lng of supportedLngs) {
      expect(folderEntries).toContain(lng);
    }
  });

  it("contains a file for each namespace per supported language", () => {
    for (const lng of supportedLngs) {
      const fileList = fs.readdirSync(`${FS_PATH}/${lng}`);
      for (const nmsp of ns) {
        expect(fileList).toContain(`${nmsp}.json`);
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
