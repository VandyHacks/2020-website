import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import map from '../../assets/map.png';
import faqBackground from '../../assets/faqBackground.png';

// Import squirrel images
import br from '../../assets/squirrel/back-rest.png';
import bw from '../../assets/squirrel/back-walk.png';
import fr from '../../assets/squirrel/front-rest.png';
import fw from '../../assets/squirrel/front-walk.png';
import lr from '../../assets/squirrel/left-rest.png';
import lw0 from '../../assets/squirrel/left-walk-0.png';
import lw1 from '../../assets/squirrel/left-walk-1.png';
import rw0 from '../../assets/squirrel/right-walk-0.png';
import rw1 from '../../assets/squirrel/right-walk-1.png';

// Rooms
import FAQRoom from '../rooms/FAQ/FAQRoom';
import ScheduleRoom from '../rooms/Schedule/ScheduleRoom';
import SpeakersRoom from '../rooms/Speakers/SpeakersRoom';
import SponsorsRoom from '../rooms/Sponsors/SponsorsRoom';
import JudgesRoom from '../rooms/Judges/JudgesRoom';

import * as styles from './game.module.css'

import "./game.module.css";

const Game = () => {
  <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
  const h = 30;
  const w = 60;
  const rectHeight = 860;
  const rectWidth = 1720;
  // map: 0, faq: 1, sponsors: 2 ...
  const [display, setDisplay] = useState(1)
  // The squirrel image that gets displayed, followed by its x and y coordinates
  const [squirrelPose, setSquirrelPose] = useState(fr)
  const [squirrelX, setSquirrelX] = useState(30)
  const [squirrelY, setSquirrelY] = useState(21)
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
        setBounce({ transform: stride ? 'translate(0px, 0px)' : 'translate(0px, 10px' });
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
    if (squirrelX == 46 && squirrelY == 12) {
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
    setTargetX(Math.round(w * (e.clientX - rect.left) / rectWidth));
    setTargetY(Math.round(h * (e.clientY - rect.top) / rectHeight));
  }

  const squirrelStyle = {
    gridColumn: `${squirrelX - 2} / ${squirrelX + 1}`,
    gridRow: `${squirrelY - 2} / ${squirrelY}`,
  }

  const rooms = [
    null,
    <FAQRoom setDisplay={setDisplay} />,
    <ScheduleRoom />,
    <SpeakersRoom />,
    <SponsorsRoom />,
    <JudgesRoom />
  ];

  return (
    <div>
      {display == 0 ?
        <div id={styles.gameBoard} onClick={initiateMovement}>
          {/* can't do this via CSS background image b/c won't fit properly */}
          <img className={styles.gridBackground} src={map} />
          <animated.img id={styles.squirrel}
            src={squirrelPose}
            style={{ ...squirrelStyle, ...bounce }} />
        </div> :
        null}
      {rooms[display]}
    </div>
  )
}

export default Game;