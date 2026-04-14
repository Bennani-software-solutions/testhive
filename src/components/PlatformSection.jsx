// src/components/PlatformSection.jsx
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, FileSearch, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Built for non-technical team members",
    desc: "Product owners, business analysts and managers can write test scenarios in plain language. No coding required.",
  },
  {
    icon: Sparkles,
    title: "AI generates the test code",
    desc: "Scenarios written in Gherkin get turned into executable tests automatically. Your QA team reviews and refines.",
  },
  {
    icon: Shield,
    title: "Configured per team, not shared",
    desc: "Each client gets their own instance. Your data, API keys and test results stay isolated. Bring your own AI provider or use ours.",
  },
  {
    icon: FileSearch,
    title: "Works with your existing stack",
    desc: "Connects to your Git, CI/CD and test management tools. We set it up as part of the engagement.",
  },
];

export default function PlatformSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/60 to-white border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-4">
            Platform
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            TestHive Platform
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            An AI-powered testing tool that we configure for each client.
            Non-technical team members write test scenarios in plain
            language, and the platform generates executable test code. Each
            instance is isolated for security, with your own AI keys and
            data.
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-500">
            The online version is available for demo purposes. For
            production use, we set up a dedicated instance tailored to
            your stack, your test framework, and your security
            requirements.
          </p>
        </m.div>

        <div className="grid gap-6 sm:grid-cols-2 mb-14">
          {features.map((f, i) => (
            <m.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </m.div>
          ))}
        </div>

        <div className="text-center flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://platform.testhive.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md active:scale-95 transition"
          >
            Try the demo
          </a>
          <Link
            to="/platform"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
