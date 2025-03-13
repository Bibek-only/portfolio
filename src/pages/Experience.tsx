import { RoughNotation } from "react-rough-notation"
const Experience = () => {
  return (
    <section className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8 py-5 ">
      <RoughNotation
                    type="underline"
                    color="var(--highlight-color)"
                    animationDelay={2500} animationDuration={1500}
                    show
                  >
       
        <span className="text-4xl font-bold">About me</span>
      </RoughNotation >
    </section>
  )
}

export default Experience
