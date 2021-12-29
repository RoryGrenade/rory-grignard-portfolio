import React from "react";
import ContainedCarouselItems from '../../data/ContainedCarouselItems.json'
import { Navigation } from 'swiper';
//Using direct file imports for swiper as Create React App doesn't support pure ESM packages yet - using Swiper (7.2.0+).
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import '../../scss/components/_contained-carousel.scss'

function ContainedCarousel() {

    const containedCarouselItems = Object.values(ContainedCarouselItems);

    return(
        <>
            {containedCarouselItems.map(item => {
                const containedCarouselItemItems = Object.values(item.items)

                return <section className={"contained-carousel"}>
                    <div className="contained-carousel__container">
                        <h1 className={"contained-carousel__title-primary"}>{item.title}</h1>
                        <Swiper
                            className={"contained-carousel__swiper"}
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={1}
                            // loop={true}
                            grabCursor={true}
                            navigation
                        >
                            {containedCarouselItemItems.map(itemItem => {
                                return <SwiperSlide className={"contained-carousel__slide"}>
                                    <div className="contained-carousel__slide-row">
                                    <div className="contained-carousel__slide-col -typ">
                                    <h2 className={"contained-carousel__title-secondary"}>{itemItem.title}</h2>
                                    <p>{itemItem.description}</p>
                                    </div>
                                        <div className="contained-carousel__slide-col -logo">
                                            <img className={"contained-carousel__svg"} srcSet={itemItem.image} alt={itemItem.title} />
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