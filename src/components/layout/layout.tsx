import React, { useState } from "react";
import PropTypes from "prop-types";

import Dashboard from '../dashboard/dashboard';
import Game from '../game/game';

import "./layout.module.css";

const Layout: ((props?: any) => JSX.Element) = () => {
  const [menu, showMenu] = useState(true);

  return (
    <>
      <Game showMenu={showMenu} />
      <Dashboard menu={menu} />
    </>
  )
}

export default Layout
