import React, { useState } from 'react';
import * as styles from './SpeakersRoom.module.css'
import gabe from '../../../assets/gabe.png'
import VH from '../../../assets/VH Pixel Logo.png'
const people = {
    'judges': {},
    'speakers': [
        {
            'name': 'Gabriel Ting',
            'image': gabe,
            'heading': 'Co-President of VH',
            'bio': 'I am a senior College Honors Scholar at Vanderbilt University triple majoring in Computer Science, Applied Mathematics, and Asian Studies! Check out my résumé below, and peruse some of my Work tab above with links to CS, Art, and humanities projects. In the summer of 2020, I worked for NASA JPL on Perseverance, the Mars Rover launched in 2020. I am continuing to work there part-time during the fall academic semester. My favorite course was the graduate-level Design and Analysis of Algorithms with Dr. Jeremy Spinrad. We covered a variety of techniques and proofs, also delving into interesting fields such as computational geometry.'
        },
        {
            'name': 'Gabriel Ting',
            'image': gabe,
            'heading': 'Co-President of VH',
            'bio': 'I am a senior College Honors Scholar at Vanderbilt University triple majoring in Computer Science, Applied Mathematics, and Asian Studies! Check out my résumé below, and peruse some of my Work tab above with links to CS, Art, and humanities projects. In the summer of 2020, I worked for NASA JPL on Perseverance, the Mars Rover launched in 2020. I am continuing to work there part-time during the fall academic semester. My favorite course was the graduate-level Design and Analysis of Algorithms with Dr. Jeremy Spinrad. We covered a variety of techniques and proofs, also delving into interesting fields such as computational geometry.'
        },
        {
            'name': 'Gabriel Ting',
            'image': gabe,
            'heading': 'Co-President of VH',
            'bio': 'I am a senior College Honors Scholar at Vanderbilt University triple majoring in Computer Science, Applied Mathematics, and Asian Studies! Check out my résumé below, and peruse some of my Work tab above with links to CS, Art, and humanities projects. In the summer of 2020, I worked for NASA JPL on Perseverance, the Mars Rover launched in 2020. I am continuing to work there part-time during the fall academic semester. My favorite course was the graduate-level Design and Analysis of Algorithms with Dr. Jeremy Spinrad. We covered a variety of techniques and proofs, also delving into interesting fields such as computational geometry.'
        },
        {
            'name': 'TBD',
            'image': VH,
            'heading': 'Someone super cool',
            'bio': 'HELLLOOOOOOOOOOO filler text'
        },
        {
            'Name': 'TBD',
            'image': VH,
            'heading': 'Someone super cool',
            'bio': 'HELLLOOOOOOOOOOO filler text'
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
        <div className={['nes-container is-rounded', `${styles.avatar}`].join(' ')}
             onClick={() => {
                 setName(speaker.name);
                 setImage(speaker.image);
                 setHeading(speaker.heading);
                 setBio(speaker.bio);
             }}>
            <img src={speaker.image}/>
        </div>
    );
    return (
        <div id={styles.speakersRoom} className={'nes-container is-rounded'}>
            <div id={styles.selection}>
                {speakers}
            </div>
            <div className='nes-container is-rounded with-title'>
                <p className='title' id={styles.name}>{name}</p>
                <div id={styles.info}>
                    <img src={image} />
                    <div id={styles.desc}>
                        <p> {heading} </p>
                        <div> {bio} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakersRoom