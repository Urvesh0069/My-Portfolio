import React from "react";
import { motion as Motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "$49",
      desc: "Perfect for small projects and startups.",
      features: ["1 Website", "Basic Support", "SEO Setup"],
      active: false,
    },
    {
      title: "Standard",
      price: "$99",
      desc: "Best for growing businesses and freelancers.",
      features: ["5 Websites", "Priority Support", "SEO + Marketing"],
      active: true, // highlighted card
    }
  ];

  return (
    <section
      id="Pricing"
      className="flex flex-col items-start min-h-screen px-10 text-white py-16"
    >
      {/* Title */}
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-3 py-1.5 mt-7 mb-14 border border-gray-500 rounded-full text-sm flex items-center gap-2 font-thin"
      >
        <span className="text-white"></span>$ Pricing
      </Motion.div>

      {/* Main Heading */}
      <Motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[50px] font-thin leading-[62px] tracking-[-0.2px] text-white mb-12"
      >
        My <span className="text-green-500">Pricing</span>
      </Motion.h1>

      {/* Pricing Cards */}
      <div className="grid grid-cols-2 gap-15 w-full h-150 max-w-6xl">
        {plans.map((plan, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col justify-between p-8 -m-4 rounded-4xl border border-gray-500 transition`}          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold text-green-500 mb-4">
                {plan.price}
              </p>
              <p className="text-gray-400 mb-6">{plan.desc}</p>
              <ul className="space-y-3 text-sm text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    ✅ <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-8 w-full py-3 rounded-full font-semibold bg-green-500 transition`}
            >
              Choose Plan
            </button>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
