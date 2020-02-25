import faviconSwitcher from 'favicon-switcher';
// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#_AV()__';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 30);
      const end = start + Math.floor(Math.random() * 30);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '<div style="height: 3em;">';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    output += '</div>';
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = ['VAnderbilt uniVersity', 'october 16-18 2020', 'All hAckers Welcome'];

const el = document.querySelector('.text');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1500);
  });
  counter = (counter + 1) % phrases.length;
};

next();

function setLightThemeMetaTags() {
  // Set the theme color for the top bar in Android Chrome to the dark (light mode) color
  const themeColorEl = document.querySelector('meta[name="theme-color"]');
  console.log(themeColorEl);
  themeColorEl.setAttribute('content', '#303b53');
}

/* Respond to color changes for parts of the webpage outside of the body */
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
darkModeMediaQuery.addListener(({ matches }) => {
  if (matches) setLightThemeMetaTags();
});

if (darkModeMediaQuery.matches) setLightThemeMetaTags();

faviconSwitcher();
