import React from "react"
import PropTypes from "prop-types"
import Title from "../title/title"
import Footer from "../footer/footer"
import "./layout.css"

import Nav from '../nav/nav'

const Layout: React.FC<{}> = ({ children }) => {

  return (
    <html>
      <Title />
      <div style={{margin: `0 auto`,}}>
        <main>{children}</main>
      </div>
      <Nav />
      <Footer />
    </html>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
