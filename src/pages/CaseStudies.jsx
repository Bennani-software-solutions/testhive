import { motion as m } from "framer-motion";
import SEO from "../components/SEO";
import Section from "../components/Section";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    company: "FinServ Pro",
    industry: "Financial Services",
    logo: null,
    challenge:
      "Manual regression testing took 3 full days before every release, causing delays and missed deadlines. Critical payment flows were only tested sporadically.",
    solution:
      "TestHive automated 45 critical regression scenarios using Playwright, integrated into their GitHub Actions pipeline with nightly scheduled runs.",
    results: [
      { metric: "70%", label: "Faster regression cycles" },
      { metric: "Zero", label: "Critical bugs in production (6 months)" },
      { metric: "3 days → 4 hrs", label: "Release testing time" },
    ],
    quote:
      "TestHive transformed our QA process. What used to take our team 3 days now runs automatically overnight. We ship with confidence every sprint.",
    quotePerson: "David van der Berg",
    quoteRole: "VP Engineering, FinServ Pro",
    tags: ["Playwright", "GitHub Actions", "Financial Services"],
  },
  {
    company: "MediTrack",
    industry: "Healthcare SaaS",
    logo: null,
    challenge:
      "A fast-growing healthcare platform needed to meet strict compliance requirements while doubling their release cadence. Their 2-person QA team was overwhelmed.",
    solution:
      "TestHive provided a dedicated QA engineer through the Quality Partner Program, built a test automation framework from scratch, and trained the internal team.",
    results: [
      { metric: "2x", label: "Release frequency" },
      { metric: "85%", label: "Automated test coverage" },
      { metric: "€120K", label: "Estimated annual savings" },
    ],
    quote:
      "Having TestHive embedded in our team felt like having senior QA expertise on tap. They didn't just test, they mentored our developers to think about quality.",
    quotePerson: "Sarah Jansen",
    quoteRole: "CTO, MediTrack",
    tags: ["Cypress", "Azure DevOps", "Healthcare"],
  },
  {
    company: "RetailFlow",
    industry: "E-commerce",
    logo: null,
    challenge:
      "Frequent cart and checkout regressions were costing an estimated €50K/month in lost revenue. Manual testing couldn't keep up with bi-weekly releases.",
    solution:
      "TestHive delivered the Quality Accelerator Pack: 18 automated end-to-end tests covering the full purchase funnel, integrated with their GitLab CI pipeline.",
    results: [
      { metric: "€50K/mo", label: "Revenue loss eliminated" },
      { metric: "18", label: "Critical flows automated in 60 days" },
      { metric: "95%", label: "Checkout reliability" },
    ],
    quote:
      "The ROI was immediate. Within the first month, automated tests caught a payment gateway regression that would have cost us dearly during Black Friday.",
    quotePerson: "Marc de Vries",
    quoteRole: "Head of Product, RetailFlow",
    tags: ["Playwright", "GitLab CI", "E-commerce"],
  },
];

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Real results from real teams. See how companies across industries transformed their QA processes with TestHive automation."
        path="case-studies"
      />
      <Section className="bg-white">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 mb-4">
            REAL RESULTS
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Case Studies
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            See how teams across industries have transformed their QA processes
            and shipped with confidence using TestHive.
          </p>
        </div>

        <div className="space-y-20">
          {caseStudies.map((cs, i) => (
            <m.div
              key={cs.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              {/* Header */}
              <div className="bg-slate-50 px-8 py-6 border-b border-gray-100">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                      {cs.industry}
                    </p>
                    <h2 className="text-2xl font-bold text-slate-900 mt-1">
                      {cs.company}
                    </h2>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
                      Challenge
                    </h3>
                    <p className="text-slate-600">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                      Solution
                    </h3>
                    <p className="text-slate-600">{cs.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {cs.results.map((r) => (
                    <div
                      key={r.label}
                      className="text-center rounded-2xl bg-slate-50 p-5 border border-slate-100"
                    >
                      <div className="text-3xl font-extrabold text-indigo-600">
                        {r.metric}
                      </div>
                      <div className="text-sm text-slate-600 mt-1">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-indigo-400 pl-6 py-2">
                  <p className="text-slate-700 italic">"{cs.quote}"</p>
                  <footer className="mt-3">
                    <span className="font-semibold text-slate-900">
                      {cs.quotePerson}
                    </span>
                    <span className="text-slate-500">, {cs.quoteRole}</span>
                  </footer>
                </blockquote>
              </div>
            </m.div>
          ))}
        </div>
      </Section>
    </>
  );
}
