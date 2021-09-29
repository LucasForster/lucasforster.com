import React from "react";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "../model/i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="align-right">
      {supportedLngs.map((language) => (
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
