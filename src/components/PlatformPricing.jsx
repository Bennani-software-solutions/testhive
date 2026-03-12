import { motion as m } from "framer-motion";
import Section from "./Section";
import { Check, Minus } from "lucide-react";
import { useState } from "react";

const PLATFORM_URL = "https://platform.testhive.ma";

const tiers = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    badge: "Get Started",
    badgeColor: "bg-indigo-50 text-indigo-700",
    highlight: false,
    features: [
      "Up to 3 projects",
      "50 test runs / month",
      "AI test generation (limited)",
      "Basic analytics dashboard",
      "1 team member",
      "Community support",
      "7-day data retention",
    ],
    cta: "Start Free",
    ctaHref: `${PLATFORM_URL}/register`,
    ctaStyle:
      "bg-white border-2 border-slate-200 text-slate-900 hover:bg-slate-50",
  },
  {
    name: "Pro",
    price: "€49",
    period: "/ month per user",
    badge: "Most Popular",
    badgeColor: "bg-emerald-50 text-emerald-700",
    highlight: true,
    features: [
      "Unlimited projects",
      "Unlimited test runs",
      "Full AI test generation",
      "Self-healing tests",
      "Advanced analytics & trends",
      "Up to 10 team members",
      "Scheduled execution (cron)",
      "Xray & TestRail integration",
      "CSV export",
      "Email & chat support",
      "90-day data retention",
    ],
    cta: "Start 14-Day Trial",
    ctaHref: `${PLATFORM_URL}/register`,
    ctaStyle:
      "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    badge: "For Teams",
    badgeColor: "bg-violet-50 text-violet-700",
    highlight: false,
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Custom data retention",
      "Bring Your Own AI (LLM)",
      "Dedicated account manager",
      "SLA & priority support",
      "On-premise deployment option",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    ctaHref: null, // uses onBook
    ctaStyle: "bg-slate-900 text-white hover:opacity-90",
  },
];

const comparisonFeatures = [
  { name: "Projects", free: "3", pro: "Unlimited", ent: "Unlimited" },
  { name: "Test runs / month", free: "50", pro: "Unlimited", ent: "Unlimited" },
  { name: "AI test generation", free: "Limited", pro: true, ent: true },
  { name: "Self-healing tests", free: false, pro: true, ent: true },
  { name: "Team members", free: "1", pro: "10", ent: "Unlimited" },
  { name: "Scheduled runs (cron)", free: false, pro: true, ent: true },
  { name: "Xray & TestRail", free: false, pro: true, ent: true },
  { name: "Confluence integration", free: false, pro: false, ent: true },
  { name: "CSV export", free: false, pro: true, ent: true },
  { name: "Document analysis (PDF/DOCX)", free: false, pro: true, ent: true },
  { name: "Bring Your Own AI", free: false, pro: false, ent: true },
  { name: "Data retention", free: "7 days", pro: "90 days", ent: "Custom" },
  { name: "On-premise deployment", free: false, pro: false, ent: true },
  { name: "SLA & priority support", free: false, pro: false, ent: true },
];

function CellValue({ val }) {
  if (val === true)
    return <Check className="h-4 w-4 text-emerald-500 mx-auto" />;
  if (val === false)
    return <Minus className="h-4 w-4 text-slate-300 mx-auto" />;
  return <span className="text-sm text-slate-700">{val}</span>;
}

export default function PlatformPricing({ onBook }) {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <Section id="platform-pricing" className="bg-slate-50 border-t border-gray-200">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Platform Pricing
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Start free, scale as you grow. No credit card required.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 items-start">
        {tiers.map((tier, i) => (
          <m.div
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`rounded-3xl bg-white p-8 shadow-sm transition ${
              tier.highlight
                ? "border-2 border-emerald-500 scale-[1.02] shadow-lg"
                : "border border-gray-200"
            }`}
          >
            <div
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tier.badgeColor}`}
            >
              {tier.badge}
            </div>

            <h3 className="mt-3 text-lg font-semibold text-gray-900">
              {tier.name}
            </h3>

            <div className="mt-4">
              <span className="text-4xl font-extrabold text-slate-900">
                {tier.price}
              </span>
              {tier.period && (
                <span className="text-sm text-slate-500 ml-1">
                  {tier.period}
                </span>
              )}
            </div>

            <ul className="mt-8 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {tier.ctaHref ? (
              <a
                href={tier.ctaHref}
                className={`mt-8 block w-full text-center rounded-2xl px-4 py-3 text-sm font-semibold transition active:scale-95 ${tier.ctaStyle}`}
              >
                {tier.cta}
              </a>
            ) : (
              <button
                onClick={onBook}
                className={`mt-8 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition active:scale-95 ${tier.ctaStyle}`}
              >
                {tier.cta}
              </button>
            )}
          </m.div>
        ))}
      </div>

      {/* Feature comparison toggle */}
      <div className="mt-12 text-center">
        <button
          onClick={() => setShowComparison((v) => !v)}
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition"
        >
          {showComparison ? "Hide" : "View"} full feature comparison
        </button>
      </div>

      {showComparison && (
        <m.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-8 overflow-x-auto"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-900">Feature</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-900">Free</th>
                <th className="text-center py-3 px-4 font-semibold text-indigo-600">Pro</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((f, i) => (
                <tr
                  key={f.name}
                  className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  <td className="py-2.5 px-4 text-slate-700">{f.name}</td>
                  <td className="py-2.5 px-4 text-center">
                    <CellValue val={f.free} />
                  </td>
                  <td className="py-2.5 px-4 text-center">
                    <CellValue val={f.pro} />
                  </td>
                  <td className="py-2.5 px-4 text-center">
                    <CellValue val={f.ent} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </m.div>
      )}

      {/* FAQ */}
      <div className="mt-16 max-w-2xl mx-auto">
        <h3 className="text-lg font-bold text-slate-900 text-center mb-6">
          Pricing FAQ
        </h3>
        <div className="space-y-4">
          {[
            {
              q: "Can I switch plans at any time?",
              a: "Yes. You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.",
            },
            {
              q: "Do I need a credit card for the free plan?",
              a: "No. The free plan requires only an email address to get started. No credit card needed.",
            },
            {
              q: "What happens when I exceed free plan limits?",
              a: "You'll be notified when approaching limits. Tests won't be deleted — you simply won't be able to run new ones until the next month or until you upgrade.",
            },
            {
              q: "Is there a discount for annual billing?",
              a: "Yes. Contact us for annual pricing with up to 20% savings compared to monthly billing.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-slate-200 bg-white"
            >
              <summary className="cursor-pointer px-5 py-3 text-sm font-semibold text-slate-900 flex items-center justify-between">
                {item.q}
                <span className="text-slate-400 group-open:rotate-180 transition-transform">
                  &#9662;
                </span>
              </summary>
              <p className="px-5 pb-4 text-sm text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
