import React, { useState } from 'react';
import * as styles from './FAQRoom.module.css';
import { retroBox } from '../../layout/layout.module.css'
import avatar from '../../../assets/faqAvatar.png';

const FAQRoom: ((props: any) => JSX.Element) = (props) => {
    const introText = "Hi! I'm Dan. Ask me anything.";
    const [mainDialogue, setMainDialogue] = useState(introText);

    // const buttons = 
    return (
        <div className={styles.room}>
            <button id={styles.backButton} className='nes-btn is-normal' 
                onClick={() => props.setDisplayID('home')}>Back</button>
            <img src={avatar} id={styles.avatar} />
            <div id={styles.dialogue} className={[`${styles.dialogue}`, `${retroBox}`].join(' ')}>
                <p className={styles.dialogueTitle}>~Dan Awena~</p>
                <p>{mainDialogue}</p>
                <div id={styles.dialogueChoices}>
                    <button onClick={() => { setMainDialogue("You fell for it, fool! Thunder Cross Split Attack!") }} className={styles.dialogueButton}>cwick me uwu</button>
                    <button className={styles.dialogueButton}>ask me more</button>
                    <button className={styles.dialogueButton}>ask me more</button>
                </div>
            </div>
        </div>
    )
}

export default FAQRoom