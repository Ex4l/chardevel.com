import Button from "@material-ui/core/Button";
import { EN, FR } from "@utils/constants";
import React from "react";
import { getI18n, useTranslation } from "react-i18next";
import "src/styles/language-button.css";

const LanguageButton = () => {
  const { t } = useTranslation();
  const setLanguage = (lang: string) => {
    getI18n().changeLanguage(lang);
  };

  return getI18n().isInitialized ? (
    <div className="language-button-container">
      <Button
        className="language-button"
        variant="outlined"
        onClick={() => setLanguage(FR)}
      >
        {t("global.french")}
      </Button>
      <Button
        className="language-button"
        variant="outlined"
        onClick={() => setLanguage(EN)}
      >
        {t("global.english")}
      </Button>
    </div>
  ) : null;
};

export default LanguageButton;
