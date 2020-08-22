import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import Footer from '../footer/footer';
import Top from '../top/top';

import * as styles from './dashboard.module.css';


const Dashboard: React.FC<{}> = (props) => {
  const [showDashboard, setShowDashboard] = useState(true);

  const slideUp = useSpring({
    config: { duration: 500 },
    transform: `translateY(${showDashboard ? 0 : -100}%)`,
    opacity: showDashboard ? 1 : 0,
  });

  const startButton = useSpring({
    config: { duration: 500 },
    transform: `translateY(${showDashboard ? 0 : 320}%)`,
    margin: '0 auto',
  });

  const slideDown = useSpring({
    config: { duration: 500 },
    transform: `translateY(${showDashboard ? 0 : 100}%)`,
  });

  return (
    <div id={styles.dashboard}>
      {props.menu ? 
        <>
          <animated.div style={slideUp}>
            <Top />
            </animated.div>

          <animated.div style={startButton}>
            <button
              id={styles.startButton}
              className={styles.animateFade}
              onClick={() => setShowDashboard(state => !state)}>
              {showDashboard ? 'press start to begin...' : 'show menu'}
            </button>
          </animated.div>

          <animated.div style={slideDown}>
            <Footer />
            </animated.div> 
        </> :
        null
      }
    </div>
  );
}

export default Dashboard