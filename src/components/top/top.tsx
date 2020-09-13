import React, { useState, useRef } from 'react';

import * as styles from './top.module.css';

import Banner from '../../assets/retroedn-used.png';
import Maintitle from '../../assets/vandygoldhacks.png'
import Subtitle from '../../assets/thehackathon.png'
import DownArrow from '../../assets/downarrow.png';


const Top: ((props?: any) => JSX.aboutRef.current) = () => {
    const topText = 'October 2-4'
    const bottomText = 'VandyHacks is Vanderbilt’s student-run hackathon, where participants from all over the world create innovative projects over the course of 36 hours. This year, our hackathon will be held virtually on October 2nd-4th, meaning you can participate from the comfort of your own home! Come learn new topics with recorded workshops ranging from open source software to creating your own SlackBot. Meet our sponsors at their networking events. Unwind with other fellow hackers with a round of Skribbl.io or virtual baking. This year, we are excited to host some stellar guest speakers. Your project also has the chance to win some of our cool prizes! '
    const [arrowDirection, setArrowDirection] = useState('down');
    const [content, setContent] = useState(<div id={styles.dates}>{topText}</div>)
    const aboutRef = useRef(null);
    const scrollDown = () => {
        aboutRef.current.scrollTop = aboutRef.current.scrollHeight - aboutRef.current.clientHeight;
    }
    return (
        <div id={styles.top} className='nes-container is-dark'>
            <div id={styles.title}>
                <img src={Banner}></img>
                <img src={Maintitle}></img>
                <img src={Subtitle}></img>
            </div>
            <div id={styles.dates}>{topText}</div>
            <div id={styles.about} ref={aboutRef}>{bottomText}</div>
            <img src={DownArrow} id={styles.downArrow} onClick={scrollDown}/>
            {/* <img id={styles[arrowDirection]} className={styles.animateBlink} onClick={toggleDisplay} src={DownArrow} alt="DownArrow" /> */}
        </div>
    )
}

export default Top
