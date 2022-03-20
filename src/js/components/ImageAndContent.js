import { FaArrowDown } from "react-icons/fa"
import imageAndContentData from "../../data/image-and-content-data.json"
import "../../scss/components/_image-and-content.scss"

export default function ImageAndContent(props) {
    return (
        <section className={"image-and-content"}>
            <div className={"image-and-content__img-wrapper"}>
                <picture className={"image-and-content__picture"}>
                    <img className={"image-and-content__img"}
                         src={imageAndContentData[props.id].backgroundImage}
                         alt={imageAndContentData[props.id].imageText}
                         key={imageAndContentData[props.id].id}
                    />
                </picture>
            </div>
            <div className={"image-and-content__content-wrapper"}>
                <h1 className={"image-and-content__title"}>
                    <span className={"image-and-content__title-overline"}>{imageAndContentData[props.id].overlineText}</span>
                    {imageAndContentData[props.id].titleText}
                </h1>
                <p className={"image-and-content__content"}>{imageAndContentData[props.id].bodyText}</p>
                <div className="image-and-content__btn-wrapper">
                    <button className={"btn --btn-light"}>
                        <FaArrowDown />
                    </button>
                </div>
            </div>
        </section>
    )
}