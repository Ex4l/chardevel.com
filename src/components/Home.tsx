import { Link } from "gatsby";
import React from "react";
import GithubCard from "./GithubCard";
import Introduction from "./Introduction";
import SEO from "./Seo";

const Home = () => (
  <div>
    <SEO title="Home" />
    <Introduction />
    <GithubCard />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default Home;
