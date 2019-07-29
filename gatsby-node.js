const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  // console.log(node)
  if (node.internal.type === "MarkdownRemark") {
    // console.log(JSON.stringify(node, undefined, 4));

    const slug = path.basename(node.fileAbsolutePath, ".md");
    // console.log("@@@@@@@@@@@@@@@@@", slug);

    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};

// get path to template
// get markdown data
// create new pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve("./src/templates/Blog.js");

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    });
  });
};
