/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import ErrorWrapper from "@/utils/ErrorWrapper";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { FunctionComponent } from "react";
import "src/styles/layout.css";
import Header from "./Header";

const Layout: FunctionComponent = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ErrorWrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <button
        onClick={() => {
          throw new Error("oups");
        }}
      >
        Break the world
      </button>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer></footer>
      </div>
    </ErrorWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
