import React, { useEffect } from "react"
import WebFont from "webfontloader"
import { Route, Routes } from "react-router-dom"
import HeaderElement from "./js/layout/HeaderElement"
import Home from "./js/routes/Home"
import Contact from "./js/routes/Contact"
import FooterElement from "./js/layout/FooterElement"

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans:400,500,600,700', 'Source Code Pro:500,600&display=swap']
      }
    })
  }, [])

  return (
      <div className="App">
          <HeaderElement />
          <main className="main">
              <Routes>
                  <Route index element={<Home />} />
                  <Route path={"contact"} element={<Contact />} />
              </Routes>
          </main>
          <FooterElement />
      </div>
  )
}
