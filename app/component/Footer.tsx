import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <footer
      className="grid w-full grid-cols-1 gap-4 border-t border-dark p-10 md:grid-cols-3 md:items-center"
      id="cantact"
    >
      {/* Name */}
      <div className="text-center md:text-left">
        {/* <span className="text-black text-xl italic">Saeed</span>
        <span className="text-dark text-2xl italic">Jalali</span> */}
      </div>

      {/* Email */}
      <a
        href="mailto:SaeedJalaliSj@gmail.com"
        className="justify-self-center text-xl font-bold text-primary-300 transition-colors hover:text-primary-500"
      >
        Saeedjalalisj@gmail.com
      </a>

      {/* Social Links */}
      <div className="flex justify-center gap-4 md:justify-end">
        <a
          href="https://www.linkedin.com/in/saeed-jalali-sj/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-3xl text-dark transition-colors hover:text-primary-500"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/saeedjalalisj"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-3xl text-dark transition-colors hover:text-primary-500"
        >
          <IoLogoGithub />
        </a>
      </div>
    </footer>
  );
}
