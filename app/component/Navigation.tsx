export default function Navigation() {
  return (
    <ul className="flex gap-6 font-bold text-black">
      <li>
        <a href="#skills" className="cursor-pointer hover:text-primary-500">
          Skills
        </a>
      </li>

      <li>
        <a href="#experience" className="cursor-pointer hover:text-primary-500">
          Experience
        </a>
      </li>

      <li>
        <a href="#education" className="cursor-pointer hover:text-primary-500">
          Education
        </a>
      </li>

      <li>
        <a href="#contact" className="cursor-pointer hover:text-primary-500">
          Contact Me
        </a>
      </li>
    </ul>
  );
}
