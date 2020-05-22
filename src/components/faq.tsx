import React from 'react';
import Col from './collapsible';
import faqData from './data/faqData.json'

const FAQ = () => (
    <div>>
      <h1>FAQ</h1>
      <ul>
        {faqData.map((data, index) => {
          return <li key={`faq_item_${index}`}>
                <Col trigger={data.question} content={data.answer} />
              </li>
        })}
      </ul>
    </div>
  )
  export default FAQ