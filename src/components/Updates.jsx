// src/components/Updates.jsx
const updates = [
  {
    title: "New Playwright suite stabilized in 6 weeks",
    blurb: "How we reduced flaky tests and restored confidence in nightly builds.",
    date: "2025-09-01",
    href: "https://www.linkedin.com/company/testhive-nador/posts/?feedView=all"
  },
  {
    title: "Risk-driven QA: what to test first",
    blurb: "A short framework for prioritizing high-impact coverage.",
    date: "2025-08-20",
    href: "https://www.linkedin.com/company/testhive-nador/posts/?feedView=all"
  },
  {
    title: "CI dashboards leaders actually read",
    blurb: "3 metrics your CTO cares about (and 2 they don’t).",
    date: "2025-08-08",
    href: "https://www.linkedin.com/company/testhive-nador/posts/?feedView=all"
  },
];

export default function Updates() {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">News & Updates</h2>
          <a className="text-sm font-medium text-sky-600 hover:text-sky-700"
            href="https://www.linkedin.com/company/testhive-nador/posts/?feedView=all"
            target="_blank" rel="noreferrer">
            Follow on LinkedIn →
          </a>
        </div>

        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {updates.map(u => (
            <li key={u.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:bg-white hover:shadow-md transition">
              <p className="text-xs text-gray-500">{new Date(u.date).toLocaleDateString()}</p>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{u.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{u.blurb}</p>
              <a className="mt-4 inline-block text-sm font-medium text-sky-600 hover:text-sky-700"
                href={u.href} target="_blank" rel="noreferrer">
                Read on LinkedIn
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
