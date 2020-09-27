import React, { useState, useRef } from "react";
import Dashboard from '../dashboard/dashboard';
import Game from '../game/game';

import * as styles from './layout.module.css';
const Layout: ((props?: any) => JSX.Element) = () => {
  // const isLandscape = useMediaQuery({ orientation: 'landscape' });
  // disableBodyScroll(window);
  return (
    <Game />
  )
}

export default Layout
