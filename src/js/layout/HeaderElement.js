import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { RiMenu3Fill } from "react-icons/ri"
import { RiCloseFill } from "react-icons/ri"
import "../../scss/layout/_header.scss"

export default function HeaderElement() {
    const [mobileNavVisible, toggleMobileNav] = useState(false)

    return(
        <header className={mobileNavVisible ? "header --mobile-nav-visible" : "header"}>
            <div className={"header__container"}>

                <div className={"header__wrapper"}>
                    <Link className={"header__logo-link"} to={"/"} onClick={() => toggleMobileNav(!mobileNavVisible)}>
                        <h1 className={"header__logo-link-text"}>&#60;RoryGrignard /&#62;</h1>
                    </Link>
                    <button className={"header__burger-btn"} onClick={() => toggleMobileNav(!mobileNavVisible)}>
                        <RiMenu3Fill className={"header__burger-btn-icon --burger"} />
                        <RiCloseFill className={"header__burger-btn-icon --close"} />
                    </button>
                </div>

                <nav className={"header__nav"}>
                    <ul className={"header__nav-list"}>
                        <li className="header__nav-item">
                            <NavLink className={"header__nav-link"} to={"/"} onClick={() => toggleMobileNav(!mobileNavVisible)}>
                                <span className={"header__nav-link-text"}>Coding</span>
                                <span className={"header__nav-link-clone"}>Coding</span>
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink className={"header__nav-link"} to={"/design"} onClick={() => toggleMobileNav(!mobileNavVisible)}>
                                <span className={"header__nav-link-text"}>Design</span>
                                <span className={"header__nav-link-clone"}>Design</span>
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink className={"header__nav-link"} to={"/contact"} onClick={() => toggleMobileNav(!mobileNavVisible)}>
                                <span className={"header__nav-link-text"}>Contact</span>
                                <span className={"header__nav-link-clone"}>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}