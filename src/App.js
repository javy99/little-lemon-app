import './index.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from "./components/HeroSection/HeroSection";
import SpecialsSection from "./components/SpecialsSection/SpecialsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";
import Reservations from "./components/Reservations/Reservations";
import {Route, Routes} from "react-router-dom";

function App()  {
  return (
    <>
      <Navbar />
        <Routes>
            <Route path="/" element={
                <main>
                    <HeroSection/>
                    <SpecialsSection/>
                    <TestimonialsSection/>
                    <AboutSection/>
                    <Footer/>
                </main>
            }/>
            <Route path="/reservations" element={<Reservations />} />
        </Routes>
    </>
  );
}

export default App;
