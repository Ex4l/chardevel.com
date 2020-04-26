import LanguageItem from "@components/cv/LanguageItem";
import languagesData from "@content/cv/languages.json";
import React from "react";
import { useTranslation } from "react-i18next";
import "src/styles/languages.css";
import CvCard from "./CvCard";

const Languages = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t(languagesData.title)}</h2>
      <CvCard childrenPosition="center">
        <div className="languages-container">
          {languagesData.content.map((item, index) => (
            <LanguageItem key={`${item.language}-${index}`} item={item} />
          ))}
        </div>
      </CvCard>
    </div>
  );
};

export default Languages;
