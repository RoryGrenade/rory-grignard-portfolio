import Hero from "../components/Hero"
import Intro from "../components/Intro";
import Carousel from "../components/Carousel"

export default function Home() {
    return(
        <>
            <Hero id={0} />
            <Intro id={0}/>
            <Carousel id={0} />
            <Intro id={1} theme={"dark"} />
            <Carousel id={1} theme={"dark"} />
            <Intro id={2}/>
            <Carousel id={2} />
        </>
    )
}