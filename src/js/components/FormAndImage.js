import { useState, useEffect, useRef } from "react"
import Form from "./Form";
import FormInfo from "./FormInfo";
import "../../scss/components/_form-and-image.scss"

export default function FormAndImage(props) {
    const [formSubmitted, setFormSubmitted] = useState(false)

    const formInfoWrapperRef = useRef()
    console.log(formInfoWrapperRef)
    
    useEffect(() => {
        if (formSubmitted) formInfoWrapperRef.current.scrollIntoView()
        console.log('ran')
    });

    return (
        <section className={"form-and-image"}>
            <div className={"form-and-image__img-wrapper"}>
                <picture className={"form-and-image__picture"}>
                    <img className={"form-and-image__img"}
                         src={props.id.img_src}
                         alt={props.id.img_alt_text}
                         key={props.id}
                    />
                </picture>
            </div>
            <div className={"form-and-image__content-wrapper"} ref={formInfoWrapperRef}>
                <FormInfo id={props} showSubmitted={formSubmitted} />
                {!formSubmitted && <Form onChange={setFormSubmitted} />}          
            </div>
        </section>
    )
}