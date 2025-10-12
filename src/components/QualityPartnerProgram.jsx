// src/components/QualityPartnerProgram.jsx
import { useState } from "react"
import { motion as m } from "framer-motion"
import { Users2, Shuffle, Target, ShieldCheck, ArrowRight } from "lucide-react"

const EASE = [0.22, 1, 0.36, 1]
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

export default function QualityPartnerProgram({
  onBook = () => {},                                  // opens your Calendly modal
  calendlyUrl = "https://calendly.com/jointhehive-testhive-phr7/30min",
  formAction = "https://formspree.io/f/mgvnzebp", // ← replace with your Formspree endpoint or API
}) {
  const [openForm, setOpenForm] = useState(false)

  return (
    <section
      id="partner"
      className="
        relative border-t border-gray-200 bg-white py-16 md:py-20
        [background-image:radial-gradient(900px_500px_at_5%_-10%,#ecfeff_35%,transparent_70%),radial-gradient(700px_400px_at_95%_0%,#eef2ff_30%,transparent_70%)]
      "
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="mx-auto max-w-3xl text-center">
          <m.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100"
          >
            Quality Partner Program • Full-time engagement • Bespoke
          </m.p>
          <m.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Your Dedicated QA Advisor
          </m.h2>
          <m.p variants={fadeUp} className="mt-4 text-slate-600">
            When a standard package won’t fit, embed a full-time QA consultant who works <strong>as part of your team</strong>.
            We co-define priorities after an initial assessment
          </m.p>
        </m.div>

        {/* Three compact cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <m.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex items-center gap-2">
              <Users2 className="h-5 w-5 text-sky-600" />
              <h3 className="text-sm font-semibold text-slate-900">Embedded partnership</h3>
            </div>
            <p className="text-sm text-slate-700">
              Your consultant works exclusively with your team, attending stand-ups, PR reviews and planning like an internal member.
            </p>
          </m.div>

          <m.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex items-center gap-2">
              <Shuffle className="h-5 w-5 text-emerald-600" />
              <h3 className="text-sm font-semibold text-slate-900">Flexible scope</h3>
            </div>
            <p className="text-sm text-slate-700">
              No predetermined deliverables. We identify focus areas post-assessment and evolve scope based on impact.
            </p>
          </m.div>

          <m.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex items-center gap-2">
              <Target className="h-5 w-5 text-violet-600" />
              <h3 className="text-sm font-semibold text-slate-900">Outcome-driven</h3>
            </div>
            <p className="text-sm text-slate-700">
              Strategy, frameworks, coaching, CI quality signals—whatever drives your objectives and governance needs.
            </p>
          </m.div>
        </div>

        {/* Eligibility + compliance note */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <m.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h4 className="text-sm font-semibold text-slate-900">Who it’s for</h4>
            <p className="mt-1 text-sm text-slate-700">
              Teams that need an <strong>embedded QA expert</strong> to develop or enhance test strategy and automation—<em>not</em> a predefined package.
            </p>
          </m.div>

          <m.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-700" />
              <h4 className="text-sm font-semibold text-slate-900">Partnership & governance</h4>
            </div>
            <p className="mt-1 text-sm text-slate-700">
              We align on objectives, measures and risk posture. NDA/SOC practices and least-privilege access are standard.
            </p>
          </m.div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setOpenForm(true)}
            className="rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 active:scale-95"
          >
            Request a Proposal
          </button>
          <button
            onClick={onBook}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-gray-50"
          >
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Copy block (suggested content) */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
          <p className="font-semibold text-slate-900">Quality Partner Program – Your Dedicated QA Advisor</p>
          <p className="mt-2">
            When a standard package won’t fit your needs, our Quality Partner Program offers a full-time QA consultant who works alongside your team.
            There’s no one-size-fits-all scope: together we define the focus areas, whether it’s enhancing your test strategy, building automation frameworks,
            coaching your engineers or something entirely different. Engagement length and responsibilities are tailored to your objectives.
          </p>
        </div>
      </div>

      {/* Request Proposal — Modal Form */}
      {openForm && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Request a Proposal</h3>
              <button onClick={() => setOpenForm(false)} aria-label="Close form" className="text-slate-500 hover:text-slate-700">✕</button>
            </div>

            <form className="mt-4 space-y-4" method="POST" action={formAction}>
              {/* Honeypot */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-slate-600">Name</label>
                  <input required name="name" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600">Work email</label>
                  <input required type="email" name="email" inputMode="email" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-slate-600">Role</label>
                  <input name="role" placeholder="e.g. QA Lead, VP Eng" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600">Team size</label>
                  <select name="team_size" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm">
                    <option>1–5</option><option>6–15</option><option>16–30</option><option>31–60</option><option>60+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-600">Primary goals</label>
                <div className="mt-2 grid gap-2 sm:grid-cols-2 text-sm">
                  <label className="flex items-center gap-2"><input type="checkbox" name="goals" value="strategy" /> Test strategy & governance</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="goals" value="frameworks" /> Automation frameworks</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="goals" value="pipeline" /> CI/CD quality signals</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="goals" value="coaching" /> Coaching & enablement</label>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-600">Context & challenges</label>
                <textarea name="context" rows={3} placeholder="Briefly describe your current QA setup and challenges"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-slate-600">Preferred start timeframe</label>
                  <select name="timeframe" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm">
                    <option>ASAP</option><option>0–1 month</option><option>1–2 months</option><option>2–3 months</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600">Timezone</label>
                  <input name="timezone" placeholder="e.g. CET, UK, EST" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" />
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input required type="checkbox" name="custom_engagement" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <p className="text-xs text-slate-600">
                  I understand this is a <strong>custom engagement</strong> without predefined deliverables or test counts. A tailored proposal will be provided after an initial assessment.
                </p>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <button type="submit" className="rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 active:scale-95">
                  Submit Request
                </button>
                {calendlyUrl && (
                  <a href={calendlyUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-sky-600 hover:text-sky-700">
                    Or book a consultation
                  </a>
                )}
              </div>

              <p className="mt-2 text-[11px] text-slate-400">
                We reply within 1 business day. We’ll only contact you about this request.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
