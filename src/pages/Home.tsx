import NavBar from "@/components/NavBar";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Footer from "@/components/Footer";
import Ruller from "@/components/Ruller";

const Home = () => {
  return (
    <>
    <p id="hero"></p>
    <div className="main bg-[oklch(91.637%_.034_90.515)] dark:bg-[oklch(21.15%_0.012_254.09)] text-amber-900 dark:text-[oklch(97.807%_0.029_256.847)]">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <p id="skills"></p>
      <Ruller></Ruller>
      <Skills></Skills>
      <p id="education"></p>
      <Ruller></Ruller>
      <Education></Education>
      <p id="projects"></p>
      <Ruller></Ruller>
      <Projects></Projects>
      <p id="contact"></p>
      <Ruller></Ruller>
      <ContactMe></ContactMe>
      <Ruller></Ruller>
      <Footer></Footer>
    </div>
    </>
  );
};

export default Home;
