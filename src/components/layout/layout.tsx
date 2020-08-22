import React, { useState } from "react";
import PropTypes from "prop-types";

import Dashboard from '../dashboard/dashboard';
import Game from '../game/game';

import "./layout.module.css";

const Layout: React.FC<{}> = () => {
  const [menu, showMenu] = useState(true);

  return (
    <>
      <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      <Game showMenu={showMenu} />
      <Dashboard menu={menu} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
