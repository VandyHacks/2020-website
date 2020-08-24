import React, { useState } from 'react';
import * as styles from './ScheduleRoom.module.css'
import squirrel from '../../../assets/squirrel/right-rest.png'
import vh from '../../../assets/VH Pixel Logo.png'

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

const ScheduleRoom: React.FC<{}> = () => {
    const [day, toggleDay] = useState('Fri');
    let len = events[day].length
    console.log(len)
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
        <div id={styles.scheduleRoom} className='nes-container is-rounded'>
            <div id={styles.dayToggle}>
                <button className='nes-btn is-normal' onClick={() => toggleDay('Fri')}>Friday <br /> 10/2</button>
                <button className='nes-btn is-normal' onClick={() => toggleDay('Sat')}>Saturday <br /> 10/3</button>
                <button className='nes-btn is-normal' onClick={() => toggleDay('Sun')}>Sunday <br /> 10/4</button>
            </div>
            <div id={styles.schedule}
                 className="nes-balloon from-left">
                {schedule}
                {/* {descs}   */}
            </div>
            {/* <i className="nes-bcrikko"></i> */}
            <img src={squirrel} />
        </div>
    )
}

export default ScheduleRoom