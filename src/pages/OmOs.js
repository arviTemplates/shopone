import * as React from "react"
import { graphql } from "gatsby";
import './style.scss';
import Layout from "../Components/Layout";

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <section className="omos">
        { data.wpcontent.pages.edges.map(({ node }) => (                
            
            "om os" === node.title && 
              <section key="omos">
                <h1>{node.title}</h1>
                <div dangerouslySetInnerHTML={{__html:node.content}}></div>
              </section>
          
          ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
{
  wpcontent {
    pages {
      edges {
        node {
          content
          title
          pageId
          status
        }
      }
    }
  }
}
`