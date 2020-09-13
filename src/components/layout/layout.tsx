import React, { useState, useRef } from "react";
import Dashboard from '../dashboard/dashboard';
import Game from '../game/game';

import * as styles from './layout.module.css';
const Layout: ((props?: any) => JSX.Element) = () => {
  const [menu, showMenu] = useState(true);

  // const isLandscape = useMediaQuery({ orientation: 'landscape' });
  // disableBodyScroll(window);
  return (
    <>
      <div>
        <Game showMenu={showMenu}/>
        <Dashboard menu={menu} />
      </div>
      {/* <div id={styles.landscape}  className={styles.retroBox}>
        <div>
          <div>
            Landscape mode wasn't invented yet in the 1980s, so it isn't invented here in VandyHacks retro edition (until further notice). Please return to portrait mode or visit us on desktop!
            Or apply
          </div>
          <a href='https://apply.vandyhacks.org'>here!</a>
        </div>
        <img src={logo} id={styles.logo}/>
      </div> */}
    </>
  )
}

export default Layout
