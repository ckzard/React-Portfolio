import React from "react";
import {useEffect} from "react"
import logo from '../../linux.png'
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll=() => {

    const offset=window.scrollY;

    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let navbarClasses=['navbar', 'navbar-expand-lg', 'navbar-light', 'bg-dark'];
    
    if(scrolled){
        navbarClasses.push('scrolled');
    }
    //navbar navbar-expanded-lg navbar-light bg-dark
    //{navbarClasses.join(" ")}
    return (
        <nav className={navbarClasses.join(" ")}>
        <div className="container">
        <a className="navbar-brand" href="#"> <img  className="logo" src={logo}></img></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#about-me">About Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
        
    </div>
    </div>
        
    </nav>
    )
}

export default Navbar
