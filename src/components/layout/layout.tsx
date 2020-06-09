import React from "react"
import PropTypes from "prop-types"
import Title from "../title/title"
import Footer from "../footer/footer"
import "./layout.module.css"
import About from '../about/about'
import Nav from '../nav/nav'
import logo from '../../assets/VH Pixel Logo.png'

const Layout: React.FC<{}> = ({ children }) => {

  return (
    <html>
      <Title />
      <div style={{margin: `0 auto`,}}>
        <main>{children}</main>
      </div>
      <About />
      <Nav />
      <Footer />
      <img id='img' src={logo} alt="Logo" /> 
    </html>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
