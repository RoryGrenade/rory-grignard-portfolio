import "../../scss/layout/_footer.scss"

export default function FooterElement() {
    return (
        <footer className={"footer"}>
            <div className={"footer__container"}>
                <div className={"footer__row"}>
                    <div className={"footer__col"}>
                        <h3 className={"footer__title"}>Lets connect</h3>
                        <ul className={"footer__list"}>
                            <li className={"footer__item"}>
                                <a className={"footer__btn --linkedin"} href="https://www.linkedin.com/in/rory-grignard-b3207b66/" target="_blank" rel="noreferrer">
                                    <div className={"footer__icon -animated-hover"}/>
                                    LinkedIn
                                </a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__btn --github"} href="https://github.com/RoryGrignard" target="_blank" rel="noreferrer">
                                    <div className={"footer__icon -animated-hover"}/>
                                    GitHub
                                </a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__btn --codepen"} href="https://codepen.io/RoryGrenade" target="_blank" rel="noreferrer">
                                    <div className={"footer__icon -animated-hover"}/>
                                    Codepen
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={"footer__col"}>
                        <h3 className={"footer__title"}>Share</h3>
                        <ul className={"footer__list"}>
                            <li className={"footer__item"}>
                                <button className={"footer__btn --linkedin"}>
                                    <div className={"footer__icon -animated-hover"}/>
                                    LinkedIn
                                </button>
                            </li>
                            <li className={"footer__item"}>
                                <button className={"footer__btn --gmail"}>
                                    <div className={"footer__icon -animated-hover"}/>
                                    Email
                                </button>
                            </li>
                            <li className={"footer__item"}>
                                <button className={"footer__btn --whatsapp"}>
                                    <div className={"footer__icon -animated-hover"}/>
                                    WhatsApp
                                </button>
                            </li>
                            <li className={"footer__item"}>
                                <button className={"footer__btn --facebook"}>
                                    <div className={"footer__icon -animated-hover"}/>
                                    Facebook
                                </button>
                            </li>
                            <li className={"footer__item"}>
                                <button className={"footer__btn --twitter"}>
                                    <div className={"footer__icon -animated-hover"}/>
                                    Twitter
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"footer__row"}>
                    <div className={"footer__col"}>
                        <small className={"footer__copyright"}>Copyright &copy; Rory Grignard <span className={"dynamicYear"}/>.</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}