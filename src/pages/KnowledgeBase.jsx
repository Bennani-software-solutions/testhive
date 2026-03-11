import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import { BookOpen, Code, Zap, Shield, Settings, BarChart3, Search } from "lucide-react";
import { useState } from "react";

const sections = [
  {
    title: "Getting Started",
    icon: Zap,
    articles: [
      { title: "Quick Start Guide", desc: "Get up and running with TestHive Platform in under 5 minutes.", time: "3 min read" },
      { title: "Creating Your First Test", desc: "Write your first BDD scenario and generate automated test code.", time: "5 min read" },
      { title: "Understanding the Dashboard", desc: "Navigate the analytics dashboard, test results, and project overview.", time: "4 min read" },
      { title: "Inviting Team Members", desc: "Set up your workspace and invite collaborators with role-based access.", time: "2 min read" },
    ],
  },
  {
    title: "Test Creation",
    icon: Code,
    articles: [
      { title: "Writing BDD Scenarios", desc: "Learn how to write effective Given/When/Then scenarios for AI code generation.", time: "6 min read" },
      { title: "Document Analysis", desc: "Upload requirements documents and let AI extract test scenarios automatically.", time: "4 min read" },
      { title: "Parameterized Tests", desc: "Use dynamic test data and data-driven testing with encrypted parameter storage.", time: "5 min read" },
      { title: "Page Object Model", desc: "Organize your tests using the Page Object pattern for better maintainability.", time: "7 min read" },
    ],
  },
  {
    title: "Execution & CI/CD",
    icon: Settings,
    articles: [
      { title: "Running Tests Locally", desc: "Execute tests on your machine with detailed logs and video recordings.", time: "3 min read" },
      { title: "CI/CD Integration", desc: "Connect TestHive to GitHub Actions, GitLab CI, or Azure DevOps.", time: "8 min read" },
      { title: "Scheduled Runs", desc: "Set up cron-based scheduling for automated nightly or hourly test execution.", time: "4 min read" },
      { title: "Parallel Execution", desc: "Run tests in parallel to reduce total execution time.", time: "5 min read" },
    ],
  },
  {
    title: "AI Features",
    icon: BarChart3,
    articles: [
      { title: "Self-Healing Tests", desc: "How AI detects and proposes fixes for broken selectors and changed UI elements.", time: "5 min read" },
      { title: "Smart Test Generation", desc: "Deep dive into how AI generates production-ready Playwright code from scenarios.", time: "6 min read" },
      { title: "Bring Your Own AI", desc: "Configure OpenAI, Azure OpenAI, Ollama, or custom LLM endpoints.", time: "4 min read" },
      { title: "Failure Analysis", desc: "AI-powered root cause analysis for test failures with suggested fixes.", time: "5 min read" },
    ],
  },
  {
    title: "Integrations",
    icon: BookOpen,
    articles: [
      { title: "Xray Integration", desc: "Sync test cases and results between TestHive and Xray for Jira.", time: "6 min read" },
      { title: "TestRail Integration", desc: "Push test results to TestRail and map test cases bi-directionally.", time: "5 min read" },
      { title: "Confluence Reports", desc: "Auto-publish test execution reports to Confluence pages.", time: "4 min read" },
      { title: "API & Webhooks", desc: "Use the TestHive REST API and webhooks to build custom workflows.", time: "8 min read" },
    ],
  },
  {
    title: "Security & Administration",
    icon: Shield,
    articles: [
      { title: "Authentication & SSO", desc: "Configure JWT auth, HTTP-only cookies, and SSO with your identity provider.", time: "5 min read" },
      { title: "Role-Based Access Control", desc: "Set up roles and permissions for your organization.", time: "4 min read" },
      { title: "Data Retention Policies", desc: "Configure how long test data, recordings, and logs are stored.", time: "3 min read" },
      { title: "Encryption & Compliance", desc: "AES-256 encryption details and compliance information.", time: "4 min read" },
    ],
  },
];

export default function KnowledgeBase() {
  const [search, setSearch] = useState("");
  const lowerSearch = search.toLowerCase();

  const filtered = sections
    .map((s) => ({
      ...s,
      articles: s.articles.filter(
        (a) =>
          a.title.toLowerCase().includes(lowerSearch) ||
          a.desc.toLowerCase().includes(lowerSearch)
      ),
    }))
    .filter((s) => s.articles.length > 0);

  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <div className="inline-flex items-center rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-700 mb-4">
          DUMMY DATA — PLACEHOLDER
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Knowledge Base
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Everything you need to get the most out of the TestHive Platform.
          Guides, tutorials, and API reference.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-16">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-slate-50 py-4 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition"
          />
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-14">
        {filtered.map((section, si) => {
          const Icon = section.icon;
          return (
            <m.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: si * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-xl bg-sky-50 p-2.5">
                  <Icon className="h-5 w-5 text-sky-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  {section.title}
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {section.articles.map((article) => (
                  <div
                    key={article.title}
                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-sky-200 transition cursor-pointer"
                  >
                    <h3 className="font-semibold text-slate-900 group-hover:text-sky-600 transition">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{article.desc}</p>
                    <p className="mt-3 text-xs text-slate-400">{article.time}</p>
                  </div>
                ))}
              </div>
            </m.div>
          );
        })}
      </div>

      {/* API Reference CTA */}
      <div className="mt-20 text-center rounded-3xl bg-slate-900 p-10 text-white">
        <h2 className="text-2xl font-bold">API Reference</h2>
        <p className="mt-2 text-slate-300 max-w-lg mx-auto">
          Build custom integrations with the TestHive REST API. Full
          documentation with examples in cURL, JavaScript, and Python.
        </p>
        <button className="mt-6 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md hover:bg-slate-100 transition">
          View API Docs (Coming Soon)
        </button>
      </div>
    </Section>
  );
}
