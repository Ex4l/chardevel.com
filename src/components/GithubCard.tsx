import githubData from "@content/cv/github.json";
import React from "react";
import GithubImage from "./GithubImage";
import SEO from "./Seo";

const style = {
  display: "flex",
  backgroundColor: "#fff",
  border: "1px solid #d1d5da",
  borderRadius: "3px",
  padding: "0.9rem",
};

const imageLinkStyle = {
  height: "33px",
  marginTop: "-0.3rem",
};

const GithubCard = () => (
  <div style={style}>
    <SEO title={githubData.title} />
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
