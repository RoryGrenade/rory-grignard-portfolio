import React from "react";
import imageAndContentData from '../../data/imageAndContentData.json'
import { FaEye} from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import backgroundOne from "../../img/image-and-conent/bg1.jpg";
import curriculumVitae from "../../assets/curriculum-vitae-rory-grignard.pdf";
import "../../scss/components/_image-and-content.scss";

function ImageAndContent() {

    const data = Object.values(imageAndContentData)
    const title = data[0]
    const content = data[1]
    const buttonText = data[2]

    return (
        <section className={"image-and-content"}>
            <div className={"image-and-content__img-wrapper"}>
                <picture className={"image-and-content__picture"}>
                    <img className={"image-and-content__img"} src={backgroundOne} alt="Rory in car" title={"Image of Rory"} />
                </picture>
            </div>
            <div className={"image-and-content__content-wrapper"}>
                <h1 className={"image-and-content__title"}>{title}</h1>
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

export default ImageAndContent;