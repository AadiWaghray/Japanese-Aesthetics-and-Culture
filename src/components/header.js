import * as React from "react"
import {navLinksDefault,
        navLinksActive,
	titleLink,
	title,
	header,
	decorationText,
	titleText} from "./header.module.css"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className={header}>
    <div className={title}>
      <div className={decorationText}>
	<h1>
	  アディ
	</h1>
      </div> 
      <div className={titleText}> 
        <h1>
          <Link
            to="/"
            className={titleLink} 
	    >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className={decorationText}>
	<h1>
	  アディ
	</h1>
      </div>
    </div>
 
      <div
        style={{
          margin: '0.75rem auto',
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

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
