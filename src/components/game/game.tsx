import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from "prop-types";
import map from '../../assets/map.png'
import faqBackground from '../../assets/faqBackground.png'

// Import squirrel images
import br from '../../assets/squirrel/back-rest.png'
import bw from '../../assets/squirrel/back-walk.png'
import fr from '../../assets/squirrel/front-rest.png'
import fw from '../../assets/squirrel/front-walk.png'
import lr from '../../assets/squirrel/left-rest.png'
import lw0 from '../../assets/squirrel/left-walk-0.png'
import lw1 from '../../assets/squirrel/left-walk-1.png'
import rw0 from '../../assets/squirrel/right-walk-0.png'
import rw1 from '../../assets/squirrel/right-walk-1.png'

import * as styles from './game.module.css'

import "./game.module.css";

const Game = () => {
  <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />

  const constants = {
    'gridHeight': 30,
    'gridWidth': 60,
    'rectHeight': 860,
    'rectWidth': 1720,
    'startX': 30,
    'startY': 21,
  }

  const roomCoords = {
    'faqX': 46,
    'faqY': 12,
  }

  const displayIDs = {
    'home': 0,
    'faq': 1,
  }
  // map: 0, faq: 1, sponsors: 2 ...
  const [display, setDisplay] = useState(displayIDs.home)
  // The squirrel image that gets displayed, followed by its x and y coordinates
  const [squirrelPose, setSquirrelPose] = useState(fr)
  const [squirrelX, setSquirrelX] = useState(constants.startX)
  const [squirrelY, setSquirrelY] = useState(constants.startY)
  // x and y coordinates of click location, flag for whether or not squirrel is in motion
  const [targetX, setTargetX] = useState(squirrelX)
  const [targetY, setTargetY] = useState(squirrelY)
  const [isMoving, setMoving] = useState(false);
  // I didn't have a better word for this but basically this toggles squirrel using left-walk-0 vs left-walk-1, etc.
  const [stride, setStride] = useState(false);

  const [bounce, setBounce] = useSpring(() => ({
    transform: 'translate(0px, 0px)'
  }))

  // Engine for squirrel movement
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMoving) {
        setBounce({transform: stride ? 'translate(0px, 0px)' : 'translate(0px, 10px'});
      }
      if (isMoving) {
        console.log('isMoving:', isMoving)
        console.log('Moving!')
        if (targetY > squirrelY) {
          console.log('Moving up')
          setSquirrelPose(stride ? fw : fr);
          setSquirrelY(squirrelY + 1);
        } else if (targetY < squirrelY) {
          console.log('Moving down')
          setSquirrelPose(stride ? bw : br);
          setSquirrelY(squirrelY - 1);
        }
        if (targetX > squirrelX) {
          console.log('Moving left')
          setSquirrelPose(stride ? rw0 : rw1);
          setSquirrelX(squirrelX + 1);
        } else if (targetX < squirrelX) {
          console.log('Moving right')
          setSquirrelPose(stride ? lw0 : lw1);
          setSquirrelX(squirrelX - 1);
        }
        if (squirrelX == targetX && squirrelY == targetY) {
          console.log('clear interval');
          clearInterval(interval);
          setSquirrelPose(fr);
          setMoving(false);
        }
        console.log('Squirrel X:', squirrelX, 'Squirrel Y:', squirrelY)
      }
      setStride(!stride);
    }, 200);
    
    // IF THE SQUIRREL IS AT THESE POINTS GO TO A ROOM
    if (squirrelX == roomCoords.faqX && squirrelY == roomCoords.faqY) {
      // TODO: the transition needs to feel more natural lol
      setDisplay(1);
    }

    return () => clearInterval(interval);
  }, [squirrelX, squirrelY, targetX, targetY, isMoving, stride])

  const initiateMovement = e => {
    setMoving(true);
    console.log('isMoving:', isMoving)
    const rect = e.target.getBoundingClientRect()
    // Discretize x and y into grid cells
    setTargetX(Math.round(
      constants.gridWidth * (e.clientX - rect.left) / constants.rectWidth
    ));
    setTargetY(Math.round(
      constants.gridHeight * (e.clientY - rect.top) / constants.rectHeight
    ));
  }

  const squirrelStyle = {
    gridColumn: `${squirrelX - 2} / ${squirrelX + 1}`,
    gridRow: `${squirrelY - 2} / ${squirrelY}`,
  }

  return (
    <div>
      {display == 0 ? <div id={styles.gameBoard} onClick={initiateMovement}>
        {/* can't do this via CSS background image b/c won't fit properly */}
        <img className={styles.gridBackground} src={map}></img>
        <animated.img id={styles.squirrel}
            src={squirrelPose}
            style={{...squirrelStyle,...bounce}}></animated.img>
      </div> : null}
      {display == 1 ? <div className={styles.room} onClick={initiateMovement}>
        <button className={`${styles.returnButton} nes-btn`}
                onClick={() => {console.log('x:', targetX, 'y:', targetY);setDisplay(0);}}>BACK</button>
      </div> : null}
    </div>
    
  )
}

export default Game;