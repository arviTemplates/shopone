import * as React from "react"

export default ({ name, address, zip, city, phone, mail, extra }) => {

  return (
      <address className="footer__address">
        <p className="p footer__navn">{name}</p>
        <p className="p footer__addres">{address}</p>
        <p className="p footer__post-by"><span className="footer__zip">{zip}</span><span className="footer__city">{city}</span></p>
        <p className="p footer__tel">Telefon: {phone}</p>
        <p className="p footer__web"><a className="footer__web-one" href={mail}>{mail}</a></p>
        <p className="p footer__web">{extra}</p>
      </address>
  )
}