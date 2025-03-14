import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import KeenSlider from "../components/KeenSlider";

const Projects = () => {
  const sliderRef = useRef(null);
  const keenSliderInstance = useRef<KeenSlider | null>(null);
  const keenSliderActive = useRef<HTMLSpanElement>(null);
  const keenSliderCount = useRef<HTMLSpanElement>(null);
  const keenSliderPrev = useRef<HTMLButtonElement>(null);
  const keenSliderNext = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    keenSliderInstance.current = new KeenSlider(sliderRef.current, {
      loop: true,
      defaultAnimation: {
        duration: 750,
      },
      slides: {
        origin: "center",
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 640px)": { slides: { perView: 1.5 } },
        "(min-width: 768px)": { slides: { perView: 1.75 } },
        "(min-width: 1024px)": { slides: { perView: 3 } },
      },
      created(slider:any) {
        slider.slides[slider.track.details.rel].classList.remove("opacity-40");
        if (keenSliderActive.current && keenSliderCount.current) {
          keenSliderActive.current.innerText = slider.track.details.rel + 1;
          keenSliderCount.current.innerText = slider.slides.length;
        }
      },
      slideChanged(slider:any) {
        slider.slides.forEach((slide:any) => slide.classList.add("opacity-40"));
        slider.slides[slider.track.details.rel].classList.remove("opacity-40");

        if (keenSliderActive.current) {
          keenSliderActive.current.innerText = slider.track.details.rel + 1;
        }
      },
    });

    return () => keenSliderInstance.current?.destroy();
  }, []);

  useEffect(() => {
    if (keenSliderPrev.current && keenSliderNext.current && keenSliderInstance.current) {
      keenSliderPrev.current.addEventListener("click", () => keenSliderInstance.current.prev());
      keenSliderNext.current.addEventListener("click", () => keenSliderInstance.current.next());
    }
  }, []);

  return (
    <section className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8 py-5">
      <RoughNotation type="underline" color="var(--highlight-color)" animationDelay={2500} animationDuration={1500} show>
        <span className="text-4xl font-bold">Projects</span>
      </RoughNotation>

      <section className="">
        <div className="">
          

          <div className="mt-8">
            <div ref={sliderRef} className="keen-slider flex ">
              {/* sliders cards */}
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
              
            </div>
            

            <div className="flex justify-center items-center mt-4 gap-4">
              <button ref={keenSliderPrev} className="px-4 py-2  rounded-md">Prev</button>
              <span ref={keenSliderActive} className="text-lg font-bold">1</span> /
              <span ref={keenSliderCount} className="text-lg font-bold">3</span>
              <button ref={keenSliderNext} className="px-4 py-2  rounded-md">Next</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;

function ProjectCard(){
  return(
    <div className="keen-slider__slide opacity-40 transition-opacity duration-500 px-2">
                <blockquote className="rounded-lg   shadow-xs p-2 bg-[oklch(84.133%_0.065_90.856)] dark:bg-[oklch(25.33%_0.016_252.42)]">
                  <div className="">
                    <img
                      alt="Reviewer"
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1180&q=80"
                      className=""
                    />
                    
                  </div>
                  <p className="mt-4 ">"This is an amazing product! It changed my life!"</p>
                </blockquote>
                
              </div>
  )
}
