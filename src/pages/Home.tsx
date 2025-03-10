
import NavBar from "@/components/NavBar"
import HeroSection from "./HeroSection"
import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe"
import Education from "./Education"
import Projects from "./Projects"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <div className="main bg-white dark:bg-black">
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
