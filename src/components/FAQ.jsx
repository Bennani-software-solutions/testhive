// src/components/FAQ.jsx
import { useMemo, useState, useId, useEffect } from "react";
import { motion as m, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, Search, Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";

const EASE = [0.22, 1, 0.36, 1];

const FAQ_DATA = [
  {
    q: "How can we measure the ROI of test automation?",
    a: "Track before/after KPIs: lead time to production, regression test time, escaped defects, and production incidents. With 10–20 critical scenarios automated, most teams see 30–60% faster regression cycles and fewer high-severity bugs."
  },
  {
    q: "Why are our automated tests so flaky?",
    a: "Flakiness often comes from unstable selectors, missing waits, or shared test data. The solution is to use stable id-based selectors, explicit waits, isolated test data, and API-level checks. Aim for less than 2% flaky tests."
  },
  {
    q: "We release weekly. Can QA keep up?",
    a: "Yes. Use quality gates: smoke tests on each pull request, nightly regression runs, and define 'done' as a green pipeline. With this setup QA scales with your release cadence."
  },
  {
    q: "Do we need a QA partner if we already have testers?",
    a: "Yes, if you want acceleration. Your testers know the domain; we bring expertise in frameworks, CI/CD integration, and coaching. Together we make quality predictable and faster to achieve."
  },
  {
    q: "When should we start performance and security testing?",
    a: "Once functional tests are stable, run baseline load tests on APIs and critical flows. Security testing should be added early with automated scans and scheduled penetration testing."
  },
  {
    q: "How does a typical engagement with TestHive start?",
    a: "We begin with a discovery call to align on your goals, followed by a proposal for the most suitable pack — POC, Accelerator, or Partner Program. Each step is transparent and collaborative."
  },
  {
    q: "What’s included in the Accelerator Pack?",
    a: "The Accelerator Pack delivers 10–20 high-priority automated tests in ~90 days, integrated into your CI/CD pipeline, with reporting, framework setup, and full handover."
  },
  {
    q: "How do you ensure knowledge transfer to our team?",
    a: "We coach your QA and developers through pairing, provide clear documentation, and run workshops. Our goal is to make your team confident and independent."
  },
  {
    q: "Can we start small before committing?",
    a: "Yes. Our free POC Pack is designed exactly for that — low risk, high clarity. It lets you validate the benefits before scaling."
  }
];

function FAQItem({ q, a, isOpen, onToggle, variants }) {
  const panelId = useId();
  const btnId = useId();

  return (
    <m.li
      variants={variants}
      className="group rounded-2xl border border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md"
    >
      <button
        id={btnId}
        onClick={onToggle}
        aria-controls={panelId}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        <span className="text-base font-semibold text-slate-900">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm leading-7 text-slate-700">{a}</div>
          </m.div>
        )}
      </AnimatePresence>

      <m.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="origin-left h-0.5 w-full rounded-b-2xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500"
      />
    </m.li>
  );
}

export default function FAQ({ className = "" }) {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedAll, setExpandedAll] = useState(false);
  const reduce = useReducedMotion();

  const faqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQ_DATA;
    return FAQ_DATA.filter(
      ({ q: question, a }) =>
        question.toLowerCase().includes(q) || a.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    if (expandedAll) setOpenIndex("ALL");
    else setOpenIndex(null);
  }, [expandedAll, query]);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.05 }
    }
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } }
  };

  return (
    <section
      id="faq"
      className={`relative border-t border-gray-200 bg-white py-20 ${className}`}
      aria-labelledby="faq-heading"
    >
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(900px_500px_at_5%_-10%,#ecfeff_30%,transparent_70%),radial-gradient(700px_400px_at_95%_0%,#eef2ff_25%,transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">
            <Sparkles className="h-4 w-4" /> Helpful answers
          </div>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600">
            These are the questions teams most often ask us when exploring QA
            and test automation. Each answer is written to help both technical
            and non-technical readers move forward with clarity.
          </p>
        </div>

        {/* Search + expand controls */}
        <div className="mt-8 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
          <label className="relative flex w-full sm:max-w-sm items-center">
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400" />
            <input
              type="search"
              inputMode="search"
              placeholder="Search by keyword (ROI, flaky tests, CI/CD…) "
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-9 py-2 text-sm text-slate-800 outline-none ring-sky-200/70 transition focus:border-sky-300 focus:ring-2"
              aria-label="Search FAQs"
              id="faq-search-input"
            />
          </label>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              id="btn-faq-expand"
              onClick={() => setExpandedAll(true)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Expand all
            </button>
            <button
              id="btn-faq-collapse"
              onClick={() => setExpandedAll(false)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Collapse all
            </button>
          </div>
        </div>

        {/* List */}
        <m.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 space-y-4"
        >
          {faqs.length === 0 && (
            <li className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
              No matches. Try another keyword.
            </li>
          )}

          {faqs.map((entry, i) => (
            <FAQItem
              key={entry.q}
              q={entry.q}
              a={entry.a}
              isOpen={openIndex === "ALL" || openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              variants={item}
            />
          ))}
        </m.ul>

        {/* Contact fallback */}
        <div className="mt-12 text-center">
          <p className="text-slate-700 mb-6">
            Didn’t find your question here? Fill out the form below or email us at{" "}
            <a
              id="lnk-faq-contact"
              href="mailto:support@testhive.ma"
              className="font-semibold text-sky-600 hover:text-sky-700"
            >
              support@testhive.ma
            </a>{" "}
            and we’ll be happy to help.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
