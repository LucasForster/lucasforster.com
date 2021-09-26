export const languageCodes = ["en", "de"] as const;

export const resources: {
  [key in typeof languageCodes[number]]: {
    translation: { [key: string]: string };
  };
} = {
  en: {
    translation: {
      Contact: "Contact",
      "Hi, my name is": "Hi, my name is",
      "I'm a developer available for hire.":
        "I'm a developer available for hire.",
    },
  },
  de: {
    translation: {
      Contact: "Kontakt",
      "Hi, my name is": "Hallo, mein Name ist",
      "I'm a developer available for hire.":
        "Ich bin ein verfügbarer Entwickler.",
    },
  },
};
