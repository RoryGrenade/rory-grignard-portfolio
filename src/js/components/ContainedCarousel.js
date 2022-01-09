import React from "react";
import containedCarouselData from '../../data/containedCarouselData.json'
//Using direct file imports for swiper as Create React App doesn't support pure ESM packages yet - using Swiper (7.2.0+).
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/effect-fade/effect-fade.scss'
import '../../scss/components/_contained-carousel.scss'

function ContainedCarousel() {

    const containedCarouselItems = Object.values(containedCarouselData);

    return(
        <>
            {containedCarouselItems.map((item, index) => {
                const containedCarouselItemItems = Object.values(item.items)

                return <section className={"contained-carousel"} key={index}>
                    <div className="contained-carousel__container">
                        <div className={"contained-carousel__title-wrapper"}>
                            <h2 className={"contained-carousel__title"}>{item.title}</h2>
                            <p className={"contained-carousel__intro"}>{item.intro}</p>
                        </div>
                        <Swiper
                            className={"contained-carousel__swiper"}
                            modules={[Navigation, EffectFade]}
                            spaceBetween={0}
                            slidesPerView={1}
                            grabCursor={true}
                            navigation
                            effect={'fade'}
                        >
                            {containedCarouselItemItems.map((itemItem, index) => {
                                return <SwiperSlide className={"contained-carousel__slide"} key={index}>
                                    <div className="contained-carousel__grid">
                                    <div className="contained-carousel__grid-item --typ">
                                    <h3 className={"contained-carousel__grid-item-title"}>{itemItem.title}</h3>
                                    <p>{itemItem.description}</p>
                                    </div>
                                        <div className="contained-carousel__grid-item --logo">
                                            <picture className={"ratio-16x9 --contain"}>
                                                <img className={"contained-carousel__grid-item-img"} srcSet={itemItem.imagePath} alt={itemItem.imageTitle} />
                                            </picture>
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