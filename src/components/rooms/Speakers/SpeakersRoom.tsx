import React, { useState } from 'react';
import * as styles from './SpeakersRoom.module.css'

const events = {
    'Fri': [
        ['9:30p', 'Go to bed'],
        ['12:50a', 'Wake up'],
        ['1:70a', 'Go to Egypt'],
        ['1:71a', 'Stop time'],
        ['5:09a', 'Get nerfed'],
    ],
    'Sat': [
        ['10:00a', 'Visit your uncle'],
        ['9:59a', 'You have a daughter'],
        ['12:00p', 'Your grandfather is senile'],
        ['1:00p', 'You wear white now'],
        ['5:00p', 'EXPLOOOOOOOOOOSION!'],
        ['6:00p', 'hayato'],
        ['10:00p', 'wow so dependable im glad i met u'],
        ['12:00a', 'ora ora bish'],
    ],
    'Sun': [
        ['4:00p', 'redesigned waow'],
        ['5:00p', 'your 15yo great great uncle is mad skinny'],
        ['10:00p', 'gang violence'],
    ]
}

const SpeakersRoom: ((props?: any) => JSX.Element) = () => {
    return (
        <div id={styles.speakersRoom} className='nes-container is-rounded'>
            <div id={styles.selection}>
                ...
            </div>
        </div>
    )
}

export default SpeakersRoom