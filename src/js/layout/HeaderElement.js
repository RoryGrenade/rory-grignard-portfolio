import React from "react"
import BrandText from "../components/header/BrandText"
import Navigation from "../components/header/Navigation"
import '../../scss/layout/_header.scss'

function HeaderElement() {
    return(
        <header className={"header"}>
            <div className={"header__container"}>
                <BrandText />
                <Navigation />
            </div>
        </header>
    )
}

export default HeaderElement