import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { FaArrowDown } from "react-icons/fa"
import "../../scss/components/_hero.scss"

gsap.registerPlugin(ScrollToPlugin)

export default function Hero(props) {
    const el = useRef(null)
    const tl = useRef(null)

    useEffect(() => {
        const q = gsap.utils.selector(el)
        tl.current = gsap.timeline({
            defaults: {
                ease: "none",
                duration: 1
            }
        })
            .fromTo(q(".hero__img-wrapper"), {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: 3
            })
            .fromTo(q(".hero__title"), {
                clipPath: "inset(100% 0% 0% 0%)"
            }, {
                clipPath: "inset(0% 0% 0% 0%)"
            }, 0)
            .fromTo(q(".hero__content"), {
                autoAlpha: 0,
            }, {
                autoAlpha: 1,
            }, ">-0.5")
            .fromTo(q(".hero__btn"), {
                autoAlpha: 0,
            }, {
                autoAlpha: 1
            }, ">-0.5")
    }, [])

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

    function scrollToNextSection() {
        const scrollToDuration = el.current.offsetHeight / 1500
        const nextSection = el.current.nextElementSibling
        let scrollToOffset = (viewportWidth >= 768) ? 59 : 55
        gsap.to(window, {duration: scrollToDuration, scrollTo: {y: nextSection, offsetY: scrollToOffset}})
    }

    return (
        <section className={"hero"} ref={el}>
            <div className={"hero__img-wrapper"}>
                <picture className={"hero__picture"}>
                    <img className={"hero__img"}
                         src={props.id.img_src}
                         alt={props.id.img_alt_text}
                         key={props.id}
                    />
                </picture>
            </div>
            <div className={"hero__content-wrapper"}>
                <h1 className={"hero__title"}>
                    <span className={"hero__title-overline"}>{props.id.overline_text}</span>
                    {props.id.title_text}
                </h1>
                <p className={"hero__content"}>{props.id.body_text}</p>
                <div className="hero__btn-wrapper">
                    <button className={"hero__btn btn --btn-light"} onClick={() => {
                        scrollToNextSection()
                    }}>
                        <FaArrowDown />
                    </button>
                </div>
            </div>
        </section>
    )
}