require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    // サイトのメタデータを記述していい
    title: `Shopifyフロント with Gatsby + Typescript`,
    description: `ShopifyのフロントエンドをGatsbyとTypescriptで構築する`,
    siteUrl: ``,
    author: '@okita_kamegoro', // TODO: ここは後で考える
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-styled-components',
    'gatsby-optional-chaining',
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
        },
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.SHOPIFY_STORE_URL,
        shopifyConnections: ['collections'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          /* eslint-disable no-useless-escape */ // FIXME:敗北の一手
          'open sans:400',
          'open sans:400i',
          'open sans:700',
          'open sans:700i',
          'open sans:800',
          'open sans:800i',
          /* eslint-enable no-useless-escape */
        ],
      },
    },
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
