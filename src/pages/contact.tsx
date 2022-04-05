import React from "react";

import "../model/i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ContactForm from "../components/ContactForm";

import "normalize.css";
import "../styles/main.scss";

const Contact = () => (
  <div className="blue-theme">
    <LanguageSwitcher />
    <ContactForm />
  </div>
);

export default Contact;
