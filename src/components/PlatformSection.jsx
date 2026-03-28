// src/components/PlatformSection.jsx
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Users, Wrench, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    color: "indigo",
    number: "01",
    title: "We analyse your risks",
    desc: "Our engineers study your product, architecture, and release process. We identify where bugs hurt most and where testing effort gives the highest return.",
  },
  {
    icon: Users,
    color: "violet",
    number: "02",
    title: "We embed in your team",
    desc: "Same standups, same Slack, same deadlines. Our QA engineers work inside your team. You will notice the quality, not the distance.",
  },
  {
    icon: Wrench,
    color: "emerald",
    number: "03",
    title: "We build and automate",
    desc: "Regression checks, smoke tests, API validation. The repetitive work that slows your team down. We automate what makes sense and test the rest by hand.",
  },
  {
    icon: BarChart3,
    color: "amber",
    number: "04",
    title: "You keep full ownership",
    desc: "Every test, every script, every report is yours. Standard frameworks, in your repo, running in your CI pipeline. No vendor lock-in, ever.",
  },
];

const colorMap = {
  indigo: { bg: "bg-indigo-600/20", border: "border-indigo-500/30", text: "text-indigo-400" },
  violet: { bg: "bg-violet-600/20", border: "border-violet-500/30", text: "text-violet-400" },
  emerald: { bg: "bg-emerald-600/20", border: "border-emerald-500/30", text: "text-emerald-400" },
  amber: { bg: "bg-amber-600/20", border: "border-amber-500/30", text: "text-amber-400" },
};

export default function PlatformSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/60 to-white border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-4">
            How we work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Your team gets <span className="text-indigo-600">stronger</span>, not dependent
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            We don't believe in black-box solutions or magic tools. Real quality comes from people who understand your product, work alongside your team, and leave you better off than they found you.
          </p>
        </m.div>

        {/* Steps */}
        <div className="relative rounded-2xl border border-slate-200 bg-slate-900 p-1 shadow-soft">
          <div className="rounded-xl bg-slate-900 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {steps.map((s, i) => {
                const c = colorMap[s.color];
                return (
                  <m.div
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                      <s.icon className={`h-5 w-5 ${c.text}`} />
                    </div>
                    <div>
                      <span className={`text-xs font-bold ${c.text} uppercase tracking-wider`}>{s.number}</span>
                      <h3 className="text-base font-semibold text-white mt-1">{s.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  </m.div>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                We also build internal tooling to speed up our work. Interested in how we use it?
              </p>
              <Link
                to="/platform"
                className="inline-flex items-center rounded-xl border border-slate-600 bg-transparent hover:bg-slate-800 px-6 py-2.5 text-sm font-semibold text-white transition"
              >
                See our tooling
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
