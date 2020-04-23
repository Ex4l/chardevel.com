import React, { FunctionComponent } from "react";
import "src/styles/header.css";
import Me from "./cv/Me";

interface HeaderProps {
  siteTitle: string;
}

const Header: FunctionComponent<HeaderProps> = ({ siteTitle }) => (
  <header
    id="site-header"
    style={{
      background: `#1976d2`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Me />
      </h1>
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
