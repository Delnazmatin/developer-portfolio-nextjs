import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section className="w-full px-6 py-10 md:px-10 lg:px-20" id="skills">
      <h1 className="mb-10 text-center text-4xl font-bold text-secondary-500">
        Skills
      </h1>

      <div className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-6">
        {skills.map((skill) => {
          return (
            <div
              key={skill.title}
              className="h-[300px] w-[250px] rounded-2xl bg-black p-5 text-white"
            >
              <h2 className="font-bold text-primary-300 text-xl">
                {skill.title}
              </h2>

              <p className="mt-4 leading-7 text-light text-base">
                {skill.items}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
