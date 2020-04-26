import Hobby from "@components/cv/Hobby";
import HobbiesData from "@content/cv/hobbies.json";
import React from "react";
import { useTranslation } from "react-i18next";
import "src/styles/hobbies.css";

const Hobbies = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t(HobbiesData.title)}</h2>
      <div className="hobbies-container">
        {HobbiesData.content.map((item, index) => (
          <Hobby key={`${index}-${item.title}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
