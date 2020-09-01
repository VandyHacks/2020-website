import React from 'react';
import RetroLogo from '../../assets/VH Pixel Logo.png';
import FacebookLogo from '../../assets/facebook icon.png';
import InstagramLogo from '../../assets/instagram icon.png';
import GithubLogo from '../../assets/github icon.png';
import TwitterLogo from '../../assets/twitter icon.png';

import * as styles from './footer.module.css'

const Footer: ((props?: any) => JSX.Element) = () => {
  const socials = [
    {
      name: 'facebook',
      imgSrc: FacebookLogo
    },
    {
      name: 'instagram',
      imgSrc: InstagramLogo
    },
    {
      name: 'github',
      imgSrc: GithubLogo
    },
    {
      name: 'twitter',
      imgSrc: TwitterLogo
    }
  ]

  const socialLinks = socials.map((social) =>
    <a
      id={`${social.name}-container`}
      href={`https://www.${social.name}.com/vandyhacks`}
      target="_blank"
      rel="noopener"
    >
      <img src={social.imgSrc} />
    </a>)

  return (
    <div id={styles.footerMain} className='nes-container is-dark'>
      <a href='mailto:info@vandyhacks.org'>Contact us!</a>
      <div id={styles.socials}>
        {socialLinks}
      </div>
      <img id={styles.retroLogo} src={RetroLogo} alt="RetroLogo" />
    </div>
  );
}

export default Footer;
