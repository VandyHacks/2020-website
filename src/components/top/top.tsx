import React, { useState } from 'react';

import * as styles from './top.module.css';

import Banner from '../../assets/retroedn-used.png';
import Maintitle from '../../assets/vandygoldhacks.png'
import Subtitle from '../../assets/thehackathon.png'
import DownArrow from '../../assets/downarrow.png';


const Top: ((props?: any) => JSX.Element) = () => {
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