import React from "react";
import { FaLinkedin} from "react-icons/fa";
import { FaFacebook} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import "../../scss/layout/_footer.scss"

function FooterElement() {
    return (
        <footer className={"Footer -theme-dark"}>
            <div className={"footer__container"}>
                <div className={"footer__row"}>
                    <div className={"footer__col"}>
                        <h4>Let's get connected</h4>
                        <ul className={"footer__list"}>
                            <li className={"footer__item"}>
                                <a className={"footer__btn"} href="https://www.linkedin.com/in/rory-grignard-b3207b66/" target="_blank" rel="noreferrer">
                                    <FaLinkedin className={"footer__icon"} />
                                    LinkedIn
                                </a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__btn"} href="https://twitter.com/RoryGrenade" target="_blank" rel="noreferrer">
                                    <FaTwitter className={"footer__icon"} />
                                    Twitter
                                </a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__btn"} href="https://codepen.io/RoryGrenade" target="_blank" rel="noreferrer">
                                    <FaCodepen className={"footer__icon"} />
                                    CodePen
                                </a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__btn"} href="https://github.com/RoryGrenade" target="_blank" rel="noreferrer">
                                    <FaGithubAlt className={"footer__icon"} />
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={"footer__col"}>
                        <h4>Share my portfolio</h4>
                        <ul className={"footer__list"}>
                            <li className={"footer__item"}>
                                <button className={"footer__btn"}>
                                    <FaLinkedin className={"footer__icon"} />
                                    LinkedIn
                                </button>
                            </li>
                            <li className={"footer__item"}>
                                <button className={"footer__btn"}>
                                    <SiGmail className={"footer__icon"} />
                                    Email
                                </button>
                            </li>
                            <li className={"footer__item"}>
                                <button className={"footer__btn"}>
                                    <IoLogoWhatsapp className={"footer__icon"} />
                                    WhatsApp
                                </button>
                            </li>
                            <li className={"footer__item"}>
                                <button className={"footer__btn"}>
                                    <FaFacebook className={"footer__icon"} />
                                    Facebook
                                </button>
                            </li>
                            <li className={"footer__item"}>
                                <button className={"footer__btn"}>
                                    <FaTwitter className={"footer__icon"} />
                                    Twitter
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"footer__row"}>
                    <div className={"footer__col"}>
                        <small className={"footer__copyright"}>Copyright &copy; Rory Grignard <span className={"dynamicYear"}></span>.</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterElement;