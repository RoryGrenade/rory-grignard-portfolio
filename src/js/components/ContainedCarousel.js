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
                                <p>I write W3C compliant, semantic HTML markup which is clear and easy to maintain.</p>
                                <h3>A few benefits of semantic markup include:</h3>
                                <ul>
                                    <li><strong>Accessibility</strong>, using the correct HTML elements make a web page accessible for the considerable amount of users that rely on screen reader software to navigate the internet.</li>
                                    <li><strong>SEO positioning</strong>, a page is indexed by Google if it has been visited by the Google crawler ("Googlebot"). When Googlebot crawls a webpage, it is analyzed for content and meaning, and stored in the Google index. Therefore semantic markup will help Google serve your webpage to the appropriate audience.</li>
                                </ul>
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
                                <p>Mobile first CSS, utilising the latest CSS layout modules to created immersive, fully responsive user experiences. <br/>Paired with the BEM methodology to ensure CSS that is scalable and easy to maintain (no nesting hell).</p>
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
                                <p>I create interactive and engaging components using DRY, modular ES6 Javascript. <br/>I use Babel transpiler to convert edge JavaScript to ES5 Javascript that is cross browser and backward compatible, even on older browsers.</p>
                            </div>
                            <div className="contained-carousel__slide-col -logo">
                                <JSShield className={"contained-carousel__svg"} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default ContainedCarousel;