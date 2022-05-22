import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "../../scss/components/_intro.scss"

gsap.registerPlugin(ScrollTrigger)

export default function Intro(props) {

    const introRef = useRef(null)
    const q = gsap.utils.selector(introRef)
    let readyToAnimate = props.recievedData

    useEffect(() => {
        if (readyToAnimate === true) {
            const introTitle = q(".intro__title")
            const introDesc = q(".intro__description")

            gsap.defaults({
                ease: 'none',
            })
        
            ScrollTrigger.defaults({
                toggleActions: 'play none none none',
                start: 'top 90%',
                // markers: true,
            })
    
            gsap.fromTo(introTitle, {
                clipPath: "inset(0% 0% 100% 0%)",
            }, {
                clipPath: "inset(0% 0% 0% 0%)",
                scrollTrigger: {
                    trigger: introTitle,
                }
            })
    
            gsap.fromTo(introDesc, {
                autoAlpha: 0,
            }, {
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: introDesc,
                }
            })
        }
    }, [q, readyToAnimate])

    return(
        <section className={"intro"} ref={introRef} data-theme={props.theme}>
            <div className="intro__container">
                <h2 className={"intro__title"}>{props.data.title}</h2>
                <p className={"intro__description"}>{props.data.description}</p>
            </div>
        </section>
    )
}