import React from "react";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "../model/i18next-config";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="align-right">
      {supportedLngs.map((language) => (
        <button
          className="frameless"
          style={
            i18n.resolvedLanguage === language
              ? {
                  fontWeight: "bold",
                  textDecoration: "underline",
                }
              : undefined
          }
          onClick={() => i18n.changeLanguage(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
