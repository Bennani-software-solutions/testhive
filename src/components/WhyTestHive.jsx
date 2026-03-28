import { motion as m } from "framer-motion";
import { Globe, PiggyBank, Users, Handshake, Compass, Eye } from "lucide-react";

const FEATURES = [
  {
    icon: Globe,
    title: "Same timezone, no friction",
    body:
      "Morocco is 0-2 hours from most European cities. Real-time collaboration, no awkward handoffs, no waiting overnight for answers.",
  },
  {
    icon: PiggyBank,
    title: "Up to 60% cost savings",
    body:
      "Senior QA engineers at a fraction of European freelance rates. Same expertise, same work ethic, dramatically lower cost.",
  },
  {
    icon: Users,
    title: "Multilingual, highly educated talent",
    body:
      "Our engineers speak French, English, Dutch, Arabic, and Spanish. Morocco produces 30,000+ STEM graduates annually.",
  },
  {
    icon: Handshake,
    title: "Embedded in your team",
    body:
      "Same Slack channels, same standups, same deadlines. We work inside your team, not alongside it. You will forget we are remote.",
  },
  {
    icon: Compass,
    title: "Independent, vendor-neutral advice",
    body:
      "We recommend what works for your stack, not what earns us a commission. If open-source Playwright is the right fit, we will tell you.",
  },
  {
    icon: Eye,
    title: "Full transparency",
    body:
      "Weekly progress reports, shared dashboards, and honest conversations about what is working and what is not. No surprises.",
  },
];

export default function WhyTestHive({ onMeet }) {
  return (
    <section
      id="why-testhive"
      className="relative py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200"
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

        <m.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed"
        >
          European companies pay €80-150/hour for QA freelancers. We deliver the same senior expertise from Morocco at nearshore rates, with zero timezone friction. Your team gets stronger without blowing the budget.
        </m.p>

        {/* Features */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
