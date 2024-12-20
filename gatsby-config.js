/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mata Rocks Resort`,
    description: `Mata Rocks is a boutique beachfront resort located on Ambergris Caye in San Pedro, Belize. The resort is situated south of the main town, approximately a 15 minute golf cart ride from the airport.`,
    author: `Jose Urbina`,
    siteUrl: `https://matarock.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: "https://api-us-west-2.hygraph.com/v2/cm4rfech303l307w65e8t4lux/master",
        token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzQ0MDQyODgsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY200cmZlY2gzMDNsMzA3dzY1ZTh0NGx1eC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC11cy13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiN2Q0OWY3N2QtZGI2YS00NmM5LTlmYTEtYzI2NGMzNWE4Mzg3IiwianRpIjoiY200cnZqNjhwMWd1ZzA3bjA4N3E4ZWNsdyJ9.FuwIBz19sgzhFrkKLVYt3zllxhxEoNmIL4Y0Oexq3hyLXWU-zv0oixPQTd7M5JAgzTnJuk-RQAT5Q9ioKVjJyHxDVeUGVw8ojQbY_APetCslWemO1HYvsPJJOBTLQRzBAb-AaNYi3BN8LkQyRCRyepR8NdsjWcZXAjnU_DZ6xBlXCBCTw1DYHg436W-ZBhjk6KPOgQDthM2S2IeAIlU6m-DqYDEHtKK4fLNfRLn0TCUV6J4Qqr54KEpMaVSQjyr-qDlnIUaqMhPJE4VyhpomPX08P2P78jXnXX3CiTSk6Aj6VsW15nOC8sQBNLie7_CVj8KJDRFNA4FBOYcRC9Dd-yidR9CCHIdaA267Xl-GqlwqYjC0fNeRZFZ6tzAAFUhIffzRipnkhU70pQx94aDkxD6pf7D7_K3-8FDWIduIFEth_6FhmmyiKrptPNQTBmCwu0XRteigntp5QG6a7m4MwDRfChG2DZWv9fL1hnCiM0q85npTCNnCjKxnv6FTpipAoN9jX9vp8lN8pzTtiirRRsIcOWMXyLne5TDT02WjzVlM5RcUeCJb0yeacLIA3C8EJn8T5bgQqmgTU79D5eYm64hVSuDkPU0G9wvFQzkKjl4XF0YQK9z8pLv5GiM9FURJRALAOU1lj242AN0uudBvhN-WIngGLx_Rdf2Sse6Kz18",
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
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
