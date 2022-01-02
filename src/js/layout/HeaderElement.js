import React from "react";
import headerData from "../../data/headerData.json"
import '../../scss/layout/_header.scss';
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";

function HeaderElement() {

    function toggleMobileNav() {
        const headerEl = document.querySelector('.header');
        headerEl.classList.toggle('--mobile-nav-visible')
    }

    const navSections = headerData.navSections

    const navItems = []

    navSections.forEach((navSection, index) => {
        navItems.push(
            <li className="header__nav-item" key={index}>
                <button className={"header__nav-btn"} data-nav={navSection}>
                    <span className={"header__nav-btn-text"}>{navSection}</span>
                    <span className={"header__nav-btn-clone"}>{navSection}</span>
                </button>
            </li>
        )
    })

    //Remember to add --active class

    return(
        <header className={"header"}>
            <div className={"header__container"}>
                <div className={"header__logo-wrapper"}>
                    <button className={"header__logo-btn"}>
                        <h1 className={"header__logo-btn-text"}>&#60;RoryGrignard /&#62;</h1>
                    </button>
                    <button className={"header__burger-btn"} onClick={toggleMobileNav}>
                        <RiMenu3Fill className={"header__burger-btn-icon --burger"} />
                        <RiCloseFill className={"header__burger-btn-icon --close"} />
                    </button>
                </div>
                <nav className={"header__nav"}>
                    <ul className={"header__nav-list"}>
                        {navItems}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderElement;