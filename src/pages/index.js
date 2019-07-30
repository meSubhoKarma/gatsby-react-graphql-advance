import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Head from "../components/Head";

export default function index() {
  return (
    <Layout>
      <Head />
      <h1>Hello.</h1>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  );
}
