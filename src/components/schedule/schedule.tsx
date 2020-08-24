import React from 'react';
import Col from '../collapsible';
import scheduleData from '../data/scheduleData.json'; 

import * as styles from './schedule.module.css';

const Schedule: ((props?: any) => JSX.Element) = () => (
  <div id={styles.outerDiv}>
    <h1>Schedule</h1>
    <ul>
      {
        scheduleData.map((data, index) => {
          return (
            <li key={`content_item_${index}`}>
              {data.times}
              <Col trigger={data.title} content={data.desc} />
            </li>
          )
        })
      }
    </ul>
  </div>
)
export default Schedule