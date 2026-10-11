import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 lg:px-20 scroll-mt-24"
      id="experience"
    >
      <h1 className="mb-10 text-center text-4xl font-bold text-secondary-500">
        Experience
      </h1>

      <div className="flex flex-col gap-10">
        {experience.map((ex) => {
          return (
            <div
              key={ex.durationWorkTime}
              className="grid grid-cols-1 gap-6 border-b border-dark/20 pb-10 md:grid-cols-[1fr_3fr] last:border-b-0"
            >
              {/* Title / Company / Date */}
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-secondary-500">
                  {ex.title}
                </h2>

                <p className="font-semibold text-primary-600">
                  {ex.companyName}
                </p>

                <p className="text-sm text-body">{ex.durationWorkTime}</p>
              </div>

              {/* Description */}
              <div>
                <ul className="space-y-3">
                  {ex.description.map((item, index) => (
                    <li key={index} className="flex gap-2 leading-7 text-black">
                      <span className="shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
