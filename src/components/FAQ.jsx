import { useState } from "react";
import { motion as m } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import ContactForm from "./ContactForm"; // ✅ make sure path is correct

const EASE = [0.22, 1, 0.36, 1];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const faqs = [
    {
      q: "How quickly can a QA engineer start?",
      a: "Short intake call first, then we match you with the right engineer. Onboarding usually takes one to two weeks. Compare that to three to six months for hiring someone yourself."
    },
    {
      q: "What is the minimum commitment?",
      a: "Month to month, no long contracts. If the first month does not work out, you stop. We keep working with you because the work is good, not because you signed something."
    },
    {
      q: "Why not just hire a local QA engineer?",
      a: "You can. But finding a senior tester in the Netherlands or Belgium usually takes three to six months and costs more than double per year all-in. With us you have someone productive in weeks, without payroll, sick leave or notice periods to manage."
    },
    {
      q: "What tools and frameworks do your testers work with?",
      a: "Playwright, Cypress, Selenium, Robot Framework, Postman, k6, and more. We adapt to your stack. If you use something else, chances are we have worked with it before."
    },
    {
      q: "How does communication work?",
      a: "Our engineers join your Slack or Teams. They show up in standups and ship code through your Git like any other team member. The only real difference is that they work from Morocco, which is zero to one hour from CET."
    },
    {
      q: "Can we start with a small trial before committing?",
      a: "Yes. We offer a free Proof of Concept. You pick one or two test cases, we automate them and wire them into your CI pipeline, you get a short demo. No cost. You see the quality before deciding anything."
    },
    {
      q: "How do you handle our data?",
      a: "We sign a Data Processing Agreement with Standard Contractual Clauses for every engagement. The specific technical and organisational measures are documented per project and shared during onboarding. If your legal or procurement team has questions before that, email support@testhive.ma — answer within one working day."
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-16 bg-gradient-to-br from-white via-slate-50 to-slate-100 border-t border-slate-200"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">
            We’ve gathered a few common questions from teams considering
            TestHive. If you don’t see your question here, just reach out, we’re happy to help.
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <m.div
              key={i}
              initial={false}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center text-left px-5 py-4 rounded-2xl focus:outline-none"
              >
                <span className="font-semibold text-slate-900">{item.q}</span>
                <ArrowRight
                  className={`h-5 w-5 text-slate-600 transition-transform duration-300 ${
                    open === i ? "rotate-90 text-indigo-600" : ""
                  }`}
                />
              </button>
              <m.div
                initial={false}
                animate={{
                  height: open === i ? "auto" : 0,
                  opacity: open === i ? 1 : 0
                }}
                transition={{ duration: 0.35, ease: EASE }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-4 text-slate-700 leading-relaxed">
                  {item.a}
                </div>
              </m.div>
            </m.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-700 mb-3">Didn’t find your answer?</p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 font-semibold shadow-md active:scale-95"
          >
            <MessageSquare className="h-5 w-5" />
            Book a Free Consultation
          </button>
        </div>

        {/* Contact Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg relative overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-4 text-slate-400 hover:text-slate-600 text-xl"
              >
                ✕
              </button>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Book a Free Consultation
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
