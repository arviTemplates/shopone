import * as React from "react"
import { Link } from "gatsby";
import { graphql } from "gatsby";
import './style.scss';
import '../Components/Shop/Shop.scss';
import Layout from "../Components/Layout";

export default ({ data }) => {
  return (
    
    <Layout>
        <h1 className="opbygning">Denne side er under opbygning og er stadid ikke funktionel. Vi går i luften i en nær fremtid.</h1>
      <section className="shop__products">
          { data.wpcontent.products.edges.map(({ node }) => (                
              <Link className="shop" to={`/` + node.slug} key={node.id}>
                  <img className="shop__item-img" alt={ node.image.mediaItemUrl } src={ node.image.mediaItemUrl } />  
                  <div className="shop__item-text" dangerouslySetInnerHTML={{ __html: node.description }} />
                  <div className="shop__item-price">{`Fra ${node.price.substring(3, 9)} DKK` }</div>
                  {/* {console.log(node)} */}
              </Link>
          ))}
        </section>
    </Layout>
  )
}

export const query = graphql`
{
  wpcontent {
    products {
      edges {
        node {
          ... on WPGraphQL_VariableProduct {
            slug
            id
            name
            price
            productCategories {
              edges {
                node {
                  description
                  name
                  slug
                }
              }
            }
            variations {
              edges {
                node {
                  price
                  name
                }
              }
            }
          }
          name
          description
          image {
            altText
            link
            mediaItemUrl
            uri
          }
        }
      }
    }
  }
}
`