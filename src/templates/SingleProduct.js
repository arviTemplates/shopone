import React, { useState } from "react"
import Layout from "../Components/Layout"
import './templates.scss'

export default ( props ) => {
  const product = props.pageContext

  const strs = product.size.edges.map((str, i) => 
  <option key={i} value={str.node.name}>{str.node.name + ' ' + str.node.price}</option>
  )       
  const [chooseSize, setChooseSize] = useState('vælg størrelse') 
  const [tekstbesked, setTekstbesked] = useState('') 

  const handleClick = (e) => {
    e.preventDefault()
    if(chooseSize === 'vælg størrelse'){
        setTekstbesked('Vælg venligst størrelse')
    }
    console.log(product.slug)
    console.log(chooseSize)
  }
  console.log(product)

    return (  
        <Layout>           
            <section className="single-grid">
              <h1>{product.headline}</h1>
              <img src={product.image.mediaItemUrl} alt={product.image.altText}/>
              <p>{product.price}</p>
              <form onSubmit={handleClick}>
                <select value={chooseSize} name="størrelse" id="" onChange={(e) => setChooseSize(e.target.value)}>
                  <option>vælg størrelse</option>
                  {strs}
                </select>
                <button>Føj til kurv</button>
              </form>
              <p id="besked">{tekstbesked}</p>
            </section> 
      
      
        </Layout>
    )
}
