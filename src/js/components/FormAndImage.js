import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Form from "./Form";
import FormInfo from "./FormInfo";
import "../../scss/components/_form-and-image.scss"

gsap.registerPlugin(ScrollTrigger)

export default function FormAndImage(props) {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const formAndImageRef = useRef(null)
    const q = gsap.utils.selector(formAndImageRef)
    let readyToAnimate = props.recievedData
    
    useEffect(() => {
        if (readyToAnimate === true) {
            const formPic = q(".form-and-image__picture")
        
            ScrollTrigger.defaults({
                toggleActions: 'play none none none',
                start: 'top 90%',
                // markers: true,
            })
    
            gsap.fromTo(formPic, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: formPic,
                }
            })
        }

        if (formSubmitted) scrollToFormWrapperTop()
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
        <section className={"form-and-image"} ref={formAndImageRef}>
            <div className={"form-and-image__img-wrapper"}>
                <picture className={"form-and-image__picture"}>
                <source srcSet={props.data.img_src_webp} type="image/webp" />
                    <img className={"form-and-image__img"}
                         src={props.data.img_src}
                         alt={props.data.img_alt_text}
                         key={props.data}
                    />
                </picture>
            </div>
            <div className={"form-and-image__content-wrapper"}>
                <FormInfo data={props} showSubmitted={formSubmitted} />
                {!formSubmitted && <Form onChange={setFormSubmitted} />}          
            </div>
        </section>
    )
}