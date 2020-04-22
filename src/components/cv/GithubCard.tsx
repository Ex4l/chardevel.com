import githubData from "@content/cv/github.json";
import React from "react";
import { DiGithubFull } from "react-icons/di";
import "src/styles/github-card.css";

const style = {
  display: "flex",
  backgroundColor: "#fff",
  border: "1px solid #d1d5da",
  borderRadius: "3px",
  padding: "0.9rem",
  marginTop: "1.45rem",
  marginBottom: "1.45rem",
};

const imageLinkStyle = {
  marginLeft: "0.2rem",
  marginTop: "-0.7rem",
};

const GithubCard = () => (
  <div style={style}>
    <p style={{ height: "33px" }}>{githubData.content.intro}</p>
    <a
      style={imageLinkStyle}
      href={`${githubData.content.link}/${githubData.content.profile}`}
    >
      <DiGithubFull className="github-icon" size={52} />
    </a>
  </div>
);

export default GithubCard;
