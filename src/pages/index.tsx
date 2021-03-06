import React, { Suspense } from "react";

import "../model/i18next";
import Hero from "../components/Hero";

import "normalize.css";
import "../styles/main.scss";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Index = () => (
  <div className="blue-theme">
    <LanguageSwitcher />
    <Hero />
  </div>
);

export default Index;
