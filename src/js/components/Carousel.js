import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js"
import { Navigation, EffectFade } from "swiper"
import carouselData from "../../data/carousel-data.json"
import "swiper/swiper.scss"
import "swiper/modules/navigation/navigation.scss"
import "swiper/modules/effect-fade/effect-fade.scss"
import "../../scss/components/_carousel.scss"

export default function Carousel(props) {
    return(
        <section className={"carousel"}>
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
                >
                    {carouselData.[props.id].slides.map((slide, index) => {
                        return <SwiperSlide className={"carousel__slide"} key={index}>
                            <div className="carousel__grid">
                                <div className="carousel__grid-item --typ">
                                    <h3 className={"carousel__grid-item-title"}>{slide.title}</h3>
                                    <p>{slide.description}</p>
                                </div>
                                <div className="carousel__grid-item --logo">
                                    <picture className={"ratio-16x9 --contain"}>
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