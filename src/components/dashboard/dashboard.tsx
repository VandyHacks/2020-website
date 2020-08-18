import React, { useState, useEffect, useCallback } from 'react';
import { useSpring, animated, useTransition } from 'react-spring';
import { Keyframes } from 'react-spring/renderprops'
import Banner from '../../assets/retroedn-used.png';
import Maintitle from '../../assets/vandygoldhacks.png'
import Subtitle from '../../assets/thehackathon.png'
import DownArrow from '../../assets/downarrow.png';
import RetroLogo from '../../assets/VH Pixel Logo.png';
import FacebookLogo from '../../assets/facebook icon.png';
import InstagramLogo from '../../assets/instagram icon.png';
import GithubLogo from '../../assets/github icon.png';
import TwitterLogo from '../../assets/twitter icon.png';
import * as styles from './dashboard.module.css';
import Game from '../game/game';



const Top: React.FC<{}> = () => {
  const topText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  const bottomText = 'In each hemisphere of our brain, humans have a primary visual cortex, also known as V1, containing 140 million neurons, with tens of billions of connections between them. And yet human vision involves not just V1, but an entire series of visual cortices - V2, V3, V4, and V5 - '
  const [arrowDirection, setArrowDirection] = useState('down');
  const [content, setContent] = useState(topText)
  function toggleDisplay() {
    arrowDirection == 'up' ? setArrowDirection('down') : setArrowDirection('up');
    content == topText ? setContent(bottomText) : setContent(topText);
  }
  return (
    <div id={styles.top} className='nes-container is-dark is-rounded'>
      <div id={styles.title}>
        <img src={Banner} className={styles.titleItem}></img>
        <img src={Maintitle} className={styles.titleItem}></img>
        <img src={Subtitle} className={styles.titleItem}></img>
      </div>
      <div id={styles.about}>
        <div id={styles.text}>
          {content}
          {/* TODO: Make the text slide up and down */}
        </div>
        <img id={styles[arrowDirection]} className={styles.animateBlink} onClick={toggleDisplay} src={DownArrow} alt="DownArrow" />
      </div>
    </div>
  )
}

const Footer: React.FC<{}> = () => {
  <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
  return (
    <div id={styles.footerMain} className='nes-container is-dark is-rounded'>
      {/* <p>{'Made with <3 and < / > at VandyHacks'}</p> */}
        Contact us!
      <br />
        email@vanderbilt.edu
      <div id={styles.socials}>
        {/* Facebook Icon */}
        <a
          id="facebook-container"
          href="https://www.facebook.com/vandyhacks/"
          target="_blank"
          rel="noopener"
        >
          <img src={FacebookLogo} />
        </a>

        {/* <!-- Instagram Icon --> */}
        <a
          id="instagram-container"
          href="https://www.instagram.com/vandyhacks/"
          target="_blank"
          rel="noopener"
        >
          <img src={InstagramLogo} />
        </a>

        {/* <!-- Github Icon --> */}
        <a
          id="github-container"
          href="https://github.com/VandyHacks"
          target="_blank"
        >
          <img src={GithubLogo} />
        </a>

        {/* <!-- Twitter Icon --> */}
        <a
          id="twitter-container"
          href="https://twitter.com/vandyhacks"
          target="_blank"
          rel="noopener"
        >
          <img src={TwitterLogo} />
        </a>
      </div>
      <img id={styles.retroLogo} src={RetroLogo} alt="RetroLogo" />
    </div>
  );
}

const Dashboard: React.FC<{}> = () => {
  const [showDashboard, setShowDashboard] = useState(true);

  const slideUp = useSpring({
    config: { duration: 500 },
    transform: `translateY(${showDashboard ? 0 : -100}%)`,
  });

  const toggleButton = useSpring({
    config: { duration: 500 },
    visibility: showDashboard ? 'visible' : 'hidden',
    margin: '0 auto',
    width: 500
  });

  const slideDown = useSpring({
    config: { duration: 500 },
    transform: `translateY(${showDashboard ? 0 : 100}%)`,
  });

  return (
    <div id={styles.dashboard}>
      <>
        <animated.div style={slideUp}>
          <Top />
        </animated.div>
        <animated.div style={toggleButton}>
          <button
            id={styles.startButton}
            className={styles.animateFade}
            onClick={() => setShowDashboard(state => !state)}>
            press start to begin...
          </button>
        </animated.div>
        <animated.div style={slideDown}>
          <Footer />
        </animated.div>
      </>
    </div>
  );
}



export default Dashboard