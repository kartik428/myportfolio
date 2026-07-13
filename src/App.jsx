import About from "./components/About";
import Contact from "./components/Contact";
import Timeline from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LiveBackground from "./components/LiveBackground";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="font-sans">

        <LiveBackground />
        <Navbar />
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
