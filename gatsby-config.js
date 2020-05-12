module.exports = {
  siteMetadata: {
    title: `Exim AirCare`,
    description: `EXIM AirCare is a branch of EXIM group which provides you compressors and air filters as per your necessities. EXIM group has been in the field of export-import since the year 2000.`,
    author: `NeyaTech Developers`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fcfcff`,
        theme_color: `#fcfcff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Exim Air Care`,
        short_name: `Exim Air Care`,
        start_url: `/`,
        background_color: `#fcfcff`,
        theme_color: `#fcfcff`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/about/`, `/products/`, `/contact/`, `/404`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
