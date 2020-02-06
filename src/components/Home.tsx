import Skills from "@/components/cv/skills/Skills";
import { Link } from "gatsby";
import React from "react";
import GithubCard from "./cv/GithubCard";
import Introduction from "./cv/Introduction";

const Home = () => (
  <div>
    <Introduction />
    <GithubCard />
    <Skills />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default Home;
