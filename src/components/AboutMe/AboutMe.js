import React from 'react';
import './AboutMe.css';
import Typed from "react-typed";

const AboutMe = () => {
  return (
    <section className="section-shell" id="about-me">
      <div className="section-inner about-grid">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title">Engineer, Builder, and Team-First Problem Solver</h2>
          <Typed
            className="about-typed"
            strings={[
              "Focused on product quality and clean architecture",
              "Grounded in analytics, security, and delivery",
              "Committed to thoughtful, user-centered solutions"
            ]}
            typeSpeed={34}
            backSpeed={20}
            backDelay={1400}
            loop
          />
          <p className="about-text">
            I am a full-stack developer with a background in cybersecurity, fraud analytics,
            and finance, currently focused on building high-impact web products with React and
            modern JavaScript. I combine technical depth with business context, which helps me
            ship software that is both reliable and aligned with real user goals.
          </p>
          <p className="about-text">
            My work style is collaborative and execution-driven: I break ambiguous problems into
            clear plans, communicate tradeoffs early, and maintain momentum through clean code,
            strong ownership, and attention to detail from architecture to UI finish.
          </p>
        </div>

        <div className="about-highlights">
          <h3>What I Bring</h3>
          <ul>
            <li>Production-ready React interfaces with scalable component patterns.</li>
            <li>API and data design in Node.js and Express with practical security mindset.</li>
            <li>Analytical thinking shaped by real-world risk and operations experience.</li>
            <li>Clear communication, team leadership, and reliable project delivery.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default AboutMe;
