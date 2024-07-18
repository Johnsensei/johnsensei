import React from "react";
import './Japanese.css';
import johnsenseiJapaneseImage from './img/johnsensei-japanese.png';
import japaneseClass from './img/japanese-class.jpg';

function Japanese () {
    return (
        <div className="japanese">
            <h2 className="japanese-title">Japanese Language</h2>
            <div className="japanese-container">
                <img src={johnsenseiJapaneseImage} alt="Japanese teacher Johnsensei" className="japanese-image" />
                {/* Credentials */}
                <div className="credentials-container">
                <h3 className="credentials-title-text">Credentials:</h3>
                    <ul>
                        <li className="credentials-item">Master of Arts in Japanese</li>
                            <ul>
                                <li className="credentials-sub-item">San Francisco State University</li>
                                <li className="credentials-sub-item">GPA 4.0</li>
                            </ul>
                        <li className="credentials-item">Japanese Language Proficiency Test ( JLPT )</li>
                            <ul>
                                <li className="credentials-sub-item">Level 1 Certification</li>
                            </ul>
                    </ul>
                </div>
                {/* Pictures with text of past experience */}
                <div className="exp-items-row">
                    <div className="exp-item">
                        <img src={japaneseClass} alt="Japanese Class" className="exp-image" />
                        <h4 className="exp-text">Former Japanese instructor at the</h4>
                        <a href='https://tlc.tennessee.edu/' target="_blank" rel="noopener noreferrer">
                            <h4 className="exp-text-anchor">Tennessee Language Center</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Japanese;