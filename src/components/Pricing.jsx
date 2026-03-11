// src/components/Pricing.jsx
import { useState } from "react"

export default function Pricing({
  onBookClick = () => {},                 // opens your Calendly modal
  calendlyUrl = "https://calendly.com/jointhehive-testhive-phr7/30min",
  buyUrl = "https://buy.stripe.com/your-checkout-link" // <- replace with Stripe Checkout URL
}) {
  const [openPOCForm, setOpenPOCForm] = useState(false)

  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">Pricing</h2>
      <p className="mt-2 max-w-2xl text-gray-600">Pick the path that fits where you are today.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* 1) FREE POC */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            No-commitment
          </div>

          <h3 className="mt-3 text-lg font-semibold text-gray-900">Free POC</h3>
          <p
            className="mt-2 text-sm text-gray-600"
            dangerouslySetInnerHTML={{
              __html:
                "Try automation risk-free: <strong>1–2 test cases</strong>, minimal CI hookup, and a demo report.",
            }}
          />

          <div className="mt-6 text-3xl font-bold">Free</div>

          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>• 1–2 automated test cases (Playwright/Cypress)</li>
            <li>• Minimal CI wiring (GitHub/GitLab/Azure)</li>
            <li>• Readme &amp; commands to run locally/CI</li>
            <li>• Demo run + short report</li>
            <li>• No cost, no commitment</li>
          </ul>

          <div className="mt-6 grid gap-3">
            <button
              onClick={onBookClick}
              className="w-full rounded-2xl bg-indigo-600 hover:bg-indigo-700 px-4 py-3 text-sm font-semibold text-white shadow-md transition active:scale-95"
              aria-label="Book a Free POC Call"
            >
              Book a Free POC Call
            </button>

            <button
              onClick={() => setOpenPOCForm(true)}
              className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
              aria-label="Request via form"
            >
              Request via Form
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            We’ll prioritize a flow that touches revenue or core activation to show value fast.
          </p>
        </div>

        {/* 2) QUALITY ACCELERATOR PACK */}
        <div className="rounded-3xl border-2 border-emerald-500 bg-white p-8 shadow-sm">
          <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            One-time package
          </div>

          <h3 className="mt-3 text-lg font-semibold text-gray-900">Quality Accelerator Pack</h3>
          <p className="mt-2 text-sm text-gray-600">
            For a single payment of <strong>€4,999</strong>, our senior engineers automate roughly{" "}
            <strong>10–20 business-critical tests</strong> and integrate them into your CI/CD pipeline.
            Typical delivery ~<strong>90 days</strong>.
          </p>

          <div className="mt-6 text-3xl font-bold">€4,999</div>
          <div className="text-xs text-gray-500">one-time</div>

          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>• ~10–20 automated regression scenarios</li>
            <li>• Full CI/CD wiring & dashboards</li>
            <li>• Executable docs & commands (local + CI)</li>
            <li>• Demo report & next-coverage plan</li>
          </ul>

          <div className="mt-6 grid gap-3">
            <a
              href={buyUrl}
              className="w-full text-center rounded-2xl bg-indigo-600 hover:bg-indigo-700 px-4 py-3 text-sm font-semibold text-white shadow-md transition active:scale-95"
              aria-label="Buy the Quality Accelerator Pack"
            >
              Buy Now
            </a>
            <button
              onClick={onBookClick}
              className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              More Info / Book a Call
            </button>
          </div>

          <div className="mt-4 rounded-xl bg-gray-50 p-3 text-xs text-gray-600 ring-1 ring-gray-200">
            <strong>Scope disclaimer:</strong> 10–20 is an estimate; final count depends on integration complexity, data
            dependencies, test design and other variables. Designed for teams with mature QA and documented regression tests.
          </div>

          <p className="mt-2 text-xs text-gray-500">
            Want automatic bug logging or &gt;~20 tests? Ask for an Enterprise quote.
          </p>
        </div>

        {/* 3) ENTERPRISE */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
          <p className="mt-2 text-sm text-gray-600">Tailored QA program for complex stacks and governance needs.</p>

          <div className="mt-6 text-3xl font-bold">Custom</div>

          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>• Dedicated team & SLAs</li>
            <li>• Security & compliance support</li>
            <li>• 24/5 coverage options</li>
          </ul>

          <button
            onClick={onBookClick}
            className="mt-6 w-full rounded-2xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Talk to Sales
          </button>
        </div>
      </div>

      {/* ----- Free POC Request Form Modal ----- */}
      {openPOCForm && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Request a Free Starter POC</h3>
              <button
                onClick={() => setOpenPOCForm(false)}
                aria-label="Close form"
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form
              className="mt-4 space-y-4"
              method="POST"
              action="https://formspree.io/f/mgvnzebp"  /* ← replace with your Formspree ID or your API endpoint */
            >
              {/* Honeypot anti-spam */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-gray-600">Name</label>
                  <input
                    required
                    name="name"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600">Work email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    inputMode="email"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-600">Repo or demo environment (optional)</label>
                <input
                  name="repo"
                  placeholder="e.g. https://github.com/org/app (or staging URL)"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-gray-600">Preferred tool</label>
                  <select name="tool" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm">
                    <option>Playwright</option>
                    <option>Cypress</option>
                    <option>Undecided / advise me</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600">CI platform</label>
                  <select name="ci" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm">
                    <option>GitHub Actions</option>
                    <option>GitLab CI</option>
                    <option>Azure DevOps</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-600">Target user journey</label>
                <textarea
                  name="journey"
                  rows={3}
                  placeholder="Describe the 1–2 test cases you want automated"
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>

              <div className="flex items-start gap-2">
                <input required type="checkbox" name="free" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <p className="text-xs text-gray-600">
                  I understand this POC is <strong>free</strong>, limited to <strong>1–2 test cases</strong>, and includes
                  minimal pipeline integration and a demo report, <strong>no commitment required</strong>.
                </p>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 hover:bg-indigo-700 px-5 py-2 text-sm font-semibold text-white shadow-md transition active:scale-95"
                >
                  Submit Request
                </button>
                {calendlyUrl && (
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Or book a call
                  </a>
                )}
              </div>

              <p className="mt-2 text-[11px] text-gray-400">
                We reply within 1 business day. We’ll only contact you about this POC request.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
