module.exports = {
  siteMetadata: {
    title: "shopone",
  },  
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpcontent",
        url: "https://arvi.dk/testet/graphql",
        consumerKkey: 'ck_8058ec4c374eac667a7e9e8e5b2357e7cb061718',
        consumerSecret: 'cs_599de674787897bdda623e3b5d3aad1a07541655',
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
      `gatsby-plugin-sass`,
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`
  ],
};
