import './App.css';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Contact from "./components/Contact/Contact"
import Particles from "react-particles-js"
import Carosel from './components/Carosel/Carosel'

function App() {
  return (
    <div id="main">
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 42,
              density: {
                enable: true,
                value_area: 1050
              }
            },
            line_linked: {
              enable: true,
              distance: 160,
              color: "#4f8cff",
              opacity: 0.18,
              width: 1
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#7de2d1",
              }
            },
            size: {
              value: 3,
              random: true
            },
            move: {
              speed: 1,
              out_mode: "out"
            }
          }
        }}
      />
      <Navbar />
      <main className="site-content">
        <Header />
        <AboutMe />
        <Carosel />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
