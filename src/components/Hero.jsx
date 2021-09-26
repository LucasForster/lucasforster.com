import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {

  const { t } = useTranslation();

  return (
    <div className="full-height">
      <h1 className="fade-in-left">
        {t("Hi, my name is")}&nbsp;
        <span className="accent">
          Lucas Forster
        </span>
        .
        <br/>
        {t("I'm a developer available for hire.")}
      </h1>
      <a className="button reveal-delayed" href="mailto:mail@lucasforster.com">
        {t("Contact")}
      </a>
    </div>
  );
};

export default Hero;
