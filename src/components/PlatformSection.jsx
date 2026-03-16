// src/components/PlatformSection.jsx
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, FileSearch, Play, Users, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    color: "sky",
    title: "AI Test Generation",
    desc: "Write BDD/Gherkin scenarios and let AI generate production-ready Playwright tests, both E2E and API.",
  },
  {
    icon: FileSearch,
    color: "violet",
    title: "Document Analysis",
    desc: "Upload requirements documents and let AI extract test scenarios and user stories automatically.",
  },
  {
    icon: Globe,
    color: "sky",
    title: "E2E & API Testing",
    desc: "Test web UIs and REST APIs from the same Gherkin scenarios. Auth tokens and keys stay encrypted.",
  },
  {
    icon: Play,
    color: "emerald",
    title: "One-Click Execution",
    desc: "Run your tests with a single click and get detailed results, logs, and video recordings.",
  },
  {
    icon: Shield,
    color: "amber",
    title: "Bring Your Own AI",
    desc: "Use your own API keys or self-host with Ollama/vLLM. Your data never leaves your control.",
  },
  {
    icon: Users,
    color: "emerald",
    title: "Team Collaboration",
    desc: "Multi-project workspace with folders, schedules, notifications, and team management built in.",
  },
];

const colorMap = {
  sky: "bg-indigo-100 text-indigo-600",
  violet: "bg-violet-100 text-violet-600",
  emerald: "bg-emerald-100 text-emerald-600",
  amber: "bg-amber-100 text-amber-600",
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
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-4">
            Our Platform
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Meet TestHive <span className="text-indigo-600">Platform</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            AI-powered test automation that turns your requirements into executable tests.
            Write scenarios, generate code, and run tests, all from one place.
          </p>
        </m.div>

        {/* Feature grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          {features.map((f, i) => (
            <m.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${colorMap[f.color]} mb-4`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </m.div>
          ))}
        </div>

        {/* Workflow visual */}
        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-slate-200 bg-slate-900 p-1 shadow-soft mb-12"
        >
          <div className="rounded-xl bg-slate-900 p-8 md:p-12">
            <img
              src="/assets/infographics/workflow.png"
              alt="How TestHive works: Write Gherkin, AI generates Playwright code, execute tests, self-healing results"
              loading="lazy"
              className="w-full max-w-4xl mx-auto h-auto mb-8 rounded-lg"
            />

            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                From requirements to test results in minutes
              </h3>
              <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                No coding experience needed. Write what you want to test in plain language,
                and let AI handle the rest. See results, fix failures with AI, and ship with confidence.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="https://platform.testhive.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md active:scale-95 transition"
                >
                  Try the Platform
                </a>
                <Link
                  to="/platform"
                  className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
