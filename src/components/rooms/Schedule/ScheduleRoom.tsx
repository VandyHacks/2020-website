import React, { useState } from 'react';
import * as styles from './ScheduleRoom.module.css'
import { outlined, retroBox } from '../../../pages/index.module.css'
import squirrel from '../../../assets/squirrel/right-rest.png'
import vh from '../../../assets/VH Pixel Logo.png'

const events = {
    'Fri': [
        ['7:00p', 'Opening Ceremony'],
        ['7:00p', 'Keynote Speaker - Authors of Swipe to Unlock: Business Strategy for Technologists'],
        ['7:50p', 'Keynote Speaker - Jeffrey Rothschild'],
        ['9:00p', 'Hacking begins'],
        ['9:00p', 'Full-Stack Workshop w/ Angular'],
        ['10:00p', 'Intro to Open Source Workshop'],
        ['11:00p', 'SlackBot Workshop']
    ],
    'Sat': [
        ['8:00a', 'Neural Networks Workshop'],
        ['9:00a', 'React Native Workshop'],
        ['10:00a', 'Big Data Workshop'],
        ['11:00a', 'Google Cloud Workshop'],
        ['1:00p', 'Sponsor Career Fair'],
        ['3:30p', 'Zoomba'],
        ['4:30p', 'MLH Werewolf'],
        ['4:45p', 'Exploring Data-Driven Advocacy'],
        ['5:00p', 'Let\'s Bake Together!'],
        ['6:00p', 'MLH Capture the Flag'],
        ['6:30p', 'Keynote Speaker - Karl Mehta'],
        ['7:20p', 'Skribbl.io'],
        ['8:00p', 'Keynote Speaker - Shauna McIntyre'],
        ['9:00p', 'Typing Competition!'],
        ['10:30p', 'Guided meditation and mindfulness'],
        ['11:30p', 'How to solve a Rubik\'s cube!'],
        
    ],
    'Sun': [
        ['8:30a', 'Hacking Ends'],
        ['8:30a', 'Make your Demo!'],
        ['8:30a', 'How to Demo Workshop'],
        ['9:45a', 'Skribbl.io'],
        ['10:30a', 'Keynote Speaker - Thiago Olson'],
        ['10:30a', 'Judging'],
        ['1:20p', 'Keynote Speaker - Jennison Asuncion'],
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
        <div id={styles.scheduleRoom} className={retroBox}>
            <div id={styles.dayToggle}>
                <button className='nes-btn is-normal' onClick={() => toggleDay('Fri')}>Fri <br /> 10/2</button>
                <button className='nes-btn is-normal' onClick={() => toggleDay('Sat')}>Sat <br /> 10/3</button>
                <button className='nes-btn is-normal' onClick={() => toggleDay('Sun')}>Sun <br /> 10/4</button>
            </div>
            <div id={styles.schedule} className={outlined}>
                {schedule}
            </div>
        </div>
    )
}

export default ScheduleRoom
