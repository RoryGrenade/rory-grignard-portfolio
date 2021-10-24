import React from "react";
import ImageAndContent from "./ImageAndContent";
import ExampleContent from "./ExampleContent"

function MainElement() {
    return(
        <main className={"main"}>
            <ImageAndContent />
            <ExampleContent />
        </main>
    )
}

export default MainElement;