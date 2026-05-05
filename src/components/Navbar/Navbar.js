import React from "react";
import { useEffect, useState } from "react";
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 36);
        };

        const closeOnDesktop = () => {
            if (window.innerWidth > 930) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', closeOnDesktop);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', closeOnDesktop);
        };
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about-me', label: 'About' },
        { href: '#featured-work', label: 'Featured' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <nav className={`portfolio-nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="portfolio-nav-inner">
                <a className="brand-mark" href="#home" aria-label="Homepage">CB</a>

                <button
                    className="menu-toggle"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <ul className={`nav-links ${isOpen ? 'is-open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
