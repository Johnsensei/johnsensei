import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function Footer () {
    return(
        <footer className="site-footer">
            <h3 className="footer-subtitle">Connect</h3>
            {/* TODO: Add Twitter, LinkedIn, and GitHub icons */}
            <div className="sns-footer-logos">
                <a href='https://twitter.com/MrJohnsensei' target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faTwitterSquare} size="2xl" style={{color: "#ffffff",}} />
                </a>
                <a href='https://www.linkedin.com/in/johnagale/' target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}} />
                </a>
                <a href='https://github.com/johnsensei' target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff",}} />
                </a>
            </div>
            <h4 className="footer-message">I wrote the code for this website using the React framework with a little help from ChatGPT.</h4>
        </footer>
    );
}

export default Footer;