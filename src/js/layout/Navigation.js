import { NavLink } from "react-router-dom"
import "../../scss/layout/_navigation.scss"

export default function Navigation() {
    return (
        <nav className={"navigation"}>
            <ul className={"navigation__list"}>
                <li className="navigation__item">
                    <NavLink className={"navigation__link"} to={"/"}>
                        <span className={"navigation__link-text"}>Coding</span>
                        <span className={"navigation__link-clone"}>Coding</span>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className={"navigation__link"} to={"/design"}>
                        <span className={"navigation__link-text"}>Design</span>
                        <span className={"navigation__link-clone"}>Design</span>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className={"navigation__link"} to={"/contact"}>
                        <span className={"navigation__link-text"}>Contact</span>
                        <span className={"navigation__link-clone"}>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}