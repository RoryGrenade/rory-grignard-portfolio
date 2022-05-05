import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Form from "./Form";
import FormInfo from "./FormInfo";
import "../../scss/components/_form-and-image.scss"

gsap.registerPlugin(ScrollTrigger);

export default function FormAndImage(props) {
    const [formSubmitted, setFormSubmitted] = useState(false)

    const el = useRef(null)
    

    return (
        <section className={"form-and-image"} ref={el}>
            <div className={"form-and-image__img-wrapper"}>
                <picture className={"form-and-image__picture"}>
                    <img className={"form-and-image__img"}
                         src={props.id.img_src}
                         alt={props.id.img_alt_text}
                         key={props.id}
                    />
                </picture>
            </div>
            <div className={"form-and-image__content-wrapper"}>
                <FormInfo id={props} showSubmitted={formSubmitted} />
                <Form onChange={setFormSubmitted} />              
            </div>
        </section>
    )
}