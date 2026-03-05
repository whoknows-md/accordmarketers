import React from "react";
import { motion } from "framer-motion";

const AboutHighlights = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== 3 CONTAINERS ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 mb-28"
        >
          {/* Think Bold */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Marketing at the Speed of Intelligence
            </h3>

            <p className="text-gray-600 leading-relaxed">1. Audit: AI analyzes your current data</p>
            <p className="text-gray-600 leading-relaxed">2. Execute: Automated, high-precision campaigns.</p>
            <p className="text-gray-600 leading-relaxed">3. Optimize: Real-time adjustments that never sleep.</p>
          </motion.div>

          {/* Act Smart */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Transforming Vision into Measurable Dominance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Accord Marketers, we combine strategic precision with creative intelligence
              to build marketing systems that are scalable, data-backed, and performance-driven.
            </p>
            <p className="text-gray-600 leading-relaxed font-semibold">Analyze Predict Optimize</p>

          </motion.div>

          {/* Grow Fast */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              AI Powered Performance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              1. Predictive audience targeting </p>
            <p className="text-gray-600 leading-relaxed">
              2. Real-time campaign optimization
            </p>
            <p className="text-gray-600 leading-relaxed">
              3. Automation at scale
            </p>
            <p className="text-gray-600 leading-relaxed">
              4. High-velocity testing & iteration
            </p>
          </motion.div>
        </motion.div>

        {/* ===== WHY ACCORD MARKETERS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Why Accord Marketers?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            In a world filled with digital noise, clarity wins. We combine
            creativity with intelligence, automation with human strategy, and
            ambition with measurable performance.
          </p>

          <p className="text-gray-600 leading-relaxed">
            When you partner with Accord Marketers, you don’t just hire an
            agency — you gain a growth ally committed to long-term success.
            We think ahead, move strategically, and deliver results that matter.
          </p>
        </motion.div>

      </div>
    </section >
  );
};

export default AboutHighlights;