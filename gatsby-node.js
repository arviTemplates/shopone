const Promise = require('bluebird');
const path = require ('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const productPage = path.resolve('./src/templates/SingleProduct.js')
        resolve(
            graphql(
                `
                {
                    wpcontent {
                        products{
                            edges {
                                node {
                                    description(format: RAW)
                                    image {
                                      altText
                                      mediaItemUrl
                                    }
                                    ... on WPGraphQL_VariableProduct {
                                        id
                                        slug
                                        price
                                        variations {
                                            edges {
                                              node {
                                                price
                                                name
                                                id
                                              }
                                            }
                                          }
                                    }
                                }
                            }
                        }
                    }
                }
               `
            ).then((result) => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
            }
            const products = result.data.wpcontent.products.edges
                products.forEach((product) => {
                    createPage({
                        path: `/${product.node.slug}/`,
                        component: productPage,
                        context: {
                        id: product.node.id,
                        slug: product.node.slug,
                        headline: product.node.description,
                        image: product.node.image,
                        price: product.node.price,
                        size: product.node.variations
                        },
                    })
                })
            })
        )
    })
}
    
