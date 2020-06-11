import React, { useState }from 'react';
import * as styles from './about.module.css'
  
const About: React.FC<{}> = () => {
  return (
  <div id={styles.about}>
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
    <div className='nes-container is-rounded'>
      This is the about section.
      <br />
      I see.
    </div>
  </div>
  )
}
export default About