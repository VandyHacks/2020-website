import faviconSwitcher from 'favicon-switcher';

// "Morphing Text"
// const elts = {
// 	text1: document.getElementById("text1"),
// 	text2: document.getElementById("text2")
// };

// // The strings to morph between. You can change these to anything you want!
const phrases = [
	"VAnderbilt uniVersity",
  "october 2-4 2020",
	"All hAckers Welcome",
];

// // Controls the speed of morphing.
// const morphTime = 3//1;
// const cooldownTime = 0.4//0.25;

// let textIndex = texts.length - 1;
// let time = new Date();
// let morph = 0;
// let cooldown = cooldownTime;

// elts.text1.textContent = texts[textIndex % texts.length];
// elts.text2.textContent = texts[(textIndex + 1) % texts.length];

// function doMorph() {
// 	morph -= cooldown;
// 	cooldown = 0;
	
// 	let fraction = morph / morphTime;
	
// 	if (fraction > 1) {
// 		cooldown = cooldownTime;
// 		fraction = 1;
// 	}
	
// 	setMorph(fraction);
// }

// // A lot of the magic happens here, this is what applies the blur filter to the text.
// function setMorph(fraction) {
// 	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
// 	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
// 	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
// 	fraction = 1 - fraction;
// 	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
// 	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
// 	elts.text1.textContent = texts[textIndex % texts.length];
// 	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
// }

// function doCooldown() {
// 	morph = 0;
	
// 	elts.text2.style.filter = "";
// 	elts.text2.style.opacity = "100%";
	
// 	elts.text1.style.filter = "";
// 	elts.text1.style.opacity = "0%";
// }

// // Animation loop, which is called every frame.
// function animate() {
// 	requestAnimationFrame(animate);
	
// 	let newTime = new Date();
// 	let shouldIncrementIndex = cooldown > 0;
// 	let dt = (newTime - time) / 1000;
// 	time = newTime;
	
// 	cooldown -= dt;
	
// 	if (cooldown <= 0) {
// 		if (shouldIncrementIndex) {
// 			textIndex++;
// 		}
		
// 		doMorph();
// 	} else {
// 		doCooldown();
//   }
// }

// Start the animation.
// animate();

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

faviconSwitcher();
