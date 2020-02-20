import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/menu.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(255,255,255,0.2)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#333`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="menu">
        <ul>
            <li>hello</li>
            <li>foo</li>
            <li>bar</li>
        </ul>
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
