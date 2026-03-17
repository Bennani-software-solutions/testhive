import { useState } from "react";
import { motion as m } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import useDevMode from "../hooks/useDevMode";
import DemoSection from "../components/DemoSection";
import PlatformPricing from "../components/PlatformPricing";
import {
  Sparkles,
  FileSearch,
  Play,
  Users,
  PenTool,
  Brain,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle,
  Lock,
  Clock,
  Zap,
  ChevronDown,
  Calendar,
  Link2,
  RefreshCw,
} from "lucide-react";

const PLATFORM_URL = "https://app.testhive.ma";

const metrics = [
  { value: "10x", label: "Faster test creation", sub: "vs manual scripting" },
  { value: "80%", label: "Less code to write", sub: "AI handles the rest" },
  { value: "< 5 min", label: "First test generated", sub: "from sign-up" },
  { value: "24/7", label: "Scheduled execution", sub: "unattended runs" },
];

const steps = [
  {
    num: "01",
    title: "Write Scenarios",
    desc: "Describe what you want to test using BDD/Gherkin syntax, plain language anyone can understand.",
    icon: PenTool,
  },
  {
    num: "02",
    title: "AI Generates Code",
    desc: "The AI transforms your scenarios into production-ready Playwright test code instantly.",
    icon: Brain,
  },
  {
    num: "03",
    title: "Execute Tests",
    desc: "Run your tests with one click, headed or headless, single or batch. See results in real time.",
    icon: Play,
  },
  {
    num: "04",
    title: "Analyze & Improve",
    desc: "View detailed results, step-by-step logs, and pass/fail analytics. AI suggests fixes for failures.",
    icon: BarChart3,
  },
];

const showcaseFeatures = [
  {
    icon: Sparkles,
    title: "AI-Powered Test Generation",
    desc: "Write your test scenarios in Gherkin and let AI generate production-ready Playwright code. The AI uses your project context (base URLs, selectors, API endpoints) to produce accurate, ready-to-run tests.",
    bullets: [
      "BDD/Gherkin to Playwright TypeScript in seconds",
      "Project-aware code generation with custom selectors",
      "Parameter substitution for dynamic test data",
    ],
    image: "/assets/platform/editor.png",
    imageAlt: "TestHive Platform: BDD scenario editor with generated Playwright code",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Track your test health at a glance. See pass rates, flaky tests, slowest tests, and trends over time. Make data-driven decisions about where to invest in quality.",
    bullets: [
      "Pass rate trends over 30 days",
      "Flaky test detection and tracking",
      "Slowest tests identification for optimization",
    ],
    image: "/assets/platform/dashboard.png",
    imageAlt: "TestHive Platform: Analytics dashboard with pass rate trends and metrics",
  },
  {
    icon: RefreshCw,
    title: "Self-Healing Tests",
    desc: "When a test fails, AI analyzes the error logs and your test code, then proposes a minimal fix. Review the suggestion, accept it, and your test is back to green. No manual debugging.",
    bullets: [
      "AI-powered root cause analysis",
      "Minimal code changes proposed automatically",
      "One-click accept or manual review",
    ],
    image: "/assets/platform/self-heal.png",
    imageAlt: "TestHive Platform: Self-healing modal with AI-suggested fix",
  },
  {
    icon: FileSearch,
    title: "Document-Driven Testing",
    desc: "Upload your requirements documents (PDF, Word, or Markdown) and let AI extract test scenarios and user stories. Go from specification to test coverage in minutes.",
    bullets: [
      "Supports PDF, Word, TXT, and Markdown",
      "Auto-generates BDD scenarios from requirements",
      "Full traceability from document to test result",
    ],
    image: "/assets/platform/documents.png",
    imageAlt: "TestHive Platform: Document analysis with extracted test scenarios",
  },
  {
    icon: Play,
    title: "E2E & API Testing",
    desc: "Test web UIs and REST APIs from the same Gherkin scenarios. The AI auto-detects whether your scenario needs a browser or HTTP requests and generates the right Playwright code.",
    bullets: [
      "API testing via Gherkin: define endpoints, methods, and assertions",
      "Auth tokens and API keys stored as encrypted parameters",
      "Hybrid tests: combine UI interactions with API calls",
    ],
    image: "/assets/platform/api-testing.png",
    imageAlt: "TestHive Platform: API test scenario with Gherkin steps and response assertions",
  },
];

const integrations = [
  { name: "Playwright", logo: "/assets/Playwright.png" },
  { name: "Jira / Xray", logo: "/assets/platform/xray.png" },
  { name: "TestRail", logo: "/assets/platform/testrail.png" },
  { name: "Confluence", logo: "/assets/platform/confluence.png" },
  { name: "GitHub", logo: "/assets/platform/github.png" },
  { name: "GitLab", logo: "/assets/platform/gitlab.png" },
];

