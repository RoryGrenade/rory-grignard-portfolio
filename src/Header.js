import React from "react";
import './scss/_header.scss';

function Header() {
    return(
        <header className="header">
            <div className="header__container">
                <button className="header__logo-button">
                    <h1 className="header__logo-text">&#60;Rory Grignard&#62;</h1>
                </button>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-button">
                            <button className="header__nav-link"><span><i>Home</i></span></button>
                        </li>
                        <li className="header__nav-button">
                            <button className="header__nav-link"><span><i>Skills</i></span></button>
                        </li>
                        <li className="header__nav-button">
                            <button className="header__nav-link"><span><i>Showcase</i></span></button>
                        </li>
                        <li className="header__nav-button">
                            <button className="header__nav-link"><span><i>Contact</i></span></button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;