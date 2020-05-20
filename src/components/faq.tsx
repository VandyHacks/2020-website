import React from 'react';
import Col from './collapsible';
import faqData from './data/faqData.json'

// TODO: formatting list for bus stop question, link for CoC question
const FAQ = () => (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <h1>FAQ</h1>
      <ul>
        {faqData.map((data, index) => {
          return <li key={`content_item_${index}`}>
                <Col trigger={data.question} content={data.answer} />
              </li>
        })}
      </ul>
    </div>
  )
  export default FAQ