const trustPoints = [
  { icon: Lock, title: "AES-256 Encryption", desc: "API keys and parameters stored with military-grade encryption." },
  { icon: Shield, title: "Secure Authentication", desc: "JWT tokens with HTTP-only cookies. Brute-force protection built in." },
  { icon: Users, title: "Role-Based Access", desc: "Team management with owner and member roles. Project-level isolation." },
  { icon: Clock, title: "Data Retention Control", desc: "Configure how many test runs to keep per project. Your data, your rules." },
];

const audiences = [
  { label: "QA Engineers", desc: "Accelerate test creation and reduce maintenance overhead." },
  { label: "Business Analysts", desc: "Write test scenarios in plain language, no coding required." },
  { label: "Product Owners", desc: "Ensure acceptance criteria are automatically verified." },
  { label: "Development Teams", desc: "Integrate AI-generated tests into your CI/CD pipeline." },
];

const faqs = [
  {
    q: "Do I need coding experience to use TestHive Platform?",
    a: "No. You write test scenarios in BDD/Gherkin, plain English structured as Given/When/Then steps. The AI generates all the Playwright code for you. If you can describe what your app should do, you can create tests.",
  },
  {
    q: "What AI model does the platform use?",
    a: "By default, the platform uses OpenAI API for code generation and test analysis. You can also configure your own AI provider (OpenAI, Azure OpenAI, Ollama, or a custom endpoint) per project.",
  },
  {
    q: "Can I run tests on a schedule?",
    a: "Yes. You can set up cron-based schedules to run specific test suites automatically, hourly, nightly, or on any custom schedule. Results are stored and accessible in the dashboard.",
  },
  {
    q: "How does self-healing work?",
    a: "When a test fails, the AI analyzes the error logs, your test code, and the Gherkin scenario. It proposes the smallest possible code change to fix the issue. You review and accept the fix with one click.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All API keys and sensitive parameters are encrypted with AES-256-CBC. Authentication uses JWT with HTTP-only cookies. Rate limiting and brute-force protection are enabled by default.",
  },
  {
    q: "Can I integrate with Jira, TestRail, or other tools?",
    a: "Yes. The platform supports Xray (Jira), TestRail, and Confluence integrations out of the box. You can push test results, sync test cases, and import requirements documents from connected tools.",
  },
  {
    q: "Can I test REST APIs with TestHive?",
    a: "Yes. Write your API test scenarios in Gherkin: describe the endpoint, HTTP method, request body, and expected response. The AI generates Playwright tests using the request fixture. Auth tokens and API keys are stored as encrypted parameters.",
  },
];

const colorMap = {
  sky: "bg-indigo-100 text-indigo-600",
  violet: "bg-violet-100 text-violet-600",
  emerald: "bg-emerald-100 text-emerald-600",
  amber: "bg-amber-100 text-amber-600",
};

