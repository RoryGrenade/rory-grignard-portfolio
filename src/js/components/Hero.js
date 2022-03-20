import { FaArrowDown } from "react-icons/fa"
import heroData from "../../data/hero-data.json"
import "../../scss/components/_hero.scss"

export default function Hero(props) {
    return (
        <section className={"hero"}>
            <div className={"hero__img-wrapper"}>
                <picture className={"hero__picture"}>
                    <img className={"hero__img"}
                         src={heroData[props.id].backgroundImage}
                         alt={heroData[props.id].imageText}
                         key={heroData[props.id].id}
                    />
                </picture>
            </div>
            <div className={"hero__content-wrapper"}>
                <h1 className={"hero__title"}>
                    <span className={"hero__title-overline"}>{heroData[props.id].overlineText}</span>
                    {heroData[props.id].titleText}
                </h1>
                <p className={"hero__content"}>{heroData[props.id].bodyText}</p>
                <div className="hero__btn-wrapper">
                    <button className={"btn --btn-light"}>
                        <FaArrowDown />
                    </button>
                </div>
            </div>
        </section>
    )
}