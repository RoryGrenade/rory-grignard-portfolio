import { useState, useEffect } from "react"
import { db } from "../utils/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Form from "../components/Form";

export default function Contact() {
    const [heroContent, setHeroContent] = useState({})
    const [messageIntro, setMessageIntro] = useState({})

    const fetchData = async () => {
        const docRefHeroContent = doc(db, "hero_data", "make_contact")
        const docRefMessageIntro = doc(db, "intro_data", "message")

        const docSnapHeroContent = await getDoc(docRefHeroContent)
        const docSnapMessageIntro = await getDoc(docRefMessageIntro)

        setHeroContent(docSnapHeroContent.data())
        setMessageIntro(docSnapMessageIntro.data())
      }

      useEffect(() => {
        fetchData()
      }, [])

    return (
        <>
            <Hero id={heroContent} />
            <Intro id={messageIntro} />
            <Form />
        </>
    )
}