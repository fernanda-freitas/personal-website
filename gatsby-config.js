/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss', 
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    }
],
  pathPrefix: "/work",
}
