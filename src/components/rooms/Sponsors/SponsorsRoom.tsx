import React, { useState } from 'react';

import * as styles from './SponsorsRoom.module.css';

const SponsorsRoom: ((props?: any) => JSX.Element) = (props) => {
    const introText = "lorem ipsum";
    const [mainDialogue, setMainDialogue] = useState(introText);

    return (
        <div className={styles.room}>
            <button id={styles.backButton} onClick={() => props.setDisplayID('home')}>Back</button>
            <div id={styles.dialogue} className='nes-container is-dark is-rounded'>
                <p className={styles.dialogueTitle}>~Sponsor Awena~</p>
                <p>{mainDialogue}</p>
                <div id={styles.dialogueChoices}>
                    <button onClick={() => { //console.log('uwu clicked') }} className={styles.dialogueButton}>cwick me uwu</button>
                    <button className={styles.dialogueButton}>ask me more</button>
                    <button className={styles.dialogueButton}>ask me more</button>
                </div>
            </div>
        </div>
    )
}

export default SponsorsRoom