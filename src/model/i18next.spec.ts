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
    supportedLngs.forEach((lng) => expect(folderEntries).toContain(lng));
  });

  it("contains a file for each namespace per supported language", () => {
    supportedLngs.forEach((lng) => {
      const fileList = fs.readdirSync(`${FS_PATH}/${lng}`);
      ns.forEach((namespace) =>
        expect(fileList).toContain(`${namespace}.json`)
      );
    });
  });

  it("contains only string keys and values", () => {
    const resources = requireResources(supportedLngs, ns);
    supportedLngs.forEach((lng) => {
      ns.forEach((namespace) => {
        const resource = resources[lng][namespace];
        for (const key in resource.keys) {
          expect(typeof key).toEqual("string");
          expect(typeof resource[key]).toEqual("string");
        }
      });
    });
  });
});
