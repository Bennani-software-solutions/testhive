import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { X, CheckCircle } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-4">
            The difference
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Hiring locally <span className="text-indigo-400">vs</span> working with TestHive
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Finding and retaining senior QA talent in Europe is expensive and slow. We give you the same expertise, embedded in your team, without the overhead.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Ad-hoc */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <X className="h-4 w-4 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Hiring In-House</h3>
              </div>
              <ul className="space-y-3">
                {["3-6 months to find senior QA talent", "€70-120K+ annual cost per engineer", "Onboarding, training, and retention risk", "Limited to one person's skill set"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right: TestHive */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white">TestHive Nearshore</h3>
              </div>
              <ul className="space-y-3">
                {["Start within 2 weeks", "40-60% lower cost, same quality", "Embedded in your team, same timezone", "Access to a full QA team, not just one hire"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            to="/pricing"
            className="inline-flex items-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-md active:scale-95 transition"
          >
            See our pricing
          </Link>
        </m.div>
      </div>
    </section>
  );
}
