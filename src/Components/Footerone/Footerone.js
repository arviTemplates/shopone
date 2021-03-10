import * as React from "react"
import Address from '../Address/Address'
import Facebook from '../../images/TODO_facebook-icon_white.png'

export default () => {

  return (
    <footer className="footer">
        <div className="footer__content">    
        <div className="footer__adressewrapper">
            <div><img className="footer__image" src="" alt="" /></div>
            <Address name="arvi ApS" address="Agervej 25" zip="4400" city=" Kalundborg" phone="27143040" mail="arne@arvi.dk" />
        </div>
        <div className="footer__middlebox">
            <p className="footer__linktext" id="follow">FØLG OS</p>
            <div className="footer__linkwrapper">
                <a className="footer__link" href="https://www.facebook.com/rapvvs" target="blank">
                    <img className="footer__facebook" src={Facebook} alt="" />
                </a>
            </div>
        </div>

        <div id="footer__endbox">
            <h2 className="footer__omos">OM OS</h2>
            <p className="footer__text-omos">
                Vi er stolte af vore håndværk og sørger altid for, at holde os ajour med de nyeste teknikker.               
            </p>
        </div>

        <div>

        </div>


   </div>
    <div className="footer__bottum">
        <div className="footer__bottum-wrapper">
            <div className="footer__coding"><a className="footer__endlink" id="arvi" href="https://arvi.dk">Udvikling af siden: Arvi ApS</a></div>
            <div className="footer__copy">Copyright &copy; 2020</div>
        </div>
    </div>
    </footer>
  )
}