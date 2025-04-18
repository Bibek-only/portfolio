import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div>
      <section id="heroSection" className="py-2 md:py-12">
        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          {/* Visible only on mobile - Image at top */}
          <div className="flex justify-center mb-8 lg:hidden">
            <motion.img
              className="w-48 md:w-56"
              src="/bibek.png"
              alt="Bibek's profile picture"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Main content grid - standard layout for larger screens */}
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 justify-between">
            {/* Text section */}
            <div className="flex flex-col justify-start text-center lg:text-left">
              <h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl">
                Hello i'm Bibek a{" "}
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
                <RoughNotation
                  type="underline"
                  animationDelay={2000}
                  animationDuration={1500}
                  color="var(--highlight-color)"
                  show
                >
                  <span>Full Stack Developer</span>
                </RoughNotation>{" "}
                who loves building dynamic and user-friendly applications. I
                enjoy solving problems, learning new things, and turning ideas
                into reality.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <button
                  onClick={() => {
                    const phoneNumber = "9178240594";
                    const message = encodeURIComponent(
                      `Hello Bibek,
I just came across your portfolio and I’m impressed! I’d love to connect and explore potential opportunities or collaborations.`
                    );
                    const url = `https://wa.me/${phoneNumber}?text=${message}`;
                    window.open(url, "_blank"); // Opens WhatsApp in a new tab
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-semibold transition-all duration-200 bg-[oklch(84.133%_0.065_90.856)] dark:bg-[oklch(25.33%_0.016_252.42)] cursor-pointer"
                >
                  {" "}
                  Contact me{" "}
                </button>
                <a
                  href="/Bibek_Samal_Resume.pdf"
                  download="Bibek_Samal_Resume.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-semibold transition-all duration-200 bg-stone-600 dark:bg-[oklch(14%_0.005_285.823)] text-stone-300"
                  role="button"
                >
                  {" "}
                  Download CV{" "}
                </a>
              </div>
            </div>

            {/* Image section - visible only on desktop */}
            <div className="hidden lg:flex items-center justify-end">
              <motion.img
                className="md:w-72"
                src="/bibek.png"
                alt="Bibek's profile picture"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
