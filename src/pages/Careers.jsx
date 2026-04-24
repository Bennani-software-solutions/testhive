// src/pages/Careers.jsx
import { useOutletContext } from "react-router-dom";
import { ChevronRight, MapPin, Clock, Globe, Code } from "lucide-react";

const requirements = [
  "3+ years of hands-on software testing experience (manual and automated)",
  "Strong experience with Playwright, Cypress or Selenium",
  "Comfortable writing and maintaining test frameworks from scratch",
  "Experience with CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins)",
  "API testing experience (Postman, REST Assured or similar)",
  "Working proficiency in Dutch, French or English",
  "Based in Morocco (remote, GMT+1)",
];

const niceToHave = [
  "Experience working with European SaaS companies",
  "Performance testing tools (k6, JMeter, Gatling)",
  "Security/pen testing basics",
  "ISTQB certification or equivalent",
];

const perks = [
  "Remote work from anywhere in Morocco",
  "Competitive monthly rate (paid in MAD or EUR)",
  "Long-term engagements with European SaaS clients",
  "Work directly embedded in client teams, not on a bench",
  "Mentoring and knowledge sharing within the TestHive network",
];

export default function Careers() {
  const { onBook } = useOutletContext();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 space-y-16">
      {/* Header */}
      <section className="space-y-5">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
          Careers
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-900">
          Join the TestHive network
        </h1>
        <p className="text-slate-700 leading-relaxed max-w-2xl">
          We are building a network of senior QA engineers in Morocco for
          European SaaS clients. No bench time. You start on real client
          work from day one.
        </p>
      </section>

      {/* Open position */}
      <section className="rounded-xl border border-slate-200 bg-white p-8 sm:p-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Senior QA Engineer
          </h2>
          <p className="text-slate-500 mt-1">Freelance / Contract</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
            <MapPin className="h-3.5 w-3.5" /> Morocco (remote)
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
            <Clock className="h-3.5 w-3.5" /> GMT+1 (0–1h from CET)
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
            <Globe className="h-3.5 w-3.5" /> Dutch / French / English
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1">
            <Code className="h-3.5 w-3.5" /> Playwright / Cypress / Selenium
          </span>
        </div>

        {/* About the role */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            About the role
          </h3>
          <p className="text-slate-700 leading-relaxed">
            You work embedded in the development team of one of our European
            clients. You join their standups, their Slack, their Jira. You
            own the test strategy and make sure nothing ships broken.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Our clients are SaaS companies in the Netherlands, Belgium and
            Germany. They need testers who can think for themselves and
            communicate without hand-holding. If that sounds like you,
            we want to talk.
          </p>
        </div>

        {/* Requirements */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            What we are looking for
          </h3>
          <ul className="space-y-2">
            {requirements.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <span className="text-indigo-500 mt-0.5 shrink-0">
                  <ChevronRight className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Nice to have */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            Nice to have
          </h3>
          <ul className="space-y-2">
            {niceToHave.map((item) => (
              <li key={item} className="flex gap-3 text-slate-600">
                <span className="text-slate-300 mt-0.5 shrink-0">
                  <ChevronRight className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Perks */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            What we offer
          </h3>
          <ul className="space-y-2">
            {perks.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <span className="text-emerald-500 mt-0.5 shrink-0">
                  <ChevronRight className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* How to apply */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">
            How to apply
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Send us a short message. No formal cover letter. Tell us what
            tools you work with, what you have tested, and when you could
            start.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/212715931703?text=Hi%20TestHive%2C%20I%27m%20interested%20in%20the%20Senior%20QA%20Engineer%20role."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700 transition"
            >
              Apply via WhatsApp
            </a>
            <a
              href="mailto:careers@testhive.ma?subject=Senior%20QA%20Engineer%20Application"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800 transition"
            >
              Apply via Email
            </a>
          </div>
        </div>
      </section>

      {/* General CTA */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Not the right fit?
        </h2>
        <p className="text-slate-700 leading-relaxed">
          We always need good QA people in Morocco. Even if this specific
          role does not fit, reach out. We will keep you in mind for future
          projects.
        </p>
        <button
          onClick={onBook}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800 transition"
        >
          Get in touch
          <ChevronRight className="h-4 w-4" />
        </button>
      </section>
    </div>
  );
}
