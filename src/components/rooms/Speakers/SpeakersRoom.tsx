import React, { useState } from 'react';
import * as styles from './SpeakersRoom.module.css'
import { outlined, retroBox } from '../../../pages/index.module.css'
import karl from '../../../assets/speakers/karl.jpg'
import jeffrey from '../../../assets/speakers/jeffrey.jpg'
import shauna from '../../../assets/speakers/shauna.png'
import adi_parth from '../../../assets/speakers/adi_parth.png'
import thiago from '../../../assets/speakers/thiago.jpg'
import jennison from '../../../assets/speakers/jennison.jpg'
import placeholder from '../../../assets/VH Pixel Logo.png'
import { addListener } from 'process';
const people = {
    'judges': {},
    'speakers': [
        {
            'name': 'Adi Agashe and Parth Detroja',
            'image': adi_parth,
            'heading': 'Authors of "Swipe to Unlock"',
            'bio': 'Aditya Agashe and Parth Detroja are prominent Product Managers and Authors of the bestselling technology strategy book, Swipe to Unlock. Both have been featured in the Wall Street Journal, Forbes, Business Insider, Inc. and more. Aditya works on Azure cloud growth team to build hyper-converged and hybrid features that help customers adopt cloud technologies. He is the host of Product Alliance, and has previously managed product and engineering teams as the founder of Belle Applications and Head of Product at Speare. Parth is currently a Product Manager at Facebook where he leads social music product efforts such as adding music to stories on Facebook and Instagram. He has previously worked product management and growth roles at other top tech companies including Microsoft, Amazon, and IBM.'
        },
        {
            'name': 'Jennison Asuncion',
            'image': jennison,
            'heading': 'Head of Accessibility at LinkedIn Engineering Evangelism',
            'bio': "Jennison started his digital accessibility (a11y) career on the Royal Bank of Canada’s IT A11y team in Toronto, working with web and mobile developers and designers on making their UIs accessible to customers with disabilities. In 2013, he was recruited by LinkedIn where he is currently their Head of A11y Engineering Evangelism. His role includes driving adoption of a11y standards in LinkedIn's Engineering organization. Jennison began a11y and inclusive design Meetup groups in Toronto (2012) and the San Francisco Bay Area (2014). As a Community Group member, he is involved in the development of the World Wide Web (W3C) Accessibility Guidelines (WCAG) 3.0, which will be the next version of these guidelines, which are the international standards for developing web, mobile and other technologies to be accessible. By far, Jennison is proudest of Co-founding Global A11y Awareness Day (GAAD). Marking its tenth anniversary in 2021, this is an annual event, on the 3rd Thursday of May, which brings global attention to digital inclusion by and for the more than one billion people worldwide with disabilities."
        },
        {
            'name': 'Jeffrey J. Rothschild',
            'image': jeffrey,
            'heading': "Founding engineer at Facebook, Vice-Chairman at Vanderbilt's Technology Committee. Billionaire ",
            'bio': "After earning his master's degree in computer science from Vanderbilt, Mr. Rothschild has been a co-founder of several technology and software companies including Veritas Software and Mpath Interactive. Mr. Rothschild  joined Facebook in 2005 as vice president of infrastructure engineering, becoming a major shareholders of the company. Rothschild serves as the vice chair of the board of trust of his alma mater, Vanderbilt University. With his wife, he endowed two scholarships in the School of Engineering and the College of Arts and Science in 2013, and he donated $20 million for the construction of two new buildings on campus, Vanderbilt Hall and Barnard Hall, in December 2016. Mr. Rothschild is engaged in early stage technology and impact investing."
        },
        {
            'name': 'Karl Mehta',
            'image': karl,
            'heading': 'CEO of EdCast, Founder of Code For India, Author of "Financial Inclusion at the Bottom of the Pyramid"',
            'bio': <div>Karl Mehta is a serial entrepreneur, author, investor, engineer, and civil servant with over 20 years of experience in founding, building, and funding technology companies in the U.S. and international markets. He is currently Founder & CEO of EdCast Inc., a next-generation knowledge platform company and former venture partner at Menlo Ventures, a leading VC firm of Silicon Valley with over $4B under management. Previously, he was the Founder & CEO of PlaySpan Inc., acquired by Visa Inc. (NYSE:V), the world’s largest payment network. Karl also served as a White House Presidential Innovation Fellow, selected by the Obama Administration during the inaugural 2012-13 term. He was recently appointed by Governor Brown to the Workforce Investment Board of the State of California. In 2010, Karl won the “Entrepreneur of the Year” award from Ernst & Young for Northern California. Karl is on the boards of Simpa Networks and on the advisory board of Intel Capital and Chapman University’s Center of Entrepreneurship. Karl is founder of several non-profit's including <a href='http://codeforindia.org/'>Code For India</a> and <a href='http://grassrootsinnovation.org/'>Grassroots Innovation</a>. He is author of <a href='http://www.openfininc.org/'>Financial Inclusion at the Bottom of the Pyramid</a> (<a href='http://www.amazon.com/dp/1460265513'>Amazon</a>).</div>
        },
        {
            'name': 'Thiago Olson',
            'image': thiago,
            'heading': 'Physicist, entrepreneur, maker, early-stage technology investor and the Managing Director of Engage Ventures.',
            'bio': 'Thiago has a background of branding and launching products in both consumer technology and financial Business-to-Business industries. Prior to Engage, Thiago served as an Entrepreneur in Residence at the Advanced Technology Development Center, one of the first technology incubators in the country, and was also the CEO and co-founder of Stratos Technologies, a connected hardware and mobile payment platform. Stratos was backed by investors including Hyde Park Venture Partners, Resonant Venture Partners, Toba Capital, and Western Technology Investment and was later acquired in 2015. Thiago has also served in various roles in Venture, Think Tank and Engineering Program Management at the U.S. Department of Defense and the U.S. Department of Energy, where he worked at the Los Alamos National Laboratories and the Sandia National Laboratories. Thiago also worked overseas in research capacities at the Conseil Européen pour la Recherche Nucléaire (CERN) in Geneva, Switzerland, and the Weizmann Institute of Science in Rehovot, Israel. A resident of Atlanta, Thiago holds a Bachelor’s in Electrical Engineering and Physics from Vanderbilt University. He also was a fellow in the National Fellowship Program in Plasma Physics and Fusion Energy Sciences at Princeton University. Thiago came into the national spotlight as a teen for his research in plasma physics; successfully building a fusion reactor in his home in Rochester, Michigan.'
        },
        {
            'name': 'Shauna McIntyre',
            'image': shauna,
            'heading': 'CEO of Sense Photonics ',
            'bio': 'Shauna McIntyre is a seasoned technology and automotive executive with a track record of driving innovation in traditional industries. She serves as CEO of Sense Photonics, which builds next-generation 3D perception systems to enable robots, industrial solutions, and autonomous vehicles to see and navigate in the world around them. Prior she led a pan-Google initiative bringing Android, Assistant, and Google Maps into the car as embedded software to provide every car a safe and seamless connected experience that improves over time. Prior she served as Chief of Staff for Google Devices, the company’s rapidly growing consumer electronics business that combines the best of Google AI, software, and hardware to provide consumers with radically helpful experiences. Since April 2019 she has served on the Board of Directors of Lithia Motors (NYSE: LAD).'
        },
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
        <div id={styles.speakersRoom} className={retroBox}>
            <div id={styles.selection}>
                {speakers}
            </div>
            <div>
                <p className={['title', `${outlined}`].join(' ')} id={styles.name}>{name}</p>
                <div id={styles.infoInner}>
                    <img src={image}/>
                    <div id={styles.desc}>
                        <p className={outlined}> {heading} </p>
                        {bio}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakersRoom