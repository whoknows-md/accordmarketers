import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/accordfavicon.png";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setScrolled(currentY > 50);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // 🔥 Updated nav items
  const navItems = [
    { type: "route", path: "/", label: "Home" },
    { type: "section", path: "#about", label: "About" },
    { type: "section", path: "#services", label: "Services" },
    { type: "section", path: "#faq", label: "FAQ" },
    { type: "route", path: "/blog", label: "Blog" },
    { type: "route", path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${showNav ? "translate-y-0" : "-translate-y-full"}
      ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
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
              <a
                key={index}
                href={item.path}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive
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
        <NavLink to="/contact" className="hidden md:block">
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
              <a
                key={index}
                href={item.path}
                className="text-lg text-gray-600 hover:text-blue-600"
              >
                {item.label}
              </a>
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
