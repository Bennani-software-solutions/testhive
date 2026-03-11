import { motion as m } from "framer-motion";
import Section from "./Section";
import { Play, Monitor, MousePointer } from "lucide-react";

export default function DemoSection() {
  return (
    <Section id="demo" className="bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="text-center mb-12">
        <div className="inline-flex items-center rounded-full bg-sky-500/20 px-4 py-1.5 text-xs font-semibold text-sky-300 mb-4">
          DUMMY DATA — PLACEHOLDER
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          See TestHive in Action
        </h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          Watch how teams create automated tests in minutes — no coding
          required.
        </p>
      </div>

      {/* Video Placeholder */}
      <m.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative rounded-2xl border border-slate-700 bg-slate-800 overflow-hidden shadow-2xl aspect-video">
          {/* Fake browser chrome */}
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-3 border-b border-slate-700">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 ml-4">
              <div className="mx-auto max-w-md rounded-lg bg-slate-800 px-4 py-1.5 text-xs text-slate-400 text-center">
                aithentic.testhive.ma
              </div>
            </div>
          </div>

          {/* Content area with play button */}
          <div className="flex items-center justify-center h-full min-h-[300px] bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="text-center">
              <button className="group mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-500/20 border border-sky-500/30 hover:bg-sky-500/30 transition">
                <Play className="h-8 w-8 text-sky-400 group-hover:text-sky-300 ml-1" />
              </button>
              <p className="mt-4 text-slate-400 text-sm">
                Platform walkthrough (3 min)
              </p>
            </div>
          </div>
        </div>
      </m.div>

      {/* Quick feature highlights */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
        {[
          {
            icon: MousePointer,
            title: "Write in Plain Language",
            desc: "Describe test scenarios in BDD/Gherkin syntax. No code needed.",
          },
          {
            icon: Monitor,
            title: "AI Generates the Code",
            desc: "Production-ready Playwright code, generated instantly.",
          },
          {
            icon: Play,
            title: "Run & Review",
            desc: "One-click execution with video recordings and detailed logs.",
          },
        ].map((item, i) => (
          <m.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="text-center"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20">
              <item.icon className="h-6 w-6 text-sky-400" />
            </div>
            <h3 className="font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
          </m.div>
        ))}
      </div>
    </Section>
  );
}
