// src/pages/services/Consulting.jsx
import { useOutletContext } from "react-router-dom";
import {
  Target,
  Wrench,
  TrendingUp,
  Users,
  CheckCircle,
  PhoneCall,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Test Strategy & Roadmap",
    text: "We assess your current QA maturity and define a realistic roadmap that aligns testing efforts with your business goals, release cadence, and team capacity.",
  },
  {
    icon: Wrench,
    title: "Tool Selection & Evaluation",
    text: "Choosing the right tools can save months of frustration. We evaluate options through small proof-of-concept trials so you invest in what actually fits your stack and team.",
  },
  {
    icon: TrendingUp,
    title: "Process Optimization",
    text: "From test planning to defect management, we identify bottlenecks in your QA workflow and implement improvements that reduce cycle time without cutting corners.",
  },
  {
    icon: Users,
    title: "Team Assessment & Enablement",
    text: "We evaluate your team's skills, identify gaps, and create targeted development plans so your testers grow into the roles your product demands.",
  },
];

export default function ConsultingService() {
  const { onBook } = useOutletContext();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
          QA Consulting
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl">
          Good testing does not happen by accident. It takes the right strategy,
          the right tools, and a team that knows how to use them. Our QA
          consultants work alongside your organization to build a quality
          practice that scales with your product and delivers measurable results.
        </p>
      </section>

      {/* Services */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-slate-900">
          How we help
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition flex gap-4"
            >
              <Icon className="h-8 w-8 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-700">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to expect */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-slate-900">
          What you can expect
        </h2>
        <ul className="space-y-3 max-w-3xl">
          {[
            "A clear assessment of where your QA stands today and where it needs to go.",
            "Practical recommendations you can act on immediately, not a 50-page report that gathers dust.",
            "Hands-on support during implementation so your team does not have to figure it out alone.",
            "Knowledge transfer built into every engagement so improvements stick after we leave.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-700">
              <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Let's build a QA practice that works for your team
        </h2>
        <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
          Book a free consultation to discuss your challenges. We will listen
          first, then propose a plan that makes sense for your situation.
        </p>
        <button
          onClick={onBook}
          className="rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-white font-semibold shadow-md active:scale-95"
        >
          <PhoneCall className="inline-block mr-2 h-5 w-5" />
          Book a Free Consultation
        </button>
      </section>
    </div>
  );
}
