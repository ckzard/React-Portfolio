import './App.css';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Contact from "./components/Contact/Contact"
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from "react-particles-js"

function App() {
  return (
    <div id="main">
      <Particles
      className="particles-canvas" 
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
    
  );
}

export default App;
