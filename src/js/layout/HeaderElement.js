import BrandText from "./BrandText"
import Navigation from "./Navigation"
import "../../scss/layout/_header.scss"

export default function HeaderElement() {
    return(
        <header className={"header"}>
            <div className={"header__container"}>
                <BrandText />
                <Navigation />
            </div>
        </header>
    )
}