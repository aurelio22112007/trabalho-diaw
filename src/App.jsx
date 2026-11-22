import { LangProvider } from "./context/LangContext.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experiences from "./components/Experiences.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <LangProvider>
      <Header />
      <main className="wrap">
        <About />
        <Projects />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
