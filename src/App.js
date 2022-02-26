import React, {useEffect} from "react"
import WebFont from "webfontloader"
import HeaderElement from "./js/layout/HeaderElement"
import MainElement from "./js/layout/MainElement"
import FooterElement from "./js/layout/FooterElement"

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans:400,500,600,700', 'Source Code Pro:500,600']
      }
    })
  }, [])

  return (
    <div className="App">
      <HeaderElement />
      <MainElement />
      <FooterElement />
    </div>
  )
}

export default App
