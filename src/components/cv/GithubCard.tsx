import CvCard from "@components/cv/CvCard";
import githubData from "@content/cv/github.json";
import React from "react";
import { DiGithubFull } from "react-icons/di";
import "src/styles/github-card.css";

const GithubCard = () => (
  <CvCard>
    <p className="github-card-intro">{githubData.content.intro}</p>
    <a
      className="github-card-link"
      href={`${githubData.content.link}/${githubData.content.profile}`}
    >
      <DiGithubFull className="github-icon" size={52} />
    </a>
  </CvCard>
);

export default GithubCard;
