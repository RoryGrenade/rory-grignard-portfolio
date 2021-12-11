import React from "react";
import { Navigation } from 'swiper';
//Using direct file imports for swiper as Create React App doesn't support pure ESM packages yet - using Swiper (7.2.0+).
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import '../../scss/components/_contained-carousel.scss'
import { ReactComponent as HTML5Shield } from'../../img/skills-logos/html-5-shield.svg';
import { ReactComponent as CSS3Shield } from'../../img/skills-logos/css-3-shield.svg';
import { ReactComponent as JSShield } from'../../img/skills-logos/javascript-shield.svg';

function ContainedCarousel() {
    return(
        <>
            <section className={"contained-carousel"}>
                <div className="contained-carousel__container">
                    <h1 className={"contained-carousel__title-primary"}>Frontend Web Development</h1>
                    <Swiper
                        className={"contained-carousel__swiper"}
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        // loop={true}
                        grabCursor={true}
                        navigation
                    >
                        <SwiperSlide className={"contained-carousel__slide"}>
                            <div className="contained-carousel__slide-row">
                                <div className="contained-carousel__slide-col -typ">
                                    <h2 className={"contained-carousel__title-secondary"}>HTML5</h2>
                                    <p>I write W3C compliant, semantic HTML markup which is optimised for search engine indexing, accessible to people using assitive technologies and is easy to maintain and scale for fellow developers. <br/><br/>I'm also familiar with SilverStripe template syntax, JSX, and have some experiece with Shopify Liquid.</p>
                                </div>
                                <div className="contained-carousel__slide-col -logo">
                                    <HTML5Shield className={"contained-carousel__svg"} />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={"contained-carousel__slide"}>
                            <div className="contained-carousel__slide-row">
                                <div className="contained-carousel__slide-col -typ">
                                    <h2 className={"contained-carousel__title-secondary"}>CSS3</h2>
                                    <p>Combined with mobile first CSS, utilising the latest CSS layout modules to create immersive, fully responsive user experiences. <br/><br/>I use the BEM methodology to ensure that there are never any CSS selector conflicts, which makes for incredibly robust styling solutions.</p>
                                </div>
                                <div className="contained-carousel__slide-col -logo">
                                    <CSS3Shield className={"contained-carousel__svg"} />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={"contained-carousel__slide"}>
                            <div className="contained-carousel__slide-row">
                                <div className="contained-carousel__slide-col -typ">
                                    <h2 className={"contained-carousel__title-secondary"}>JS</h2>
                                    <p>Lastly a sprinkle of DRY, modular ES6 Javascript to create interactive and engaging UI components. <br/><br/>I use Babel transpiler to convert edge JavaScript to cross browser compatible ES5 Javascript.</p>
                                </div>
                                <div className="contained-carousel__slide-col -logo">
                                    <JSShield className={"contained-carousel__svg"} />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className={"contained-carousel -theme-dark"}>
                <div className="contained-carousel__container">
                    <h1 className={"contained-carousel__title-primary"}>Tech Stack</h1>
                    <Swiper
                        className={"contained-carousel__swiper"}
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        // loop={true}
                        grabCursor={true}
                        navigation
                    >
                        <SwiperSlide className={"contained-carousel__slide"}>
                            <div className="contained-carousel__slide-row">
                                <div className="contained-carousel__slide-col -typ">
                                    <h2 className={"contained-carousel__title-secondary"}>HTML5</h2>
                                    <p>I write W3C compliant, semantic HTML markup which is optimised for search engine indexing, accessible to people using assitive technologies and is easy to maintain and scale for fellow developers. <br/><br/>I'm also familiar with SilverStripe template syntax, JSX, and have some experiece with Shopify Liquid.</p>
                                </div>
                                <div className="contained-carousel__slide-col -logo">
                                    <HTML5Shield className={"contained-carousel__svg"} />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className={"contained-carousel"}>
                <div className="contained-carousel__container">
                    <h1 className={"contained-carousel__title-primary"}>UI/UX</h1>
                    <Swiper
                        className={"contained-carousel__swiper"}
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        // loop={true}
                        grabCursor={true}
                        navigation
                    >
                        <SwiperSlide className={"contained-carousel__slide"}>
                            <div className="contained-carousel__slide-row">
                                <div className="contained-carousel__slide-col -typ">
                                    <h2 className={"contained-carousel__title-secondary"}>HTML5</h2>
                                    <p>I write W3C compliant, semantic HTML markup which is optimised for search engine indexing, accessible to people using assitive technologies and is easy to maintain and scale for fellow developers. <br/><br/>I'm also familiar with SilverStripe template syntax, JSX, and have some experiece with Shopify Liquid.</p>
                                </div>
                                <div className="contained-carousel__slide-col -logo">
                                    <HTML5Shield className={"contained-carousel__svg"} />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default ContainedCarousel;