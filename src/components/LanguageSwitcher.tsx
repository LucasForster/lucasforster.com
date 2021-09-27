import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "../../translation";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    console.log(i18n.languages);
  }, []);

  return (
    <div className="align-right">
      {languages.map((language) => (
        <button
          className="frameless"
          onClick={() => i18n.changeLanguage(language)}
        >
          {language.toUpperCase()}&nbsp;
        </button>
      ))}{" "}
    </div>
  );
};

export default LanguageSwitcher;
