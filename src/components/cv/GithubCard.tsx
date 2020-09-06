import CvCard from "@components/cv/CvCard";
import githubData from "@content/cv/github.json";
import React from "react";
import { useTranslation } from "react-i18next";
import { DiGithubFull } from "react-icons/di";
import "src/styles/github-card.css";

const GithubCard = () => {
  const { t } = useTranslation();

  return (
    <CvCard>
      <div className="github-card-container">
        <p className="github-card-intro">{t(githubData.content.intro)}</p>
        <a
          className="github-card-link"
          href={`${githubData.content.link}/${githubData.content.profile}`}
        >
          <DiGithubFull className="github-icon" size={"3rem"} />
        </a>
      </div>
    </CvCard>
  );
};

export default GithubCard;
