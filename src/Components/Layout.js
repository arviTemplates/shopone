import React from 'react';
import Container from './Container';
import Footerone from './Footerone/Footerone';
import HeaderOne from './HeaderOne/HeaderOne';
import ShopHeaderOne from './ShopHeaderOne/ShopHeaderOne';

export default ({ children }) => {

    return ( 
        <Container>
            <HeaderOne />
            <ShopHeaderOne />
            { children }
            <Footerone />
        </Container>
     )
}