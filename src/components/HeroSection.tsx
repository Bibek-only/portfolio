
import { RoughNotation } from "react-rough-notation";
import {motion} from "motion/react"

const HeroSection = () => {
  return (
    <div >
      <section id="heroSection" className="py-2 md:py-12 ">
        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl">
                Hello i'm Bibek
                a{" "}
                <div className="relative inline-flex">
                  <RoughNotation
                    type="highlight"
                    color="var(--highlight-color)"
                    animationDuration={1500}
                    animationDelay={500}
                    show
                  >
                    <h1 className="relative text-4xl font-bold sm:text-6xl lg:text-7xl">
                      Developer
                    </h1>
                  </RoughNotation>
                </div>
              </h1>

              <p className="mt-8 text-base sm:text-xl">
              I'm a passionate{" "}
              <RoughNotation type="underline" animationDelay={2000} animationDuration={1500} color="var(--highlight-color)" show>
                <span>Full Stack Developer</span>
              </RoughNotation>
              {" "}who loves building dynamic and user-friendly applications. I enjoy solving problems, learning new things, and turning ideas into reality.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-6 space-x-2">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold transition-all duration-200 bg-[oklch(84.133%_0.065_90.856)] dark:bg-[oklch(25.33%_0.016_252.42)]"
                  role="button"
                >
                  {" "}
                  Contact me{" "}
                </a>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold transition-all duration-200 bg-stone-600 dark:bg-[oklch(14%_0.005_285.823)] text-stone-300"
                  role="button"
                >
                  {" "}
                  Download CV{" "}
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center lg:order-last order-first">
              
              <motion.img className="md:w-72 w-40"  src="https://imgs.search.brave.com/N-i6pV6OiSOjGk2z5F5LyTgqCwSirkojSot7ZfddFZo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmFj/b21wLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvcmV2c2xpZGVy/L1RoZTctZmFuY3kt/dGl0bGUtYnVzaW5l/c3MvcmV2LXBlcnNv/bi1pbWcucG5n" alt=""
              
              >
              </motion.img>.
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default HeroSection;
