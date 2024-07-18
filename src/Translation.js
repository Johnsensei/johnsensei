import React from "react";
import './Translation.css';
import './carousel.css';
import johnsenseiTranslationImage from './img/johnsensei-translation.png';
import mangaImage from './img/manga.jpg';
import musicImage from './img/music.jpg';
import interpreterImage1 from './img/interpreter1.jpg';
import interpreterImage2 from './img/interpreter2.jpg';
import interpreterImage3 from './img/interpreter3.jpg';
import { Carousel } from 'react-responsive-carousel';

function Translation () {
    return(
        <div className="translation">
            <h2 className="translation-title">Translation-Interpretation</h2>
            <div className="translation-container">
                <img src={johnsenseiTranslationImage} alt="Translation Johnsensei" className="translation-image" />
                <div className="translation-items-row">
                    {/* Manga */}
                    <div className="translation-item-parent">
                        <div className="translation-item">
                            <div className="translation-image-container">
                                <h3 className="translation-item-text">Manga</h3>
                                <a href='https://www.amazon.com/Witch-Boys-Vol-1-Manga-ebook/dp/B009D622XA/' target="_blank" rel="noopener noreferrer" >
                                    <img src={mangaImage} alt="Manga Translations" className="translation-item-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Music */}
                    <div className="translation-item-parent">
                        <div className="translation-item">
                            <div className="translation-image-container">
                                <h3 className="translation-item-text">Music</h3>
                                <a href='https://ch3records.com/products/manawave' target="_blank" rel="noopener noreferrer" >
                                    <img src={musicImage} alt="Music Translations" className="translation-item-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Interpreter for */}
                    <div className="translation-item-parent">
                        <div className="translation-item">
                            <div className="translation-image-container">
                                <h3 className="translation-item-text">Interpreter for</h3>
                                <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
                                    <div>
                                        <img src={interpreterImage1} alt="Interpreter Event 1" />
                                        <p className="legend">Ninja</p>
                                    </div>
                                    <div>
                                        <img src={interpreterImage2} alt="Interpreter Event 2" />
                                        <p className="legend">Calligraphy Expert</p>
                                    </div>
                                    <div>
                                        <img src={interpreterImage3} alt="Interpreter Event 3" />
                                        <p className="legend">Shoe Expert</p>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-parent">
                <h4 className="faq-text">Q: Help! I need a translator/interpreter. How do I hire you?</h4>
                <h4 className="faq-text">A: I only work on a select few long-planned projects. I'm unavailable otherwise.</h4>
                <h4 className="faq-text">Contact the <a href='https://tlc.tennessee.edu/' target="_blank" rel="noopener noreferrer">Tennessee Language Center</a> for a translator/interpreter in Nashville.</h4>
                <h4 className="faq-text">Search the <a href='https://www.atanet.org/directory/' target="_blank" rel="noopener noreferrer">American Translators Association</a> directory if you need a translator/interpreter with a specific specialization.</h4>
            </div>
        </div>
    );
}

export default Translation;
