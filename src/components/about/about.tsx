import React, { useState } from 'react';
import * as styles from './about.module.css'
import DownArrow from '../../assets/downarrow.png';
  
const About: React.FC<{}> = () => {
  <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
  const topText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  const bottomText = 'Jeffrey Woods, also more commonly known as Jeff the Killer, is the titular villainous protagonist of the creepypasta story of the same name by the brother of GameFuelTv, who loses his sanity and becomes a serial killer to satisfy his homicidal urges. Jeff became one of the largest creepypasta icons to date, even rivaling Slender Man of all creepypastas. He is a teenage boy, who was a caring youth and deeply cared about his brother Liu. As a killer, this changed and he became a vengeful, dangerous, and bloodthirsty sociopath.'
  const [arrowDirection, setArrowDirection] = useState('down');
  const [content, setContent] = useState(topText)
  function toggleDisplay() {
    arrowDirection == 'up' ? setArrowDirection('down') : setArrowDirection('up');
    content == topText ? setContent(bottomText) : setContent(topText);
  }
  return (
    <div id={styles.about} className='nes-container is-dark is-rounded'>
      <div id={styles.text}>
        {content}
        {/* TODO: Make the text slide up and down */}
      </div>
      <img id={styles[arrowDirection]} onClick={toggleDisplay} src={DownArrow} alt="DownArrow" />
    </div>
  )
}
export default About