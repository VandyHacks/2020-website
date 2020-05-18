import React, { useState } from 'react';
import Col from './collapsible'
interface ScheduleItemProps {
    times: string,
    title: string,
    desc: string,
}

const ScheduleItem = (props: ScheduleItemProps) => {
    const times = useState(props.times)[0];
    const title = useState(props.title)[0];
    const desc = useState(props.desc)[0];
    return (
        <>
        <div /* Style to be put in later, so it's mad basic rn */ >
            <div>
                {times}
            </div>
            <Col trigger={title} content={desc}/>
        </div>
        </>
    );
}

export default ScheduleItem;
// export default ScheduleItem;