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
      "We recommend what works for your stack, not what earns us a commission. No vendor lock-in, no bias. Just the right tools for your situation.",
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

        {/* Rate comparison table */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            The numbers speak for themselves
          </h3>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">
            Typical hourly rates for QA and test automation engineers. Same skills, same timezone, different price tag.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 px-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">Role</th>
                  <th className="py-3 px-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">EU Freelance</th>
                  <th className="py-3 px-4 text-sm font-semibold text-indigo-600 uppercase tracking-wider">TestHive</th>
                  <th className="py-3 px-4 text-sm font-semibold text-emerald-600 uppercase tracking-wider">You save</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-medium">Junior QA Engineer</td>
                  <td className="py-4 px-4">€40 - €55/hr</td>
                  <td className="py-4 px-4 font-semibold text-indigo-600">€20 - €30/hr</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">~50%</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="py-4 px-4 font-medium">Mid-level Test Automation</td>
                  <td className="py-4 px-4">€55 - €80/hr</td>
                  <td className="py-4 px-4 font-semibold text-indigo-600">€30 - €45/hr</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">~45%</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4 font-medium">Senior QA / SDET</td>
                  <td className="py-4 px-4">€75 - €110/hr</td>
                  <td className="py-4 px-4 font-semibold text-indigo-600">€45 - €70/hr</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">~40%</span>
                  </td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-4 px-4 font-medium">QA Lead / Consultant</td>
                  <td className="py-4 px-4">€90 - €150/hr</td>
                  <td className="py-4 px-4 font-semibold text-indigo-600">€55 - €85/hr</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">~45%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            EU rates based on average freelance market data for NL, BE, FR, and DE. TestHive rates are indicative and depend on scope and engagement model.
          </p>
        </m.div>

      </div>
    </section>
  );
}
