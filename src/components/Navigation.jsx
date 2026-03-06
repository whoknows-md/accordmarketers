import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/accordfavicon.png";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Handle section navigation from any page
  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      // Already on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home and then scroll to section
      navigate("/");
      // Use setTimeout to ensure page loads before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  // 🔥 Updated nav items
  const navItems = [
    { type: "route", path: "/", label: "Home" },
    { type: "section", id: "about", label: "About" },
    { type: "section", id: "services", label: "Services" },
    { type: "section", id: "faq", label: "FAQ" },
    { type: "route", path: "/blogs", label: "Blog" },
    { type: "route", path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="logo" className="h-12 w-auto" />
          <h1 className="text-2xl font-bold text-[#0F172A]">
            Accord Marketers
          </h1>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navItems.map((item, index) =>
            item.type === "section" ? (
              <button
                key={index}
                onClick={() => handleSectionClick(item.id)}
                className="text-gray-600 hover:text-blue-600 transition duration-300 bg-none border-none cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-300 ${isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 hover:text-blue-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </ul>

        {/* Desktop Button */}
        <NavLink to="/get-proposal" className="hidden md:block">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
            Get Proposal
          </button>
        </NavLink>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500
        ${menuOpen ? "max-h-96 bg-white shadow-md py-4" : "max-h-0"}`}
      >
        <div className="flex flex-col items-start px-6 gap-6">
          {navItems.map((item, index) =>
            item.type === "section" ? (
              <button
                key={index}
                onClick={() => handleSectionClick(item.id)}
                className="text-lg text-gray-600 hover:text-blue-600 bg-none border-none cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className="text-lg text-gray-600 hover:text-blue-600"
              >
                {item.label}
              </NavLink>
            ),
          )}

          <NavLink to="/get-proposal">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
              Get Proposal
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
