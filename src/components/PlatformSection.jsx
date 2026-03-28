// src/components/PlatformSection.jsx
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, FileSearch, Play, Users, Globe, Shield, PenTool, BarChart3, ArrowRight as ArrowRightIcon } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    color: "sky",
    title: "AI Test Generation",
    desc: "Write BDD/Gherkin scenarios and let AI generate production-ready test code, both E2E and API.",
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
            AI-powered test automation for the tests that benefit most from it: regression, smoke tests, and repeatable API checks.
            For everything else, our team is right there with you.
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
            {/* Inline workflow diagram */}
            <div className="w-full max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-0 items-center">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mb-3">
                    <PenTool className="h-6 w-6 text-indigo-400" />
                  </div>
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">01</span>
                  <span className="text-sm font-semibold text-white">Write</span>
                  <span className="text-xs text-slate-400 mt-0.5">Gherkin scenarios</span>
                </div>
                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRightIcon className="h-5 w-5 text-slate-500" />
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mb-3">
                    <Sparkles className="h-6 w-6 text-indigo-400" />
                  </div>
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">02</span>
                  <span className="text-sm font-semibold text-white">Generate</span>
                  <span className="text-xs text-slate-400 mt-0.5">AI writes test code</span>
                </div>
                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRightIcon className="h-5 w-5 text-slate-500" />
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center mb-3">
                    <Play className="h-6 w-6 text-emerald-400" />
                  </div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">03</span>
                  <span className="text-sm font-semibold text-white">Execute</span>
                  <span className="text-xs text-slate-400 mt-0.5">One-click run</span>
                </div>
                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRightIcon className="h-5 w-5 text-slate-500" />
                </div>
                {/* Step 4 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center mb-3">
                    <BarChart3 className="h-6 w-6 text-amber-400" />
                  </div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">04</span>
                  <span className="text-sm font-semibold text-white">Analyze</span>
                  <span className="text-xs text-slate-400 mt-0.5">Results & self-heal</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                From requirements to test results in minutes
              </h3>
              <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                Write what you want to test in plain language and let AI generate the code.
                Ideal for regression suites, smoke tests, and API validation. The repetitive work that slows teams down.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="https://app.testhive.ma"
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
