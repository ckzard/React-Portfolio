import React from 'react'
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelopeOpenText, } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare, faGit} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
    return (
        <div className="col-md-12">
            <div className="section" id="contact">
            <h1> Contact </h1>
            <div className="row">
            <div class="col-md-6">
            <FontAwesomeIcon icon={faPhone} style={{color: "black", fontSize: "xxx-large", marginBottom: 50}}/>
                <p class="contactPage" style={{fontSize: "xx-large"}}>647 308 0344</p> 
            </div>
            <div class="col-md-6">
            <FontAwesomeIcon icon={faEnvelopeOpenText} style={{color: "black", fontSize: "xxx-large", marginBottom: 50}}/>
                <p class="contactPage" style={{fontSize: "xx-large"}}> chris.burns006@gmail.com </p>
            </div>

            <div class="col-md-6">
            <FontAwesomeIcon icon={faGithubSquare} style={{color: "black", fontSize: "xxx-large", marginBottom: 50}}/>
                <p class="contactPage" style={{fontSize: "xx-large", color: "black"}}> <a href="https://github.com/ckzard"> Github</a> </p>
            </div>
            </div>
            
        </div>
        </div>
        
      
    )
}

export default Contact
