import React, { useState } from 'react';
import Container from './Container';
import Footerone from './Footerone/Footerone';
import HeaderOne from './HeaderOne/HeaderOne';
import ShopHeaderOne from './ShopHeaderOne/ShopHeaderOne';
import { CartContext } from './CartContext';
import { CartProvider } from './CartProvider'

export default ({ children }) => { 
    const[cartVisible, setCartVisible] = useState(false);

    const toggleCart = () => {
        setCartVisible(!cartVisible)
    };


    return (
        <Container>   
            <CartProvider>      
                <CartContext.Provider value={{ cartVisible, toggleCart}}>
                    <HeaderOne />
                    <ShopHeaderOne />
                    { children }
                    <Footerone />
                </CartContext.Provider> 
            </CartProvider>
        </Container>
     )
}