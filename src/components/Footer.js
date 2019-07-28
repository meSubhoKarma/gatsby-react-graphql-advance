import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  return (
    <div>
      <p>Created by {data.site.siteMetadata.author}, &copy; 2019</p>
    </div>
  );
}
