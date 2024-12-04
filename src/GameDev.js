import React from "react";
import './GameDev.css';
import johnsenseiGameImage from './img/johnsensei-game.png';
import drawsultation from './img/drawsultation.png';
import gameJams from './img/game-jams.png';
import hiraganaBreaker from './img/hiragana-breaker.png';

function GameDev () {
    return (
        <div className="game-dev">
            <h2 className="game-dev-title">Game Development</h2>
            <div className="game-dev-container">
            <img src={johnsenseiGameImage} alt="Game Dev Johnsensei" className="game-dev-image" />
                <div className="game-items-row">
                 {/* Hiragana Breaker */}
                 <div className="game-item-parent">
                        <div className="game-item">
                            <div className="game-image-container">
                                <a href='https://apps.apple.com/us/app/hiragana-breaker/id1207140118' target="_blank" rel="noopener noreferrer" >
                                    <img src={hiraganaBreaker} alt="Hiragana Breaker" className="game-image" />
                                </a>
                            </div>
                        </div>
                    </div>
                {/* Game Jams */}
                <div className="game-item-parent">
                        <div className="game-item">
                            <div className="game-image-container">
                                <a href='https://johnsensei.itch.io/' target="_blank" rel="noopener noreferrer" >
                                    <img src={gameJams} alt="Game Jams" className="game-image" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Drawsultation */}
                    <div className="game-item-parent">
                        <div className="game-item">
                            <div className="game-image-container">
                                <a href='https://www.drawsultation.com/' target="_blank" rel="noopener noreferrer" >
                                    <img src={drawsultation} alt="Drawsultation" className="game-image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="privacy-policy">
                    <p>Privacy Policy: I don't collect or use any of your personal data in my apps, games, or websites.</p>
                    <p>App and Game Support Email: <a href="mailto:johnsenseigames@gmail.com">johnsenseigames@gmail.com</a></p>
                </div>
        </div>
    );
}

export default GameDev;