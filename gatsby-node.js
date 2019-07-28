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
