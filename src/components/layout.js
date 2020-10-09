import React from "react"
import NavBar from "./navbar"
import Footer from "./footer"
import layoutStyles from "../styles/layout.module.scss"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <NavBar />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
