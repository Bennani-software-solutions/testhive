import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Section from "./Section";

const previews = [
  {
    company: "FinServ Pro",
    industry: "Financial Services",
    metric: "70%",
    metricLabel: "Faster regression cycles",
    quote: "TestHive transformed our QA process. We ship with confidence every sprint.",
  },
  {
    company: "MediTrack",
    industry: "Healthcare SaaS",
    metric: "85%",
    metricLabel: "Automated test coverage",
    quote: "They didn't just test — they mentored our developers to think about quality.",
  },
  {
    company: "RetailFlow",
    industry: "E-commerce",
    metric: "€50K/mo",
    metricLabel: "Revenue loss eliminated",
    quote: "Automated tests caught a regression that would have cost us dearly during Black Friday.",
  },
];

export default function CaseStudiesPreview() {
  return (
    <Section id="case-studies-preview" className="bg-white border-t border-gray-200">
      <div className="text-center mb-12">
        <div className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-700 mb-4">
          DUMMY DATA — PLACEHOLDER
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Trusted by Teams That Ship
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          See how companies across industries improved quality and speed with
          TestHive.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {previews.map((p, i) => (
          <m.div
            key={p.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-xs font-semibold text-cyan-600 uppercase tracking-wider">
              {p.industry}
            </p>
            <h3 className="mt-1 text-lg font-bold text-slate-900">
              {p.company}
            </h3>

            <div className="mt-4 rounded-xl bg-cyan-50 p-4 text-center">
              <div className="text-3xl font-extrabold text-cyan-600">
                {p.metric}
              </div>
              <div className="text-sm text-slate-600 mt-1">{p.metricLabel}</div>
            </div>

            <p className="mt-4 text-sm text-slate-600 italic">"{p.quote}"</p>
          </m.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition"
        >
          View all case studies <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
