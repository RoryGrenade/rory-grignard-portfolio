import React from "react";
import { Navigation } from 'swiper';
//Using direct file imports for swiper as Create React App doesn't support pure ESM packages yet - using Swiper (7.2.0+).
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import '../../scss/components/_contained-carousel.scss'
import html5 from '../../img/logos/html5.png';
import css3 from '../../img/logos/css3.png';
import sass from '../../img/logos/sass.png';
import javascript from '../../img/logos/javascript.png';
import react from '../../img/logos/react.png';

function ContainedCarousel() {
    return(
        <section className={"contained-carousel"}>
            <div className="container">
                <h2>My Skillset</h2>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                >
                    <SwiperSlide>
                        <h3>Frontend Tech Stack</h3>
                        <p>I develop fast loading, accessible and fully responsive websites using HTML5, CSS3, SCSS, React JSX and Javascript ES6. <br/>Whether you're on a smart phone, tablet, laptop or desktop computer, I deliver websites that are intuitive, engaging and cross browser compatible. <br/>Enjoyable user experiences are what I'm all about.</p>
                        <div className="contained-carousel__logo-wrapper">
                            <div className="ratio-1x1 -cover">
                                <img src={html5} alt="HTML5" title="HTML5"/>
                            </div>
                            <div className="ratio-1x1 -cover">
                                <img src={css3} alt="CSS3" title="CSS3"/>
                            </div>
                            <div className="ratio-1x1 -cover">
                                <img src={sass} alt="SASS" title="SASS"/>
                            </div>
                            <div className="ratio-1x1 -cover">
                                <img src={javascript} alt="Javascript ES6" title="Javascript ES6"/>
                            </div>
                            <div className="ratio-1x1 -cover">
                                <img src={react} alt="React" title="React"/>
                            </div>
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