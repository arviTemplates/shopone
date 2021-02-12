import * as React from "react"
import HeaderOneLink from './HeaderOneLink';

const HeaderOne = () => {
    const myLinks = [
        { key: "1", pto: '/', cN: 'header__burger__link', id: 'burger-Hjem', text: 'Shop'},
        { key: "2", pto: '/Omos', cN: 'header__burger__link', id: 'burger-Vvs', text: 'Om os'},
        { key: "3", pto: '/Kunstnere', cN: 'header__burger__link', id: 'burger-Entreprise', text: 'Kunstnere'},
        { key: "4", pto: '/Kontakt', cN: 'header__burger__link', id: 'burger-kontakt', text: 'Kontakt'},
    ] 

    const handleClick = () => {
        const openClose = document.querySelector('.header__burger');

        if(openClose.classList.contains('header__closed')){
            openClose.classList.replace('header__closed', 'header__open');
        }else if(openClose.classList.contains('header__open')){
            openClose.classList.replace('header__open', 'header__closed');    
        }
    }
    return (  
        <div>
            <div className="header__utility">
                <span aria-hidden={true} className="header__size" onClick={handleClick} onKeyDown={handleClick} >&#9776;</span>
            </div>
            <div className="header__burger header__closed">
                <ul className="header__burger__ul">
                    <div aria-hidden={true} className="header__shutdown" onClick={handleClick} onKeyUp={handleClick}>X</div>
                    {myLinks.map((myLink) => (
                        <HeaderOneLink pto={myLink.pto} LinkClass={ myLink.cN} text={myLink.text} key={myLink.key}/>
                    ))}
                </ul>
            </div>
        </div>
      )
}

export default HeaderOne