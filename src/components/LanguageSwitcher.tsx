import React from "react";
import { languages, useTranslation } from "../../translation";

const LanguageSwitcher = () => {
  const { changeLanguage } = useTranslation();

  return (
    <div className="align-right">
      {languages.map((language) => (
        <button className="frameless" onClick={() => changeLanguage(language)}>
          {language.toUpperCase()}&nbsp;
        </button>
      ))}{" "}
    </div>
  );
};

export default LanguageSwitcher;
