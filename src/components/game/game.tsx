import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from "prop-types";
import map from '../../assets/map.png'

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
  const h = 30;
  const w = 60;
  const rectHeight = 860;
  const rectWidth = 1720;
  const [squirrelPose, setSquirrelPose] = useState(fr)
  const [squirrelX, setSquirrelX] = useState(30)
  const [squirrelY, setSquirrelY] = useState(21)
  const [targetX, setTargetX] = useState(squirrelX)
  const [targetY, setTargetY] = useState(squirrelY)
  const [isMoving, setMoving] = useState(false);
  useEffect(() => {

    const interval = setInterval(() => {
      if (isMoving) {
        console.log('isMoving:', isMoving)
        console.log('Moving!')
        if (targetY > squirrelY) {
          console.log('Moving up')
          setSquirrelPose(fw);
          setSquirrelY(squirrelY + 1);
        } else if (targetY < squirrelY) {
          console.log('Moving down')
          setSquirrelPose(bw);
          setSquirrelY(squirrelY - 1);
        }
        if (targetX > squirrelX) {
          console.log('Moving left')
          setSquirrelPose(rw0);
          setSquirrelX(squirrelX + 1);
        } else if (targetX < squirrelX) {
          console.log('Moving right')
          setSquirrelPose(lw0);
          setSquirrelX(squirrelX - 1);
        }
        if (squirrelX == targetX && squirrelY == targetY) {
          console.log('clear interval');
          clearInterval(interval);
          setSquirrelPose(fr);
          setMoving(false);
        }
      }
    }, 300);
    return () => clearInterval(interval);
  }, [squirrelX, squirrelY, targetX, targetY, isMoving])

  const initiateMovement = e => {
    setMoving(true);
    console.log('isMoving:', isMoving)
    const rect = e.target.getBoundingClientRect()
    // Discretize x and y into grid cells
    setTargetX(Math.round(w * (e.clientX - rect.left) / rectWidth));
    setTargetY(Math.round(h * (e.clientY - rect.top) / rectHeight));
    // setSquirrelX(x);
    // setSquirrelY(y);
    // console.log('Moving squirrel to:', x.toString(), y.toString());
  }

  const squirrelStyle = {
    gridColumn: `${squirrelX - 1} / ${squirrelX + 2}`,
    gridRow: `${squirrelY - 1} / ${squirrelY + 2}`,
  }

  const bounce = useSpring({
    from: {transform: 'translate(0px, 0px)'},
    to: async (next, cancel) => {
      while (!isMoving) {
        console.log('bouncing')
        await next({transform: 'translate(0px, -10px)'})
        await next({transform: 'translate(0px, 10px)'})
      }
    },
  })

  return (
    <div id={styles.gameBoard} onClick={initiateMovement}>
      <img id={styles.map} src={map}></img>
      <animated.img id={styles.squirrel}
           src={squirrelPose}
           style={squirrelStyle}></animated.img>
    </div>
  )
}

export default Game;