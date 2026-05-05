import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Mewdle from "../../assets/mewdle-shot.png";
import perspectify from "../../assets/perspectify.png";
import tracker from '../../assets/cadtracker-shot.png'
import bvr from '../../assets/bvr-shot.png'
import './Carosel.css'

const Carosel = () => {

    const projects = [
        {
            title: "Mewdle",
            image: Mewdle,
            url: "https://github.com/ckzard",
            summary: "A Wordle-style Pokemon game that combines API orchestration, game state logic, and playful UI feedback."
        },
        {
            title: "Stats Tracker",
            image: tracker,
            url: "https://cadmailboxtracker.herokuapp.com/",
            summary: "A React reporting dashboard that turns team workflow data into clear metrics for day-to-day operations."
        },
        {
            title: "Perspectify",
            image: perspectify,
            url: "https://perspectify.herokuapp.com/",
            summary: "A news reading platform designed to present multiple viewpoints and reduce information bias."
        },
        {
            title: "Blue v Red",
            image: bvr,
            url: "https://github.com/ckzard",
            summary: "An in-progress product focused on competitive analytics and strategic decision support."
        },
    ]

    return (
        <section className="section-shell" id="featured-work">
            <div className="section-inner">
                <p className="section-kicker">Featured Work</p>
                <h2 className="section-title">Highlighted Projects and Product Thinking</h2>

                <Carousel className="car-main" interval={5000}>
                    {projects.map((item) => {
                        return (
                        <Carousel.Item key={item.title}>
                            <div className="carousel-content">
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.summary}</p>
                                    <a href={item.url} target="_blank" rel="noreferrer" className="btn-secondary">Open Project</a>
                                </div>

                                <img className="carousel-image" src={item.image} alt={`${item.title} preview`} />
                            </div>
                        </Carousel.Item>
                    )})}
                </Carousel>
            </div>
        </section>
    )
}

export default Carosel
