import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import Me from "./cv/Me";

interface HeaderProps {
  siteTitle: string;
}

const Header: FunctionComponent<HeaderProps> = ({ siteTitle }) => (
  <header
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
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Me />
        </Link>
      </h1>
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
