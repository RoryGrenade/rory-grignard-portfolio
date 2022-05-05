import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js"
import { Navigation, EffectFade } from "swiper"
import "swiper/swiper.scss"
import "swiper/modules/navigation/navigation.scss"
import "swiper/modules/effect-fade/effect-fade.scss"
import "../../scss/components/_carousel.scss"

export default function Carousel(props) {
    return(
        <section className={"carousel"} data-theme={props.theme}>
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
                    {props.id.map((slide) => {
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