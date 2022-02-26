import React from "react"
import { RiMenu3Fill } from "react-icons/ri"
import { RiCloseFill } from "react-icons/ri"
import headerNavigationData from "../../../data/navigation-data.json"
import {gsap} from "gsap/gsap-core"
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import '../../../scss/components/header/_brand-text.scss'

gsap.registerPlugin(ScrollToPlugin)

function BrandText() {

    //Toggle header visibility on mobile
    function toggleMobileNav() {
        const headerEl = document.querySelector('.header')
        headerEl.classList.toggle('--mobile-nav-visible')
    }

    const navSections = Array.from(headerNavigationData.navSections)

    function scrollToFirstSection(firstSection) {
        const navTarget = document.querySelector("[data-section='" + firstSection + "']")
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
        <div className={"brand-text"}>
            <button className={"brand-text__logo-btn"} onClick={() => {
                scrollToFirstSection(navSections[0])
            }}>
                <h1 className={"brand-text__logo-btn-text"}>&#60;RoryGrignard /&#62;</h1>
            </button>
            <button className={"brand-text__burger-btn"} onClick={toggleMobileNav}>
                <RiMenu3Fill className={"brand-text__burger-btn-icon --burger"} />
                <RiCloseFill className={"brand-text__burger-btn-icon --close"} />
            </button>
        </div>
    )
}

export default BrandText