import Home from "@components/Home";
import Layout from "@components/Layout";
import SEO from "@components/Seo";
import React from "react";
import "src/utils/i18n/i18n";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
);

export default IndexPage;