function ScreenshotPlaceholder({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`rounded-xl bg-slate-100 flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
            <Play className="h-6 w-6 text-indigo-600" />
          </div>
          <p className="text-sm font-medium text-slate-600">Screenshot coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`rounded-xl border border-slate-200 shadow-lg object-cover ${className}`}
    />
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-semibold text-slate-900 pr-4 group-hover:text-indigo-600 transition-colors">{q}</span>
        <ChevronDown className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <m.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.25 }}
          className="pb-5"
        >
          <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
        </m.div>
      )}
    </div>
  );
}

export default function Platform() {
  const { onBook } = useOutletContext();
  const isDev = useDevMode();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="hero-glow-light -z-10" aria-hidden />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-5">
              TestHive Platform
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              AI-powered test automation
              <br className="hidden sm:block" />
              <span className="text-indigo-600">for everyone</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
              Turn requirements into executable tests without writing code.
              Write what you want to test, let AI generate the code, execute with one click,
              and get results, all in one platform.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <a
                href={PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-base font-semibold text-white shadow-md active:scale-95 transition"
              >
                Try the Platform Free <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={onBook}
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
              >
                Request a Demo
              </button>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-14"
          >
            <ScreenshotPlaceholder
              src="/assets/platform/hero.png"
              alt="TestHive Platform overview: test editor, execution, and analytics"
              className="w-full max-w-5xl mx-auto min-h-[280px] md:min-h-[420px]"
            />
          </m.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-14 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {metrics.map((metric, i) => (
              <m.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="text-4xl md:text-5xl font-extrabold text-white">{metric.value}</p>
                <p className="mt-2 text-sm font-semibold text-indigo-300">{metric.label}</p>
                <p className="text-xs text-slate-400 mt-1">{metric.sub}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              How it <span className="text-indigo-600">works</span>
            </h2>
            <p className="mt-3 text-lg text-slate-600">Four steps from idea to verified test results.</p>
          </m.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <m.div
                key={s.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-4xl font-extrabold text-indigo-100">{s.num}</span>
                <div className="mt-2 mb-3">
                  <s.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature showcase with screenshots */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Everything you need to <span className="text-indigo-600">test smarter</span>
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              See the platform in action.
            </p>
          </m.div>

          <div className="space-y-24">
            {showcaseFeatures.map((f, i) => (
              <m.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col gap-10 items-center ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-5">{f.desc}</p>
                  <ul className="space-y-2">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 min-w-0 w-full">
                  <ScreenshotPlaceholder
                    src={f.image}
                    alt={f.imageAlt}
                    className="w-full min-h-[220px] md:min-h-[300px]"
                  />
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* More features grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              And <span className="text-indigo-600">more</span>
            </h2>
          </m.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Calendar, title: "Scheduled Test Runs", desc: "Set up cron-based schedules to run tests automatically, hourly, nightly, or on any custom interval.", color: "sky" },
              { icon: Users, title: "Team Collaboration", desc: "Multi-project workspaces, team management, folders, and role-based access. Everyone works in the same environment.", color: "violet" },
              { icon: Link2, title: "Integrations", desc: "Connect with Xray, TestRail, and Confluence. Push results, sync test cases, and import requirements.", color: "emerald" },
              { icon: Zap, title: "Parameterization", desc: "Use {{parameters}} in your tests for dynamic data. Encrypted storage, project-scoped, substituted at runtime.", color: "amber" },
              { icon: Shield, title: "Bring Your Own AI", desc: "Configure OpenAI, Azure OpenAI, Ollama, or custom LLM endpoints per project. Your API keys stay encrypted.", color: "sky" },
              { icon: Play, title: "Video Recordings", desc: "Capture video of every test run. Replay failures visually to understand exactly what went wrong.", color: "violet" },
            ].map((f, i) => (
              <m.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${colorMap[f.color]} mb-4`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Integrates with your <span className="text-indigo-600">existing stack</span>
            </h2>
            <p className="text-slate-600 mb-10">
              Push results to your test management tools. Import requirements. Connect your CI/CD.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-10"
          >
            <div className="rounded-2xl bg-slate-900 p-6">
              <img
                src="/assets/infographics/integrations.png"
                alt="TestHive integration ecosystem: Playwright, Xray, TestRail, Confluence, GitHub, GitLab, CI/CD, OpenAI, Ollama"
                loading="lazy"
                className="w-full max-w-4xl h-auto rounded-xl"
              />
            </div>
          </m.div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {integrations.map((int, i) => (
              <m.div
                key={int.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-2">
                  <img
                    src={int.logo}
                    alt={int.name}
                    className="h-8 w-8 object-contain"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
                <span className="text-xs font-medium text-slate-600">{int.name}</span>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & trust */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Built with <span className="text-indigo-600">security</span> in mind
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Enterprise-grade security features you can trust.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-12"
          >
            <div className="rounded-2xl bg-slate-900 p-6">
              <img
                src="/assets/infographics/security.png"
                alt="TestHive enterprise security: AES-256 encryption, BYOAI, SSRF protection, JWT HTTP-only cookies, bcrypt passwords, role-based access"
                loading="lazy"
                className="w-full max-w-4xl h-auto rounded-xl"
              />
            </div>
          </m.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((t, i) => (
              <m.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm text-center"
              >
                <div className="mx-auto mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{t.title}</h3>
                <p className="text-xs text-slate-600">{t.desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Built for <span className="text-indigo-600">your team</span>
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Whether you write code or not, TestHive Platform makes test automation accessible.
            </p>
          </m.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((a, i) => (
              <m.div
                key={a.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900">{a.label}</h3>
                  <p className="text-sm text-slate-600 mt-1">{a.desc}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Frequently asked <span className="text-indigo-600">questions</span>
            </h2>
          </m.div>

          <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white px-6">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Dev-only: Demo Section */}
      {isDev && <DemoSection />}

      {/* Dev-only: Platform Pricing */}
      {isDev && <PlatformPricing onBook={onBook} />}

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Start testing smarter today
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Create your free account and generate your first AI-powered test in minutes.
              No credit card required.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href={PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-8 py-3 text-base font-semibold text-white shadow-md active:scale-95 transition"
              >
                Get Started Free <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={onBook}
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-8 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
              >
                Book a Demo
              </button>
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
}
