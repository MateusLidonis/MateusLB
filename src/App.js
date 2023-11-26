import React, { useCallback } from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "teal";

  const init = useCallback(async (engine) => {
    await loadFull(engine)
  })

  return (
    <>
    <div id="App" style={{zindex:100}}>
        <Particles options={{
          "particles": {
            "number": {
              "value": 400,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#34bdeb"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#34bdeb"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 1,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 2,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 500,
              "color": "#34bdeb",
              "opacity": 0.4,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 0.5,
              "direction": "bottom",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": false,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 50,
                "line_linked": {
                  "opacity": 0.5
                }
              },
              "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
              },
              "repulse": {
                "distance": 50,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }} init={init} />
      </div>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Experience color={color} />
      <Projects color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
