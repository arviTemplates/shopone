import React from 'react'
import './ShopHeaderOne.scss';



const CartItem = ( props ) => {

    return(
        <section className="cart__items" >
            <p>{props.headline}</p>
            <p>{props.variation}</p>
            <div><p>{props.amount}</p><p>-</p><p>+</p></div>
            <p>{props.pris}</p>
        </section>
    )
}

export default CartItem
