import React, { useState } from 'react';
import * as styles from './FAQRoom.module.css'

const FAQRoom: React.FC<{}> = (props) => {
    return (
        <div className={styles.room}>
            <h1>Room FAQ</h1>
            <button onClick={() => props.setDisplay(0)}>Click</button>
        </div>
    )
}

export default FAQRoom