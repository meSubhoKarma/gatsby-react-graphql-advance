import React from 'react'
import {Link} from "gatsby"

import Layout from "../components/Layout"

export default function NotFound() {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        <Link to="/">
          Home
        </Link>
      </p>
    </Layout>
  )
}
