import React from "react";
import ImageAndContent from "../components/main/ImageAndContent";
import ContainedCarousel from "../components/main/ContainedCarousel"
import ConnectForm from "../components/main/ConnectForm";

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