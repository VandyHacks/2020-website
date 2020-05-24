import React from 'react';
import Col from './collapsible';
import scheduleData from './data/scheduleData.json'

// TODO: formatting list for bus stop question, link for CoC question
const Schedule: React.FC<{}> = () => (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <h1>Schedule</h1>
      <ul>
        {scheduleData.map((data, index) => {
          return <li key={`content_item_${index}`}>
                {data.times}
                <Col trigger={data.title} content={data.desc} />
              </li>
        })}
      </ul>
    </div>
  )
  export default Schedule