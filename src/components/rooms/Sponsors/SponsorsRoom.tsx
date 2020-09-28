import React, { useState } from 'react';
import Collapsible from 'react-collapsible'
import * as styles from './SponsorsRoom.module.css';
import { outlined, retroBox } from '../../../pages/index.module.css'
import avatar from '../../../assets/sponsorshipAvatar.png';
import allianceBernstein from '../../../assets/sponsors/alliance-bernstein.png'
import asurion from '../../../assets/sponsors/asurion.png'
import capitalOne from '../../../assets/sponsors/capital-one.png';
import exponent from '../../../assets/sponsors/exponent.png';
import hrt from '../../../assets/sponsors/hrt.png';
import imc from '../../../assets/sponsors/imc.png';
import l3harris from '../../../assets/sponsors/l3-harris.png'
import vanguard from '../../../assets/sponsors/vanguard.png';

const sponsorInfo = [
  {
    logo: allianceBernstein,
    link: 'https://www.alliancebernstein.com/',
    positions: {
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
    link: 'https://www.hudsonrivertrading.com/',
    positions: {
      'Open Positions': 'https://www.hudsonrivertrading.com/campus-recruiting/',
    },
  },
  {
    logo: imc,
    link: 'https://www.imc.com/us/',
    positions: {
      'Open Positions': 'https://careers.imc.com/us/en/student-opportunities',
    },
  },
  {
    logo: vanguard,
    link: 'https://investor.vanguard.com/corporate-portal/',
    positions: {
      'Positions coming soon!': 'https://www.vanguardjobs.com/',
    },
  },
  {
    logo: l3harris,
    link: 'https://www.l3harris.com/',
    positions: {
      'Open Positions': 'https://careers.l3harris.com/job/nashville/software-engineer-new-grad-nashville-tn/4832/17240201'
    }
  },
  {
    logo: asurion,
    link: 'https://www.asurion.com/',
    positions: {
      'Open Positions': 'https://careers.asurion.com/ShowJob/JobId/4414/SoftwareEngineerIntern?cs=true&gjid=cHJvamVjdHMvc21hc2hmbHktdGFsZW50LWNsZC1qb2JzLXByb2Qvam9icy85NjcyOTI3MTg3NzE0OTM4Mg=='
    },
  },
  {
    logo: exponent,
    link: 'https://www.exponent.com/',
    positions: {
      'Email us': 'mailto:stephen@tryexponent.com'
    }
  },
  {
    logo: capitalOne,
    link: 'https://www.capitalone.com/',
    positions: {
      'Open Positions': 'https://campus.capitalone.com/search-jobs/?orgIds=1786&acm=4412%2C29098%2C29017'
    }
  }
]

const sponsors = sponsorInfo.map((sponsor) => {
  let positions:any;
  if (Object.keys(sponsor.positions).length > 1) {
    const collapsibleContent = Object.keys(sponsor.positions).map(title => {
      return (
        <p>
        <a href={sponsor.positions[title]} target='_blank' rel='noopener' style={{marginTop: '5px'}}>
          {title}
        </a>
        </p>
      )
    });
    positions = (
      <Collapsible trigger={<button className='nes-btn is-normal'>Open Positions</button>}>
        {collapsibleContent}
      </Collapsible>
    );
  } else {
    positions = (<a href={Object.values(sponsor.positions)[0]} target='_blank' rel='noopener'>
                  <button className='nes-btn is-primary'>{Object.keys(sponsor.positions)[0]}</button>
                </a>);
  }
  return (
    <div className={styles.pair}>
      <a href={sponsor.link} target="_blank" rel="noopener">
        <img src={sponsor.logo}/>
      </a>
      {positions}
    </div>
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
        </div>
    )
}

export default SponsorsRoom
