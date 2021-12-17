import * as React from "react"
import {navLinksDefault,
        navLinksActive,
	titleLink} from "./header.module.css"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 700,
        padding: `1.45rem 1.0875rem`,
      }}
      >
      <h1 
	style={{
	  textAlign: 'center'}}
	  >
          <Link
            to="/"
            className={titleLink} 
	    >
            {siteTitle}
          </Link>
      </h1>

      <div
        style={{
          margin: '1.5rem auto',
	  textAlign: 'center'
          }}>
        <Link
	  to="/"
	  className={navLinksDefault}
	  activeClassName={navLinksActive}
	  >
	  Introduction
	</Link>
	<Link 
          to="/404"
          className={navLinksDefault}
          activeClassName={navLinksActive}
          >
          Vocabulary
        </Link>
        <Link
          to="/page-2"
          className={navLinksDefault}
          activeClassName={navLinksActive}
          >
            Articles
        </Link>
	<Link
	  to="/"
	  className={navLinksDefault}
	  activeClassName={navLinksActive}
	  >
	    About Me
	</Link>
      </div>

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
