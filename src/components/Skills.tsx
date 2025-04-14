import { RoughNotation } from "react-rough-notation";
import {
  Code,
  Database,
  
  FileJson,
  Globe,
  Layers,
  
  Palette,
  Server,
  
  Cloud,
  Container,
  Wifi,
  Coffee,
  FileCode,
  FileCode2,
} from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8 py-5 ">
      <RoughNotation
        type="underline"
        color="var(--highlight-color)"
        animationDelay={2500}
        animationDuration={1500}
        show
      >
        <span className="text-4xl font-bold">
          Skills &{" "}
          <span className="text-red-300 dark:text-indigo-500">technology</span>
        </span>
      </RoughNotation>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 py-4 md:py-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center md:p-4 p-2 skill-card overflow-visible hover:dark:text-indigo-500 hover:text-red-300"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div className="skill-icon transition-colors duration-300">
              {skill.icon}
            </div>
            <h3 className="text-center font-medium transition-colors duration-300">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
};

export default Skills;
const skills = [
  { name: "HTML", icon: <Globe className="h-8 w-8 mb-2" /> },
  { name: "CSS", icon: <Palette className="h-8 w-8 mb-2" /> },
  { name: "JavaScript", icon: <FileJson className="h-8 w-8 mb-2" /> },
  { name: "TypeScript", icon: <Code className="h-8 w-8 mb-2" /> },
  { name: "Tailwind CSS", icon: <Palette className="h-8 w-8 mb-2 " /> },
  { name: "MERN Stack", icon: <Layers className="h-8 w-8 mb-2" /> },
  { name: "PostgreSQL", icon: <Database className="h-8 w-8 mb-2 " /> },
  { name: "Prisma", icon: <Database className="h-8 w-8 mb-2 " /> },
  { name: "MySQL", icon: <Database className="h-8 w-8 mb-2 " /> },
  { name: "Hono", icon: <Server className="h-8 w-8 mb-2" /> },
  { name: "Next.js", icon: <Server className="h-8 w-8 mb-2" /> },
  { name: "AWS", icon: <Cloud className="h-8 w-8 mb-2 " /> },
  { name: "Cloudflare", icon: <Cloud className="h-8 w-8 mb-2 " /> },
  { name: "Docker", icon: <Container className="h-8 w-8 mb-2 " /> },
  { name: "Redis", icon: <Database className="h-8 w-8 mb-2 " /> },
  { name: "WebSocket", icon: <Wifi className="h-8 w-8 mb-2" /> },
  { name: "Java", icon: <Coffee className="h-8 w-8 mb-2" /> },
  { name: "C++", icon: <FileCode className="h-8 w-8 mb-2" /> },
  { name: "Python", icon: <FileCode2 className="h-8 w-8 mb-2 " /> },
];
