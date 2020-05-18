import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/globals.scss"

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
