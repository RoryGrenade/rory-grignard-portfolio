import React from "react";
import ContainedCarouselItems from '../../data/ContainedCarouselItems.json'
import { Navigation } from 'swiper';
//Using direct file imports for swiper as Create React App doesn't support pure ESM packages yet - using Swiper (7.2.0+).
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import '../../scss/components/_contained-carousel.scss'
import { ReactComponent as HTML5Shield } from '../../img/contained-carousel/html-5-shield.svg';
import { ReactComponent as CSS3Shield } from '../../img/contained-carousel/css-3-shield.svg';
import { ReactComponent as JSShield } from '../../img/contained-carousel/javascript-shield.svg';
import {render} from "@testing-library/react";

function ContainedCarousel() {

    const containedCarouselItems = Object.values(ContainedCarouselItems);

    return(
        <>
            {containedCarouselItems.map(item => {
                const containedCarouselItemItems = Object.values(item.Items)

                return <section className={"contained-carousel"}>
                    <div className="contained-carousel__container">
                        <h1 className={"contained-carousel__title-primary"}>{item.Title}</h1>
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
                                    <h2 className={"contained-carousel__title-secondary"}>{itemItem.Title}</h2>
                                    <p>{itemItem.Description}</p>
                                    </div>
                                        <div className="contained-carousel__slide-col -logo">
                                            <HTML5Shield className={"contained-carousel__svg"} />
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