// src/components/PlatformSection.jsx
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, FileSearch, Play, Users, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    color: "sky",
    title: "AI Test Generation",
    desc: "Write BDD/Gherkin scenarios and let AI generate production-ready Playwright tests — E2E and API.",
  },
  {
    icon: FileSearch,
    color: "violet",
    title: "Document Analysis",
    desc: "Upload requirements documents — the AI extracts test scenarios and user stories automatically.",
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
        <Motion.div
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
            Write scenarios, generate code, run tests — all from one place.
          </p>
        </Motion.div>

        {/* Feature grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          {features.map((f, i) => (
            <Motion.div
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
            </Motion.div>
          ))}
        </div>

        {/* Workflow visual */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-slate-200 bg-slate-100 p-1 shadow-soft mb-12"
        >
          <div className="rounded-xl bg-white/80 backdrop-blur p-8 md:p-12">
            {/* Workflow SVG */}
            <svg viewBox="0 0 720 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Platform workflow: Write, Generate, Execute, Results" className="w-full h-auto mb-8">
              {/* Step 1 — Write */}
              <rect x="0" y="20" width="140" height="100" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5"/>
              <rect x="16" y="36" width="28" height="28" rx="6" fill="#E0E7FF"/>
              <text x="30" y="55" fontSize="16" fontFamily="system-ui,sans-serif" fill="#4F46E5" textAnchor="middle">&#9998;</text>
              <text x="70" y="56" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#334155">Write</text>
              <rect x="16" y="74" width="108" height="6" rx="3" fill="#E2E8F0"/>
              <rect x="16" y="86" width="80" height="6" rx="3" fill="#E2E8F0"/>
              <rect x="16" y="98" width="96" height="6" rx="3" fill="#E0E7FF"/>
              {/* Arrow 1 */}
              <path d="M152 70 L178 70" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round"/>
              <path d="M174 64 L182 70 L174 76" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Step 2 — Generate */}
              <rect x="190" y="20" width="140" height="100" rx="12" fill="#F8FAFC" stroke="#E0E7FF" strokeWidth="1.5"/>
              <rect x="206" y="36" width="28" height="28" rx="6" fill="#E0E7FF"/>
              <text x="220" y="55" fontSize="16" fontFamily="system-ui,sans-serif" fill="#4F46E5" textAnchor="middle">&#9889;</text>
              <text x="260" y="56" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#4F46E5">Generate</text>
              <rect x="206" y="74" width="60" height="6" rx="3" fill="#E0E7FF"/>
              <rect x="270" y="74" width="44" height="6" rx="3" fill="#C7D2FE"/>
              <rect x="206" y="86" width="108" height="6" rx="3" fill="#E0E7FF"/>
              <rect x="206" y="98" width="76" height="6" rx="3" fill="#C7D2FE"/>
              {/* Arrow 2 */}
              <path d="M342 70 L368 70" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round"/>
              <path d="M364 64 L372 70 L364 76" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Step 3 — Execute */}
              <rect x="380" y="20" width="140" height="100" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5"/>
              <rect x="396" y="36" width="28" height="28" rx="6" fill="#D1FAE5"/>
              <text x="410" y="56" fontSize="16" fontFamily="system-ui,sans-serif" fill="#10B981" textAnchor="middle">&#9654;</text>
              <text x="452" y="56" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#334155">Execute</text>
              {/* Progress bar */}
              <rect x="396" y="76" width="108" height="8" rx="4" fill="#E2E8F0"/>
              <rect x="396" y="76" width="82" height="8" rx="4" fill="#10B981"/>
              <text x="396" y="102" fontSize="10" fontFamily="ui-monospace,monospace" fill="#64748B">Running... 75%</text>
              {/* Arrow 3 */}
              <path d="M532 70 L558 70" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round"/>
              <path d="M554 64 L562 70 L554 76" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Step 4 — Results */}
              <rect x="570" y="20" width="140" height="100" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5"/>
              <rect x="586" y="36" width="28" height="28" rx="6" fill="#D1FAE5"/>
              <text x="600" y="55" fontSize="14" fontFamily="system-ui,sans-serif" fill="#10B981" textAnchor="middle">&#10003;</text>
              <text x="642" y="56" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#334155">Results</text>
              {/* Result indicators */}
              <circle cx="596" cy="80" r="4" fill="#10B981"/><text x="608" y="84" fontSize="10" fontFamily="system-ui,sans-serif" fill="#334155">12 passed</text>
              <circle cx="596" cy="96" r="4" fill="#EF4444"/><text x="608" y="100" fontSize="10" fontFamily="system-ui,sans-serif" fill="#334155">1 failed</text>
              <circle cx="596" cy="112" r="4" fill="#FBBF24"/><text x="608" y="116" fontSize="10" fontFamily="system-ui,sans-serif" fill="#334155">0 skipped</text>
            </svg>

            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                From requirements to test results in minutes
              </h3>
              <p className="text-slate-600 mb-6 max-w-lg mx-auto">
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
        </Motion.div>
      </div>
    </section>
  );
}
