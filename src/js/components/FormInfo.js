import "../../scss/components/_form-info.scss"

export default function FormMessage(props) {
    return (
        <>
        {props.showSubmitted ? 
            <div className={"form-info"}>
                <h3 className={"form-info__title"}>{props.id.id.post_submit_title}</h3>
                <p className={"form-info__content"}>{props.id.id.post_submit_description}</p>
            </div>
        : 
            <div className={"form-info"}>
                <h3 className={"form-info__title"}>{props.id.id.pre_submit_title}</h3>
                <p className={"form-info__content"}>{props.id.id.pre_submit_description}</p>
            </div>
        }
        </>
        
    )
}