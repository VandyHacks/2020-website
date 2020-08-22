import React, { useState, useEffect, useRef } from 'react';
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

const Game = (props: any) => {
  <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />

  // CONSTANTS
  const constants = {
    'gridHeight': 30,
    'gridWidth': 60,
    'cellDimVH': 200/60,
    'rectHeight': 860,
    'rectWidth': 1720,
    'startX': 30,
    'startY': 21,
    'signCellWidth': 7,
    'signCellHeight': 2,
  }

  // Determines which view to display (map, FAQ room, etc.)
  const [display, setDisplay] = useState(null);

  const rooms = {
    'home': {
      'display': null,
      'signStart': null,
      'door': null,
    },
    'faq': {
      'display': <FAQRoom setDisplay={setDisplay} />,
      'signStart': [4, 5],
      'door': [7, 16],
    },
    'past': {
      'display': null, // TODO: need a component here
      'signStart': [44, 4],
      'door': [46, 12],
    },
    'schedule': {
      'display': <ScheduleRoom />,
      'signStart': [26, 7],
      'door': [29, 13],
    },
    'speakers':  {
      // TODO: judges AND speakers
      'display': <SpeakersRoom />,
      'signStart': [53, 12],
      'door': [53, 18],
    },
    'sponsors': {
      'display': <SponsorsRoom />,
      'signStart': [34, 2],
      'door': [37, 12],
    },
  }

  // Get window dimensions and distance btwn center of view and left edge of map
  const { vw, vh } = useWindowDims();
  const [viewLocVH, setviewLocVH] = useState(100);
  // The squirrel image that gets displayed, followed by its x and y coordinates
  const [squirrelPose, setSquirrelPose] = useState(fr)
  const [squirrelX, setSquirrelX] = useState(constants.startX)
  const [squirrelY, setSquirrelY] = useState(constants.startY)
  // Initial state for squirrel animation
  const [bounce, setBounce] = useSpring(() => ({
    transform: 'translate(0px, 0px)'
  }));
  // x and y coordinates of click location, flag for whether or not squirrel is in motion
  const [targetX, setTargetX] = useState(squirrelX);
  const [targetY, setTargetY] = useState(squirrelY);
  const [isMoving, setMoving] = useState(false);
  // I didn't have a better word for this but basically this toggles squirrel using left-walk-0 vs left-walk-1, etc.
  const [stride, setStride] = useState(false);
  // Positions for room labels/signs in grid space (only x, y is constant)
  
  // TODO: UNDER CONSTRUCTION
  // const [pastSignX, setPastSignX]         = useState(44)
  const [faqSignX, setFaqSignX]           = useState(rooms.faq.signStart[0]);
  const [sponsorsSignX, setSponsorsSignX] = useState(rooms.sponsors.signStart[0]);
  const [speakersSignX, setSpeakersSignX] = useState(rooms.speakers.signStart[0]);
  const [scheduleSignX, setScheduleSignX] = useState(rooms.schedule.signStart[0]);
  

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
        // console.log('Squirrel x y:', squirrelX, squirrelY);
      }
      setStride(!stride);
    }, 200);

    // // IF THE SQUIRREL IS AT THESE POINTS GO TO A ROOM
    // if (squirrelX == roomCoords.faqX && squirrelY == roomCoords.faqY) {
    //   // TODO: the transition needs to feel more natural lol
    //   setDisplay(1);
    // }

    return () => clearInterval(interval);
  }, [squirrelX, squirrelY, targetX, targetY, isMoving, stride])

  // Engine for map movement in response to squirrel
  useEffect(() => {
    // Left edge of view in terms of pixel location on map
    const leftEdge = Math.round(viewLocVH*vh - 50*vw);
    // Right edge of view in terms of pixel location on map
    const rightEdge = Math.round(leftEdge + 100*vw);
    // Left edge of squirrel center grid cell in terms of pixels on map
    const squirrelVWL = Math.round(squirrelX * constants.cellDimVH*vh)
    // Right edge of squirrel center grid cell in terms of pixels on map
    const squirrelVWR = Math.round(squirrelVWL + constants.cellDimVH*vh)
    // Shift if squirrel is reasonably close to edge
    // console.log('leftEdge:', leftEdge, 'rightEdge:', rightEdge, 'VWL:', squirrelVWL, 'VWR:', squirrelVWR)
    if (leftEdge > 1 && squirrelVWL <= leftEdge + 2*constants.cellDimVH*vh) {
      setviewLocVH(viewLocVH - 6*constants.cellDimVH)
    } else if (rightEdge < 200*vh && squirrelVWR >= rightEdge - 2*constants.cellDimVH*vh) {
      setviewLocVH(viewLocVH + 6*constants.cellDimVH)
    }
  }, [squirrelX, vw, vh]);

  // Engine for room labels/signs in response to map position
  useEffect(() => {
    // Left edge of view in terms of pixel location on map
    const leftEdge = Math.round(viewLocVH*vh - 50*vw);
    const leftEdgeCell = Math.round(leftEdge / (constants.cellDimVH*vh));
    // Right edge of view in terms of pixel location on map
    const rightEdge = Math.round(leftEdge + 100*vw);
    const rightEdgeCell = Math.round(rightEdge / (constants.cellDimVH*vh));
    // TODO: this is a lot of code repeat -> you should make a function lol
    // FAQ sign x coords (not rounded)
    const faqSignStartPix = (rooms.faq.signStart[0] - 1) * constants.cellDimVH*vh;
    const faqSignEndPix   = (rooms.faq.signStart[0] + constants.signCellWidth - 1) * constants.cellDimVH*vh;
    console.log('faqSignCoords:', faqSignStartPix, faqSignEndPix)
    console.log('window coords:', leftEdge, rightEdge);
    if (faqSignStartPix >= leftEdge && faqSignEndPix <= rightEdge) {
      setFaqSignX(rooms.faq.signStart[0]);
    } else if (faqSignStartPix < leftEdge) {
      setFaqSignX(leftEdgeCell);
    } else {
      setFaqSignX(rightEdgeCell - constants.signCellWidth + 1);
    }
    // Schedule sign x coords (not rounded)
    const scheduleSignStartPix = (rooms.schedule.signStart[0] - 1) * constants.cellDimVH*vh;
    const scheduleSignEndPix   = (rooms.schedule.signStart[0] + constants.signCellWidth - 1) * constants.cellDimVH*vh;
    if (scheduleSignStartPix >= leftEdge && scheduleSignEndPix <= rightEdge) {
      setScheduleSignX(rooms.schedule.signStart[0]);
    } else if (scheduleSignStartPix < leftEdge) {
      setScheduleSignX(leftEdgeCell);
    } else {
      setScheduleSignX(rightEdgeCell - constants.signCellWidth + 1);
    }
    // Sponsors sign x coords (not rounded)
    const sponsorsSignStartPix = (rooms.sponsors.signStart[0] - 1) * constants.cellDimVH*vh;
    const sponsorsSignEndPix   = (rooms.sponsors.signStart[0] + constants.signCellWidth - 1) * constants.cellDimVH*vh;
    if (sponsorsSignStartPix >= leftEdge && sponsorsSignEndPix <= rightEdge) {
      setSponsorsSignX(rooms.sponsors.signStart[0]);
    } else if (sponsorsSignStartPix < leftEdge) {
      setSponsorsSignX(leftEdgeCell);
    } else {
      setSponsorsSignX(rightEdgeCell - constants.signCellWidth + 1);
    }
    // Keynote speakers sign x coords (not rounded)
    const speakersSignStartPix = (rooms.speakers.signStart[0] - 1) * constants.cellDimVH*vh;
    const speakersSignEndPix   = (rooms.speakers.signStart[0] + constants.signCellWidth - 1) * constants.cellDimVH*vh;
    if (speakersSignStartPix >= leftEdge && speakersSignEndPix <= rightEdge) {
      setSpeakersSignX(rooms.speakers.signStart[0]);
    } else if (speakersSignStartPix < leftEdge) {
      setSpeakersSignX(leftEdgeCell);
    } else {
      setSpeakersSignX(rightEdgeCell - constants.signCellWidth + 1);
    }
  }, [vw, vh, viewLocVH])

  // Engine for visiting rooms
  useEffect(() => {
    if (!isMoving) {
      // go to faq
      if (squirrelX == rooms.faq.door[0] && squirrelY == rooms.faq.door[1]) {
        setDisplay(rooms.faq.display);
      } else if (squirrelX == rooms.schedule.door[0] && squirrelY == rooms.schedule.door[1]) {
        setDisplay(rooms.schedule.display);
      } else if (squirrelX == rooms.speakers.door[0] && squirrelY == rooms.speakers.door[1]) {
        setDisplay(rooms.speakers.display);
      } else if (squirrelX == rooms.sponsors.door[0] && squirrelY == rooms.sponsors.door[1]) {
        setDisplay(rooms.sponsors.display);
      } 
    }
  }, [isMoving])

  // reference to the background map
  const mapRef = useRef(null);

  const initiateMovement = e => {
    setMoving(true);
    // console.log('isMoving:', isMoving)
    console.log('yoL', e.target == mapRef.current)
    if (e.target == mapRef.current) {
      console.log('MOVING!')
      const rect = e.target.getBoundingClientRect()
      // Discretize x and y into grid cells
      const x = Math.round(constants.gridWidth * (e.clientX - rect.left) / constants.rectWidth)
      setTargetX(Math.min(x, constants.gridWidth - 2));
      const y = Math.round(constants.gridHeight * (e.clientY - rect.top) / constants.rectHeight)
      setTargetY(Math.min(y, constants.gridWidth));
    }
  }

  // Function for when you click on a room sign and it takes you there
  const shortcut = (e, roomID) => {
    e.preventDefault();
    setTargetX(rooms[roomID].door[0]);
    setTargetY(rooms[roomID].door[1]);
  }

  // STYLES !!!!!!!
  const boardStyle = {
    left: `calc(50vw - ${viewLocVH}vh)`
  }
  const squirrelStyle = {
    gridColumn: `${squirrelX - 1} / ${squirrelX + 2}`,
    gridRow: `${squirrelY - 2} / ${squirrelY + 1}`,
  }
  const faqStyle = {
    gridColumn: `${faqSignX} / ${faqSignX + constants.signCellWidth}`,
    gridRow: `${rooms.faq.signStart[1]} / ${rooms.faq.signStart[1] + constants.signCellHeight}`,
  }
  const scheduleStyle = {
    gridColumn: `${scheduleSignX} / ${scheduleSignX + constants.signCellWidth}`,
    gridRow: `${rooms.schedule.signStart[1]} / ${rooms.schedule.signStart[1] + constants.signCellHeight}`,
  }
  const sponsorsStyle = {
    gridColumn: `${sponsorsSignX} / ${sponsorsSignX + constants.signCellWidth}`,
    gridRow: `${rooms.sponsors.signStart[1]} / ${rooms.sponsors.signStart[1] + constants.signCellHeight}`,
  }
  const speakersStyle = {
    gridColumn: `${speakersSignX} / ${speakersSignX + constants.signCellWidth}`,
    gridRow: `${rooms.speakers.signStart[1]} / ${rooms.speakers.signStart[1] + constants.signCellHeight}`,
  }
  

  return (
    <div>
      {display == null ?
        <div id={styles.gameBoard} onClick={initiateMovement} style={boardStyle}>
          {/* can't do this via CSS background image b/c won't fit properly */}
          <img className={styles.gridBackground} src={map} ref={mapRef}/>
          <animated.img
            id={styles.squirrel}
            src={squirrelPose}
            style={{ ...squirrelStyle, ...bounce }} />
          <animated.button className='nes-btn is-normal'
                           style={faqStyle}
                           onClick={e => shortcut(e, 'faq')}>FAQ</animated.button>
          <animated.button className='nes-btn is-normal'
                           style={scheduleStyle}
                           onClick={e => shortcut(e, 'schedule')}>Schedule</animated.button>
          <animated.button className='nes-btn is-normal'
                           style={sponsorsStyle}
                           onClick={e => shortcut(e, 'sponsors')}>Sponsors</animated.button>
          <animated.button className='nes-btn is-normal'
                           style={speakersStyle}
                           onClick={e => shortcut(e, 'speakers')}>Keynote Speakers</animated.button>
        </div> : display}
    </div>
  )
}

export default Game;