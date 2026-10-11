import { hero } from "../data/hero";
import profile from "../picture/profile.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-20">
      {/* Name + Image */}
      <div className="flex flex-col items-center justify-center gap-6 md:items-start">
        <div className="text-center md:text-left">
          <h5 className="text-xl text-primary-500">Hi, I&apos;m</h5>

          <h1 className="text-4xl font-bold text-secondary-500">
            {hero.name} {hero.family}
          </h1>
        </div>

        <Image
          alt="Saeed profile picture"
          src={profile}
          width={300}
          height={400}
          className="rounded-sm"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col items-center justify-center gap-4 text-center md:items-start md:text-left">
        <h3 className="text-2xl font-semibold text-secondary-500">
          {hero.title}
        </h3>

        <p className="leading-7 text-black">{hero.description}</p>

        <a href="/resume/SaeedJalali-CV.pdf" download>
          <Button
            variant="outline"
            className="cursor-pointer bg-primary-500 text-white hover:bg-primary-600"
          >
            Download CV
          </Button>
        </a>
      </div>
    </section>
  );
}
