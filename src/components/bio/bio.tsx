import React from 'react';
import * as styles from './bio.module.css'
import bioData from '../data/bioData.json'

const Bio: React.FC<{}> = () => (
    <div id='bio'>
      <h1>Bios of relevant people</h1>
      <ul>
        {bioData.map((data) => {
          return <div id={styles.main}>
                <img src={data.headshot} id={styles.headshot}></img>
                <div id={styles.text}>
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