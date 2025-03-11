
import NavBar from "@/components/NavBar"
import HeroSection from "./HeroSection"
import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe"
import Education from "./Education"
import Projects from "./Projects"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <div className="main bg-[oklch(91.637%_.034_90.515)] dark:bg-[oklch(21.15%_0.012_254.09)] text-amber-900 dark:text-[oklch(97.807%_0.029_256.847)]">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Education></Education>
        <ContactMe></ContactMe>
        <Footer></Footer>
      
    </div>
  )
}

export default Home
