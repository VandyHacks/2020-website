import React from "react";
import PropTypes from "prop-types";

import Dashboard from '../dashboard/dashboard';
import Game from '../game/game';

import "./layout.module.css";

const Layout: React.FC<{}> = ({ children }) => {

  return (
    <>
      <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      <Game />
      <Dashboard />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
