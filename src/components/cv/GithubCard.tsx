import githubData from "@content/cv/github.json";
import React from "react";
import GithubImage from "./GithubImage";

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
  height: "33px",
  marginTop: "-0.3rem",
};

const GithubCard = () => (
  <div style={style}>
    <p style={{ height: "33px" }}>{githubData.content.intro}</p>
    <a
      style={imageLinkStyle}
      href={`${githubData.content.link}/${githubData.content.profile}`}
    >
      <GithubImage />
    </a>
  </div>
);

export default GithubCard;
