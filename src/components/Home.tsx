import Skills from "@/components/cv/skills/Skills";
import React from "react";
import Cursus from "./cv/Cursus";
import GithubCard from "./cv/GithubCard";
import Hobbies from "./cv/Hobbies";
import Introduction from "./cv/Introduction";
import Languages from "./cv/Languages";

const Home = () => (
  <div>
    <Introduction />
    <GithubCard />
    <Skills />
    <Cursus />
    <Languages />
    <Hobbies />
  </div>
);

export default Home;
