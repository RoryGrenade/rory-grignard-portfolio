import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { FaArrowDown } from "react-icons/fa"
import "../../scss/components/_hero.scss"

gsap.registerPlugin(ScrollToPlugin)

export default function Hero(props) {
    const heroRef = useRef(null)
    const tl = useRef(null)

    useEffect(() => {
        const q = gsap.utils.selector(heroRef)
        tl.current = gsap.timeline({
            defaults: {
                ease: "none",
                duration: 1,
                delay: 1
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
        const scrollToDuration = heroRef.current.offsetHeight / 2000
        const nextSection = heroRef.current.nextElementSibling
        let scrollToOffset = (viewportWidth >= 768) ? 59 : 55
        gsap.to(window, {
            duration: scrollToDuration, 
            ease: "circ.out",
            scrollTo: {
                y: nextSection, 
                offsetY: scrollToOffset
            }
        })
    }

    return (
        <section className={"hero"} ref={heroRef}>
            <div className={"hero__img-wrapper"}>
                <picture className={"hero__picture"}>
                    <source srcSet={props.data.img_src_webp} type="image/webp" />
                    <img className={"hero__img"}
                         widh="1000"
                         height="1285"
                         src={props.data.img_src}
                         alt={props.data.img_alt_text}
                         key={props.data}
                    />
                </picture>
            </div>
            <div className={"hero__content-wrapper"}>
                <h1 className={"hero__title"}>
                    <span className={"hero__title-overline"}>{props.data.overline_text}</span>
                    {props.data.title_text}
                </h1>
                <p className={"hero__content"}>{props.data.body_text}</p>
                <div className="hero__btn-wrapper">
                    <button className={"hero__btn btn --btn-light"} 
                            aria-label="Read more"
                            onClick={() => {
                        scrollToNextSection()
                    }}>
                        Read more 
                        <FaArrowDown />
                    </button>
                </div>
            </div>
        </section>
    )
}