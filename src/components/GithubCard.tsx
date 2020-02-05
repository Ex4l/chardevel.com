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

const GithubCard = () => (
  <div style={style}>
    <SEO title={githubData.title} />
    <p>{githubData.content.intro}</p>
    <div
      style={{
        maxWidth: "80px",
        width: "100%",
        marginTop: "-6px",
        padding: "2px",
      }}
    >
      <a href={`${githubData.content.link}/${githubData.content.profile}`}>
        <GithubImage />
      </a>
    </div>
  </div>
);

export default GithubCard;
