import React from "react";
import ImageAndContent from "../components/ImageAndContent";
import ContainedCarousel from "../components/ContainedCarousel"
import ExampleContent from "../components/ExampleContent"

function MainElement() {
    return(
        <main className={"main"}>
            <ImageAndContent />
            <ContainedCarousel />
            <ExampleContent />
        </main>
    )
}

export default MainElement;