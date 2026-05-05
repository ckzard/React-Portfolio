import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <header className="section-shell hero-shell" id="home">
            <div className="section-inner hero-grid">
                <div className="hero-copy">
                    <p className="section-kicker">Software Engineer Portfolio</p>
                    <h1 className="hero-title">Christopher Burns</h1>
                    <Typed
                        className="hero-typed"
                        strings={[
                            "Building polished React experiences",
                            "Shipping reliable full-stack products",
                            "Turning complex requirements into clean UX"
                        ]}
                        typeSpeed={42}
                        backSpeed={24}
                        backDelay={1200}
                        loop
                    />
                    <p className="hero-description">
                        Full-stack developer blending product thinking, engineering discipline,
                        and modern frontend craft to create applications people enjoy using.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="#contact" className="btn-secondary">Let&apos;s Connect</a>
                    </div>
                </div>

                <div className="hero-stats">
                    <article>
                        <h2>4+</h2>
                        <p>Years across fintech and software delivery</p>
                    </article>
                    <article>
                        <h2>15+</h2>
                        <p>Technologies used across client and server</p>
                    </article>
                    <article>
                        <h2>End-to-End</h2>
                        <p>From architecture and APIs to responsive UI polish</p>
                    </article>
                </div>
            </div>
        </header>
    )
}

export default Header
