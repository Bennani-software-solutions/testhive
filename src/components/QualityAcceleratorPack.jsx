// src/components/QualityAcceleratorPack.jsx
import { motion as m } from "framer-motion"
import { useState } from "react"
import { CheckCircle2, PhoneCall, Zap, GitBranch, ShieldCheck, Clock } from "lucide-react"
import AcceleratorQualifyModal from "./AcceleratorQualifyModal"

const EASE = [0.22, 1, 0.36, 1]
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

export default function QualityAcceleratorPack({
  onBook = () => { }, // opent je Calendly modal
}) {
  const [showBankModal, setShowBankModal] = useState(false)

  return (
    <section
      id="accelerator"
      className="
        relative border-t border-gray-200 bg-white py-16 md:py-20
        [background-image:radial-gradient(900px_500px_at_5%_-10%,#ecfeff_35%,transparent_70%),radial-gradient(700px_400px_at_95%_0%,#eef2ff_30%,transparent_70%)]
      "
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <m.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100"
          >
            Quality Accelerator Pack • One-time purchase
          </m.p>
          <m.h2
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Automate your critical tests, fast
          </m.h2>
          <m.p variants={fadeUp} className="mt-4 text-slate-600">
            For a single payment of <strong>€4,999</strong>, our test automation engineers automate roughly
            <strong> 10–20 business-critical regression scenarios</strong> and integrate them into your CI/CD pipeline.
            Typical delivery +-<strong>90 days</strong>. Final test count depends on integration complexity and other factors.
          </m.p>
        </m.div>

        {/* Price + Key bullets */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          {/* Left: main card */}
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">What’s included</h3>
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                One-time • €4,999
              </div>
            </div>

            <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" /> Approx 10–20 automated E2E tests on your
                critical paths
              </li>
              <li className="flex items-start gap-2">
                <GitBranch className="mt-0.5 h-5 w-5 text-sky-600" /> Full CI/CD wiring
              </li>
              <li className="flex items-start gap-2">
                <Zap className="mt-0.5 h-5 w-5 text-violet-600" /> Executable docs & commands
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-700" /> Demo report + next-coverage plan, NDA by default
              </li>
            </ul>

            {/* Scope disclaimer */}
            <div className="mt-6 rounded-2xl bg-gray-50 p-4 text-xs text-slate-600 ring-1 ring-gray-200">
              <strong>Scope disclaimer:</strong> The 10–20 test range is an estimate. The final number depends on integration
              complexity, data dependencies, test design quality, and other project variables.
            </div>

            {/* Eligibility */}
            <div className="mt-4 rounded-2xl bg-white p-4 text-xs text-slate-700 ring-1 ring-gray-200">
              <strong>Eligibility:</strong> Designed for teams with mature QA practices and well-defined, documented regression
              tests.
            </div>

            {/* Add-ons */}
            <p className="mt-3 text-xs text-slate-500">
              Need automatic bug logging or &gt;~20 tests? Ask for a custom Enterprise quote.
            </p>

            {/* 🔹 REPLACED CTA SECTION */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowBankModal(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 active:scale-95"
                aria-label="Pay via Bank Transfer"
              >
                Join the Accelerator Program
              </button>

              <button
                onClick={onBook}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-gray-50"
              >
                <PhoneCall className="h-4 w-4" /> More Info / Book a Call
              </button>
            </div>

            {/* 🔹 Modal trigger */}
            {showBankModal && (
              <AcceleratorQualifyModal
                onClose={() => setShowBankModal(false)}
              />
            )}
          </m.div>

          {/* Right: timeline */}
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border border-gray-200 bg-gray-50 p-6"
          >
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-slate-700" />
              <h3 className="text-sm font-semibold text-slate-900">Typical delivery: ~90 days</h3>
            </div>
            <ol className="mt-3 grid gap-3 text-sm text-slate-700">
              <li className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-xs font-semibold text-slate-900">Week 0–2</div>
                <div className="text-slate-600">Kickoff • repo access • define key test focus</div>
              </li>
              <li className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-xs font-semibold text-slate-900">Weeks 2–10</div>
                <div className="text-slate-600">Automate 10–20 tests • stabilize • CI runs & dashboards</div>
              </li>
              <li className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-xs font-semibold text-slate-900">Weeks 11–13</div>
                <div className="text-slate-600">Demo run • report • handoff & next-steps plan</div>
              </li>
            </ol>
          </m.div>
        </div>
      </div>
    </section>
  )
}
