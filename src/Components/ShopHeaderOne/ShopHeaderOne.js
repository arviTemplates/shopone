import React, { useContext } from 'react'
import {CartContext} from '../CartContext';
import './ShopHeaderOne.scss';
import { CartStateContext } from '../CartProvider'
import Kurv from './Kurv/Kurv';


const ShopHeaderOne = () => {
    const items = useContext(CartStateContext);
    console.log(items)

    const {toggleCart} = useContext(CartContext) 

    return (  
        <section className="headertilbud" id="header">
            <div className="headertilbud__logo openmenu"><div className="headertilbud__logo-hifi">menu</div></div>
            <div className="headertilbud__logo">
            </div>
            <div className="headertilbud__icons">
                <div className="headertilbud__koebekurv">
                <div className="headertilbud__kurvikon" role="button" onClick={toggleCart}>Kurv ({items.length})</div>
                    <Kurv>
{/*                         {obj && obj.forEach(item => 
                            <CartItem className="cart__items" key={item.product.id} headline={item.product.headline} variation={item.variation} amount={item.amount} pris="Pris" />
                        )}  */}
                    </Kurv>
                </div>
            </div>
        </section>
      )
}

export default ShopHeaderOne