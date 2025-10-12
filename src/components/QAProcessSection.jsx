import React from "react";
import { motion as m } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Intake & Quick Scan",
    desc: "Define goals, understand your context, and identify quick wins to start with impact."
  },
  {
    number: "2",
    title: "Goals & Roadmap",
    desc: "Align direction and set a clear, shared plan with realistic expectations."
  },
  {
    number: "3",
    title: "Practical Implementation",
    desc: "Work side by side with our QA engineers, step by step, embedding sustainable practices."
  },
  {
    number: "4",
    title: "Evaluation & Scale-up",
    desc: "Measure, adapt, and grow your testing maturity continuously."
  }
];

export default function SeamlessQAProcess() {
  return (
    <section className="relative py-20 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <m.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-12"
        >
          Our Seamless QA Process
        </m.h2>

        {/* timeline line */}
        <svg
          className="absolute top-1/2 left-0 w-full h-32 -z-10 hidden md:block"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <path
            d="M50 100 Q250 0, 500 100 T950 100"
            fill="transparent"
            stroke="url(#gradient)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>

        {/* steps */}
        <div className="grid md:grid-cols-4 gap-6 relative z-10">
          {steps.map((s, i) => (
            <m.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {s.number}. {s.title}
              </h3>
              <p className="text-slate-700 text-sm">{s.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}