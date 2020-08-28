import React, { useState } from "react";
import PropTypes from "prop-types";
import ScrollLock from 'react-scrolllock'
import { useMediaQuery } from 'react-responsive';

import Dashboard from '../dashboard/dashboard';
import Game from '../game/game';

import * as styles from './layout.module.css';
const Layout: ((props?: any) => JSX.Element) = () => {
  const [menu, showMenu] = useState(true);
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const isLandscape = useMediaQuery({ orientation: 'landscape' })


  return (
    <>
      {/* <ScrollLock isActive={true} /> */}
      {/* Landscape breaks things lol */}
      { isTabletOrMobileDevice && isLandscape ?
      <div id={styles.requestRotate}>
        Our site works best in portrait mode or desktop!
      </div> :
      <>
        <Game showMenu={showMenu} />
        <Dashboard menu={menu} />
      </>}
    </>
  )
}

export default Layout
