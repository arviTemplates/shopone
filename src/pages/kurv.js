import * as React from "react"
import Layout from "../Components/Layout";

export default ({ data }) => {
    console.log(data)
  return (
    <Layout>
        <h1>kurv</h1>

    </Layout>
  )
}

export const query = graphql`
{
    wpcontent {
        cart {
          total
          subtotal
          isEmpty
          contents {
            itemCount
            productCount
            edges {
              node {
                product {
                  node {
                    id
                  }
                }
              }
            }
            nodes {
              total
              product {
                node {
                  description
                }
              }
            }
          }
        }
    }
}
`