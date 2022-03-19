import { Link } from "react-router-dom"
import { RiMenu3Fill } from "react-icons/ri"
import { RiCloseFill } from "react-icons/ri"
import "../../scss/layout/_brand-text.scss"

export default function BrandText() {

    //Toggle header visibility on mobile
    function toggleMobileNav() {
        const headerEl = document.querySelector(".header")
        headerEl.classList.toggle("--mobile-nav-visible")
    }

    return (
        <div className={"brand-text"}>
            <Link className={"brand-text__logo-link"} to={"/"}>
                <h1 className={"brand-text__logo-link-text"}>&#60;RoryGrignard /&#62;</h1>
            </Link>
            <button className={"brand-text__burger-btn"} onClick={toggleMobileNav}>
                <RiMenu3Fill className={"brand-text__burger-btn-icon --burger"} />
                <RiCloseFill className={"brand-text__burger-btn-icon --close"} />
            </button>
        </div>
    )
}