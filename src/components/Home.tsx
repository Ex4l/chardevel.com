import React from "react";
import Clients from "./cv/Clients";
import Cursus from "./cv/Cursus";
import GithubCard from "./cv/GithubCard";
import Hobbies from "./cv/Hobbies";
import Introduction from "./cv/Introduction";
import Languages from "./cv/Languages";
import Skills from "./cv/skills/Skills";

const Home = () => (
  <>
    <Introduction />
    <GithubCard />
    <Skills />
    <Cursus />
    <Languages />
    <Hobbies />
    <Clients />
  </>
);

export default Home;
