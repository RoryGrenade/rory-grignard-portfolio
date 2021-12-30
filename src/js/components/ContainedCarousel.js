import React from "react";
import containedCarouselData from '../../data/containedCarouselData.json'
import { Navigation, EffectFade } from 'swiper'
//Using direct file imports for swiper as Create React App doesn't support pure ESM packages yet - using Swiper (7.2.0+).
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/effect-fade/effect-fade.scss'
import '../../scss/components/_contained-carousel.scss'

function ContainedCarousel() {

    const containedCarouselItems = Object.values(containedCarouselData);

    return(
        <>
            {containedCarouselItems.map(item => {
                const containedCarouselItemItems = Object.values(item.items)

                return <section className={"contained-carousel"}>
                    <div className="contained-carousel__container">
                        <h1 className={"contained-carousel__title-primary"}>{item.title}</h1>
                        <Swiper
                            className={"contained-carousel__swiper"}
                            modules={[Navigation, EffectFade]}
                            spaceBetween={0}
                            slidesPerView={1}
                            grabCursor={true}
                            navigation
                            effect={'fade'}
                        >
                            {containedCarouselItemItems.map(itemItem => {
                                return <SwiperSlide className={"contained-carousel__slide"}>
                                    <div className="contained-carousel__slide-row">
                                    <div className="contained-carousel__slide-col -typ">
                                    <h1 className={"contained-carousel__title-secondary"}>{itemItem.title}</h1>
                                    <p>{itemItem.description}</p>
                                    </div>
                                        <div className="contained-carousel__slide-col -logo">
                                            <img className={"contained-carousel__img"} srcSet={itemItem.imagePath} alt={itemItem.imageTitle} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                </section>
            })}
        </>
    )
}

export default ContainedCarousel;