import { useState, useEffect } from "react"
import { db } from "../utils/firebase"
import { doc, getDoc } from "firebase/firestore"
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Form from "../components/Form";

export default function Contact() {
    const [FireOffAMessageIntro, setFireOffAMessageIntro] = useState({})

    const fetchContent = async () => {
        const docRefFireOffAMessage = doc(db, "intros", "fire_off_a_message")
        const docSnapFireOffAMessage = await getDoc(docRefFireOffAMessage)

        setFireOffAMessageIntro(docSnapFireOffAMessage.data())
      }

      useEffect(() => {
        fetchContent()
      }, [])

    return (
        <>
            <Hero id={1} />
            <Intro id={FireOffAMessageIntro} />
            <Form />
        </>
    )
}