import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

import FAQ from "./faq"
import Schedule from "./schedule"

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle={'VandyHacks'} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
      </div>
      {/* Just here to test*/}
      <FAQ />
      <Schedule />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
