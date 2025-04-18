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
    name: "BibeBlog",
    image: "https://imgs.search.brave.com/YZ1SjLQxhbj0Pd5D19P6s61NQ7GMYKNHOnjLmt8DrdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ",
    description: "A full-stack blogging platform enabling users to create, post, and manage blogs seamlessly. Features include secure authentication, rich-text blog creation, and a user-friendly dashboard.",
    techStack: ["React.js", "Cloudflare Workers", "Hono", "PostgreSQL", "Prisma"],
    link: "https://github.com/Bibek-only/BibeBlog",
  },
  {
    name: "Paytm Wallet (PayVibe)",
    image: "https://imgs.search.brave.com/YZ1SjLQxhbj0Pd5D19P6s61NQ7GMYKNHOnjLmt8DrdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ",
    description: "A digital wallet application allowing users to sign in and securely transfer money to other registered users. Includes user registration, secure money transfers, and payment history tracking.",
    techStack: ["React", "Recoil", "React Router", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Zod"],
    link: "https://github.com/Bibek-only/paytm",
  },
  {
    name: "X-UI Clone",
    image: "https://imgs.search.brave.com/YZ1SjLQxhbj0Pd5D19P6s61NQ7GMYKNHOnjLmt8DrdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ",
    description: "A frontend clone of the X-UI interface, replicating the user interface using modern web technologies.",
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/Bibek-only/X-UI-clone",
  },
  {
    name: "Amazon UI Clone",
    image: "https://imgs.search.brave.com/YZ1SjLQxhbj0Pd5D19P6s61NQ7GMYKNHOnjLmt8DrdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ",
    description: "A static frontend clone of Amazon's user interface, built with HTML and CSS to replicate the design and layout.",
    techStack: ["HTML", "CSS"],
    link: "https://github.com/Bibek-only/Amazon-ui-clone",
  },
  {
    name: "Spotify Clone",
    image: "https://imgs.search.brave.com/YZ1SjLQxhbj0Pd5D19P6s61NQ7GMYKNHOnjLmt8DrdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ",
    description: "A frontend clone of Spotify's user interface, recreating the design and layout using modern web technologies.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Bibek-only/spotify",
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
        {/* Slider Container - removed side navigation buttons */}
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

        {/* New Bottom Navigation with Pagination Counter */}
        <div className="flex justify-center items-center mt-6 gap-4">
          <button
            ref={keenSliderPrev}
            className="rounded-full p-2 shadow-lg bg-amber-900 text-[oklch(84.133%_0.065_90.856)] dark:text-white dark:bg-[oklch(25.33%_0.016_252.42)] transition-all hover:opacity-80"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Pagination Counter */}
          <div className="flex items-center gap-2">
            <span ref={keenSliderActive} className="text-lg font-bold">
              1
            </span>
            <span className="text-lg">/</span>
            <span ref={keenSliderCount} className="text-lg">
              {projectsData.length}
            </span>
          </div>

          <button
            ref={keenSliderNext}
            className="rounded-full p-2 shadow-lg bg-amber-900 text-[oklch(84.133%_0.065_90.856)] dark:bg-[oklch(25.33%_0.016_252.42)] dark:text-white transition-all hover:opacity-80"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
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
      <div className="rounded-lg shadow-md overflow-hidden h-full flex flex-col bg-[oklch(84.133%_0.065_90.856)] dark:bg-[oklch(25.33%_0.016_252.42)]">
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

          <p className=" mb-4 line-clamp-3 flex-grow">{description}</p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-stone-600 text-stone-300 dark:text-[oklch(97.807%_0.029_256.847)] dark:bg-[oklch(21.15%_0.012_254.09)]"
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
            className="inline-flex items-center text-indigo-500 hover:text-indigo-600  hover:underline font-medium"
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
