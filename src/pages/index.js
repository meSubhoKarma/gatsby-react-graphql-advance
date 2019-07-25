import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

export default function index() {
  return (
    <Layout>
      <h1>Hello.</h1>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  );
}
