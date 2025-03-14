import { Briefcase, GraduationCap } from "lucide-react"

const educationData = [
  {
    id: 1,
    type: "education",
    title: "Bachelor of Computer Science",
    institution: "University of Technology",
    location: "New York, USA",
    duration: "2016 - 2020",
    description:
      "Graduated with honors. Specialized in Web Development and Artificial Intelligence. Participated in various hackathons and coding competitions.",
  },
  {
    id: 2,
    type: "education",
    title: "Master of Computer Applications",
    institution: "Institute of Advanced Studies",
    location: "San Francisco, USA",
    duration: "2020 - 2022",
    description:
      "Focused on advanced software development methodologies and project management. Completed thesis on scalable web applications.",
  },
  {
    id: 3,
    type: "work",
    title: "Junior Web Developer",
    institution: "Tech Innovations Inc.",
    location: "Boston, USA",
    duration: "2022 - 2023",
    description:
      "Developed and maintained client websites. Collaborated with design team to implement responsive UI/UX designs. Worked with React.js and Node.js.",
  },
  {
    id: 4,
    type: "work",
    title: "Full Stack Developer",
    institution: "Global Solutions Ltd.",
    location: "Remote",
    duration: "2023 - Present",
    description:
      "Leading development of enterprise web applications. Implementing CI/CD pipelines and best practices. Mentoring junior developers.",
  },
]

const TimelineItem = ({ item, isLast }:any) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-6">
      <div className="absolute left-0 top-6 flex justify-center items-center w-8 h-8 rounded-full bg-[oklch(84.133%_0.065_90.856)] dark:bg-[oklch(25.33%_0.016_252.42)] text-white">
        {item.type === "education" ? <GraduationCap size={18} /> : <Briefcase size={18} />}
      </div>

      {!isLast && <div className="absolute left-4 top-14 bottom-0 w-0.5 bg-stone-200 dark:bg-stone-700"></div>}

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <div className="px-3 py-1 text-xs font-medium bg-stone-200 dark:bg-stone-700 rounded-full">{item.duration}</div>
      </div>

      <div className="mb-2 text-stone-600 dark:text-stone-400">
        {item.institution} • {item.location}
      </div>

      <p className="text-stone-600 dark:text-stone-400">{item.description}</p>
    </div>
  )
}

const EducationSection = () => {
  return (
    <section id="education" className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
      <div className="">
        <div className=" mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Education &{" "}
            <span className="">
              Experience
            </span>
          </h2>
          <p className="mt-4  max-w-2xl ">
            My academic background and professional journey that have shaped my skills and expertise.
          </p>
        </div>

        <div className=" bg-[oklch(84.133%_0.065_90.856)] dark:bg-[oklch(25.33%_0.016_252.42)] rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            {educationData.map((item, index) => (
              <TimelineItem key={item.id} item={item} isLast={index === educationData.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection

