import { motion as m } from "framer-motion";

const stats = [
  { value: "10x", label: "Faster test creation with AI" },
  { value: "80%", label: "Less maintenance effort" },
  { value: "5 min", label: "Setup to first test" },
  { value: "24/7", label: "Scheduled test execution" },
];

const industries = [
  "Fintech",
  "Healthcare",
  "E-commerce",
  "SaaS",
  "Insurance",
  "Logistics",
];

export default function SocialProof() {
  return (
    <section className="bg-slate-900 border-y border-slate-800">
      {/* Stats bar */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <m.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white">
                {s.value}
              </div>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </m.div>
          ))}
        </div>

        {/* Industry trust line */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">
            Trusted by teams in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="text-sm font-medium text-slate-400"
              >
                {ind}
              </span>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
