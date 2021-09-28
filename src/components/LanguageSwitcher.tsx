import React from "react";
import { useTranslation } from "react-i18next";
import { lngs } from "../model/translation";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="align-right">
      {lngs.map((language) => (
        <button
          className="frameless"
          style={{
            fontWeight: i18n.resolvedLanguage === language ? "bold" : "normal",
          }}
          onClick={() => i18n.changeLanguage(language)}
        >
          {language.toUpperCase()}&nbsp;
        </button>
      ))}{" "}
    </div>
  );
};

export default LanguageSwitcher;
