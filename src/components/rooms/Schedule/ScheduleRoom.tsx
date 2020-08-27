import React, { useState } from 'react';
import * as styles from './ScheduleRoom.module.css'
import squirrel from '../../../assets/squirrel/right-rest.png'
import vh from '../../../assets/VH Pixel Logo.png'

const events = {
    'Fri': [
        ['7:45p', 'Opening Ceremony'],
        ['9:00p', 'Workshop1'],
        ['10:00p', 'Workshop2'],
        ['11:00p', 'Workshop3']
    ],
    'Sat': [
        ['8:00a', 'Workshop4'],
        ['9:00a', 'Workshop5'],
        ['10:00a', 'Workshop6'],
        ['11:00a', 'Workshop7'],
        ['12:00p', 'Workshop8'],
        ['1:15p', 'Sponsor1'],
        ['3:00p', 'Sponsor2'],
        ['3:45p', 'Sponsor3'],
        ['4:30p', 'Event1'],
        ['5:30p', 'Event2'],
        ['6:30p', 'Event3'],
        ['9:00p', 'Event4'],
        ['10:30p', 'Event5'],
        ['11:30p', 'Event6'],
        
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
                <button className='nes-btn is-normal' onClick={() => toggleDay('Fri')}>Friday <br /> 10/2</button>
                <button className='nes-btn is-normal' onClick={() => toggleDay('Sat')}>Saturday <br /> 10/3</button>
                <button className='nes-btn is-normal' onClick={() => toggleDay('Sun')}>Sunday <br /> 10/4</button>
            </div>
            <div id={styles.schedule} className={styles.borderedText}>
                {schedule}
            </div>
        </div>
    )
}

export default ScheduleRoom