import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
            alt="Digital Strategy Team"
            className="rounded-3xl shadow-2xl"
          />

          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            ABOUT ACCORD MARKETERS
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Accord Marketers was built to redefine how modern brands grow in
            the digital era. Today’s marketplace is intelligent, dynamic, and
            driven by data — and we exist to help businesses navigate it with
            clarity and confidence.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to connect ambitious brands with AI-powered
            marketing strategies tailored precisely to their goals. From
            automation and analytics to performance-driven campaigns, every
            solution we create is designed for measurable impact.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We don’t believe in guesswork. We believe in systems, precision,
            and sustainable growth. At Accord Marketers, we build intelligent
            growth engines that evolve as your business evolves.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;