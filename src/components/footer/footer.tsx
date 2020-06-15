import React from 'react';
import RetroLogo from '../../assets/VH Pixel Logo.png';
import FacebookLogo from '../../assets/facebook icon.png';
import InstagramLogo from '../../assets/instagram icon.png';
import GithubLogo from '../../assets/github icon.png';
import TwitterLogo from '../../assets/twitter icon.png';

import * as styles from './footer.module.css'

const Footer: React.FC<{}> = () => {
  <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
  return (
    <div id={styles.footerMain}>
      <footer className='nes-container is-dark is-rounded'>
        <span className={styles.right}>
          {/* <p>{'Made with <3 and < / > at VandyHacks'}</p> */}
          Contact us!
          <br/>
          email@vanderbilt.edu
          <div className={styles.socials}>
            {/* Facebook Icon */}
            <a
              id="facebook-container"
              href="https://www.facebook.com/vandyhacks/"
              target="_blank"
              rel="noopener"
            >
              <img src={FacebookLogo} />
            </a>

            {/* <!-- Instagram Icon --> */}
            <a
              id="instagram-container"
              href="https://www.instagram.com/vandyhacks/"
              target="_blank"
              rel="noopener"
            >
              <img src={InstagramLogo} />
            </a>

            {/* <!-- Github Icon --> */}
            <a
              id="github-container"
              href="https://github.com/VandyHacks"
              target="_blank"
            >
              <img src={GithubLogo} />
            </a>

            {/* <!-- Twitter Icon --> */}
            <a
              id="twitter-container"
              href="https://twitter.com/vandyhacks"
              target="_blank"
              rel="noopener"
            >
              <img src={TwitterLogo} />
            </a>
          </div>
        </span>
      </footer>
      <img id={styles.retroLogo} src={RetroLogo} alt="RetroLogo" />
    </div>
  );
}

export default Footer;
