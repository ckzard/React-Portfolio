import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import spacebook from "../../assets/spacebook.png";
import perspectify from "../../assets/perspectify.png";
import budget from '../../assets/budget.png'
import './Carosel.css'

const Carosel = () => {

    let projects = [
        {title: "Spacebook", image: spacebook, url: "https://spacebookx.herokuapp.com/"},
        {title: "Budget Tracker", image: budget, url: "https://agile-mountain-15348.herokuapp.com/"},
        {title: "Perspectify", image: perspectify, url: "https://perspectify.herokuapp.com/"},
    ]
    return (
        
        <div className="section" id="projects">
            <Carousel className="car-main" style={{textAlign: "center"}}>
                {projects.map((item) => {
                    return(
                        <Carousel.Item>
                            <h1 className="typed-text"><a href={item.url}>{item.title}</a></h1>
                            <img className="carousel-image" src={item.image}></img>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Carosel
