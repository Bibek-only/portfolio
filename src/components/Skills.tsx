import { RoughNotation } from "react-rough-notation";

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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:py-8">
        <div className="h-32 rounded-lg   flex items-center flex-col justify-center">
          <h1 className="text-4xl font-semibold">HTML</h1>
          <p className="text-center text-lg font-semibold ">Crafting semantic, accessible, and SEO-friendly markup. </p>

        </div>
        <div className="h-32 rounded-lg   flex items-center flex-col justify-center">
          <h1 className="text-4xl font-semibold">CSS</h1>
          <p className="text-center text-lg font-semibold"> Expert in crafting semantic and accessible markup.</p>

        </div>
        <div className="h-32 rounded-lg   flex items-center flex-col justify-center">
          <h1 className="text-4xl font-semibold">JS</h1>
          <p className="text-center text-lg font-semibold"> Proficient in modern JavaScript for dynamic applications.</p>

        </div>
        <div className="h-32 rounded-lg   flex items-center flex-col justify-center">
          <h1 className="text-4xl font-semibold">MERN</h1>
          <p className="text-center text-lg font-semibold"> Building full-stack web applications with MongoDB, Express, React, and Node.js.</p>

        </div>
        <div className="h-32 rounded-lg   flex items-center flex-col justify-center">
          <h1 className="text-4xl font-semibold">NEXT js</h1>
          <p className="text-center text-lg font-semibold"> Crafting fast, SEO-friendly, and scalable web applications.</p>

        </div>
        <div className="h-32 rounded-lg   flex items-center flex-col justify-center">
          <h1 className="text-4xl font-semibold">Prisma</h1>
          <p className="text-center text-lg font-semibold"> Simplifying database access with type-safe ORM.</p>

        </div>
        <div className="h-32 rounded-lg   flex items-center flex-col justify-center">
          <h1 className="text-4xl font-semibold">PostgreSQL</h1>
          <p className="text-center text-lg font-semibold"> Designing reliable, scalable, and optimized relational databases.</p>

        </div>
        <div className="h-32 rounded-lg   flex items-center flex-col justify-center">
          <h1 className="text-4xl font-semibold">AWS</h1>
          <p className="text-center text-lg font-semibold">Deploying scalable and secure cloud solutions efficiently.</p>

        </div>
        <div className="h-32 rounded-lg   flex items-center flex-col justify-center">
          <h1 className="text-4xl font-semibold">Docker</h1>
          <p className="text-center text-lg font-semibold"> Containerizing applications for efficient and scalable deployment.</p>

        </div>
        
      </div>
    </section>
  );
};

export default Skills;
