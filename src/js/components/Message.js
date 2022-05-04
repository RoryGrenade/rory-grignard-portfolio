import "../../scss/components/_message.scss"

export default function Message() {
    return (
        <section className={"message"}>
            <div className={"message__container"}>
                <h3 className="message_title">Message submitted</h3>
                <p className="message__body">I've recieved your message and will get back to you soon!</p>
            </div>
        </section>
    )
}