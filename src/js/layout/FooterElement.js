import React from "react";
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
                                <a className={"footer__btn -linkedin"} href="https://www.linkedin.com/in/rory-grignard-b3207b66/" target="_blank" rel="noreferrer">
                                    <div className={"footer__icon -animated-hover"}></div>
                                    LinkedIn
                                </a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__btn -twitter"} href="https://twitter.com/RoryGrenade" target="_blank" rel="noreferrer">
                                    <div className={"footer__icon -animated-hover"}></div>
                                    Twitter
                                </a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__btn -codepen"} href="https://codepen.io/RoryGrenade" target="_blank" rel="noreferrer">
                                    <div className={"footer__icon -animated-hover"}></div>
                                    Codepen
                                </a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__btn -github"} href="https://github.com/RoryGrenade" target="_blank" rel="noreferrer">
                                    <div className={"footer__icon -animated-hover"}></div>
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={"footer__col"}>
                        <h4>Share my portfolio</h4>
                        <ul className={"footer__list"}>
                            <li className={"footer__item"}>
                                <button className={"footer__btn -linkedin"}>
                                    <div className={"footer__icon -animated-hover"}></div>
                                    LinkedIn
                                </button>
                            </li>
                            <li className={"footer__item"}>
                                <button className={"footer__btn -gmail"}>
                                    <div className={"footer__icon -animated-hover"}></div>
                                    Gmail
                                </button>
                            </li>
                            <li className={"footer__item"}>
                                <button className={"footer__btn -whatsapp"}>
                                    <div className={"footer__icon -animated-hover"}></div>
                                    WhatsApp
                                </button>
                            </li>
                            <li className={"footer__item"}>
                                <button className={"footer__btn -facebook"}>
                                    <div className={"footer__icon -animated-hover"}></div>
                                    Facebook
                                </button>
                            </li>
                            <li className={"footer__item"}>
                                <button className={"footer__btn -twitter"}>
                                    <div className={"footer__icon -animated-hover"}></div>
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