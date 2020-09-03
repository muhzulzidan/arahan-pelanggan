import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./Logo"

const Header = ({ siteTitle }) => (
  <header className="header-header">
    <div className="header-div">
      <h1 className="header-h1" >
        <Link  to="/" className="header-a">
          {/* {siteTitle} */}
          <Logo/>
        </Link>
        <Link Link to = "/penjelasan/"
        className = "header-a" >
          Apa ini ? 
        </Link>
      </h1>
      <p className="header-p">Tekan Spacebar ajah</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
