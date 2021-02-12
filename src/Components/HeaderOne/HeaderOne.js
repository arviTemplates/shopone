import * as React from "react"
import './Header.scss';
import HeaderOneBurger from './HeadeOneBurger';
import { Link } from "gatsby"

const HeaderOne = () => {
    
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo"><Link to="/"><p className="header__logo-img">SmartGalleri</p></Link></div>
                <HeaderOneBurger />
                <nav className="header__nav">
                     <ul className="header__linklist">
                        <li key="1" className="header__li"><Link to="/" className="header__link header-Shop" activeClassName="header__active">Shop</Link></li>
                        <li key="2" className="header__li"><Link to="/OmOs" className="header__link header-OmOs" activeClassName="header__active">Om os</Link></li>
                        <li key="3" className="header__li"><Link to="/Kunstnere" className="header__link header-Kunstnere" activeClassName="header__active">Kunstnere</Link></li>
                        <li key="4" className="header__li"><Link to="/Kontakt" className="header__link header-Kontakt" activeClassName="header__active">Kontakt</Link></li>
                    </ul> 
                </nav>
            </div>
        </header>
    )
}

export default HeaderOne
