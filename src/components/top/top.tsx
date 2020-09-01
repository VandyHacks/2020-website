import React, { useState } from 'react';

import * as styles from './top.module.css';

import Banner from '../../assets/retroedn-used.png';
import Maintitle from '../../assets/vandygoldhacks.png'
import Subtitle from '../../assets/thehackathon.png'
import DownArrow from '../../assets/downarrow.png';


const Top: ((props?: any) => JSX.Element) = () => {
    const topText = 'October 2-4'
    const bottomText = 'VandyHacks is Vanderbilt’s student-run hackathon, where participants from all over the country create innovative and meaningful projects over the course of 36 hours. This year, our hackathon will be held virtually on July 10th-12th, meaning you can participate from the comfort of your own home! Come learn new topics with recorded workshops ranging from open source code to creating your own SlackBot. Meet and unwind with other fellow hackers with a round of Skribbl.io or virtual baking. Your project also has the chance to win some of our cool prizes! '
    const [arrowDirection, setArrowDirection] = useState('down');
    const [content, setContent] = useState(<div id={styles.dates}>{topText}</div>)

    function toggleDisplay() {
        if (arrowDirection == 'down') {
            setArrowDirection('up');
            setContent(<div>{bottomText}</div>);
        }
        else {
            setArrowDirection('down');
            setContent(<div id={styles.dates}>{topText}</div>)
        }
    }

    return (
        <div id={styles.top} className='nes-container is-dark is-rounded'>
            <div id={styles.title}>
                <img src={Banner}></img>
                <img src={Maintitle}></img>
                <img src={Subtitle}></img>
            </div>
            <div id={styles.about}>
                {content}
            </div>
            <img id={styles[arrowDirection]} className={styles.animateBlink} onClick={toggleDisplay} src={DownArrow} alt="DownArrow" />
        </div>
    )
}

export default Top