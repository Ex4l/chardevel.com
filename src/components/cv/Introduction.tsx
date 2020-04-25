import { today } from "@/utils/dateUtils";
import introductionData from "@content/cv/introduction.json";
import React from "react";
import { useTranslation } from "react-i18next";
import { newline } from "src/utils/jsxUtils";

const getAge = (): string => {
  var firstYear = new Date(2011, 1, 1);

  return (today.getFullYear() - firstYear.getFullYear()).toString();
};

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{newline(t(introductionData.content).replace("{AGE}", getAge()))}</p>
    </div>
  );
};

export default Introduction;
