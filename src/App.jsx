import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Blogs from "./pages/Blogs";
import Proposal from "./pages/Proposal";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navigation />

      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-proposal" element={<Proposal />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
