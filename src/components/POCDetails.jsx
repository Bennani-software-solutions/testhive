import React, { useState, useMemo } from "react";
import { motion as m, useReducedMotion } from "framer-motion";
import { CheckCircle2, ClipboardList, ArrowRight, PhoneCall } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

function useFadeUp() {
  const reduce = useReducedMotion();
  return useMemo(
    () => ({
      hidden: { opacity: 0, y: reduce ? 0 : 16 },
      show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
    }),
    [reduce]
  );
}

const group = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function POCDetails({ onBook }) {
  const fadeUp = useFadeUp();
  const [openForm, setOpenForm] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/mgvnzebp", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSent(true);
      form.reset();
      setTimeout(() => {
        setOpenForm(false);
        setSent(false);
      }, 2000);
    }
  };

  return (
    <section
      id="poc-details"
      className="relative py-16 bg-gradient-to-br from-white via-sky-50 to-emerald-50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <m.div
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <m.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100"
          >
            <ClipboardList className="h-4 w-4" /> Starter Package (Proof of Concept) · Free · No commitment
          </m.p>
          <m.h2
            variants={fadeUp}
            className="mt-3 text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Not sure automation fits? Try a free Proof of Concept.
          </m.h2>
          <m.p
            variants={fadeUp}
            className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed"
          >
            We know automation can feel complex. That’s why our Proof of Concept
            focuses on one or two real use cases from your product, showing what’s
            possible before you invest. You’ll work directly with our QA
            engineers who plug into your workflow and deliver results you can
            see and trust.
          </m.p>
        </m.div>

        {/* What you'll get + how it works */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <m.article
            variants={fadeUp}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="text-emerald-600" /> What You’ll Get
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>✔️ 1–2 automated test scenarios using your real app.</li>
              <li>✔️ Set up on your preferred CI/CD (GitHub, GitLab, Azure).</li>
              <li>✔️ Visual reports and documentation.</li>
              <li>✔️ NDA by default. your data stays protected.</li>
            </ul>
          </m.article>

          <m.article
            variants={fadeUp}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <ArrowRight className="text-sky-600" /> How It Works
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>✅ We identify one or two meaningful test case with your team.</li>
              <li>✅ Our QA engineers automate it.</li>
              <li>✅ You get a working POC.</li>
              <li>✅ We discuss next steps if it’s a fit.</li>
            </ul>
          </m.article>
        </div>

        {/* What You Can Expect */}
        <m.div
          variants={fadeUp}
          className="mx-auto mt-14 max-w-3xl text-center text-slate-700 leading-relaxed"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            What You Can Expect
          </h3>
          <p>
            You’ll get a firsthand look at how automation can relieve your developers and business teams
            from repetitive regression testing, giving them time to focus on building
            features that move your business forward. No sales scripts, just data and
            working tests that prove real impact.
          </p>
        </m.div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBook}
            className="rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-6 py-3 text-white font-semibold shadow-md hover:brightness-110 active:scale-95"
          >
            <PhoneCall className="inline-block mr-2 h-5 w-5" /> Still have questions? Book a Free Consultation
          </button>
          <button
            onClick={() => setOpenForm(true)}
            className="rounded-xl border border-sky-300 bg-white px-6 py-3 text-sky-700 font-semibold hover:bg-sky-50 active:scale-95"
          >
            Don’t let this opportunity pass. Request your free POC now
          </button>
        </div>

        {/* Modal Contact Form */}
        {openForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
              <button
                onClick={() => setOpenForm(false)}
                className="absolute top-3 right-4 text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>

              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Request Your Free Proof of Concept
              </h3>

              {sent ? (
                <p className="text-emerald-600 text-center font-medium">
                  ✅ Thank you! Your POC request has been sent.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Name</label>
                      <input
                        name="name"
                        required
                        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Company
                    </label>
                    <input
                      name="company"
                      required
                      placeholder="e.g. ACME Corp"
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      QA Maturity
                    </label>
                    <select name="qa_maturity" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
                      <option>Early stage – manual testing</option>
                      <option>Developing – partial automation</option>
                      <option>Structured – CI/CD integrated</option>
                      <option>Advanced – continuous testing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Automation Tools
                    </label>
                    <input
                      name="tools"
                      placeholder="Playwright, Cypress, Selenium, etc."
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Test/Staging Environment (optional)
                    </label>
                    <input
                      name="staging_env"
                      placeholder="https://staging.company.com"
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Biggest QA Challenges
                    </label>
                    <textarea
                      name="qa_challenges"
                      rows="3"
                      placeholder="e.g. slow releases, flaky tests, lack of automation..."
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      What Would Make This POC Valuable?
                    </label>
                    <textarea
                      name="desired_outcome"
                      rows="3"
                      placeholder="e.g. proof of stability, CI integration, faster feedback..."
                      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 py-2.5 text-white font-semibold hover:brightness-110"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
