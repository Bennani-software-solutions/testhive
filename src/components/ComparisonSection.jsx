import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

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
            Ad-hoc testing <span className="text-indigo-400">vs</span> structured quality engineering
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            The difference isn't just tools. It's having the right strategy, the right mix of testing disciplines, and the discipline to invest where it matters.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <img
            src="/assets/infographics/comparison.png"
            alt="Traditional test automation vs TestHive AI: maintenance reduction, faster test creation, zero flaky tests, open-source Playwright"
            loading="lazy"
            className="w-full max-w-4xl h-auto rounded-2xl shadow-2xl"
          />
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            to="/platform"
            className="inline-flex items-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-md active:scale-95 transition"
          >
            See how it works
          </Link>
        </m.div>
      </div>
    </section>
  );
}
