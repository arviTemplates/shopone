import * as React from "react"
import { Link } from "gatsby"

const HeaderOneLink = ({ liClass, pto, LinkClass, text }) => {

    return (    
            <li className={liClass}><Link to={pto} className={LinkClass} id="burger-Hjem">{text}</Link></li>
        )
}

export default HeaderOneLink