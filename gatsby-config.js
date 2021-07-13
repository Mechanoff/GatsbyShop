/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-json',
    //'gatsby-transformer-remark',
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdowns/`,
      },
    },*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/products/`,
      },
    },
    /*{
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries")
      },
    }*/
  ],
  siteMetadata: {
    title: "E-Shop",
    description: "My project practice on Gatsby",
    copyright: "yea right"
  }
}
