import * as React from "react"
import './Shop.scss';
import { Link } from "gatsby"

const ShopItem = ( { key, pto, src, alt, text, price }) => {
    
    return (  
        <section className="shopItem" key={key}>
            <Link to={pto} className="shop__item">    
                <img className="shop__item-img" src={src} alt={alt} />
                <div className="shop__item-text">{text}</div>
                <p className="shop__item-price">{price}</p>
                <button className="shop__item-button">Tilføj Kurv</button>      
            </Link>
        </section>
      )
}

export default ShopItem