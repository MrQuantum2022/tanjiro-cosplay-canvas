
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
