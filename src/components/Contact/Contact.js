import React from 'react'
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelopeOpenText, } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
    return (
        <section className="section-shell" id="contact">
            <div className="section-inner">
                <p className="section-kicker">Contact</p>
                <h2 className="section-title">Let&apos;s Build Something Strong Together</h2>
                <p className="contact-intro">
                    I&apos;m open to software engineering opportunities and collaboration on interesting products.
                    Reach out and I&apos;ll respond quickly.
                </p>

                <div className="contact-grid">
                    <a className="contact-card" href="tel:+16473080344">
                        <FontAwesomeIcon icon={faPhone} />
                        <div>
                            <h3>Phone</h3>
                            <p>+1 (647) 308-0344</p>
                        </div>
                    </a>

                    <a className="contact-card" href="mailto:chris.burns006@gmail.com">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} />
                        <div>
                            <h3>Email</h3>
                            <p>chris.burns006@gmail.com</p>
                        </div>
                    </a>

                    <a className="contact-card" href="https://github.com/ckzard" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} />
                        <div>
                            <h3>GitHub</h3>
                            <p>github.com/ckzard</p>
                        </div>
                    </a>

                    <a className="contact-card" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <div>
                            <h3>LinkedIn</h3>
                            <p>Add your profile URL</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact
