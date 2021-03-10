module.exports = {
  siteMetadata: {
    title: "shopone",
  },  
  plugins: [
/*     {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://arvi.dk/testet/graphql`,
      },
    }, */
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpcontent",
        url: "https://arvi.dk/testet/graphql",
        headers: {
          Authorization: "Basic Y2tfNGIyOGRmYjA0ZTY5OTlkNjY4NmU0YmNhYjkxNDA3NmI2NGZkNjYyNjo="
        }
      },
    },
    {
      resolve: 'gatsby-wpgraphql-inline-images',
      options: {
        wordPressUrl: 'https://arvi.dk/testet/',
        uploadsUrl: 'https://arvi.dk/testet/wp-content/uploads/',
        processPostTypes: ['Page', 'Post', 'CustomPost'],
        graphqlTypeName: 'WPGraphQL',
        httpHeaders: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: (__dirname, `src`),
      }, 
    },
 /*    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/kurv/'] },
    }, */
      `gatsby-plugin-sass`,
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`
  ],
};
