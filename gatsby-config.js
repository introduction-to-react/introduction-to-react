module.exports = {
  siteMetadata: {
    siteTitle: `Introduction to React`,
    defaultTitle: `Introduction to React`,
    siteTitleShort: `Introduction to React`,
    siteDescription: `An opinionated introduction to React`,
    siteUrl: `https://react.mkoe.io`,
    siteAuthor: `Michael König`,
    siteLanguage: `en`,
    siteImage: "",
    themeColor: `#61dafb`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/introduction-to-react/introduction-to-react`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Introduction to React`,
        short_name: `Introduction to React`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://react.mkoe.io`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
