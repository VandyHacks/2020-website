import React, { useState } from 'react';
import * as styles from './about.module.css'
import DownArrow from '../../assets/downarrow.png';
  
const About: React.FC<{}> = () => {
  const topText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  const bottomText = 'In each hemisphere of our brain, humans have a primary visual cortex, also known as V1, containing 140 million neurons, with tens of billions of connections between them. And yet human vision involves not just V1, but an entire series of visual cortices - V2, V3, V4, and V5 - doing progressively more complex image processing. We carry in our heads a supercomputer, tuned by evolution over hundreds of millions of years'
  const [arrowDirection, setArrowDirection] = useState('down');
  const [content, setContent] = useState(topText)
  function toggleDisplay() {
    arrowDirection == 'up' ? setArrowDirection('down') : setArrowDirection('up');
    content == topText ? setContent(bottomText) : setContent(topText);
  }
  return (
    <div>
      <div id={styles.about} className='nes-container is-dark is-rounded'>
        <div id={styles.text}>
          {content}
          {/* TODO: Make the text slide up and down */}
        </div>
        <img id={styles[arrowDirection]} onClick={toggleDisplay} src={DownArrow} alt="DownArrow" />
      </div>
    </div>
  )
}
export default About