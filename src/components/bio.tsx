import React from 'react';
import './bio.css'
import bioData from './data/bioData.json'

const Bio = () => (
    <div id='bio'>
      <h1>Bios of relevant people</h1>
      <ul>
        {bioData.map((data, index) => {
          return <div id='main'>
                <img src={data.headshot} id='headshot'></img>
                <div id='text'>
                  <h2>{data.name}</h2>
                  <h3>{data.title}</h3>
                  <div>{data.desc}</div>
                </div>
              </div>
        })}
      </ul>
    </div>
  )
  export default Bio