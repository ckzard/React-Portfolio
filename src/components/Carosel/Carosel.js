import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Mewdle from "../../assets/mewdle-shot.png";
import perspectify from "../../assets/perspectify.png";
import tracker from '../../assets/cadtracker-shot.png'
import bvr from '../../assets/bvr-shot.png'
import './Carosel.css'

const Carosel = () => {

    let projects = [
        {title: "Mewdle", image: Mewdle, url: "", description: "Mewdle is an application built using Angular and takes advantage of the PokeAPI to create a game similar to Wordle where users attempt to identify the randomized Pokemon at the top of the screen."},
        {title: "Stats Tracker", image: tracker, url: "https://cadmailboxtracker.herokuapp.com/", description: "The Stats Tracker is a React application that can be used to track items worked by a team and display stats for reporting."},
        {title: "Perspectify", image: perspectify, url: "https://perspectify.herokuapp.com/", description: "Perspectify is a React application with the goal of providing users a better reading experience for news articles, while also ensuring to show multiple perspectives on various topics."},
        {title: "Blue v Red (in progress)", image: bvr, url: "", description: ""},
    ]
    return (
        
        <div className="section" id="projects">
            <Carousel className="car-main" style={{textAlign: "center"}}>
                {projects.map((item) => {
                    return(
                        <Carousel.Item>
                            <h1 className="typed-text"><a href={item.url}>{item.title}</a></h1>
                            <h5>{item.description}</h5>
                            <img className="carousel-image" src={item.image}></img>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Carosel
