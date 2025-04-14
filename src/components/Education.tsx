import { Briefcase, GraduationCap } from "lucide-react";
import { RoughNotation } from "react-rough-notation";

const educationData = [
  {
    id: 1,
    type: "education",
    title: "10th Standard",
    institution: "Udayabata High School",
    location: "Patunia, Jajpur, Odisha",
    duration: "2018 - 2019",
    description:
      "Completed secondary education with 68% marks. Participated in various extracurricular activities and developed strong foundational knowledge in science and mathematics.",
  },
  {
    id: 2,
    type: "education",
    title: "12th Science (PCM)",
    institution: "Bajragiri Higher Secondary School",
    location: "Kotpur, Jajpur, Odisha",
    duration: "2019 - 2021",
    description:
      "Completed higher secondary education in Science stream with Physics, Chemistry, and Mathematics as core subjects. Secured 70% marks while developing analytical and problem-solving skills.",
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor of Computer Application",
    institution: "Driems University",
    location: "Cuttack, Odisha",
    duration: "2022 - 2025",
    description:
      "Pursuing undergraduate degree in Computer Application with a strong CGPA of 9.1. Focusing on software development and web technologies. Actively participating in coding competitions and project-based learning.",
  },
  {
    id: 4,
    type: "work",
    title: "Full Stack Developer",
    institution: "Astu Creative",
    location: "Remote",
    duration: "March 2025 - Present",
    description:
      "Working on multiple client projects including Next.js based 'Rukhimi Yoga' and 'Valakha Goa' - a business listing website. Implementing responsive designs using React for frontend and Firebase for backend services. Collaborating with design teams to deliver high-quality web solutions.",
  },
];

const TimelineItem = ({ item, isLast }: any) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-6">
      <div className="absolute left-0 top-6 flex justify-center items-center w-8 h-8 rounded-full bg-[oklch(84.133%_0.065_90.856)] dark:bg-[oklch(25.33%_0.016_252.42)] ">
        {item.type === "education" ? (
          <GraduationCap size={18} color="var(--iconColr)" />
        ) : (
          <Briefcase size={18} color="var(--iconColr)" />
        )}
      </div>

      {!isLast && (
        <div className="absolute left-4 top-14 bottom-0 w-0.5 dark:bg-indigo-500 bg-amber-900"></div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <div className="px-3 py-1 text-xs font-medium  rounded-full bg-stone-600 text-stone-300 dark:text-[oklch(97.807%_0.029_256.847)] dark:bg-[oklch(21.15%_0.012_254.09)] w-max">
          {item.duration}
        </div>
      </div>

      <div className="mb-2 ">
        {item.institution} • {item.location}
      </div>

      <p className="">{item.description}</p>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
      <div className="">
        <div className=" mb-12">
          <div className="text-3xl font-bold sm:text-4xl ">
            <RoughNotation
              type="underline"
              color="var(--highlight-color)"
              animationDelay={2500}
              animationDuration={1500}
              show
            >
              Education &{" "}
              <span className="text-red-300 dark:text-indigo-500">
                Experience
              </span>
            </RoughNotation>
          </div>
          <p className="mt-4  max-w-2xl ">
            My academic background and professional journey that have shaped my
            skills and expertise.
          </p>
        </div>

        <div className=" bg-[oklch(84.133%_0.065_90.856)] dark:bg-[oklch(25.33%_0.016_252.42)] rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            {educationData.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                isLast={index === educationData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
