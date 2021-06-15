import React from 'react'
import './Projects.css';
import spacebook from "../../assets/spacebook.png"
import budget from "../../assets/budget.png"
import directory from "../../assets/reactdirectory.png"
import notetaker from "../../assets/notetaker.png"
import perfectpairings from "../../assets/ppshot.jpg"

const Projects = () => {
    return (
      <div className="section" id="projects">
      <h1> Projects </h1>
       <div className="row">
         <div className="col-md-4 grow">
            <h3> Spacebook </h3>
            <div className="card">
              <a id= "proj-link"href="https://spacebookx.herokuapp.com/">
                <img src={spacebook}></img>
              </a>
            </div>
         </div>
         <div className="col-md-4 grow">
            <h3> Budget Tracker </h3>
            <div className="card">
              <a id= "proj-link"href="https://agile-mountain-15348.herokuapp.com/">
                <img src={budget}></img>
              </a>
            </div>
         </div>
         <div className="col-md-4 grow">
            <h3> User Directory </h3>
            <div className="card">
              <a id= "proj-link"href="https://react-user-directory-x.netlify.app/">
                <img src={directory}></img>
              </a>
            </div>
         </div>
         <div className="col-md-4 grow">
            <h3> Notetaker </h3>
            <div className="card">
              <a id= "proj-link"href="https://notetaker-express-x.herokuapp.com/">
                <img src={notetaker}></img>
              </a>
            </div>
         </div>
         <div className="col-md-4 grow">
            <h3> Perfect Pairings </h3>
            <div className="card">
              <a id= "proj-link"href="https://ckzard.github.io/perfectpairings/">
                <img src={perfectpairings}></img>
              </a>
            </div>
         </div>
         
       </div>
    </div>
    )
}

export default Projects
