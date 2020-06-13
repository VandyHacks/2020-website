import React, { useState } from 'react';
import * as styles from './about.module.css'
import DownArrow from '../../assets/downarrow.png';
  
const About: React.FC<{}> = () => {
  <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
  const [arrowDirection, setArrowDirection] = useState('down');
  const [content, setContent] = useState('top')
  function toggleDisplay() {
    arrowDirection == 'up' ? setArrowDirection('down') : setArrowDirection('up');
    content == 'top' ? setContent('bottom') : setContent('bottom')
  }
  return (
    <div id={styles.about} className='nes-container is-dark is-rounded'>
      <div id={styles.text}>
        {/* TODO: Make the text slide up and down */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </div>
      <img id={styles[arrowDirection]} onClick={toggleDisplay} src={DownArrow} alt="DownArrow" />
    </div>
  )
}
export default About