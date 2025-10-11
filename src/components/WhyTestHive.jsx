import React, { useState, useMemo } from "react";
import { motion as m, useReducedMotion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

function useFadeUp() {
  const reduce = useReducedMotion();
  return useMemo(
    () => ({
      hidden: { opacity: 0, y: reduce ? 0 : 16 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: EASE },
      },
    }),
    [reduce]
  );
}

const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const FEATURES = [
  {
    icon: "/assets/why/api.png",
    title: "Real QA, not checkbox QA",
    body: `We’ve seen it all — broken pipelines, flaky tests, endless bug triage. Our engineers build automation that earns your developers’ trust, not their frustration.`,
  },
  {
    icon: "/assets/why/cdi.png",
    title: "We help you stop firefighting",
    body: `Testhive plugs into your workflow and takes the regression load off. That means fewer late-night bug hunts and more focus on building what matters.`,
  },
  {
    icon: "/assets/why/agile.png",
    title: "Flexible partnership, not bureaucracy",
    body: `We adapt to your sprint rhythm and toolchain. Need to ramp up before a release or slow down after? Fine. We move with you, not against you.`,
  },
  {
    icon: "/assets/why/consultans.png",
    title: "Clarity and ownership",
    body: `No guessing where quality stands. We document, measure, and share everything so you can make confident release calls — without stress.`,
  },
];

export default function WhyTesthive() {
  const fadeUp = useFadeUp();
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section
      id="why-testhive"
      className="relative border-t border-gray-200 bg-gradient-to-b from-white to-sky-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <m.div
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center mx-auto max-w-3xl"
        >
          <m.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            Why teams choose Testhive
          </m.h2>
          <m.p
            variants={fadeUp}
            className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed"
          >
            We built Testhive for teams tired of firefighting test failures and
            chasing bugs right before every release. Our mission is to give your
            developers and business the freedom to focus on results — while we
            handle the reliability, automation, and peace of mind.
          </m.p>
        </m.div>

        {/* Features */}
        <m.div
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((f) => (
            <m.article
              key={f.title}
              variants={fadeUp}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <img
                src={f.icon}
                alt={f.title}
                className="h-12 w-12 mb-4"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {f.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">{f.body}</p>
            </m.article>
          ))}
        </m.div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setShowCalendly(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500 px-6 py-3 text-white font-semibold shadow-md hover:brightness-110 active:scale-95"
          >
            <Calendar className="h-5 w-5" />
            Let’s Meet
          </button>
        </div>

        {/* Calendly Modal */}
        {showCalendly && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full h-[90vh] flex flex-col relative overflow-hidden">
              <button
                onClick={() => setShowCalendly(false)}
                className="absolute top-3 right-4 text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
              <iframe
                src="https://calendly.com/jointhehive-testhive-phr7/30min"
                className="w-full h-full rounded-2xl"
                title="Book a meeting with Testhive"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
