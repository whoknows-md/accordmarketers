import React from "react";
import logo from "../assets/analyticimage.png";
const WhyGrow = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-3">
            WHY GROW WITH US
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            We Scale Growth <br /> through Intelligence
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            At Accord Marketers, we don’t guess. We analyze. Using AI-driven
            campaigns, automation, and data science, we scale brands with
            measurable ROI.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>✔ AI Powered Campaign Strategy</li>
            <li>✔ Performance-Based Optimization</li>
            <li>✔ Data-Driven Decision Making</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={logo}
            alt="AI Marketing Analytics Dashboard"
            className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
          />

          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyGrow;
