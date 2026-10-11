export default function Education() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 lg:px-20"
      id="education"
    >
      <h1 className="mb-10 text-center text-4xl font-bold text-secondary-500">
        Education
      </h1>

      <div className="grid grid-cols-1 gap-3 pb-8 md:grid-cols-[3fr_1fr] md:items-center">
        <p className="text-lg font-semibold leading-7 text-secondary-500">
          B.Sc. Information Technology — Islamic Azad University, Tehran South
          Branch
        </p>

        <p className="text-sm text-body md:text-right">Graduated 2020</p>
      </div>
    </section>
  );
}
