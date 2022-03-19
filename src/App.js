import React, {useEffect} from "react"
import WebFont from "webfontloader"
import HeaderElement from "./js/layout/HeaderElement"
import FooterElement from "./js/layout/FooterElement"
import Coding from "./js/routes/Coding"
import Design from "./js/routes/Design"
import Contact from "./js/routes/Contact"
import { Route, Routes } from "react-router-dom"

export default function App() {
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
          <main className="main">
              <Routes>
                  <Route index element={<Coding />} />
                  <Route path={"design"} element={<Design />} />
                  <Route path={"contact"} element={<Contact />} />
              </Routes>
          </main>
          <FooterElement />
      </div>
  )
}
