import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1B3B] text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Top Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* ===== Brand Section ===== */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Accord Marketers
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Redefining digital growth through artificial intelligence,
              performance strategy, and human creativity.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-pink-600 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-500 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-gray-600 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-green-600 transition">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* ===== Site Map ===== */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">
              SITE MAP
            </h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/blogs" className="hover:text-white transition">Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>

          {/* ===== Services ===== */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">
              SERVICES
            </h3>
            <ul className="space-y-4">
              <li>Performance Marketing</li>
              <li>SEO & Organic Growth</li>
              <li>Web Development</li>
              <li>App Development</li>
              <li>Content Creation</li>
              <li>Video Production</li>
              <li>Brand Strategy</li>
            </ul>
          </div>

          {/* ===== Newsletter ===== */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">
              SUBSCRIBE TO AI INSIGHTS
            </h3>

            <div className="flex items-center bg-white/10 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent px-5 py-3 w-full outline-none text-sm"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 p-3">
                <ArrowRight size={18} />
              </button>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              Get weekly updates on AI marketing. No spam — only intelligence.
            </p>
          </div>

        </div>

        {/* ===== Bottom Line ===== */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          © 2026 Accord Marketers. All rights reserved. Precision in every pixel.
        </div>

      </div>
    </footer>
  );
};

export default Footer;