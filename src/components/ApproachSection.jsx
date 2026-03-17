import { motion as m } from "framer-motion";
import { Search, Target, Wrench, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Search,
    title: "Assess",
    desc: "We start by understanding your product, team, and risk areas. Not every test should be automated. We help you identify which ones should.",
  },
  {
    icon: Target,
    title: "Select",
    desc: "We choose the right mix of testing strategies: automation for regression, manual exploration for edge cases, and security audits where they matter.",
  },
  {
    icon: Wrench,
    title: "Implement",
    desc: "Our engineers work side by side with your team. We build sustainable frameworks, not quick fixes that break in three months.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    desc: "Testing is never done. We help you measure coverage, reduce flakiness, and continuously adapt your strategy as your product evolves.",
  },
];

export default function ApproachSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            There is no <span className="text-indigo-600">one-size-fits-all</span> in QA
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Every project has different risk profiles, team structures, and quality goals.
            We don't sell a single solution. We help you build the right testing strategy for your context.
          </p>
        </m.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <m.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 mb-4">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Our AI platform accelerates what can be automated. Our consultants handle what can't.
            Together, they cover the full quality spectrum.
          </p>
        </m.div>
      </div>
    </section>
  );
}
