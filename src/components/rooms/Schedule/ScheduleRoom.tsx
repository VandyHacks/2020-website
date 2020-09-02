import React, { useState } from 'react';
import * as styles from './ScheduleRoom.module.css'
import squirrel from '../../../assets/squirrel/right-rest.png'
import vh from '../../../assets/VH Pixel Logo.png'

const events = {
    'Fri': [
        ['7:00p', 'Opening Ceremony'],
        ['9:00p', 'Hacking begins'],
        ['9:00p', 'Big Data Workshop'],
        ['10:00p', 'Full-Stack Workshop with Angular'],
        ['11:00p', 'Full-Stack Workshop with React']
    ],
    'Sat': [
        ['8:00a', 'Google Cloud Workshop'],
        ['9:00a', 'Neural Networks Workshop'],
        ['10:00a', 'Open Source Workshop'],
        ['11:00a', 'React Native Workshop'],
        ['12:00p', 'SlackBot Workshop'],
        ['1:15p', 'Sponsor Event'],
        ['3:00p', 'Sponsor Event'],
        ['3:45p', 'Sponsor Event'],
        ['4:30p', 'Baking!'],
        ['5:30p', 'Typing competition'],
        ['6:30p', 'Zoomba'],
        ['9:00p', 'Skribbl.io'],
        ['10:30p', 'Guided meditation and mindfulness'],
        ['11:30p', 'How to solve a Rubix cube!'],
        
    ],
    'Sun': [
        ['8:00a', 'Hacking Ends'],
   ['10:30a', 'Judging'],
        ['3:00p', 'Closing Ceremony'],
    ]
}

const ScheduleRoom: ((props?: any) => JSX.Element) = () => {
    const [day, toggleDay] = useState('Fri');
    let schedule = events[day].map((event, i) => 
        
        <>
        <div key={event[0]} style={{gridRow: `${i + 1}`, gridColumn: '1'}}>
            {event[0]}
        </div>
        <div key={event[1]} style={{gridRow: `${i + 1}`, gridColumn: '2'}}>
            {event[1]}
        </div>
        </>
    );
    return (
        <div id={styles.scheduleRoom} className={styles.pxlBorder}>
            <div id={styles.dayToggle}>
                <button className='nes-btn is-normal' onClick={() => toggleDay('Fri')}>Fri <br /> 10/2</button>
                <button className='nes-btn is-normal' onClick={() => toggleDay('Sat')}>Sat <br /> 10/3</button>
                <button className='nes-btn is-normal' onClick={() => toggleDay('Sun')}>Sun <br /> 10/4</button>
            </div>
            <div id={styles.schedule} className={styles.borderedText}>
                {schedule}
            </div>
        </div>
    )
}

export default ScheduleRoom