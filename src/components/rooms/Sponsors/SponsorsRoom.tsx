import React, { useState } from 'react';
import Collapsible from 'react-collapsible'
import * as styles from './SponsorsRoom.module.css';
import { outlined, retroBox } from '../../../pages/index.module.css'
import avatar from '../../../assets/sponsorshipAvatar.png';
import allianceBernstein from '../../../assets/sponsors/alliance-bernstein.png'
import asurion from '../../../assets/sponsors/asurion.png'
import capitalOne from '../../../assets/sponsors/capital-one.png';
import exponent from '../../../assets/sponsors/exponent.png';
import hrt from '../../../assets/sponsors/hrt.svg';
import imc from '../../../assets/sponsors/imc.png';
import l3harris from '../../../assets/sponsors/l3-harris.png'
import vanguard from '../../../assets/sponsors/vanguard.png';

const sponsorInfo = [
  {
    logo: allianceBernstein,
    positions: {
      'Visit Sponsor Site': 'https://www.alliancebernstein.com/',
      'Business Analyst Summer Internship': 'https://abglobal.wd1.myworkdayjobs.com/en-US/abcampuscareers/job/Nashville-Tennessee/Business-Analyst-Summer-Internship---Technology---Operations-Program_R0004494-1',
      'Software Development Summer Internship': 'https://abglobal.wd1.myworkdayjobs.com/en-US/abcampuscareers/job/Nashville-Tennessee/Software-Development-Summer-Internship---Technology---Operations-Program_R0004497-1',
      'Infrastructure Engineering Summer Internship': 'https://abglobal.wd1.myworkdayjobs.com/en-US/abcampuscareers/job/Nashville-Tennessee/Infrastructure-Engineering-Summer-Internship---Technology---Operations-Program_R0004496',
      'Business Analyst Associate': 'https://abglobal.wd1.myworkdayjobs.com/en-US/abcampuscareers/job/Nashville-Tennessee/Business-Analyst-Associate---Technology---Operations-Program_R0004471-1',
      'Software Development Associate': 'https://abglobal.wd1.myworkdayjobs.com/en-US/abcampuscareers/job/Nashville-Tennessee/Software-Development-Associate---Technology---Operations-Program_R0004475-1',
      'Infrastructure Engineering Associate': 'https://abglobal.wd1.myworkdayjobs.com/en-US/abcampuscareers/job/Nashville-Tennessee/Infrastructure-Engineering-Associate---Technology---Operations-Program_R0004474-1'
    },
  },
  {
    logo: hrt,
    positions: {
      'Visit Sponsor Site': 'https://www.hudsonrivertrading.com/',
      'See open positions': 'https://www.hudsonrivertrading.com/campus-recruiting/',
    },
  },
  {
    logo: imc,
    positions: {
      'Visit Sponsor Site': 'https://www.imc.com/us/',
      'See open positions': 'https://careers.imc.com/us/en/student-opportunities',
    },
  },
  {
    logo: vanguard,
    positions: {
      'Visit Sponsor Site': 'https://investor.vanguard.com/corporate-portal/',
      'Positions coming soon!': 'https://www.vanguardjobs.com/',
    },
  },
  {
    logo: l3harris,
    positions: {
      'Visit Sponsor Site': 'https://www.l3harris.com/',
      'See open positions': 'https://careers.l3harris.com/job/nashville/software-engineer-new-grad-nashville-tn/4832/17240201'
    }
  },
  {
    logo: asurion,
    positions: {
      'Visit Sponsor Site': 'https://www.asurion.com/',
      'See open positions': 'https://careers.asurion.com/ShowJob/JobId/4414/SoftwareEngineerIntern?cs=true&gjid=cHJvamVjdHMvc21hc2hmbHktdGFsZW50LWNsZC1qb2JzLXByb2Qvam9icy85NjcyOTI3MTg3NzE0OTM4Mg=='
    },
  },
  {
    logo: exponent,
    positions: {
      'Visit Sponsor Site': 'https://www.exponent.com/',
      'Contact stephen@tryexponent.com': 'mailto:stephen@tryexponent.com'
    }
  },
  {
    logo: capitalOne,
    positions: {
      'Visit Sponsor Site': 'https://www.capitalone.com/',
      'See open positions': 'https://campus.capitalone.com/search-jobs/?orgIds=1786&acm=4412%2C29098%2C29017'
    }
  }
]

const sponsors = sponsorInfo.map((sponsor) => {
  const positions = Object.keys(sponsor.positions).map(title => {
    console.log('Hi', sponsor.positions[title])
    return (
      <li>
        <a href={sponsor.positions[title]} target='_blank' rel='noopener'><button className='nes-btn is-primary'>{title}</button></a>
      </li>
    )
  })
  return (
    <>
      <Collapsible trigger={<img src={sponsor.logo} className={styles.trigger}/>}>
        <a href={sponsor.link} target="_blank" rel="noopener">
          Visit Sponsor Site!
        </a>
        {positions}
      </Collapsible>
    </>
  );
})
  
const SponsorsRoom: ((props: any) => JSX.Element) = (props) => {
    const introText = "Hi! I'm Tabriel. Ask me anything.";
    const [mainDialogue, setMainDialogue] = useState(introText);
    // const buttons = 
    return (
        <div className={styles.room}>
            <button id={styles.backButton} className='nes-btn is-normal' 
                onClick={() => {props.setDisplayID('home'); props.showMenu(true);}}>Back</button>
            <img src={avatar} id={styles.avatar} />
            <div id={styles.sponsorsBox} className={styles.retroBox}>
              {sponsors}
            </div>
            {/* <div id={styles.dialogue} className={retroBox}>
                <p id={styles.dialogueTitle}>~Tabriel Ging~</p>
                <div id={styles.dialogueContent}>
                  <div id={styles.dialogueChoices} className='nes-container is-dark'>
                      <div id={styles.choicesInner}>{questionButtons}</div>
                  </div>
                  <div id={styles.mainDialogue} className='nes-container is-dark'>{mainDialogue}</div>
                </div>
            </div> */}
        </div>
    )
}

export default SponsorsRoom
