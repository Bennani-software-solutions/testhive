// src/components/Pricing.jsx
export default function Pricing({ onBookClick = () => {} }) {
  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">Pricing</h2>
      <p className="mt-2 max-w-2xl text-gray-600">
        Senior testers from Morocco who join your team like any other engineer.
        You pay monthly. No recruitment fees.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            Part-time
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">2&ndash;3 days per week</h3>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>&bull; Senior tester on a flexible schedule</li>
            <li>&bull; Joins your Slack, Jira and Git</li>
            <li>&bull; Month to month</li>
          </ul>
          <button
            onClick={onBookClick}
            className="mt-6 w-full rounded-2xl bg-indigo-600 hover:bg-indigo-700 px-4 py-3 text-sm font-semibold text-white shadow-md transition active:scale-95"
          >
            Get a quote
          </button>
        </div>

        <div className="rounded-3xl border-2 border-indigo-500 bg-white p-8 shadow-sm">
          <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            Full-time
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Dedicated engineer</h3>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>&bull; Full-time senior tester, in your team</li>
            <li>&bull; Owns standups, code reviews, CI/CD</li>
            <li>&bull; Month to month, cancel any time</li>
          </ul>
          <button
            onClick={onBookClick}
            className="mt-6 w-full rounded-2xl bg-indigo-600 hover:bg-indigo-700 px-4 py-3 text-sm font-semibold text-white shadow-md transition active:scale-95"
          >
            Get a quote
          </button>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            Team
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Multiple engineers</h3>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>&bull; Two or more testers, scaled to your needs</li>
            <li>&bull; Test lead coordination included</li>
            <li>&bull; Volume pricing available</li>
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
        Final price depends on who you need and for how long. We work that out
        on a short call. No setup fees.
      </p>
    </section>
  );
}
