import { motion as m } from "framer-motion";
import { Clock, Globe, TrendingDown, Handshake } from "lucide-react";

const FEATURES = [
  {
    icon: Clock,
    title: "Your working hours",
    body: "Morocco is on GMT+1 all year. No daylight saving here. In winter that lines up with CET exactly. In summer there is one hour of difference. Your 9am is always our 8am or 9am.",
  },
  {
    icon: Globe,
    title: "Your language",
    body: "Dutch, French, English, Arabic. We talk to your developers, POs and managers directly. No translation layer in between.",
  },
  {
    icon: TrendingDown,
    title: "Lower cost, same quality",
    body: "Senior people at a rate that works for you. Not because the work is worth less. Because our cost base is different.",
  },
  {
    icon: Handshake,
    title: "Embedded, not outsourced",
    body: "Your Slack, your Jira, your standups. Our testers work inside your team, not as a separate vendor on the side.",
  },
];

export default function WhyTestHive({ onBook }) {
  return (
    <section
      id="why-testhive"
      className="relative py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6"
        >
          Why nearshore from Morocco?
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed"
        >
          Most companies know nearshoring from Eastern Europe. Morocco is
          closer than you think: zero to one hour from Brussels, strong cultural
          ties with Belgium and the Netherlands, and senior QA talent that
          speaks your language.
        </m.p>

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
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">{body}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
