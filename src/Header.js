import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
        <header className="site-header">
            <h1 className="site-title">johnsensei.com</h1>
            <h3 className="site-subtitle">The personal website of John Gale</h3>
            {/* <h3 className="site-subtitle">Media Consultant</h3> */}
            <nav className="site-nav">
                <button className="menu-toggle" onClick={toggleMenu}>
                    &#9776; {/* Unicode character for hamburger menu icon */}
                </button>
                <ul className={`menu ${menuOpen ? 'menu-open' : ''}`}>
                    <li><a href="#socialmediamanagement">Social Media Management</a></li>
                    <li><a href="#gamedevelopment">Game Development</a></li>
                    <li><a href="#japaneselanguage">Japanese Language</a></li>
                    <li><a href="#translationinterpretation">Translation-Interpretation</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;