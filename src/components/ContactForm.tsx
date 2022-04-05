import React from "react";

import { useTranslation } from "react-i18next";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="full-height">
      <h1>{t("Contact")}</h1>
      <form name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            {t("Name")}:
            <br />
            <input type="text" name="name" required autoFocus />
          </label>
        </p>
        <p>
          <label>
            {t("Email")}:
            <br />
            <input type="email" name="email" required />
          </label>
        </p>
        <p>
          <label>
            {t("Message")}:
            <br />
            <textarea name="message" rows={10} required />
          </label>
        </p>
        <p>
          <button type="submit">{t("Send")}</button>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
