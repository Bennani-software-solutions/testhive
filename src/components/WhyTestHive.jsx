import React from "react";
import { motion as m } from "framer-motion";
import { Users, Compass, Handshake, Eye } from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    title: "Multidisciplinary team",
    body:
      "Our QA engineers, automation specialists, and strategists work together across disciplines. That mix helps us understand both the technical and human sides of quality.",
  },
  {
    icon: Compass,
    title: "Independent advice",
    body:
      "We’re not tied to any tool or vendor. Our only goal is to help you choose what fits your stack, and your people best.",
  },
  {
    icon: Handshake,
    title: "Embedded collaboration",
    body:
      "We adapt to your tools, meetings, and rhythm. Agile, waterfall, or hybrid. You’ll feel like we’re part of your own team, not an external supplier.",
  },
  {
    icon: Eye,
    title: "Transparency & trust",
    body:
      "No surprises, no hidden metrics. You always know what’s done, what’s next, and what’s improving, backed by clear and honest communication.",
  },
];

export default function WhyTestHive({ onMeet }) {
  return (
    <section
      id="why-testhive"
      className="relative py-20 bg-gradient-to-b from-white via-sky-50/60 to-emerald-50/60 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6"
        >
          Why TestHive?
        </m.h2>

        {/* Features */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, body }, i) => (
            <m.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 text-left hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">{body}</p>
            </m.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button
            onClick={onMeet}
            className="rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-6 py-3 text-white font-semibold shadow-md hover:brightness-110 active:scale-95 transition"
          >
            Let’s meet
          </button>
        </div>
      </div>
    </section>
  );
}
