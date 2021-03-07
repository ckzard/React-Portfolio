import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info"> 
                <h1> Christopher Burns </h1>
                <Typed 
                className="typed-text"
                strings={["Javascript", "HTML5", "CSS3", "Node", "Express", "React", "SQL", "MongoDB" ]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </div>
        </div>
    )
}

export default Header
