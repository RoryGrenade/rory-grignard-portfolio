import "../../scss/layout/_footer.scss"

export default function FooterElement() {
    return (
        <footer className={"footer"}>
            <div className={"footer__container"}>
                <div className={"footer__row"}>
                    <div className={"footer__col"}>
                        <h3 className={"footer__title"}>Connect</h3>
                        <ul className={"footer__list"}>
                            <li className={"footer__item"}>
                                <a className={"footer__link --linkedin"} href="https://www.linkedin.com/in/rory-grignard-b3207b66/" target="_blank" rel="noreferrer">
                                    <div className={"footer__icon -animated-hover"}/>
                                    LinkedIn
                                </a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__link --github"} href="https://github.com/RoryGrignard" target="_blank" rel="noreferrer">
                                    <div className={"footer__icon -animated-hover"}/>
                                    GitHub
                                </a>
                            </li>
                            <li className={"footer__item"}>
                                <a className={"footer__link --codepen"} href="https://codepen.io/RoryGrenade" target="_blank" rel="noreferrer">
                                    <div className={"footer__icon -animated-hover"}/>
                                    Codepen
                                </a>
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