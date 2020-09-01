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
      {/* { isTabletOrMobileDevice ? */}
      {/* <div>
        <div id={styles.mobilePlaceholder}>
          <div>
            VandyHacks VII mobile edition is coming soon! For now, please visit us on desktop or
            <a href='https://apply.vandyhacks.org/'> apply!</a>
          </div>
          <img src={logo} />
        </div>   
      </div>
      : */}
      <div id={styles.notLandscape}>
        <Game showMenu={showMenu}/>
        <Dashboard menu={menu} />
      </div>
      <div id={styles.landscape}>
        <div>Landscape mode wasn't invented yet in the 1980s, so it isn't invented here in VandyHacks retro edition (until further notice). Please return to portrait mode or visit us on desktop!</div>
        <img src={logo} id={styles.logo}/>
      </div>
      {/* } */}
    </>
  )
}

export default Layout
