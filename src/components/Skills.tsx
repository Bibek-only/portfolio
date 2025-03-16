import { RoughNotation } from "react-rough-notation";
import { Code, Database, Figma, FileJson, Globe, Layers, LayoutGrid, Palette, Server, Smartphone } from "lucide-react"
import {motion} from "motion/react"

const Skills = () => {
  return (
    <section  className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8 py-5 ">
      <RoughNotation
        type="underline"
        color="var(--highlight-color)"
        animationDelay={2500}
        animationDuration={1500}
        show
      >
        <span className="text-4xl font-bold">Skills & <span className="text-red-300 dark:text-indigo-500">technology</span></span>
      </RoughNotation>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 py-4 md:py-8">
      {skills.map((skill, index) => (
            <motion.div
            initial={{
              x: 0,
              y: 0,
            }}

            // whileInView={{
            //   x: 0,
            //   y: 0,
            //   rotate:0,
            //   opacity:[0,100]
            // }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            animate={{
              x:0,
              y:[0,10,-10,0],
              
              
            }}
            
              key={index}
              className="flex flex-col items-center justify-center md:p-4 p-2"
            >
              {skill.icon}
              <h3 className="text-center">{skill.name}</h3>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
const skills = [
      { name: "HTML/CSS", icon: <Globe className="h-8 w-8 mb-2" /> },
      { name: "JavaScript", icon: <FileJson className="h-8 w-8 mb-2" /> },
      { name: "React.js", icon: <Code className="h-8 w-8 mb-2" /> },
      { name: "Next.js", icon: <Server className="h-8 w-8 mb-2" /> },
      { name: "Tailwind CSS", icon: <Palette className="h-8 w-8 mb-2" /> },
      { name: "UI/UX Design", icon: <Figma className="h-8 w-8 mb-2" /> },
      { name: "Responsive Design", icon: <Smartphone className="h-8 w-8 mb-2" /> },
      { name: "RESTful APIs", icon: <Database className="h-8 w-8 mb-2" /> },
      { name: "TypeScript", icon: <Layers className="h-8 w-8 mb-2" /> },
      { name: "CSS Grid/Flexbox", icon: <LayoutGrid className="h-8 w-8 mb-2" /> },
    ]



