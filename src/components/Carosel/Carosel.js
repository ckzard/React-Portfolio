import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Mewdle from "../../assets/mewdleshot.png";
import perspectify from "../../assets/perspectify.png";
import tracker from '../../assets/cadtracker-shot.png'
import cue1 from '../../assets/CUE1.jpg'
import cue3 from '../../assets/CUE3.PNG'
import wordsmith1 from '../../assets/Wordsmith1.PNG'
import wordsmith2 from '../../assets/Wordsmith2.PNG'
import './Carosel.css'

const Carosel = () => {

    const projects = [
        {
            title: "CUE",
            images: [cue1, cue3],
            url: null,
            status: "Coming Summer 2026",
            summary: "A social community app designed to foster real-world, face-to-face human connection. Cross-platform iOS & Android, currently in development."
        },
        {
            title: "Wordsmith",
            images: [wordsmith1, wordsmith2],
            url: null,
            status: "In Development",
            summary: "A mobile learning app that boosts retention through spaced-repetition study sessions. Import documents and absorb material through focused micro-reading."
        },
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
                                    {item.url
                                        ? <a href={item.url} target="_blank" rel="noreferrer" className="btn-secondary">Open Project</a>
                                        : <span className="project-status-badge">{item.status}</span>
                                    }
                                </div>

                                {item.images
                                    ? <div className="carousel-phone-shots">
                                        {item.images.map((img, i) => (
                                            <img key={i} src={img} alt={`${item.title} screen ${i + 1}`} />
                                        ))}
                                      </div>
                                    : <img className="carousel-image" src={item.image} alt={`${item.title} preview`} />
                                }
                            </div>
                        </Carousel.Item>
                    )})}
                </Carousel>
            </div>
        </section>
    )
}

export default Carosel
