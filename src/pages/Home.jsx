// import Alliances from "../components/Alliances";
// import AboutHighlights from "../components/AboutHighlights";
// import FAQ from "../components/FAQ";
// import Hero from "../components/Hero";
// import Services from "../components/Services";
// import WhyGrow from "../components/WhyGrow";
// import WhatsAppButton from "../components/WhatsAppButton"; // ✅ add this

// const Home = () => {
//   return (
//     <div>
//       <div className="pt-20">
//         <Hero />
//       </div>

//       <WhyGrow />
//       <Alliances />
//       <Services />
//       <AboutHighlights />
//       <FAQ />

//       {/* ✅ Floating WhatsApp Button */}
//       <WhatsAppButton />
//     </div>
//   );
// };

// export default Home;

import VideoIntro from "../components/VideoIntro";
import Alliances from "../components/Alliances";
import AboutHighlights from "../components/AboutHighlights";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyGrow from "../components/WhyGrow";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  return (
    <div>
      {/*  FIRST SCREEN (VIDEO) */}
      <VideoIntro />

      {/*  NEXT SCROLL (HERO) */}
      <Hero />

      <WhyGrow />
      <Alliances />
      <Services />
      <AboutHighlights />
      <FAQ />

      <WhatsAppButton />
    </div>
  );
};

export default Home;
