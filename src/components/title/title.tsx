import React from 'react';
import Banner from '../../assets/retroedn-used.png';
import Maintitle from '../../assets/vandygoldhacks.png'
import Subtitle from '../../assets/thehackathon.png'
import * as styles from './title.module.css'

const Title: React.FC<{}> = () => (
    <div id={styles.title}>
        <img src={Banner} className={styles.titleItem}></img>
        <img src={Maintitle} className={styles.titleItem}></img>
        <img src={Subtitle} className={styles.titleItem}></img>
        {/* <Banner />
        <Maintitle />
        <Subtitle /> */}
    </div>
)

// const Banner: React.FC<{}> = () => (
//     // <div className={styles.banner}>
//     //     <h2>{' '}retro edn.</h2>
//     // </div>
//     <img src={RetroEdn}></img>
// )
// const Maintitle: React.FC<{}> = () => (
//     <div className={styles.maintitle}>
//         <h1>VandyHacks</h1>
//     </div>
// )

// const Subtitle: React.FC<{}> = () => (
//     <div className={styles.subtitle}>
//         <h2>The Hackathon</h2>
//     </div>
// )

export default Title