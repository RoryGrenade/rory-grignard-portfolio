
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "../../scss/components/_form-info.scss"

gsap.registerPlugin(ScrollTrigger)

export default function FormInfo(props) {
    const formInfoRef = useRef(null)
    const q = gsap.utils.selector(formInfoRef)
    let readyToAnimate = props.data.recievedData

    useEffect(() => {
        if (readyToAnimate === true) {
            const infoTitle = q(".form-info__title")
            const infoDesc = q(".form-info__description")
            const tl = gsap.timeline({
                defaults: {
                    ease: "none",
                    duration: 1
                },
                scrollTrigger: {
                    toggleActions: 'play none none none',
                    start: 'top 90%',
                    // markers: true,
                    trigger: infoTitle
                }
            })

            tl.fromTo(infoTitle, {
                clipPath: "inset(100% 0% 0% 0%)",
            }, {
                clipPath: "inset(0% 0% 0% 0%)",
            })
            .fromTo(infoDesc, {
                autoAlpha: 0,
            }, {
                autoAlpha: 1,
            }, ">-0.5")
        }
    })

    return (
        <>
        {props.showSubmitted ? 
            <div className={"form-info"} ref={formInfoRef}>
                <h3 className={"form-info__title"}>{props.data.data.post_submit_title}</h3>
                <p className={"form-info__description"}>{props.data.data.post_submit_description}</p>
            </div>
        : 
            <div className={"form-info"} ref={formInfoRef}>
                <h3 className={"form-info__title"}>{props.data.data.pre_submit_title}</h3>
                <p className={"form-info__description"}>{props.data.data.pre_submit_description}</p>
            </div>
        }
        </>
        
    )
}