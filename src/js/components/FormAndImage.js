import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Form from "./Form";
import FormInfo from "./FormInfo";
import "../../scss/components/_form-and-image.scss"

gsap.registerPlugin(ScrollToPlugin)

export default function FormAndImage(props) {
    const [formSubmitted, setFormSubmitted] = useState(false)
    
    useEffect(() => {
        if (formSubmitted) scrollToFormWrapperTop()
        console.log('ran')
    })

    function useViewportWidth() {
        const [width, setWidth] = useState(window.innerWidth)
        useEffect(() => {
            const handleResize = () => {
                setWidth(window.innerWidth)
            }
            window.addEventListener("resize", handleResize)
            return () => {
                window.removeEventListener("resize", handleResize)
            }
        }, [])
        return width
    }

    const viewportWidth = useViewportWidth()

    function scrollToFormWrapperTop() {
        const scrollToDuration = 0.5
        let scrollToOffset = (viewportWidth >= 768) ? 59 : 55
        gsap.to(window, {duration: scrollToDuration, scrollTo: {y: '.form-and-image', offsetY: scrollToOffset}})
    }

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
            <div className={"form-and-image__content-wrapper"}>
                <FormInfo id={props} showSubmitted={formSubmitted} />
                {!formSubmitted && <Form onChange={setFormSubmitted} />}          
            </div>
        </section>
    )
}