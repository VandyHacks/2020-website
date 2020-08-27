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
            'bio': 'Uwu uwu uwu uwu uwu uwu uwu uwuuwuuwu uwuuwuuwuuwuuwu uwuuwuuwu uwu uwu u w u uwu uwu uwu uwu uwu uwuUWU UWU uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwuUWUWUWUWUWUWUUWUWUWUWUW W U uwu uwu uwu Uuwu uwuuwu uwu uwu uwuuwuuwu uwu uwu uwu uwuuwuuwu uwu uwu uwu uwu uwu uwu u uwu w uwu u uwuuwuuwuuwuuwuuwuuwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwuuwu uwuuwuuwuuwuuwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwuuwuuwu uwu uwu uwu uwu uwu uwu uwu uwuuwu uwuuwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwu uwu uwu uwu uwu.'
        },
        {
            'name': 'Gabriel Ting',
            'image': gabe,
            'heading': 'Co-President of VH',
            'bio': 'Uwu uwu uwu uwu uwu uwu uwu uwuuwuuwu uwuuwuuwuuwuuwu uwuuwuuwu uwu uwu u w u uwu uwu uwu uwu uwu uwuUWU UWU uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwuUWUWUWUWUWUWUUWUWUWUWUW W U uwu uwu uwu Uuwu uwuuwu uwu uwu uwuuwuuwu uwu uwu uwu uwuuwuuwu uwu uwu uwu uwu uwu uwu u uwu w uwu u uwuuwuuwuuwuuwuuwuuwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwuuwu uwuuwuuwuuwuuwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwuuwuuwu uwu uwu uwu uwu uwu uwu uwu uwuuwu uwuuwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwu uwu uwu uwu uwu.'
        },
        {
            'name': 'Gabriel Ting',
            'image': gabe,
            'heading': 'Co-President of VH',
            'bio': 'Uwu uwu uwu uwu uwu uwu uwu uwuuwuuwu uwuuwuuwuuwuuwu uwuuwuuwu uwu uwu u w u uwu uwu uwu uwu uwu uwuUWU UWU uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwuUWUWUWUWUWUWUUWUWUWUWUW W U uwu uwu uwu Uuwu uwuuwu uwu uwu uwuuwuuwu uwu uwu uwu uwuuwuuwu uwu uwu uwu uwu uwu uwu u uwu w uwu u uwuuwuuwuuwuuwuuwuuwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwuuwu uwuuwuuwuuwuuwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwuuwuuwu uwu uwu uwu uwu uwu uwu uwu uwuuwu uwuuwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwuuwu uwu uwu uwu uwu.'
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