import { useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js"
import { Navigation, EffectFade } from "swiper"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "swiper/swiper.scss"
import "swiper/modules/navigation/navigation.scss"
import "swiper/modules/effect-fade/effect-fade.scss"
import "../../scss/components/_carousel.scss"

gsap.registerPlugin(ScrollTrigger)

export default function Carousel(props) {

    const carouselRef = useRef(null)
    const q = gsap.utils.selector(carouselRef)
    let readyToAnimate = props.recievedData

    useEffect(() => {
        if (readyToAnimate === true) {
            const carouselContainer = q(".carousel__container")

            gsap.defaults({
                ease: 'none',
            })
        
            ScrollTrigger.defaults({
                toggleActions: 'play none none none',
                start: 'top 90%',
                // markers: true,
            })
    
            gsap.fromTo(carouselContainer, {
                autoAlpha: 0,
            }, {
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: carouselContainer,
                }
            })
        }
    }, [q, readyToAnimate])

    return(
        <section className={"carousel"} ref={carouselRef} data-theme={props.theme}>
            <div className="carousel__container">
                <Swiper
                    className={"carousel__swiper"}
                    modules={[Navigation, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    grabCursor={true}
                    navigation
                    effect={"fade"}
                    loop={true}
                >
                    {props.data.map((slide) => {
                        return <SwiperSlide className={"carousel__slide"} key={slide.id}>
                            <div className="carousel__grid">
                                <div className="carousel__grid-item --typ">
                                    <h3 className={"carousel__grid-item-title"}>{slide.title}</h3>
                                    <p>{slide.description}</p>
                                </div>
                                <div className="carousel__grid-item --logo">
                                    <picture className={"carousel__grid-item-picture ratio-16x9-md --contain"}>
                                        <img className={"carousel__grid-item-img"}
                                             src={slide.img_src}
                                             alt={slide.img_alt_text} />
                                    </picture>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </section>
    )
}