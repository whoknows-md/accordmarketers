import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Search,
  Code2,
  Cpu,
  PenTool,
  Video,
  Megaphone,
} from "lucide-react";

const services = [
  {
    icon: <BarChart3 size={36} />,
    title: "AI-Powered SEO",
    desc: "Data-driven keyword strategy and automated optimization to improve rankings, increase visibility, and attract high-intent traffic.",
  },
  {
    icon: <Search size={36} />,
    title: "Performance Marketing",
    desc: "AI-optimized Google and social ad campaigns designed to maximize conversions and deliver measurable ROI.",
  },
  {
    icon: <Video size={36} />,
    title: "Social Media Automation",
    desc: "Smart content scheduling, targeted audience engagement, and performance tracking across all major platforms.",
  },
  {
    icon: <Cpu size={36} />,
    title: "Marketing Analytics & Insights",
    desc: "Real-time dashboards and advanced analytics that turn data into strategic, results-focused decisions.",
  },
  {
    icon: <PenTool size={36} />,
    title: "AI-Powered Content Marketing",
    desc: "EO-driven content creation backed by audience intelligence to build authority and drive consistent conversions.",
  },
  {
    icon: <Code2 size={36} />,
    title: "Conversion Rate Optimization (CRO)",
    desc: "Continuous testing and funnel optimization to transform traffic into leads, sales, and measurable growth.",
  },
  {
    icon: <Megaphone size={36} />,
    title: "Marketing Strategy & Brand Positioning",
    desc: "Develop data-backed marketing roadmaps and brand positioning frameworks that define your market presence, differentiate your business, and create long-term, scalable growth foundations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== Heading ===== */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Complete Digital Growth Ecosystem
          </h2>
        </div>

        {/* ===== First Row (4 Cards) ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {services.slice(0, 4).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-3xl shadow-md 
      hover:shadow-2xl transition-all duration-500
      border border-transparent hover:border-blue-500"
            >
              <div className="text-blue-600 mb-5 group-hover:scale-110 transition duration-500">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>

              <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-6 rounded-full group-hover:w-16 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* ===== Second Row (3 Cards - Space Between) ===== */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {services.slice(4, 7).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-3xl shadow-md 
      hover:shadow-2xl transition-all duration-500
      border border-transparent hover:border-blue-500
      md:w-[30%]"
            >
              <div className="text-blue-600 mb-5 group-hover:scale-110 transition duration-500">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>

              <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-6 rounded-full group-hover:w-16 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
