import React, { useState } from 'react';
import Col from './collapsible'
interface ScheduleItemProps {
    times: string,
    title: string,
    desc: string,
}

const ScheduleItem = (props: ScheduleItemProps) => {
    
    return (
        <>
        <div /* Style to be put in later, so it's mad basic rn */ >
            <div>
                {props.times}
            </div>
            <Col trigger={props.title} content={props.desc}/>
        </div>
        </>
    );
}

export default ScheduleItem;
// export default ScheduleItem;