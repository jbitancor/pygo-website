import React from "react"
import "../styles/globals.scss"
import logo from "../images/just-pygo.png"
import footerStyles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <p>Copyright 2020. PYGO Inc.</p>
      <img src={logo} alt="" />
      <div>
        <p>Privacy Policy</p>
        <p>Terms of Services</p>
      </div>
    </footer>
  )
}

export default Footer
