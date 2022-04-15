import Intro from "./Intro";
import "../../scss/components/_form.scss"

export default function Form(props) {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <section className={"form"}>
            <div className={"form__container"}>

                <Intro id={3} />

                <form className="form__form" onSubmit={e => {handleSubmit(e)}}>
                    <div className="form__fields-wrapper">
                        <div className="form__field-wrapper">
                            <label htmlFor="firstname">First name</label>
                            <input type="text" name="firstname" id="firstname"/>
                        </div>
                        <div className="form__field-wrapper">
                            <label htmlFor="lastname">Last name</label>
                            <input type="text" name="lastname" id="lastname"/>
                        </div>
                    </div>

                    <div className="form__fields-wrapper">
                        <div className="form__field-wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email"/>
                        </div>
                        <div className="form__field-wrapper">
                            <label htmlFor="tel">Contact no</label>
                            <input type="text" name="tel" id="tel"/>
                        </div>
                    </div>

                    <div className="form__field-wrapper">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows={"8"} />
                    </div>

                    <div className="form__fields-wrapper --btn">
                        <input className={"btn --btn-dark"} type="submit" value="Send"/>
                        <input className={"btn --btn-trans-bdr"} type="reset" value="Reset"/>
                    </div>
                </form>
            </div>
        </section>
    )
}