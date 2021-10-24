import React from "react";
import './scss/_header.scss';
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { ReactComponent as Drip1 } from "./img/svg/drip-1.svg";
import { ReactComponent as Drip2 } from "./img/svg/drip-2.svg";
import { ReactComponent as Drip3 } from "./img/svg/drip-3.svg";
import { ReactComponent as Drip4 } from "./img/svg/drip-4.svg";

function HeaderElement() {
    return(
        <header className="header">
            <div className="header__container">
                <div className="header__button-wrapper">
                    <button className="header__logo-button">
                        <h1 className="header__logo-text">&#60;RoryGrignard /&#62;</h1>
                    </button>
                    <button className="header__burger" onClick={toggleMobileNav}>
                        <RiMenu3Fill className="header__burger-icon -burger" />
                        <RiCloseFill className="header__burger-icon -close" />
                    </button>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <button className="header__nav-button active"><span><i>Home</i></span></button>
                        </li>
                        <li className="header__nav-item">
                            <button className="header__nav-button"><span><i>Skills</i></span></button>
                        </li>
                        <li className="header__nav-item">
                            <button className="header__nav-button"><span><i>Showcase</i></span></button>
                        </li>
                        <li className="header__nav-item">
                            <button className="header__nav-button"><span><i>Contact</i></span></button>
                        </li>
                    </ul>
                    <div className="header__drip-wrapper">
                        <Drip1 className="header__drip" />
                        <Drip2 className="header__drip" />
                        <Drip3 className="header__drip" />
                        <Drip4 className="header__drip" />
                    </div>
                </nav>
            </div>
        </header>
    )
}

function toggleMobileNav() {
    const headerEl = document.querySelector('.header');
    headerEl.classList.toggle('-nav-active')
}

export default HeaderElement;