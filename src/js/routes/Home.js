import { useState, useEffect } from "react"
import { db } from "../utils/firebase"
import { doc, getDoc, getDocs, collection } from "firebase/firestore"
import Hero from "../components/Hero"
import Intro from "../components/Intro";
import Carousel from "../components/Carousel"

export default function Home() {
    const [heroContent, setHeroContent] = useState({})
    const [codingLanguagesIntro, setCodingLanguagesIntro] = useState({})
    const [codingLanguagesSlides, setCodingLanguagesSlides] = useState([])
    const [techStackIntro, setTechStackIntro] = useState({})
    const [techStackSlides, setTechStackSlides] = useState([])
    const [designIntro, setDesignIntro] = useState({})
    const [designSlides, setDesignSlides] = useState([])


    const fetchData = async () => {

        // Docs
        const docRefHeroContent = doc(db, "hero_data", "hello_world")
        const docRefCodingLanguagesIntro = doc(db, "intro_data", "coding_languages")
        const docRefTechStackIntro = doc(db, "intro_data", "tech_stack")
        const docRefDesignIntro = doc(db, "intro_data", "design")

        const docSnapHeroContent = await getDoc(docRefHeroContent)
        const docSnapCodingLanguagesIntro = await getDoc(docRefCodingLanguagesIntro)
        const docSnapTechStackIntro = await getDoc(docRefTechStackIntro)
        const docSnapDesignIntro = await getDoc(docRefDesignIntro)

        setHeroContent(docSnapHeroContent.data())
        setCodingLanguagesIntro(docSnapCodingLanguagesIntro.data())
        setTechStackIntro(docSnapTechStackIntro.data())
        setDesignIntro(docSnapDesignIntro.data())


        // Sub collections
        const colRefCodingLanguagesSlides = collection(db, "carousel_data", "coding_languages", "slides")
        const colRefTechStackSlides = collection(db, "carousel_data", "tech_stack", "slides")
        const colRefDesignSlides = collection(db, "carousel_data", "design", "slides")

        const colSnapCodingLanguagesSlides = await getDocs(colRefCodingLanguagesSlides)
        const colSnapTechStackSlides = await getDocs(colRefTechStackSlides)
        const colSnapDesignSlides = await getDocs(colRefDesignSlides)

        setCodingLanguagesSlides(colSnapCodingLanguagesSlides.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setTechStackSlides(colSnapTechStackSlides.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setDesignSlides(colSnapDesignSlides.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      }

      useEffect(() => {
        fetchData()
      }, [])
      

    return(
        <>
            <Hero id={heroContent} />
            <Intro id={codingLanguagesIntro}/>
            <Carousel id={codingLanguagesSlides} />
            <Intro id={techStackIntro} theme={"dark"} />
            <Carousel id={techStackSlides} theme={"dark"} />
            <Intro id={designIntro}/>
            <Carousel id={designSlides} />
        </>
    )
}