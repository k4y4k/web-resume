// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  pathPrefix: '/web-resume',
  siteMetadata: {
    title: "kayak's resume",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Rubik:400,900', 'Inconsolata:400,900'],
        },
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, '/src/data/'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: path.join(__dirname, 'src/images/'),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Resume | <kayak />',
        short_name: 'Resume',
        start_url: '/',
        background_color: '#542344',
        theme_color: '#542344',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
