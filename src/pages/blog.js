import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import blogStyles from "./blog.module.scss";

// fetch the slug
// use slug to generate a link to the post page
// test

export default function blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // console.log(data);

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}
