import { Link } from "gatsby";
import React from "react";
import Me from "../content/cv/me.yaml";
import Image from "./image";
import SEO from "./seo";

const Home = () => (
  <div>
    <SEO title="Home" />
    <h1>{Me.title}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default Home;
