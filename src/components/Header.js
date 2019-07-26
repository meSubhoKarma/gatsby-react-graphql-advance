import React from "react";
import { Link } from "gatsby";

import "./header.scss";

export default function Header() {
  return (
    <div>
      <h1>Subho Karmakar</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
