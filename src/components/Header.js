import React from "react";
import { Link } from "gatsby";

import headerStyles from "./header.module.scss";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Subho Karmakar
        </Link>
      </h1>
      <ul className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}
