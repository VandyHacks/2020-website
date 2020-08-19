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

// Stolen from https://stackoverflow.com/a/36862446 **********************
function getWindowDims() {
  const { innerWidth: width, innerHeight: height } = window;
  const vw = width / 100;
  const vh = height / 100;
  return { vw, vh };
}

function useWindowDims() {
  const [WindowDims, setWindowDims] = useState(
    getWindowDims()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDims(getWindowDims());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return WindowDims;
}
// ***********************************************************************

const Game = () => {
  <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />

  // CONSTANTS
  const constants = {
    'gridHeight': 30,
    'gridWidth': 60,
    'cellWidth': 200/60,
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

  // Determines which view to display (map, FAQ room, etc.)
  const [display, setDisplay] = useState(displayIDs.home)
  // Get window dimensions and distance btwn center of view and left edge of map
  const { vw, vh } = useWindowDims();
  const [viewLoc, setViewLoc] = useState(100);
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
  // Initial state for animation
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
        // console.log('isMoving:', isMoving)
        if (targetY > squirrelY) {
          // console.log('Moving up')
          setSquirrelPose(stride ? fw : fr);
          setSquirrelY(squirrelY + 1);
        } else if (targetY < squirrelY) {
          // console.log('Moving down')
          setSquirrelPose(stride ? bw : br);
          setSquirrelY(squirrelY - 1);
        }
        if (targetX > squirrelX) {
          // console.log('Moving left')
          setSquirrelPose(stride ? rw0 : rw1);
          setSquirrelX(squirrelX + 1);
        } else if (targetX < squirrelX) {
          // console.log('Moving right')
          setSquirrelPose(stride ? lw0 : lw1);
          setSquirrelX(squirrelX - 1);
        }
        if (squirrelX == targetX && squirrelY == targetY) {
          // console.log('clear interval');
          clearInterval(interval);
          setSquirrelPose(fr);
          setMoving(false);
        }
        // console.log('Squirrel X:', squirrelX, 'Squirrel Y:', squirrelY)
        console.log('Target x y:', targetX, targetY);
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

  // Engine for map movement in response to squirrel
  useEffect(() => {
    console.log('YO!!!!!')
    // Left edge of view in terms of pixel location on map
    const leftEdge = Math.round(viewLoc*vh - 50*vw);
    // Right edge of view in terms of pixel location on map
    const rightEdge = Math.round(leftEdge + 100*vw);
    // Left edge of squirrel center grid cell in terms of pixels on map
    const squirrelVWL = Math.round(squirrelX * constants.cellWidth*vh)
    // Right edge of squirrel center grid cell in terms of pixels on map
    const squirrelVWR = Math.round(squirrelVWL + constants.cellWidth*vh)
    // Shift if squirrel is reasonably close to edge
    if (leftEdge > 1 && squirrelVWL <= leftEdge + constants.cellWidth*vh) {
      setViewLoc(viewLoc - 6*constants.cellWidth)
    } else if (rightEdge < 200*vh && squirrelVWR >= rightEdge - constants.cellWidth*vh) {
      setViewLoc(viewLoc + 6*constants.cellWidth)
    }
  }, [squirrelX, vw, vh]);

  const initiateMovement = e => {
    setMoving(true);
    console.log('isMoving:', isMoving)
    const rect = e.target.getBoundingClientRect()
    // Discretize x and y into grid cells
    const x = Math.round(constants.gridWidth * (e.clientX - rect.left) / constants.rectWidth)
    setTargetX(Math.min(x, constants.gridWidth - 2));
    const y = Math.round(constants.gridHeight * (e.clientY - rect.top) / constants.rectHeight)
    setTargetY(Math.min(y, constants.gridWidth));
  }

  const boardStyle = {
    left: `calc(50vw - ${viewLoc}vh)`
  }

  const squirrelStyle = {
    gridColumn: `${squirrelX} / ${squirrelX + 3}`,
    gridRow: `${squirrelY - 2} / ${squirrelY + 1}`,
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
        <div id={styles.gameBoard} onClick={initiateMovement} style={boardStyle}>
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