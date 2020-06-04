import React from "react"
import PropTypes from "prop-types"
import Title from "./title/title"
import Footer from "./footer"
import "./layout.css"

import FAQ from "./faq"
import Schedule from "./schedule"
import Bio from "./bio"

const Layout: React.FC<{}> = ({ children }) => {

  return (
    <>
      <Title />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
      </div>
      <FAQ />
      <Schedule />
      <Bio />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
