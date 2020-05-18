import React, { useState } from "react"
import { Link } from "gatsby"

import headerStyles from "../styles/Header.module.scss"
import logo from "../images/pygo-icon.webp"
import links from "../constants/links"

const Header = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={headerStyles.navbar}>
      <div className={headerStyles.navCenter}>
        <div className={headerStyles.navHeader}>
          <Link to="/">
            <img src={logo} alt="PYGO Inc. Logo" />
          </Link>
          {/* <button
            type="button"
            className={headerStyles.logoBtn}
            onClick={toggleNav}
          >
            <FaAlignRight className={headerStyles.logoIcon} />
          </button> */}
        </div>
        <ul
          className={
            isOpen
              ? `${headerStyles.navLinks} ${headerStyles.showNav}`
              : `${headerStyles.navLinks} ${headerStyles.hideNav}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Header
