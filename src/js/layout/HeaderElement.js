import React from "react";
import headerData from "../../data/headerData.json"
import '../../scss/layout/_header.scss';
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import {gsap} from "gsap/gsap-core";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

function HeaderElement() {

    const navSections = Array.from(headerData.navSections)

    //Dynamic nav items
    const navItems = []

    navSections.forEach((navSection, index) => {
        navItems.push(
            <li className="header__nav-item" key={index}>
                <button className={"header__nav-btn"} onClick={() => {
                    scrollToNav(navSection)
                }} data-nav={navSection}>
                    <span className={"header__nav-btn-text"}>{navSection}</span>
                    <span className={"header__nav-btn-clone"}>{navSection}</span>
                </button>
            </li>
        )
    })

    //ScrollTo
    const mainSections = Array.from(document.querySelectorAll('main section'))
    mainSections.forEach(function(section, index) {
        section.setAttribute('data-section', navSections[index])
    })

    function scrollToNav(navSection) {
        console.log('S')
        console.log("[data-section='" + navSection + "']")
        const navTarget = document.querySelector("[data-section='" + navSection + "']");
        gsap.to(window, {
            duration: .5,
            ease: "none",
            scrollTo: {
                y: navTarget,
                offsetY: 59
            }
        });
        console.log('defe')
    }

    function returnFirstSection() {
        const firstSection = navSections[0]
        return firstSection
    }

    //Toggle header visibility on mobile
    function toggleMobileNav() {
        const headerEl = document.querySelector('.header');
        headerEl.classList.toggle('--mobile-nav-visible')
    }

    //Remember to add --active class at some point

    return(
        <header className={"header"}>
            <div className={"header__container"}>
                <div className={"header__logo-wrapper"}>
                    <button className={"header__logo-btn"} data-nav={returnFirstSection} onClick={() => {
                        scrollToNav('Hello')
                    }}>
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