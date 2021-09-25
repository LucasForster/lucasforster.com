export type languageCode = "en" | "de";

export const resources: {
  [key in languageCode]: { translation: { [key: string]: string } };
} = {
  en: {
    translation: {
      "Hi, my name is": "Hi, my name is",
      "I'm a developer available for hire.":
        "I'm a developer available for hire.",
    },
  },
  de: {
    translation: {
      "Hi, my name is": "Hallo, mein Name ist",
      "I'm a developer available for hire.":
        "Ich bin ein verfügbarer Entwickler.",
    },
  },
};
