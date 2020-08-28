import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ScrollLock from 'react-scrolllock'
import window from 'global'
import { useMediaQuery } from 'react-responsive';
import logo from '../../assets/VH Pixel Logo.png';
import Dashboard from '../dashboard/dashboard';
import Game from '../game/game';

import * as styles from './layout.module.css';
const Layout: ((props?: any) => JSX.Element) = () => {
  const [menu, showMenu] = useState(true);
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  // const isLandscape = useMediaQuery({ orientation: 'landscape' });

  return (
    <>
      {/* <ScrollLock isActive={true} /> */}
      {/* Landscape breaks things lol */}
      { isTabletOrMobileDevice ?
      <div id={styles.mobilePlaceholder}>
        <div>
        VandyHacks VII mobile edition is coming soon! For now, please visit us on desktop or
        <a href='https://apply.vandyhacks.org/'> apply!</a>
        </div>
        <img src={logo} />
      </div> :
      <>
        <Game showMenu={showMenu} />
        <Dashboard menu={menu} />
      </>}
    </>
  )
}

export default Layout
