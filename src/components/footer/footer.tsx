import React from 'react';
import RetroLogo from '../../assets/VH Pixel Logo.png';
import FacebookLogo from '../../assets/facebook icon.png';
import InstagramLogo from '../../assets/instagram icon.png';
import GithubLogo from '../../assets/github icon.png';
import TwitterLogo from '../../assets/twitter icon.png';

import './footer.css';

const Footer: React.FC<{}> = () => (
  <div id="footer-main">
    <footer>
      <span className="right">
        {/* <p>{'Made with <3 and < / > at VandyHacks'}</p> */}
        <div className="socials">
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
            alt="github icon"
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
    <img id="retro-logo" src={RetroLogo} alt="RetroLogo" />
  </div>
);

export default Footer;
