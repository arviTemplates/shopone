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
                                        slug
                                        price
                                        variations {
                                            edges {
                                              node {
                                                price
                                                name
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
                    console.log(product.node)
                    createPage({
                        path: `/${product.node.slug}/`,
                        component: productPage,
                        context: {
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
    
