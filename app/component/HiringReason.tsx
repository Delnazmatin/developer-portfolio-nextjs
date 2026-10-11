import { hero } from "../data/hero";
import hiringPic from "../picture/hiringPic.jpg";
import Image from "next/image";

export default function HiringReason() {
  return (
    <section className="relative mx-auto w-full">
      <div className="m-4 grid grid-cols-1 items-center gap-10 rounded-3xl bg-black p-6 text-white md:m-10 md:grid-cols-2 md:p-10 lg:m-20">
        {/* Image */}
        <div className="flex items-center justify-center">
          <Image
            src={hiringPic}
            alt="hiring picture"
            width={300}
            height={400}
            className="rounded-4xl"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
          <p className="text-primary-500">About</p>

          <h1 className="mt-2 text-4xl font-bold">
            Why hire me for your next project?
          </h1>

          <p className="mt-4 text-white">{hero.description}</p>
        </div>
      </div>
    </section>
  );
}
