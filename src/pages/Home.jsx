import About from "../components/About";
import AboutHighlights from "../components/AboutHighlights";
import Alliances from "../components/Alliances";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyGrow from "../components/WhyGrow";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyGrow />
      <Alliances />
      <About />
      <AboutHighlights />
      <Services />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
