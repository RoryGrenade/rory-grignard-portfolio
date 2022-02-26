import React from "react"
import headerNavigationData from "../../../data/navigation-data.json"
import {gsap} from "gsap/gsap-core"
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import '../../../scss/components/header/_navigation.scss'

gsap.registerPlugin(ScrollToPlugin)

function Navigation() {

    const navSections = Array.from(headerNavigationData.navSections)

    //Dynamic nav items
    const navItems = []

    navSections.forEach((navSection, index) => {
        navItems.push(
            <li className="navigation__item" key={index}>
                <button className={"navigation__btn"} onClick={() => {
                    updateActiveNav(navSection, index)
                    scrollToNav(navSection)
                }} data-active={setActiveNav(navSection)}>
                    <span className={"navigation__btn-text"}>{navSection}</span>
                    <span className={"navigation__btn-clone"}>{navSection}</span>
                </button>
            </li>
        )
    })

    //Set active nav
    function setActiveNav(navSection) {
        if (navSection === headerNavigationData.navSections[0]) {
            return "true"
        } else {
            return "false"
        }
    }

    //Update active nav
    function updateActiveNav(navSection, index) {
        console.log(navItems[index].props.children.props)
        // if (navSection) {
        //     XXXX.dataset.active = "true"
        // } else {
        //     XXXX.dataset.active = "false"
        // }
    }

    //ScrollTo
    function scrollToNav(navSection) {
        const navTarget = document.querySelector("[data-section='" + navSection + "']")
        gsap.to(window, {
            duration: .5,
            ease: "none",
            scrollTo: {
                y: navTarget,
                offsetY: 59
            }
        })
    }
    
    return (
        <nav className={"navigation"}>
            <ul className={"navigation__list"}>
                {navItems}
            </ul>
        </nav>
    )
}

export default Navigation