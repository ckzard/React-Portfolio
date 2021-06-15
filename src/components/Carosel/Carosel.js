import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import spacebook from "../../assets/spacebook.png";
import './Carosel.css'

const Carosel = () => {

    let projects = [
        {title: "Spacebook", image: spacebook, url: "https://spacebookx.herokuapp.com/"},
        {title: "Spacebook", image: spacebook, url: "https://spacebookx.herokuapp.com/"},
    ]
    return (
        
        <div className="section" id="projects">
            <Carousel className="car-main" style={{textAlign: "center"}}>
                {projects.map((item) => {
                    return(
                        <Carousel.Item>
                            <h1 className="typed-text">{item.title}</h1>
                            <img className="carousel-image" src={item.image}></img>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Carosel
