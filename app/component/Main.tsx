import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import HiringReason from "./HiringReason";
import Skills from "./Skills";

export default function Main() {
  return (
    <main className="flex-1 w-full">
      <section className="relative mx-auto w-full">
        <Hero />
        <HiringReason />
        <Experience />
        <Skills />
        <Education />
      </section>
    </main>
  );
}
