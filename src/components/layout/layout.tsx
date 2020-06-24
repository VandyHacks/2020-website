import React from "react";
import PropTypes from "prop-types";

import Title from "../title/title";
import Footer from "../footer/footer";
import About from '../about/about';
import Nav from '../nav/nav';

import "./layout.module.css";

const Layout: React.FC<{}> = ({ children }) => {

  return (
    <>
      <Title />
      <div style={{margin: `0 auto`,}}>
        <main>{children}</main>
      </div>
      <About />
      {/* <Nav /> */}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
