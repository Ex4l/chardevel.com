import introductionData from "@content/cv/introduction.json";
import React from "react";
import SEO from "./Seo";

const getAge = (): string => {
  var firstYear = new Date(2011, 1, 1);
  var today = new Date();

  return (today.getFullYear() - firstYear.getFullYear()).toString();
};

const Introduction = () => (
  <div>
    <SEO title={introductionData.title} />
    <p>{introductionData.content.replace("{AGE}", getAge())}</p>
  </div>
);

export default Introduction;
