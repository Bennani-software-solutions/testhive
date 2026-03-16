import { motion as m } from "framer-motion";
import Section from "../components/Section";

const categories = [
  {
    title: "CI/CD Pipelines",
    items: [
      { name: "GitHub Actions", icon: "/assets/integrations/github.svg", status: "available" },
      { name: "GitLab CI", icon: "/assets/integrations/gitlab.svg", status: "available" },
      { name: "Azure DevOps", icon: "/assets/integrations/azure-devops.svg", status: "available" },
      { name: "Jenkins", icon: "/assets/integrations/jenkins.svg", status: "coming-soon" },
      { name: "CircleCI", icon: "/assets/integrations/circleci.svg", status: "coming-soon" },
      { name: "Bitbucket Pipelines", icon: "/assets/integrations/bitbucket.svg", status: "coming-soon" },
    ],
  },
  {
    title: "Test Management",
    items: [
      { name: "Xray (Jira)", icon: "/assets/integrations/xray.svg", status: "available" },
      { name: "TestRail", icon: "/assets/integrations/testrail.svg", status: "available" },
      { name: "Zephyr", icon: "/assets/integrations/zephyr.svg", status: "coming-soon" },
      { name: "qTest", icon: "/assets/integrations/qtest.svg", status: "coming-soon" },
    ],
  },
  {
    title: "Communication & Collaboration",
    items: [
      { name: "Slack", icon: "/assets/integrations/slack.svg", status: "coming-soon" },
      { name: "Microsoft Teams", icon: "/assets/integrations/teams.svg", status: "coming-soon" },
      { name: "Confluence", icon: "/assets/integrations/confluence.svg", status: "available" },
      { name: "Jira", icon: "/assets/integrations/jira.svg", status: "coming-soon" },
    ],
  },
  {
    title: "Testing Frameworks",
    items: [
      { name: "Playwright", icon: "/assets/integrations/playwright.svg", status: "available" },
      { name: "Cypress", icon: "/assets/integrations/cypress.svg", status: "available" },
      { name: "Selenium", icon: "/assets/integrations/selenium.svg", status: "available" },
      { name: "Appium", icon: "/assets/integrations/appium.svg", status: "coming-soon" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      { name: "AWS", icon: "/assets/integrations/aws.svg", status: "available" },
      { name: "Azure", icon: "/assets/integrations/azure.svg", status: "available" },
      { name: "Google Cloud", icon: "/assets/integrations/gcp.svg", status: "available" },
      { name: "Docker", icon: "/assets/integrations/docker.svg", status: "available" },
    ],
  },
  {
    title: "Monitoring & Reporting",
    items: [
      { name: "PagerDuty", icon: "/assets/integrations/pagerduty.svg", status: "coming-soon" },
      { name: "Datadog", icon: "/assets/integrations/datadog.svg", status: "coming-soon" },
      { name: "Grafana", icon: "/assets/integrations/grafana.svg", status: "coming-soon" },
    ],
  },
];

const statusBadge = {
  available: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "coming-soon": "bg-amber-50 text-amber-700 border-amber-200",
};

const statusLabel = {
  available: "Available",
  "coming-soon": "Coming Soon",
};

export default function Integrations() {
  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 mb-4">
          DUMMY DATA / PLACEHOLDER
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Integrations
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          TestHive connects with the tools your team already uses. Seamless
          integration with your existing workflow.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((cat, ci) => (
          <div key={cat.title}>
            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">
              {cat.title}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item, i) => (
                <m.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
                >
                  {/* Icon placeholder — uses first letter if no image */}
                  <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-400 shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900">{item.name}</h3>
                    <span
                      className={`inline-block mt-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusBadge[item.status]}`}
                    >
                      {statusLabel[item.status]}
                    </span>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Request Integration CTA */}
      <div className="mt-20 text-center rounded-3xl bg-slate-50 p-10 border border-indigo-100">
        <h2 className="text-2xl font-bold text-slate-900">
          Don't see your tool?
        </h2>
        <p className="mt-2 text-slate-600 max-w-lg mx-auto">
          We're constantly adding new integrations. Let us know what tools
          you'd like to see supported.
        </p>
        <button className="mt-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-md active:scale-95 transition">
          Request an Integration
        </button>
      </div>
    </Section>
  );
}
