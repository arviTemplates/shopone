import React, { useContext } from 'react'
import Layout from "../Components/Layout"
import './templates.scss'
import { CartDispatchContext } from '../Components/CartProvider';

export default ( props ) => {
  const product = props.pageContext
  const dispatch = useContext(CartDispatchContext);
  console.log(dispatch)

  const handleClick = (item) => {
    dispatch({ type: "ADD", item }) 
  }

/*   console.log(product) */

    return (  
        <Layout>         
            <section className="single-grid">
              <h1>{product.headline}</h1>
              <img src={product.image.mediaItemUrl} alt={product.image.altText}/>
              <p>{product.price}</p>
                 <button onClick={handleClick(product)}>Føj til kurv</button> 
            </section>       
        </Layout>
    )
}


 /*  const strs = product.size.edges.map((str, i) => 
    <option key={i} id={str.node.id} value={str.node.name}>{str.node.name + ' ' + str.node.price}</option> 
  )       
  const [chooseSize, setChooseSize] = useState('vælg størrelse') 
  const [tekstbesked, setTekstbesked] = useState('');
 */

{/*               <form onSubmit={handleClick(product)}>
                <select value={chooseSize} name="størrelse" id="" onChange={(e) => setChooseSize(e.target.value)}>
                  <option>vælg størrelse</option>
                  {strs}
                </select> */}


                {/* </form> */}
{/*      <p id="besked">{tekstbesked}</p> */}