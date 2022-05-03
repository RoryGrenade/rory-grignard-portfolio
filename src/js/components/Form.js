import { useState } from "react"
import { db } from "../utils/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import "../../scss/components/_form.scss"

export default function Form(props) {
    const colRef = collection(db, 'messages')

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [contactNo, setContactNo] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        addDoc(colRef, {
            first_name: firstName,
            last_name: lastName,
            email_address: email,
            contact_number: contactNo,
            message: message
        })

        setFirstName("")
        setLastName("")
        setEmail("")
        setContactNo("")
        setMessage("")
    }

    const handleReset = e => {
        e.preventDefault()
        setFirstName("")
        setLastName("")
        setEmail("")
        setContactNo("")
        setMessage("")
    }

    return (
        <section className={"form"}>
            <div className={"form__container"}>

                <form className="form__form"
                      onReset={(e) => {handleReset(e)}}
                      onSubmit={(e) => {handleSubmit(e)}}
                >
                    <div className="form__fields-wrapper">
                        <div className="form__field-wrapper">
                            <label
                                className="form__label"
                                htmlFor="firstname">First name</label>
                            <input
                                className="form__field"
                                type="text"
                                id="firstname"
                                required
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form__field-wrapper">
                            <label
                                className="form__label"
                                htmlFor="lastname">Last name</label>
                            <input
                                className="form__field"
                                type="text"
                                id="lastname"
                                required
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form__fields-wrapper">
                        <div className="form__field-wrapper">
                            <label
                                className="form__label"
                                htmlFor="email">Email</label>
                            <input
                                className="form__field"
                                type="email"
                                id="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form__field-wrapper">
                            <label
                                className="form__label"
                                htmlFor="contactNo">Contact number</label>
                            <input
                                className="form__field"
                                type="text"
                                id="contactNo"
                                value={contactNo}
                                onChange={e => setContactNo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form__field-wrapper">
                        <label
                            className="form__label"
                            htmlFor="message">Message</label>
                        <textarea
                            className="form__field"
                            id="message"
                            rows="8"
                            required
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
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