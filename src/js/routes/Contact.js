import { useState, useEffect } from "react"
import { db } from "../utils/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
import Hero from "../components/Hero";
import FormAndImage from "../components/FormAndImage";

export default function Contact() {
  const [heroContent, setHeroContent] = useState({})
  const [formAndImageContent, setFormAndImageContent] = useState({})
  const [recievedData, setRecievedData] = useState(false)

  const fetchData = async () => {
    const docRefHeroContent = doc(db, "hero_data", "make_contact")
    const docRefFormAndImageContent = doc(db, "form_and_image_data", "contact")

    const docSnapHeroContent = await getDoc(docRefHeroContent)
    const docSnapFormAndImageContent = await getDoc(docRefFormAndImageContent)

    setHeroContent(docSnapHeroContent.data())
    setFormAndImageContent(docSnapFormAndImageContent.data())

    setRecievedData(true)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Hero data={heroContent} />
      <FormAndImage data={formAndImageContent} recievedData={recievedData} />
    </>
  )
}