import React from "react";
import { FaEye} from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import backgroundOne from "../../img/backgrounds/bg1.jpg";
import curriculumVitae from "../../assets/curriculum-vitae-rory-grignard.pdf";
import "../../scss/components/_image-and-content.scss";

function ImageAndContent() {
    return (
        <section className={"image-and-content -theme-dark"}>
            <div className={"image-and-content__img-wrapper"}>
                <picture className={"image-and-content__picture"}>
                    <img className={"image-and-content__img"} src={backgroundOne} alt="Rory in car" title={"Image of Rory"} />
                </picture>
            </div>
            <div className={"image-and-content__content-wrapper"}>
                <h1 className={"image-and-content__heading"}>Welcome to my <span>portfolio</span></h1>
                <hr/>
                <p className={"image-and-content__copy"}>Hi there, my name is Rory Grignard. <br/><br/>I'm a frontend developer and I'm passionate about user experience and user interface development. <br /><br />
                    My background includes development of fast loading fully responsive, mobile first websites for award winning agencies, as well as updating and maintaining an international ecommerce website. <br /><br />
                    This is my portfolio, a creative playground for me, and hopefully a source of inspiration and enjoyment for you.</p>
                <div className="image-and-content__btn-wrapper">
                    <a className={"image-and-content__cv-btn btn -btn-light"} href={curriculumVitae} target="_blank" rel="noreferrer">
                        <FaEye /> View My CV!
                    </a>
                    <button className={"btn -btn-light"}>
                        <FaArrowDown />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ImageAndContent;