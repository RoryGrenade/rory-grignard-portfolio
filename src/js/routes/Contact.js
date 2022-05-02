import { useState, useEffect } from "react"
import { db } from "../utils/firebase"
import { doc, getDoc } from "firebase/firestore"
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Form from "../components/Form";

export default function Contact() {
    const [messageIntro, setMessageIntro] = useState({})

    const fetchData = async () => {
        const docRefMessageIntro = doc(db, "intro_data", "message")
        const docSnapMessageIntro = await getDoc(docRefMessageIntro)

        setMessageIntro(docSnapMessageIntro.data())
      }

      useEffect(() => {
        fetchData()
      }, [])

    return (
        <>
            <Hero id={1} />
            <Intro id={messageIntro} />
            <Form />
        </>
    )
}