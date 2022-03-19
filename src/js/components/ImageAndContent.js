import React from "react";
import imageAndContentData from '../../data/image-and-content-data.json'
import { FaEye} from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import helloBackground from "../../img/image-and-conent/helloBackground.jpg";
import curriculumVitae from "../../assets/curriculum-vitae-rory-grignard.pdf";
import "../../scss/components/_image-and-content.scss";

function Hello() {

    const data = Object.values(imageAndContentData)
    const overlineText = data[0]
    const titleText = data[1]
    const content = data[2]
    const buttonText = data[3]

    return (
        <section className={"image-and-content"}>
            <div className={"image-and-content__img-wrapper"}>
                <picture className={"image-and-content__picture"}>
                    <img className={"image-and-content__img"} src={helloBackground} alt="Rory Grignard saying hello" title={"Image of Rory"} />
                </picture>
            </div>
            <div className={"image-and-content__content-wrapper"}>
                <h1 className={"image-and-content__title"}><span className={"image-and-content__title-overline"}>{overlineText} </span>{titleText}</h1>
                <p className={"image-and-content__content"}>{content}</p>
                <div className="image-and-content__btn-wrapper">
                    <a className={"image-and-content__cv-btn btn --btn-light"} href={curriculumVitae} target="_blank" rel="noreferrer">
                        <FaEye />{buttonText}
                    </a>
                    <button className={"btn --btn-light"}>
                        <FaArrowDown />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hello;