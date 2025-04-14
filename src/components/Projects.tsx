import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import KeenSlider from "./KeenSlider";

// Project data structure
interface ProjectData {
  name: string;
  image: string;
  description: string;
  techStack: string[];
  link: string;
}

// Sample project data
const projectsData: ProjectData[] = [
  {
    name: "E-Commerce Platform",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
    link: "https://github.com/project/ecommerce",
  },
  {
    name: "Task Management App",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    description:
      "A Kanban-style task management application for teams with real-time updates.",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS", "Jest"],
    link: "https://github.com/project/taskmanager",
  },
  {
    name: "Weather Dashboard",
    image:
      "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Interactive weather dashboard with location-based forecasts and historical data visualization.",
    techStack: ["React", "D3.js", "OpenWeather API", "Styled Components"],
    link: "https://github.com/project/weatherdash",
  },
  {
    name: "Social Media Analytics",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    description:
      "Tool for analyzing social media engagement and growth metrics across platforms.",
    techStack: ["Next.js", "GraphQL", "Chart.js", "PostgreSQL"],
    link: "https://github.com/project/socialanalytics",
  },
  {
    name: "AI Image Generator",
    image:
      "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    description:
      "Web application that leverages AI to generate custom images from text descriptions.",
    techStack: ["Python", "TensorFlow", "FastAPI", "React"],
    link: "https://github.com/project/aiimagegen",
  },
];

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
        "(min-width: 640px)": { slides: { perView: 1.25 } },
        "(min-width: 768px)": { slides: { perView: 1.75 } },
        "(min-width: 1024px)": { slides: { perView: 2.5 } },
      },
      created(slider: any) {
        slider.slides[slider.track.details.rel].classList.remove("opacity-40");
        if (keenSliderActive.current && keenSliderCount.current) {
          keenSliderActive.current.innerText = slider.track.details.rel + 1;
          keenSliderCount.current.innerText = slider.slides.length;
        }
      },
      slideChanged(slider: any) {
        slider.slides.forEach((slide: any) =>
          slide.classList.add("opacity-40")
        );
        slider.slides[slider.track.details.rel].classList.remove("opacity-40");

        if (keenSliderActive.current) {
          keenSliderActive.current.innerText = slider.track.details.rel + 1;
        }
      },
    });

    return () => keenSliderInstance.current?.destroy();
  }, []);

  useEffect(() => {
    if (
      keenSliderPrev.current &&
      keenSliderNext.current &&
      keenSliderInstance.current
    ) {
      keenSliderPrev.current.addEventListener("click", () =>
        keenSliderInstance.current.prev()
      );
      keenSliderNext.current.addEventListener("click", () =>
        keenSliderInstance.current.next()
      );
    }
  }, []);

  return (
    <section className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8 py-8">
      <RoughNotation
        type="underline"
        color="var(--highlight-color)"
        animationDelay={2500}
        animationDuration={1500}
        show
      >
        <span className="text-4xl font-bold">Projects</span>
      </RoughNotation>

      <section className="relative mt-12">
        {/* Left Navigation Arrow */}
        <button
          ref={keenSliderPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all -ml-4 md:ml-2"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden">
          <div ref={sliderRef} className="keen-slider flex">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                image={project.image}
                description={project.description}
                techStack={project.techStack}
                link={project.link}
              />
            ))}
          </div>
        </div>

        {/* Right Navigation Arrow */}
        <button
          ref={keenSliderNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all -mr-4 md:mr-2"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Pagination Counter */}
        <div className="flex justify-center items-center mt-6 gap-2">
          <span ref={keenSliderActive} className="text-lg font-bold">
            1
          </span>
          <span className="text-lg">/</span>
          <span ref={keenSliderCount} className="text-lg">
            {projectsData.length}
          </span>
        </div>
      </section>
    </section>
  );
};

export default Projects;

interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  techStack: string[];
  link: string;
}

function ProjectCard({
  name,
  image,
  description,
  techStack,
  link,
}: ProjectCardProps) {
  return (
    <div className="keen-slider__slide opacity-40 transition-opacity duration-500 px-3">
      <div className="rounded-lg shadow-md overflow-hidden h-full flex flex-col bg-white dark:bg-gray-800">
        {/* Project Image */}
        <div className="h-48 sm:h-56 overflow-hidden">
          <img
            alt={name}
            src={image}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>

        {/* Project Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{name}</h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
            {description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Link */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
