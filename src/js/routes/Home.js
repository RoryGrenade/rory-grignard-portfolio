import { useState, useEffect } from "react"
import { db } from "../utils/firebase"
import { doc, getDoc } from "firebase/firestore"
import Hero from "../components/Hero"
import Intro from "../components/Intro";
import Carousel from "../components/Carousel"

export default function Home() {
    const [codingLanguagesIntro, setCodingLanguagesIntro] = useState({})
    const [techStackIntro, setTechStackIntro] = useState({})
    const [designIntro, setDesignIntro] = useState({})

    const fetchData = async () => {
        const docRefCodingLanguages = doc(db, "intro_data", "coding_languages")
        const docRefTechStack = doc(db, "intro_data", "tech_stack")
        const docRefDesign = doc(db, "intro_data", "design")

        const docSnapCodingLanguages = await getDoc(docRefCodingLanguages)
        const docSnapTechStack = await getDoc(docRefTechStack)
        const docSnapDesign = await getDoc(docRefDesign)

        setCodingLanguagesIntro(docSnapCodingLanguages.data())
        setTechStackIntro(docSnapTechStack.data())
        setDesignIntro(docSnapDesign.data())
      }

      useEffect(() => {
        fetchData()
      }, [])


    return(
        <>
            <Hero id={0} />
            <Intro id={codingLanguagesIntro}/>
            <Carousel id={0} />
            <Intro id={techStackIntro} theme={"dark"} />
            <Carousel id={1} theme={"dark"} />
            <Intro id={designIntro}/>
            <Carousel id={2} />
        </>
    )
}