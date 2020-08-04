import React from "react";
import PropTypes from "prop-types";

import Title from "../dashboard/dashboard";
import Footer from "../footer/footer";
import About from '../about/about';
import Nav from '../nav/nav';
import Window from '../window/window'
import Dashboard from '../dashboard/dashboard'

import "./layout.module.css";

const Layout: React.FC<{}> = ({ children }) => {

  return (
    <>
      <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      <Dashboard />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
