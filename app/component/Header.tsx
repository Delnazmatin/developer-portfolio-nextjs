import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full grid grid-cols-5 items-center p-7 bg-light">
      <div className="font-extrabold">
        <span className="text-black text-4xl italic">Saeed</span>
        <span className="text-dark text-3xl italic">Jalali</span>
      </div>
      <div className=" col-span-3 flex justify-center">
        <Navigation />
      </div>
      <div className="flex justify-end "></div>
    </header>
  );
}
