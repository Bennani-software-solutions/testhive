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
      q: "Can you provide temporary QA capacity?",
      a: "Yes, absolutely. Whether you need an interim Test Manager, QA Lead, or Automation Specialist, we can step in quickly to strengthen your team. We work flexibly, short-term support, project-based collaboration, or part-time reinforcement depending on your needs."
    },
    {
      q: "Do you also help with tool selection?",
      a: "Certainly. We validate tools through a small Proof of Concept, making sure the chosen setup fits your stack, team skills, and budget. You’ll get a realistic view of how each tool performs before making any long-term commitment."
    },
    {
      q: "Can I combine in-company training with consulting?",
      a: "Definitely. We believe people learn best by applying new skills to real situations. That’s why we combine theory with your own scripts, environment, and use cases, so your team builds confidence while solving actual problems."
    },
    {
      q: "How quickly can we get started?",
      a: "After an initial discovery call to align on your goals and context, we can typically kick off within one to three weeks. We adapt to your planning rhythm and make sure we start with a clear, shared roadmap."
    }
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
