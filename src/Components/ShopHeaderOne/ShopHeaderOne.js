import { Link } from "gatsby";
import * as React from "react"
import './ShopHeaderOne.scss';


const ShopHeaderOne = () => {
    
    return (  
        <section className="headertilbud" id="header">
            <div className="headertilbud__logo openmenu"><div className="headertilbud__logo-hifi">menu</div></div>
            <div className="headertilbud__logo"></div>
            <div className="headertilbud__icons">
                <Link to="/kurv" className="headertilbud__koebekurv"><i className="fas fa-shopping-cart header__fa"> Kurv ( <span className="num">0</span> )</i></Link>
            </div>
        </section>
      )
}

export default ShopHeaderOne