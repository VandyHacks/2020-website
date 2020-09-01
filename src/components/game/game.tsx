// Modules
import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import DeviceOrientation, { Orientation } from 'react-screen-orientation'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import window from 'global';

// Images
import map from '../../assets/map.png';
import br from '../../assets/squirrel/back-rest.png';
import bw from '../../assets/squirrel/back-walk.png';
import fr from '../../assets/squirrel/front-rest.png';
import fw from '../../assets/squirrel/front-walk.png';
import lr from '../../assets/squirrel/left-rest.png';
import lw0 from '../../assets/squirrel/left-walk-0.png';
import lw1 from '../../assets/squirrel/left-walk-1.png';
import rw0 from '../../assets/squirrel/right-walk-0.png';
import rw1 from '../../assets/squirrel/right-walk-1.png';
import cone from '../../assets/constructionCone.png';

// Rooms
import FAQRoom from '../rooms/FAQ/FAQRoom';
import ScheduleRoom from '../rooms/Schedule/ScheduleRoom';
import SpeakersRoom from '../rooms/Speakers/SpeakersRoom';
import SponsorsRoom from '../rooms/Sponsors/SponsorsRoom';
import JudgesRoom from '../rooms/Judges/JudgesRoom';

import * as styles from './game.module.css'
import { navigateTo, navigate } from 'gatsby';

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
  const [displayID, setDisplayID]: [string, any] = useState('home');

  const scheduleRef = useRef(null);
  const speakersRef = useRef(null);
  const rooms = {
    'home': {
      'display': null,
      // 'displayID': 0,
      'signStart': null,
      'door': null,
    },
    'FAQ': {
      'display': <FAQRoom setDisplayID={setDisplayID} showMenu={props.showMenu} />,
      // 'displayID': 1,
      'signStart': [4, 5],
      'door': [7, 16],
    },
    'past': {
      'display': null, // TODO: need a component here when ready
      // 'displayID': 2,
      'signStart': [44, 3],
      'door': [45, 12],
    },
    'schedule': {
      'display': <ScheduleRoom ref={scheduleRef}/>,
      // 'displayID': 0,
      'signStart': [26, 7],
      'door': [29, 13],
    },
    'speakers':  {
      // TODO: judges AND speakers
      'display': <SpeakersRoom ref={speakersRef}/>,
      // 'displayID': 0,
      'signStart': [53, 12],
      'door': [53, 18],
    },
    'sponsors': {
      'display': <SponsorsRoom setDisplayID={setDisplayID} />,
      // 'displayID': 3,
      'signStart': [34, 1],
      'door': [37, 12],
    },
    'vaken': {
      'display': null,
      // 'displayID': 0,
      'signStart': [14, 9],
      'door': [17, 16],
    },
  }

  // Get window dimensions and distance btwn center of view and left edge of map
  const { vw, vh } = useWindowDims();
  const [viewLocVH, setviewLocVH] = useState(100);
  const [requestRotate, setRequestRotate] = useState(false);
  // The squirrel image that gets displayed, followed by its x and y coordinates
  const [squirrelPose, setSquirrelPose] = useState(fr);
  const [squirrelX, setSquirrelX] = useState(constants.startX);
  const [squirrelY, setSquirrelY] = useState(constants.startY);
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
  const [FAQSignX, setFAQSignX]           = useState(rooms.FAQ.signStart[0]);
  // TODO: UNDER CONSTRUCTION
  // const [pastSignX, setPastSignX]         = useState(44)
  const [pastSignX, setPastSignX]         = useState(rooms.past.signStart[0]);
  const [vakenSignX, setVakenSignX]       = useState(rooms.vaken.signStart[0]);
  const [sponsorsSignX, setSponsorsSignX] = useState(rooms.sponsors.signStart[0]);
  const [speakersSignX, setSpeakersSignX] = useState(rooms.speakers.signStart[0]);
  const [scheduleSignX, setScheduleSignX] = useState(rooms.schedule.signStart[0]);
  
  const [FAQText, setFAQText]           = useState('FAQ');
  const [pastText, setPastText]         = useState('Past Winners')
  const [vakenText, setVakenText]       = useState('Registration');
  const [scheduleText, setScheduleText] = useState('Schedule');
  const [speakersText, setSpeakersText] = useState('Speakers');
  const [sponsorsText, setSponsorsText] = useState('Coming soon!');

  // Toggle for modal components
  const [scheduleOpen, toggleScheduleOpen] = useState(false);
  const [speakersOpen, toggleSpeakersOpen] = useState(false);

  // Toggle for going to registration
  const [goToVaken, toggleGoToVaken] = useState(false);
  // Toggle for going to past winners
  const [goToDevpost, toggleGoToDevpost] = useState(false);

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
    }, 150);

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
    if (leftEdge > 1 && squirrelVWL <= leftEdge + 3*constants.cellDimVH*vh) {
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
    const FAQSignStartPix = (rooms.FAQ.signStart[0] - 1) * constants.cellDimVH*vh;
    const FAQSignEndPix   = (rooms.FAQ.signStart[0] + constants.signCellWidth - 1) * constants.cellDimVH*vh;
    console.log('FAQSignCoords:', FAQSignStartPix, FAQSignEndPix)
    console.log('window coords:', leftEdge, rightEdge);
    if (FAQSignStartPix >= leftEdge && FAQSignEndPix <= rightEdge) {
      setFAQSignX(rooms.FAQ.signStart[0]);
      setFAQText('FAQ');
    } else if (FAQSignStartPix < leftEdge) {
      setFAQSignX(leftEdgeCell);
      setFAQText('<<< FAQ');
    } else {
      setFAQSignX(rightEdgeCell - constants.signCellWidth + 1);
      setFAQText('FAQ >>>');
    }
    // FAQ sign x coords (not rounded)
    const PastSignStartPix = (rooms.past.signStart[0] - 1) * constants.cellDimVH*vh;
    const PastSignEndPix   = (rooms.past.signStart[0] + constants.signCellWidth - 1) * constants.cellDimVH*vh;
    console.log('PastSignWinners:', PastSignStartPix, PastSignEndPix)
    console.log('window coords:', leftEdge, rightEdge);
    if (PastSignStartPix >= leftEdge && PastSignEndPix <= rightEdge) {
      setPastSignX(rooms.past.signStart[0]);
      setPastText('Past Winners');
    } else if (PastSignStartPix < leftEdge) {
      setPastSignX(leftEdgeCell);
      setPastText('<<< Past Winners');
    } else {
      setPastSignX(rightEdgeCell - constants.signCellWidth + 1);
      setPastText('Past Winners >>>');
    }
    // Registration sign x coords (not rounded)
    const vakenSignStartPix = (rooms.vaken.signStart[0] - 1) * constants.cellDimVH*vh;
    const vakenSignEndPix   = (rooms.vaken.signStart[0] + constants.signCellWidth - 1) * constants.cellDimVH*vh;
    if (vakenSignStartPix >= leftEdge && vakenSignEndPix <= rightEdge) {
      setVakenSignX(rooms.vaken.signStart[0]);
      setVakenText('Registration');
    } else if (vakenSignStartPix < leftEdge) {
      setVakenSignX(leftEdgeCell);
      setVakenText('<<< Registr.');
    } else {
      setVakenSignX(rightEdgeCell - constants.signCellWidth + 1);
      setVakenText('Registr. >>>');
    }
    // Schedule sign x coords (not rounded)
    const scheduleSignStartPix = (rooms.schedule.signStart[0] - 1) * constants.cellDimVH*vh;
    const scheduleSignEndPix   = (rooms.schedule.signStart[0] + constants.signCellWidth - 1) * constants.cellDimVH*vh;
    if (scheduleSignStartPix >= leftEdge && scheduleSignEndPix <= rightEdge) {
      setScheduleSignX(rooms.schedule.signStart[0]);
      setScheduleText('Schedule');
    } else if (scheduleSignStartPix < leftEdge) {
      setScheduleSignX(leftEdgeCell);
      setScheduleText('<<< Schedule');
    } else {
      setScheduleSignX(rightEdgeCell - constants.signCellWidth + 1);
      setScheduleText('Schedule >>>');
    }
    // // Sponsors sign x coords (not rounded)
    // const sponsorsSignStartPix = (rooms.sponsors.signStart[0] - 1) * constants.cellDimVH*vh;
    // const sponsorsSignEndPix   = (rooms.sponsors.signStart[0] + constants.signCellWidth - 1) * constants.cellDimVH*vh;
    // if (sponsorsSignStartPix >= leftEdge && sponsorsSignEndPix <= rightEdge) {
    //   setSponsorsSignX(rooms.sponsors.signStart[0]);
    //   setSponsorsText('Sponsors');
    // } else if (sponsorsSignStartPix < leftEdge) {
    //   setSponsorsSignX(leftEdgeCell);
    //   setSponsorsText('<<< Sponsors');
    // } else {
    //   setSponsorsSignX(rightEdgeCell - constants.signCellWidth + 1);
    //   setSponsorsText('Sponsors >>>');
    // }
    // Keynote speakers sign x coords (not rounded)
    const speakersSignStartPix = (rooms.speakers.signStart[0] - 1) * constants.cellDimVH*vh;
    const speakersSignEndPix   = (rooms.speakers.signStart[0] + constants.signCellWidth - 1) * constants.cellDimVH*vh;
    if (speakersSignStartPix >= leftEdge && speakersSignEndPix <= rightEdge) {
      setSpeakersSignX(rooms.speakers.signStart[0]);
      setSpeakersText('Speakers & judges');
    } else if (speakersSignStartPix < leftEdge) {
      setSpeakersSignX(leftEdgeCell);
      setSpeakersText('<<< Speakers & judge');
    } else {
      setSpeakersSignX(rightEdgeCell - constants.signCellWidth + 1);
      setSpeakersText('Speakers & judges >>>');
    }
  }, [vw, vh, viewLocVH])

  // Engine for visiting rooms
  useEffect(() => {
    if (!isMoving) {
      // go to FAQ
      if (squirrelX == rooms.FAQ.door[0] && squirrelY == rooms.FAQ.door[1]) {
        setDisplayID('FAQ');
        props.showMenu(false);
      }
      else if (squirrelX == rooms.past.door[0] && squirrelY == rooms.past.door[1]) {
        toggleGoToDevpost(true);
        props.showMenu(false);
      } else if (squirrelX == rooms.schedule.door[0] && squirrelY == rooms.schedule.door[1]) {
        // setDisplay(rooms.schedule.display);
        toggleScheduleOpen(true);
        props.showMenu(false);
      } else if (squirrelX == rooms.speakers.door[0] && squirrelY == rooms.speakers.door[1]) {
        toggleSpeakersOpen(true);
        props.showMenu(false);
      }
      // } else if (squirrelX == rooms.sponsors.door[0] && squirrelY == rooms.sponsors.door[1]) {
      //   setDisplayID('sponsors');
      // } 
      else if (squirrelX == rooms.vaken.door[0] && squirrelY == rooms.vaken.door[1]) {
        toggleGoToVaken(true);
        props.showMenu(false);
      }
    }
  }, [isMoving])

  // reference to the background map
  const mapRef = useRef(null);

  const initiateMovement = e => {
    setMoving(true);
    // console.log('isMoving:', isMoving)
    // Move if clicking on map and no modals open
    if (e.target == mapRef.current && !scheduleOpen && !speakersOpen) {
      console.log('MOVING!')
      const rect = e.target.getBoundingClientRect()
      console.log(rect)
      // Discretize x and y into grid cells
      const x = Math.floor(constants.gridWidth * (e.clientX - rect['left']) / rect.width) + 1
      setTargetX(Math.min(x, constants.gridWidth - 2)); // squirrel is 3 pixels wide, can't be going off screen
      const y = Math.floor(constants.gridHeight * (e.clientY) / rect.height) + 1
      setTargetY(Math.min(y, constants.gridWidth));
      console.log('CLICKED:', x, y)
      console.log('rect-left:', rect['left'])
    }
    if (e.target != scheduleRef.current && scheduleOpen) {
      setTargetY(targetY + 1); // move squirrel so it doesn't immediately reopen
      toggleScheduleOpen(false);
      props.showMenu(true);
    }
    if (e.target != speakersRef.current && speakersOpen) {
      setTargetY(targetY + 1);
      toggleSpeakersOpen(false);
      props.showMenu(true);
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
    right: `calc(50vw - ${viewLocVH}vh)`,

    left: `calc(50vw - ${viewLocVH}vh)`,
  }
  const squirrelStyle = {
    gridColumn: `${squirrelX - 1} / ${squirrelX + 2}`,
    gridRow: `${squirrelY - 2} / ${squirrelY + 1}`,
  }
  const FAQStyle = {
    gridColumn: `${FAQSignX} / ${FAQSignX + constants.signCellWidth}`,
    gridRow: `${rooms.FAQ.signStart[1]} / ${rooms.FAQ.signStart[1] + constants.signCellHeight}`,
  }
  const pastStyle = {
    gridColumn: `${pastSignX} / ${pastSignX + constants.signCellWidth}`,
    gridRow: `${rooms.past.signStart[1]} / ${rooms.past.signStart[1] + constants.signCellHeight}`,
  }
  const vakenStyle = {
    gridColumn: `${vakenSignX} / ${vakenSignX + constants.signCellWidth}`,
    gridRow: `${rooms.vaken.signStart[1]} / ${rooms.vaken.signStart[1] + constants.signCellHeight}`,
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

  if (goToVaken) {
    window.open('https://apply.vandyhacks.org');
    toggleGoToVaken(false);

  } else if (goToDevpost) {
    window.open('https://vandyhacksvi.devpost.com/project-gallery');
    toggleGoToDevpost(false);
  }

    // // Engine for squirrel movement
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (goToDevpost) {
    //       window.location.href = 'https://vandyhacksvi.devpost.com/project-gallery';
    //     }
    //     if (goToVaken) {
    //       window.location.href = 'https://apply.vandyhacks.org';
    //     }
    //   }, 50);
  
    //   return () => clearInterval(interval);
    // }, [goToVaken, goToDevpost])

  return (
    <div>
      {
        displayID == 'home' ?
        <div id={styles.gameBoard} onClick={initiateMovement} style={boardStyle}>
          {/* can't do this via CSS background image b/c won't fit properly */}
          <img className={styles.gridBackground} src={map} ref={mapRef}/>
          {/* UNDER CONSTRUCTION ASSETS */}

          <img style={{gridArea: '13 / 34', margin: 0}} src={cone} />
          <img style={{gridArea: '13 / 36', margin: 0}} src={cone} />
          <img style={{gridArea: '13 / 38', margin: 0}} src={cone} />
          <img style={{gridArea: '13 / 40', margin: 0}} src={cone} />
          <animated.img
            id={styles.squirrel}
            src={squirrelPose}
            style={{ ...squirrelStyle, ...bounce }} />
          <animated.button className='nes-btn is-success'
                           style={FAQStyle}
                           onClick={e => shortcut(e, 'FAQ')}>{FAQText}</animated.button>
          <animated.button className='nes-btn is-success'
                           style={pastStyle}
                           onClick={e => shortcut(e, 'past')}>{pastText}</animated.button>      
          <animated.button className='nes-btn is-primary'
                           style={vakenStyle}
                           onClick={e => shortcut(e, 'vaken')}>{vakenText}</animated.button>
          <animated.button className='nes-btn is-success'
                           style={scheduleStyle}
                           onClick={e => shortcut(e, 'schedule')}>{scheduleText}</animated.button>
          <animated.button className='nes-btn is-disabled'
                           style={sponsorsStyle}
                           onClick={e => shortcut(e, 'sponsors')}>{sponsorsText}</animated.button>
          <animated.button className='nes-btn is-success'
                           style={speakersStyle}
                           onClick={e => shortcut(e, 'speakers')}>{speakersText}</animated.button>
        </div> : rooms[displayID].display}
        { scheduleOpen ? rooms.schedule.display : null}
        { speakersOpen ? rooms.speakers.display : null}
    </div>
  )
}

export default Game;