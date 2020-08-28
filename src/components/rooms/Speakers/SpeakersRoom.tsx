import React, { useState } from 'react';
import * as styles from './SpeakersRoom.module.css'
import karl from '../../../assets/karl.jpg'
import jeffrey from '../../../assets/jeffrey.jpg'
import placeholder from '../../../assets/VH Pixel Logo.png'
const people = {
    'judges': {},
    'speakers': [
        {
            'name': 'Karl Mehta',
            'image': karl,
            'heading': 'CEO of EdCast, Founder of Code For India, Author of "Financial Inclusion at the Bottom of the Pyramid"',
            'bio': "Mr. Mehta is currently Founder & CEO of EdCast Inc., a next-generation knowledge platform and former Venture Partner at Menlo Ventures. He is Founder of Silicon Valley based tech-driven non-profit, CodeforIndia.org and serves on several non-profit boards for education impact worldwide. Previously, he was the Founder & CEO of PlaySpan Inc., acquired in the March of 2011 by Visa Inc. (NYSE:V), the world's largest payment network. PlaySpan is a global leader in payments and monetization for digital media, mobile apps, social networks, and online games."
        },
        {
            'name': 'Jeffrey J. Rothschild',
            'image': jeffrey,
            'heading': "Founding engineer at Facebook, Vice-Chairman at Vanderbilt's Technology Committee. Billionaire ",
            'bio': "After earning his master's degree in computer science from Vanderbilt, Mr. Rothschild has been a co-founder of several technology and software companies including Veritas Software and Mpath Interactive. Mr. Rothschild  joined Facebook in 2005 as vice president of infrastructure engineering, becoming a major shareholders of the company. Rothschild serves as the vice chair of the board of trust of his alma mater, Vanderbilt University. With his wife, he endowed two scholarships in the School of Engineering and the College of Arts and Science in 2013, and he donated $20 million for the construction of two new buildings on campus, Vanderbilt Hall and Barnard Hall, in December 2016. Mr. Rothschild is engaged in early stage technology and impact investing."
        },
        {
            'name': '',
            'image': placeholder,
            'heading': 'Coming Soon!',
            'bio': ''
        },
        {
            'name': '',
            'image': placeholder,
            'heading': 'Coming Soon!',
            'bio': ''
        },
        {
            'Name': '',
            'image': placeholder,
            'heading': 'Coming Soon!',
            'bio': ''
        }
    ]
}

const SpeakersRoom: ((props?: any) => JSX.Element) = () => {
    const [name, setName] = useState(people.speakers[0].name);
    const [image, setImage] = useState(people.speakers[0].image);
    const [heading, setHeading] = useState(people.speakers[0].heading);
    const [bio, setBio] = useState(people.speakers[0].bio);

    let speakers = people.speakers.map((speaker, i) => 
        // <div className={['nes-container is-rounded', `${styles.avatar}`].join(' ')}
        //      onClick={() => setBio()}>
        // </div>
        <button className={['nes-btn', `${styles.avatar}`].join(' ')}
             onClick={() => {
                 setName(speaker.name);
                 setImage(speaker.image);
                 setHeading(speaker.heading);
                 setBio(speaker.bio);
             }}>
            <img src={speaker.image}/>
        </button>
    );
    return (
        <div id={styles.speakersRoom} className={styles.pxlBorder}>
            <div id={styles.selection}>
                {speakers}
            </div>
            <div id={styles.infoInner}>
                <p className={['title', `${styles.borderedText}`].join(' ')} id={styles.name}>{name}</p>
                <div id={styles.infoInner}>
                    <img src={image}/>
                    <div id={styles.desc}>
                        <p className={styles.borderedText}> {heading} </p>
                        <div> {bio} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakersRoom