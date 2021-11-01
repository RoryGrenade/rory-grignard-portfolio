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
            <div className="container">
                <h1>Frontend Web Development</h1>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                >
                    <SwiperSlide>
                        <h2>Fundamentals</h2>
                        <p>As a frontend web developer with over five years experience, I have a good grasp of website coding fundamentals, namely W3C compliant and accessible HTML markup, scalable and maintainable CSS, and DRY, modular, well commented and backward compatible Javascript.</p>
                        <div className="contained-carousel__logo-wrapper">
                            <HTML5Shield className={"contained-carousel__svg"} />
                            <CSS3Shield className={"contained-carousel__svg"} />
                            <JSShield className={"contained-carousel__svg"} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row">
                            <div className="col">
                                <h3>Web Technologies</h3>
                                <p>Lately I've been enjoying creating React apps, fun fact this website was created using Create React App.</p>
                                <h4>CDN & Package Managers</h4>
                                <p>I've used content delivery networks as well as package managers to add dependencies to projects.<br/>Both approaches have their benefits, however Yarn package manager is without a doubt my "go to" technology for managing project dependencies.</p>
                                <h4>Version Control</h4>
                                <p>I use git for version control, and have worked with remote Bitbucket repositories on small medium and large projects, on my own and as part of a team.</p>
                                <h4>Libraries</h4>
                                <p>I'm well versed using libraries, such as Bootstrap 3, 4, 5 and Greensock JS. These third party libraries enables rapid development of interactive websites that are scalable, and easy to maintain.</p>
                                <h4>Analytics</h4>
                                <p>I use Google Tag manager to deploy Google Analytics and other website information, adding to ease of website maintainability.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*<SwiperSlide>*/}

                    {/*</SwiperSlide>*/}
                    {/*<SwiperSlide>*/}

                    {/*</SwiperSlide>*/}
                </Swiper>
            </div>
        </section>
    )
}

export default ContainedCarousel;