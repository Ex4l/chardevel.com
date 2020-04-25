import LanguageItem from "@components/cv/LanguageItem";
import languagesData from "@content/cv/languages.json";
import React from "react";
import "src/styles/languages.css";
import CvCard from "./CvCard";

const Languages = () => (
  <div>
    <h2>{languagesData.title}</h2>
    <CvCard childrenPosition="center">
      <div className="languages-container">
        {languagesData.content.map((item, index) => {
          return <LanguageItem key={`${item.language}-${index}`} item={item} />;
        })}
      </div>
    </CvCard>
  </div>
);

export default Languages;
