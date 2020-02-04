import { Link } from "gatsby";
import React from "react";
import Image from "./Image";
import Introduction from "./Introduction";
import SEO from "./Seo";

const Home = () => (
  <div>
    <SEO title="Home" />
    <Introduction />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default Home;
