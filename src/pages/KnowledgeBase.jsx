import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import { BookOpen, Code, Zap, Shield, Settings, BarChart3, Search, Plug } from "lucide-react";
import { useState } from "react";

const sections = [
  {
    title: "Getting Started",
    icon: Zap,
    articles: [
      {
        title: "Quick Start Guide",
        desc: "Register at platform.testhive.ma, create a project with a name, slug, and base URL, then write your first BDD scenario using Given/When/Then format. Click Generate to produce Playwright code and Execute to run it instantly.",
        time: "3 min read",
      },
      {
        title: "Creating Your First Test",
        desc: "Write BDD/Gherkin scenarios in the editor and let AI generate Playwright TypeScript code using your project context (baseUrl, description, testingContext). The selector strategy prioritizes getByRole, then getByLabel, getByText, data-testid, and finally CSS selectors.",
        time: "5 min read",
      },
      {
        title: "Understanding the Dashboard",
        desc: "View pass rate trends over 7, 14, 21, or 30 days, detect flaky tests, identify the slowest tests, and review recent failures with error snippets. Test run summary cards give you an at-a-glance view of your project health.",
        time: "4 min read",
      },
      {
        title: "Inviting Team Members",
        desc: "Create a team and invite collaborators via email using token-based invitations. Assign roles as member or admin. Team members gain access to all team-owned projects automatically.",
        time: "2 min read",
      },
    ],
  },
  {
    title: "Test Creation",
    icon: Code,
    articles: [
      {
        title: "Writing BDD Scenarios",
        desc: "Use Given/When/Then syntax to describe test steps in plain English. The AI understands natural language and you can include CSS or XPath selectors in steps for precision. Use {{parameterName}} syntax for dynamic data substitution.",
        time: "6 min read",
      },
      {
        title: "Document Analysis",
        desc: "Upload PDF, DOCX, TXT, or Markdown files (up to 10 MB) and let AI extract testable scenarios as BDD. Scenario records are created automatically from your requirements documents. You can also generate User Stories directly from uploaded docs.",
        time: "4 min read",
      },
      {
        title: "Parameterized Tests",
        desc: "Store test parameters encrypted with AES-256-CBC, either globally or per-project. Reference them in Gherkin steps or generated code with {{key}} syntax. Values are substituted at runtime just before execution.",
        time: "5 min read",
      },
      {
        title: "Tags & Organization",
        desc: "Organize scenarios with a nested folder hierarchy and custom-colored tags. Bulk-tag multiple scenarios at once and filter your test suite by folder or tag to find exactly what you need.",
        time: "3 min read",
      },
    ],
  },
  {
    title: "Execution & CI/CD",
    icon: Settings,
    articles: [
      {
        title: "Running Tests",
        desc: "Create a draft test run, add scenarios, then execute. Configure headless or headed mode, choose a browser (Chromium, Firefox, or WebKit), set retries from 0 to 5, and use workers for parallel execution. Monitor progress in real time via server-sent events (SSE).",
        time: "5 min read",
      },
      {
        title: "CI/CD Integration",
        desc: "Trigger test runs from any CI pipeline via POST /api/webhook/trigger with a Bearer ftk_xxx API key. Specify projectSlug, scenarioIds, tags, or folderId. Provide a callbackUrl for async results or long-poll with GET /api/webhook/status/:runId/wait.",
        time: "8 min read",
      },
      {
        title: "Scheduled Runs",
        desc: "Define cron expressions (e.g. \"0 2 * * *\" for 2 AM daily) to run selected scenarios on a schedule. Runs execute in headless mode by default. The system tracks lastRunAt and nextRunAt for each schedule.",
        time: "4 min read",
      },
      {
        title: "API Keys",
        desc: "Generate API keys in the format ftk_<32-byte-hex> for CI/CD and webhook authentication. Keys are SHA-256 hashed before storage in the database. Set optional expiration dates and create or revoke keys from the project settings UI.",
        time: "3 min read",
      },
    ],
  },
  {
    title: "AI Features",
    icon: BarChart3,
    articles: [
      {
        title: "Self-Healing Tests",
        desc: "When a test fails, the AI analyzes error logs (up to 5000 characters), the generated code, and the original Gherkin scenario to propose a minimal fix, typically a selector change. Accept the fix with one click to keep your tests passing.",
        time: "5 min read",
      },
      {
        title: "Smart Test Generation",
        desc: "The system prompt includes your project context (baseUrl, testingContext, description) and enforces Playwright best practices like waitForLoadState and proper assertions. Unsafe patterns such as eval and child_process are blocked automatically.",
        time: "6 min read",
      },
      {
        title: "Bring Your Own AI",
        desc: "Configure a per-project LLM provider: OpenAI, Azure OpenAI, Ollama for local models, or any custom OpenAI-compatible endpoint. Set separate providers for code generation and analysis. All API keys are encrypted with AES-256-CBC.",
        time: "4 min read",
      },
      {
        title: "Document-Driven Testing",
        desc: "Upload PDF or DOCX files and the platform extracts the first 15,000 characters of text, then uses AI to generate BDD scenarios or user stories. Processing runs asynchronously with real-time status tracking.",
        time: "5 min read",
      },
    ],
  },
  {
    title: "Integrations",
    icon: Plug,
    articles: [
      {
        title: "Xray Integration",
        desc: "Push test results directly to Xray Cloud. Configure with your Xray baseUrl, apiKey, and projectKey. Each execution creates a test execution entity in Xray with individual pass/fail status per test case.",
        time: "5 min read",
      },
      {
        title: "TestRail Integration",
        desc: "Create test runs and push results to TestRail with automatic status mapping (1 for pass, 5 for fail). Runs are auto-closed after results are submitted. Configure with baseUrl, user, apiKey, and projectId.",
        time: "5 min read",
      },
      {
        title: "Confluence Integration",
        desc: "Import Confluence pages as documents for automatic scenario extraction. Configure with baseUrl, email, apiKey, and spaceKey. Browse available spaces and pages directly from the TestHive UI.",
        time: "4 min read",
      },
      {
        title: "Webhooks & API",
        desc: "Access the RESTful API with JWT authentication or API keys. Trigger test runs via webhooks with built-in SSRF protection that blocks private IPs and validates HTTPS. Use callback URLs for asynchronous result delivery.",
        time: "7 min read",
      },
    ],
  },
  {
    title: "Security & Administration",
    icon: Shield,
    articles: [
      {
        title: "Authentication",
        desc: "JWT access tokens expire after 1 hour and refresh tokens last 7 days, both stored in HTTP-only cookies. Tokens auto-refresh on expiry. Login attempts are rate-limited to 20 per 15-minute window to prevent brute-force attacks.",
        time: "5 min read",
      },
      {
        title: "Role-Based Access Control",
        desc: "Assign team roles as member or admin to control access. Project ownership determines management permissions. API keys are isolated per user so each team member operates with their own credentials.",
        time: "4 min read",
      },
      {
        title: "Data Retention",
        desc: "Configure maxTestRuns per project to control storage. When the limit is reached, older completed runs are automatically deleted on the next execution. Draft runs are excluded from the retention count.",
        time: "3 min read",
      },
      {
        title: "Encryption & Security",
        desc: "All API keys and parameters are encrypted with AES-256-CBC using a base64-encoded 32-byte SECRET_KEY. Webhook callbacks include SSRF protection that blocks private IP ranges and enforces HTTPS endpoints.",
        time: "4 min read",
      },
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
            className="w-full rounded-2xl border border-gray-200 bg-slate-50 py-4 pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition"
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
                <div className="rounded-xl bg-indigo-50 p-2.5">
                  <Icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  {section.title}
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {section.articles.map((article) => (
                  <div
                    key={article.title}
                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition cursor-pointer"
                  >
                    <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition">
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
