import { useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js"
import { Navigation, EffectFade } from "swiper"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import carouselData from "../../data/carousel-data.json"
import "swiper/swiper.scss"
import "swiper/modules/navigation/navigation.scss"
import "swiper/modules/effect-fade/effect-fade.scss"
import "../../scss/components/_carousel.scss"

gsap.registerPlugin(ScrollTrigger)

export default function Carousel(props) {
    gsap.defaults({
        ease: 'none',
    })

    ScrollTrigger.defaults({
        toggleActions: 'play none none none',
        start: 'top bottom-=40px',
        // markers: true,
    })

    const el = useRef(null)
    const q = gsap.utils.selector(el)

    useEffect(() => {
        const carouselTitle = q(".carousel__title")
        const carouselIntro = q(".carousel__intro")

        gsap.fromTo(carouselTitle, {
            clipPath: "inset(100% 0% 0% 0%)"
        }, {
            clipPath: "inset(0% 0% 0% 0%)",
            scrollTrigger: {
                trigger: carouselTitle,
            }
        })

        gsap.fromTo(carouselIntro, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: carouselIntro,
            }
        })
    })

    return(
        <section className={"carousel"} ref={el}>
            <div className="carousel__container">
                <div className={"carousel__title-wrapper"}>
                    <h2 className={"carousel__title"}>{carouselData.[props.id].title}</h2>
                    <p className={"carousel__intro"}>{carouselData.[props.id].intro}</p>
                </div>
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
                    {carouselData.[props.id].slides.map((slide, index) => {
                        return <SwiperSlide className={"carousel__slide"} key={index}>
                            <div className="carousel__grid">
                                <div className="carousel__grid-item --typ">
                                    <h3 className={"carousel__grid-item-title"}>{slide.title}</h3>
                                    <p>{slide.description}</p>
                                </div>
                                <div className="carousel__grid-item --logo">
                                    <picture className={"ratio-1x1 --contain"}>
                                        <img className={"carousel__grid-item-img"}
                                             src={slide.imagePath}
                                             alt={slide.imageTitle} />
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