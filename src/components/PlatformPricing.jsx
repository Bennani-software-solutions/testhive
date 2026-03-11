import { motion as m } from "framer-motion";
import Section from "./Section";
import { Check } from "lucide-react";

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
      "Video recordings",
      "Email & chat support",
      "90-day data retention",
    ],
    cta: "Start 14-Day Trial",
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
    ctaStyle: "bg-slate-900 text-white hover:opacity-90",
  },
];

export default function PlatformPricing() {
  return (
    <Section id="platform-pricing" className="bg-slate-50 border-t border-gray-200">
      <div className="text-center mb-12">
        <div className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 mb-4">
          DUMMY DATA — PLACEHOLDER
        </div>
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

            <button
              className={`mt-8 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition active:scale-95 ${tier.ctaStyle}`}
            >
              {tier.cta}
            </button>
          </m.div>
        ))}
      </div>
    </Section>
  );
}
