import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header-header">
    <div className="header-div">
      <h1 className="header-h1" >
        <Link  to="/" className="header-a">
          {siteTitle}
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
