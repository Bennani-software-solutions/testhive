// src/pages/services/Consulting.jsx
import { useOutletContext } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ConsultingService() {
  const { onBook } = useOutletContext();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 space-y-20">
      {/* Intro */}
      <section className="grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-3 space-y-5">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-900">
            A senior QA engineer in your team within 2 weeks.
          </h1>
          <p className="text-slate-700 leading-relaxed">
            Someone senior, in your team, in two weeks. They join your
            standups and write in your Jira like any other team member.
            You pay monthly. If the first month does not work, you stop
            without paying.
          </p>
          <ul className="space-y-2 text-slate-700">
            <li className="flex gap-2"><span className="text-emerald-500">&#10003;</span> Speaks your language (Dutch, French, English)</li>
            <li className="flex gap-2"><span className="text-emerald-500">&#10003;</span> Works your hours (0&ndash;1h from CET)</li>
            <li className="flex gap-2"><span className="text-emerald-500">&#10003;</span> Productive in two weeks instead of six months</li>
            <li className="flex gap-2"><span className="text-emerald-500">&#10003;</span> First month free of risk &mdash; you only pay if it works</li>
          </ul>
          <button
            onClick={onBook}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800 transition"
          >
            Schedule a call
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="md:col-span-2">
          <img
            src="/assets/abdelaziz.jpg"
            alt="TestHive team member at work"
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Why Morocco */}
      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900">
          Why Morocco
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Most companies know nearshoring from Eastern Europe. Morocco has
          a few advantages that Romania or Poland don't offer.
        </p>
        <ul className="space-y-4 text-slate-700">
          <li className="flex gap-3">
            <span className="text-slate-400 mt-1">—</span>
            <span>
              Morocco runs on GMT+1 all year with no daylight saving.
              In winter that matches CET exactly. In summer the difference
              is one hour. Your 9am is always our 8am or 9am.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-slate-400 mt-1">&mdash;</span>
            <span>
              Dutch and French as working languages. Our testers have worked
              with Benelux companies before and can talk to your developers,
              POs and managers without a translator.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-slate-400 mt-1">&mdash;</span>
            <span>
              Senior people at a lower rate than a local hire. Not because the
              work is worth less. Because our cost base is different.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-slate-400 mt-1">&mdash;</span>
            <span>
              Cultural proximity. There is a large Moroccan community in
              Belgium and the Netherlands. We know how Benelux companies
              actually work, which cuts onboarding time in half.
            </span>
          </li>
        </ul>
      </section>

      {/* What we do */}
      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900">
          What we do
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              QA consultancy
            </h3>
            <p className="text-slate-700 leading-relaxed">
              We look at how you currently test and tell you what to fix.
              Strategy, tools, coverage, team setup. Honest advice, even
              when the answer is uncomfortable.
            </p>
            <p className="text-slate-600 text-sm">
              Test audits, strategy reviews, process improvements, QA
              maturity assessments.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              Test automation
            </h3>
            <p className="text-slate-700 leading-relaxed">
              We build and maintain automated test suites end-to-end,
              including the CI/CD wiring. We work with whatever framework
              you already use.
            </p>
            <p className="text-slate-600 text-sm">
              Selenium, Cypress, Playwright, Robot Framework, API testing,
              performance testing. Tool agnostic.
            </p>
          </div>
        </div>
      </section>

      {/* How we work together */}
      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900">
          How we work together
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Our testers work as part of your team. They use your tools, attend
          your ceremonies, follow your rhythm. The only difference is that
          they work remotely and you pay monthly instead of hiring permanently.
        </p>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-4 text-slate-700">
          <p>
            A typical setup: you need testing capacity but you do not want
            to hire someone full-time on payroll. We assign a senior tester
            who plugs into your Jira, your Git, your CI/CD. Within a week
            they work like they have always been there.
          </p>
          <p>
            Month to month, no long contracts. We keep our spot through
            results, not signatures.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900">
          What it costs
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Final price depends on who you need and how much of their time.
          We work that out on a short call. No setup fees.
        </p>
        <button
          onClick={onBook}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800 transition"
        >
          Get a quote
          <ChevronRight className="h-4 w-4" />
        </button>
      </section>

      {/* About TestHive */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          About TestHive
        </h2>
        <p className="text-slate-700 leading-relaxed">
          TestHive was founded by Abdelaziz Bennani. Almost ten years of
          QA work for Benelux companies, from pharmaceutical wholesalers
          to SaaS startups. Always on the testing side: functional testing,
          test coordination, automation, CI/CD.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Today we are a growing team of senior testers based in Morocco.
          What makes nearshoring actually work for us is the language and
          cultural fit with the Benelux. Our testers also understand how
          software is built, which means your developers can talk to them
          like peers instead of like a separate QA silo.
        </p>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-slate-200 bg-white p-8 sm:p-10 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Need QA capacity without a permanent hire?
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Book a short call. No slides, no sales pitch. We talk about your
          situation and decide together if we can help.
        </p>
        <button
          onClick={onBook}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800 transition"
        >
          Schedule a call
          <ChevronRight className="h-4 w-4" />
        </button>
      </section>
    </div>
  );
}
