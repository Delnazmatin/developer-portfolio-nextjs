import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-light font-sans">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
