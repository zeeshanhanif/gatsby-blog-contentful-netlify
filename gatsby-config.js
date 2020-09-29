/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `JAMStack Blog Site`,
    description: `JAMStack Blog site to show experties in area of Gatsby, JAMStack and serverless`,
    author: `@zeeshanhanif`,
  },
  plugins: [
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "h7umpuo31i9l",
        accessToken: "9ED3LPsM5oJXmBfRVU_cfhxiTqZbQN9loT2_trQhUZg",
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

  ],
}
