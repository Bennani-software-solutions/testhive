// src/components/Pricing.jsx
export default function Pricing({ onBookClick = () => {} }) {
  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">Pricing</h2>
      <p className="mt-2 max-w-2xl text-gray-600">
        Senior testers from Morocco who join your team like any other engineer.
        You only pay for days worked. No recruitment fees.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            Medior
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">From &euro;150 / day</h3>
          <p className="mt-1 text-sm text-gray-500">3+ years of experience</p>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>&bull; Functional and automated testing</li>
            <li>&bull; Joins your Slack, Jira and Git</li>
            <li>&bull; Part-time or full-time, you decide</li>
          </ul>
          <button
            onClick={onBookClick}
            className="mt-6 w-full rounded-2xl bg-indigo-600 hover:bg-indigo-700 px-4 py-3 text-sm font-semibold text-white shadow-md transition active:scale-95"
          >
            Book a call
          </button>
        </div>

        <div className="rounded-3xl border-2 border-indigo-500 bg-white p-8 shadow-sm">
          <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            Senior
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">From &euro;250 / day</h3>
          <p className="mt-1 text-sm text-gray-500">6+ years of experience</p>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>&bull; Test architecture, CI/CD, automation frameworks</li>
            <li>&bull; Owns standups, code reviews, strategy</li>
            <li>&bull; Can lead other testers on your team</li>
          </ul>
          <button
            onClick={onBookClick}
            className="mt-6 w-full rounded-2xl bg-indigo-600 hover:bg-indigo-700 px-4 py-3 text-sm font-semibold text-white shadow-md transition active:scale-95"
          >
            Book a call
          </button>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            Team
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Custom pricing</h3>
          <p className="mt-1 text-sm text-gray-500">2+ engineers, mix of levels</p>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>&bull; Medior and senior testers combined</li>
            <li>&bull; Test lead coordination included</li>
            <li>&bull; Volume rates available</li>
          </ul>
          <button
            onClick={onBookClick}
            className="mt-6 w-full rounded-2xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Talk to us
          </button>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        You only pay for days worked. If an engineer is sick or on leave, you
        don't pay. No setup fees, no long-term contracts.
      </p>
    </section>
  );
}
