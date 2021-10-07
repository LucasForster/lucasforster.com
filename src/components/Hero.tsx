import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="full-height">
      <h1 className="fade-in-left">
        {t("Hi, my name is")}&nbsp;
        <span className="accent">Lucas Forster</span>
        .
        <br />
        {t("I'm a developer available for hire.")}
      </h1>
      <div className="align-left">
        <a
          className="button reveal-delayed"
          href="mailto:mail@lucasforster.com"
        >
          {t("Contact")}
        </a>
        <a className="button reveal-delayed" href="/portfolio">
          {t("Portfolio")}
        </a>
      </div>
    </div>
  );
};

export default Hero;
