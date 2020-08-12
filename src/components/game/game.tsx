import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import map from '../../assets/map-wip2.png'

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
  const h = 10;
  const w = 20;
  const rectHeight = 860;
  const rectWidth = 1720;
  const [squirrelPose, setSquirrelPose] = useState(fr)
  const [squirrelX, setSquirrelX] = useState(10)
  const [squirrelY, setSquirrelY] = useState(7)
  const [targetX, setTargetX] = useState(squirrelX)
  const [targetY, setTargetY] = useState(squirrelY)
  useEffect(() => {
    // let interval: number;
    // interval = 0;
    // if (squirrelX != targetX && squirrelY != targetY) {
    //   interval = setInterval(() => {
    //     if (squirrelX != targetX) {
    //       setSquirrelX(targetX > squirrelX ? squirrelX + 1 : squirrelX - 1);
    //       console.log('')
    //     } else if (squirrelX != targetY) {
    //       setSquirrelY(targetY > squirrelY ? squirrelY + 1 : squirrelY - 1);
    //     }
    //   })
    // } else {
    //   clearInterval(interval);
    // }
    const interval = setInterval(() => {
      if (squirrelX != targetX) {
        setSquirrelX(targetX > squirrelX ? squirrelX + 1 : squirrelX - 1);
        console.log('')
      } else if (squirrelY != targetY) {
        setSquirrelY(targetY > squirrelY ? squirrelY + 1 : squirrelY - 1);
      } else {
        clearInterval(interval);
      }
      console.log('target', targetX, targetY, 'squirrel', squirrelX, squirrelY);
    }, 500);
    return () => clearInterval(interval);
  }, [squirrelX, squirrelY, targetX, targetY])
  const initiateMovement = e => {
    const rect = e.target.getBoundingClientRect()
    // Discretize x and y into grid cells
    setTargetX(Math.round(w * (e.clientX - rect.left) / rectWidth));
    setTargetY(Math.round(h * (e.clientY - rect.top) / rectHeight));
    // setSquirrelX(x);
    // setSquirrelY(y);
    // console.log('Moving squirrel to:', x.toString(), y.toString());
  }

  const squirrelStyle = {
    gridColumn: squirrelX,
    gridRow: squirrelY,
  }

  return (
    <div id={styles.gameBoard} onClick={initiateMovement}>
      <img id={styles.map} src={map}></img>
      <img id={styles.squirrel}
           src={squirrelPose}
           style={squirrelStyle}></img>
    </div>
  )
}

export default Game;