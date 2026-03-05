import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-[#EDE9FE] via-[#F3E8FF] to-[#E0E7FF] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
            </span>{" "}
            NEXT-GEN MARKETING
          </motion.div>

          {/* Heading Zigzag Animation */}
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-[#0F172A] leading-tight"
          >
            Acccord Marketers
          </motion.h1>

          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            We Engineer Growth
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mt-6 text-lg text-gray-600 max-w-lg"
          >
            At Accord Marketers, we combine intelligent automation, AI-driven
            SEO, and data precision to accelerate your business growth. We turn
            insights into measurable ROI.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 cursor-pointer rounded-full shadow-lg hover:scale-105 transition duration-300">
              Get Started
            </button>

            <button className="bg-white cursor-pointer text-gray-800 px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
              View Case Studies
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE ANIMATED CARD */}
        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 bg-blue-400/30 blur-3xl rounded-full -z-10"></div>
          <motion.div
            initial={{ rotate: -12, scale: 0.8, opacity: 0 }}
            animate={{ rotate: -6, scale: 1, opacity: 1 }}
            whileHover={{ rotate: -3, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, duration: 1 }}
            className="w-72 md:w-96 h-96 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center p-8"
          >
            <div className="text-blue-600 text-5xl mb-4">🚀</div>

            <h3 className="text-xs tracking-widest text-blue-500 mb-2 font-semibold">
              AI CAMPAIGN ENGINE
            </h3>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Growth Intelligence Hub
            </h2>

            <p className="text-sm text-gray-500">Predict • Optimize • Scale</p>
          </motion.div>
          {/* Floating ROI Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute bottom-8 left-0 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-3"
          >
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              📈
            </div>
            <div>
              <p className="text-sm text-gray-500">ROI</p>
              <p className="font-bold text-lg">+142%</p>
            </div>
          </motion.div>

          {/* Floating Analytics Card */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-10 right-0 bg-white shadow-xl rounded-2xl p-5"
          >
            📊
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
