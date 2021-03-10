import React, { useContext } from 'react'
import { CartContext } from '../../CartContext';
import './Kurv.scss'

export default ({ Children }) => {
  const { cartVisible, toggleCart } = useContext(CartContext) 

  return (
    <section
    style={{ width: '100vw',  
        marginTop: '0.5em',
        height: '100vh', 
        position: 'absolute', 
        zIndex: 100,
        right: 0,
        backgroundColor: 'white',
        boxShadow: '0px 0px 4px grey',
        transform: cartVisible ? 'translateX(0%)' : 'translateX(100%)',   
        transition: 'transform 0.3s ease-out', 
      }}>
          <section className="kurv__flex">
            <button onClick={toggleCart}>x</button>
            <h1 className="kurv__headline">Kurv</h1>
          </section>
      {Children}
    </section>
  )
}
