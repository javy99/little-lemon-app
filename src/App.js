import './index.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from "./components/HeroSection/HeroSection";
import SpecialsSection from "./components/SpecialsSection/SpecialsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";

function App()  {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SpecialsSection />
        <TestimonialsSection />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
