import React from "react";
import './SocialMedia.css';
import johnsenseiSocialImage from './img/johnsensei-social.png'; // Import the image
import CGJ from './img/cgj.png';
import NashGameDev from './img/ngd.png';
import NCBF from './img/ncbf.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function SocialMedia (){
    return (
        <div className="social-media">
            <h2 className="sns-title">Social Media Management</h2>
            <div className="sns-container">
                <img src={johnsenseiSocialImage} alt="Social Media Johnsensei" className="social-media-image" />
                <div className="current-container">
                    <h3 className="accounts-text">Accounts I manage and create content for:</h3>
                    <div className="sns-items-row">
                        {/* Consulate-General of Japan in Nashville */}
                        <div className="sns-item-parent">
                            <div className="sns-item">
                                <div className="sns-image-container">
                                    <a href='https://www.nashville.us.emb-japan.go.jp/itprtop_en/index.html' target="_blank" rel="noopener noreferrer" >
                                        <img src={CGJ} alt="Consulate-General of Japan in Nashville logo" className="sns-image" />
                                    </a>
                                </div>
                                <div className="sns-logos">
                                    <a href='https://www.facebook.com/nvconsjp' target="_blank" rel="noopener noreferrer" >
                                        <FontAwesomeIcon icon={faFacebookSquare} size="2xl" style={{color: "#ffffff",}} />
                                    </a>
                                    <a href='https://www.instagram.com/japaninnashville/' target="_blank" rel="noopener noreferrer" >
                                        <FontAwesomeIcon icon={faInstagramSquare} size="2xl" style={{color: "#ffffff",}} />
                                    </a>
                                    <a href='https://www.youtube.com/c/ConsulateGeneralofJapaninNashville' target="_blank" rel="noopener noreferrer" >
                                        <FontAwesomeIcon icon={faYoutubeSquare} size="2xl" style={{color: "#ffffff",}} />
                                    </a>
                                    <a href='https://www.linkedin.com/company/consulategeneralofjapan/' target="_blank" rel="noopener noreferrer" >
                                        <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Nashville Game Developers */}
                        <div className="sns-item-parent">
                            <div className="sns-item">
                                <div className="sns-image-container">
                                    <a href='https://nashgame.dev/' target="_blank" rel="noopener noreferrer" >
                                        <img src={NashGameDev} alt="NashGameDev logo" className="sns-image" />
                                    </a>
                                </div>
                                <div className="sns-logos">
                                    <a href='https://twitter.com/NashGameDev' target="_blank" rel="noopener noreferrer" >
                                        <FontAwesomeIcon icon={faTwitterSquare} size="2xl" style={{color: "#ffffff",}} />
                                    </a>
                                    <a href='https://www.instagram.com/nashgamedev/' target="_blank" rel="noopener noreferrer" >
                                        <FontAwesomeIcon icon={faInstagramSquare} size="2xl" style={{color: "#ffffff",}} />
                                    </a>
                                    <a href='https://www.youtube.com/@nashgamedev9149' target="_blank" rel="noopener noreferrer" >
                                        <FontAwesomeIcon icon={faYoutubeSquare} size="2xl" style={{color: "#ffffff",}} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Past Accounts */}
                    <h3 className="accounts-text">Past accounts I managed:</h3>
                    <div className="sns-items-row">
                        {/* Consulate-General of Japan in Nashville */}
                        <div className="sns-item-parent">
                            <div className="sns-item">
                                <div className="sns-image-container">
                                    <a href='https://www.nashvillecherryblossomfestival.org/' target="_blank" rel="noopener noreferrer" >
                                        <img src={NCBF} alt="Nashville Cherry Blossom Festival logo" className="sns-image" />
                                    </a>
                                </div>
                                <div className="sns-logos">
                                    <a href='https://www.facebook.com/NashvilleCherryBlossomFestival' target="_blank" rel="noopener noreferrer" >
                                        <FontAwesomeIcon icon={faFacebookSquare} size="2xl" style={{color: "#ffffff",}} />
                                    </a>
                                    <a href='https://twitter.com/nashvillecbf' target="_blank" rel="noopener noreferrer" >
                                        <FontAwesomeIcon icon={faTwitterSquare} size="2xl" style={{color: "#ffffff",}} />
                                    </a>
                                    <a href='https://www.instagram.com/nashvillecherryblossomfestival/' target="_blank" rel="noopener noreferrer" >
                                        <FontAwesomeIcon icon={faInstagramSquare} size="2xl" style={{color: "#ffffff",}} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;