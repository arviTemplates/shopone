import * as React from "react"
/* import { Link } from "gatsby";
import { graphql } from "gatsby";
import './style.scss';
import '../Components/Shop/Shop.scss'; */
import Layout from "../Components/Layout";

export default ({ data }) => {
  return (
    <Layout>
      <section className="shop__products">
{/*           { data.wpcontent.products.edges.map(({ node }) => (                
              <Link className="shop" to={`/SingleProduct?id=${ node.id }`} key={node.id}>
                  <img className="shop__item-img" src={ node.image.mediaItemUrl } />  
                  <div className="shop__item-text" dangerouslySetInnerHTML={{ __html: node.description }} />
                  <div className="shop__item-price">{`Fra ${node.price.substring(3, 9)} DKK` }</div>
              </Link>
          ))} */}
        </section>
    </Layout>
  )
}