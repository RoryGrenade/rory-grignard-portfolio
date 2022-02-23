import React from "react";
import ImageAndContent from "../components/ImageAndContent";
import ContainedCarousel from "../components/ContainedCarousel"
import ConnectForm from "../components/ConnectForm";
// import ExampleContent from "../components/ExampleContent"

function MainElement() {
    return(
        <main className={"main"}>
            <ImageAndContent />
            <ContainedCarousel />
            <ConnectForm />
        </main>
    )
}

export default MainElement;