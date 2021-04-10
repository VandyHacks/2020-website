tsParticles.load("tsparticles", {
  detectRetina: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "bubble"
      },
      resize: true
    },
    modes: {
      bubble: {
        color: '#f9a602',//"#303b53",
        distance: 80,
        duration: 2,
        opacity: 1,
        size: 8,
        speed: 3
      }
    }
  },
  particles: {
    color: {
      // value: "#eceaee"
      value: "#fff"
    },
    links: {
      blink: false,
      color: "#fff",
      consent: false,
      distance: 20,
      enable: true,
      opacity: 1,
      width: 1
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 0.8,
      straight: false
    },
    number: {
      density: {
        enable: false,
        area: 2000
      },
      limit: 0,
      value: 125
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.05,
        speed: 4,
        sync: false
      },
      random: false,
      value: 1
    },
    shape: {
      type: ["polygon","polygon", "circle",  "circle",  "circle", "triangle"],
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false
      },
      random: true,
      value: 3
    }
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: "#fff",//"#c0c0c0",
      lineWidth: 0.3
    },
    move: {
      radius: 3
    },
    inlineArrangement: "equidistant",
    scale: 0.6,
    type: "inline",
    data: {
      path: "M1259.83 782.15h-18.44a7.3 7.3 0 00-6.38 4.44l-77.7 209.65-78-209.64a7.32 7.32 0 00-6.39-4.44h-18.44a3.07 3.07 0 00-3.09 4.44l91.19 245.18a6 6 0 00.93 1.6l-9.83 26.53-101.27-273.3a7.3 7.3 0 00-6.38-4.44h-18.44a3.08 3.08 0 00-3.09 4.44l114.16 308a6.59 6.59 0 001.92 2.63 3.1 3.1 0 003.24 2.13h18.44a6.13 6.13 0 002.11-.41 3.18 3.18 0 001.64-.85 6.91 6.91 0 002.63-3.19l114.28-308.32a3.08 3.08 0 00-3.09-4.45zM1354.93 782.15h-18.44a7.3 7.3 0 00-6.38 4.44L1215.83 1095a3.08 3.08 0 003.09 4.44h18.44a7.31 7.31 0 006.38-4.44L1358 786.6a3.08 3.08 0 00-3.07-4.45zM1240.89 960.6h-18.44a7.3 7.3 0 00-6.38 4.44L1167.92 1095a3.07 3.07 0 003.06 4.44h18.51a7.31 7.31 0 006.3-4.33L1244 965a3.07 3.07 0 00-3.11-4.4zM1229.63 940.83h18.44a7.3 7.3 0 006.38-4.44L1310 786.48c.77-2.07-.11-3.8-2-4.29a3.89 3.89 0 00-.42 0H1288a5.22 5.22 0 00-1.5.25 7.78 7.78 0 00-3.3 2.28 5.24 5.24 0 00-.78 1.37l-56.1 151.37c-.25 1.91 1.07 3.37 3.31 3.37z",
      size: {
        width: 2360,
        height: 2307
      }
      
    }
    // url: "https://github.com/VandyHacks/2019-website/blob/v1/src/images/logoOnly.svg"
  }
});



// tsParticles.load("tsparticles3", {

//   detectRetina: false,
//   fpsLimit: 60,
//   interactivity: {
//     detectsOn: "canvas",
//     events: {
//       onHover: {
//         enable: true,
//         mode: "bubble"
//       },
//       resize: true
//     },
//     modes: {
//       bubble: {
//         color: "#ffff00",
//         distance: 10,
//         duration: 2,
//         opacity: 1,
//         size: 10,
//         speed: 3
//       }
//     }
//   },
//   particles: {
//     color: {
//       value: "#fff"
//     },
//     links: {
//       blink: false,
//       color: "#fff",
//       consent: false,
//       distance: 35,
//       enable: true,
//       opacity: 0.4,
//       width: 1
//     },
//     move: {
//       attract: {
//         enable: false,
//         rotate: {
//           // x: 600,
//           // y: 1200
//         }
//       },
//       bounce: false,
//       direction: "none",
//       enable: true,
//       outMode: "bounce",
//       random: false,
//       speed: 1,
//       straight: false
//     },
//     number: {
//       density: {
//         enable: false,
//         area: 2000
//       },
//       limit: 0,
//       value: 36
//     },
//     opacity: {
//       animation: {
//         enable: true,
//         minimumValue: 0.3,
//         speed: 0.5,
//         sync: false
//       },
//       random: { enable: true, minimumValue: 0.3 },
//       value: 0.8
//     },
//     shape: {
//       type: "circle"
//     },
//     size: {
//       value: 1
//     }
//   },
//   polygon: {
//     move: {
//       radius: 80
//     },
//     draw: {
//       enable: true,
//       lineColor: "#c0c0c0",
//       lineWidth: 0.3
//     },
//     inlineArrangement: "equidistant",
//     scale: 0.01,
//     type: "inline",
//     position: {
//       x: 20,
//       y: 40
//     },
//     data: {      
//       path:
//         "m 169.28571,320.21935 281.42858,0",
//       size: {
//         width: 1162.7,
//         height: 1323.3
//       }
//     }
//   }
// });


tsParticles.load("tsparticles2", {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: ["polygon", "circle",  "circle", "triangle", "star"],
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 12.0,
        opacity_min: 0.6,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 0.3,
        size_min: 1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 60,
      color: "#ffffff",
      opacity: 0.7,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 0,
        rotateY: 0
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onDiv: [
        {
          enable: true,
          selectors: ".titlespace",
          mode: "bounce",
          type: "rectangle"
        }
      ],
      resize: true,
      onhover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 100,
          smooth: 6
        }
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 6,
        duration: 2,
        opacity: 0.9,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 1
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  pauseOnOutsideViewport: true
});
