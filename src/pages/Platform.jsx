import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import SEO from "../components/SEO";
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
  { value: "Faster", label: "Regression test setup", sub: "less manual scripting" },
  { value: "Open", label: "Standard test code output", sub: "no vendor lock-in" },
  { value: "Simple", label: "Plain language input", sub: "no coding required" },
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
    imageKey: "editor",
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
    imageKey: "dashboard",
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
    imageKey: "self-heal",
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
    imageKey: "documents",
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
    imageKey: "api-testing",
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
  {
    q: "Is the platform the right fit for every testing need?",
    a: "No, and we'll tell you when it's not. The platform excels at regression, smoke tests, and API validation. For exploratory testing, security audits, usability, and complex edge cases, you need human judgement. That's why we offer both: tooling where it helps, and expert consultants where it doesn't.",
  },
];

const colorMap = {
  sky: "bg-indigo-100 text-indigo-600",
  violet: "bg-violet-100 text-violet-600",
  emerald: "bg-emerald-100 text-emerald-600",
  amber: "bg-amber-100 text-amber-600",
};

/* ── Sidebar nav shared across SVG mockups ── */
const sidebarNav = ["Test Panel", "Test Runs", "Dashboard", "Documents", "User Stories", "Schedules"];

function SvgSidebar({ activeIdx = 0, y = 0, h = 340 }) {
  return (
    <g>
      <rect x="0" y={y} width="130" height={h} fill="#0f172a" />
      <rect x="14" y={y + 16} width="100" height="18" rx="4" fill="#334155" />
      <text x="34" y={y + 30} fontSize="9" fontWeight="700" fill="#e2e8f0" fontFamily="system-ui">TestHive</text>
      {sidebarNav.map((label, idx) => (
        <g key={label}>
          <rect x="8" y={y + 48 + idx * 28} width="114" height="22" rx="4" fill={idx === activeIdx ? "#4f46e5" : "transparent"} />
          <text x="18" y={y + 63 + idx * 28} fontSize="8" fill={idx === activeIdx ? "#ffffff" : "#94a3b8"} fontFamily="system-ui">{label}</text>
        </g>
      ))}
    </g>
  );
}

/* ── Hero: full platform overview ── */
function HeroMockup() {
  return (
    <svg viewBox="0 0 800 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="800" height="420" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <SvgSidebar activeIdx={0} h={420} />
      {/* Folder tree */}
      <rect x="130" y="0" width="140" height="420" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="142" y="24" fontSize="9" fontWeight="600" fill="#334155" fontFamily="system-ui">Folders</text>
      {["Smoke Tests", "Regression", "API Tests"].map((label, idx) => (
        <g key={label}>
          <rect x="140" y={36 + idx * 26} width="120" height="20" rx="4" fill={idx === 0 ? "#eef2ff" : "transparent"} />
          <rect x="148" y={41 + idx * 26} width="6" height="6" rx="1" fill={idx === 0 ? "#4f46e5" : "#cbd5e1"} />
          <text x="158" y={50 + idx * 26} fontSize="8" fill={idx === 0 ? "#4f46e5" : "#64748b"} fontFamily="system-ui">{label}</text>
        </g>
      ))}
      {/* Toolbar */}
      <rect x="270" y="0" width="530" height="40" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
      <rect x="282" y="10" width="120" height="20" rx="6" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="296" y="24" fontSize="8" fill="#94a3b8" fontFamily="system-ui">Search scenarios...</text>
      <rect x="416" y="10" width="54" height="20" rx="4" fill="#4f46e5" />
      <text x="426" y="24" fontSize="7" fill="#ffffff" fontWeight="600" fontFamily="system-ui">+ New</text>
      <rect x="478" y="10" width="54" height="20" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="485" y="24" fontSize="7" fill="#64748b" fontFamily="system-ui">Run All</text>
      <rect x="540" y="10" width="54" height="20" rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="547" y="24" fontSize="7" fill="#64748b" fontFamily="system-ui">Headless</text>
      {/* Test list */}
      {["Login flow", "Add to cart", "Checkout process", "Search products", "User profile"].map((label, idx) => {
        const dotColors = ["#22c55e", "#22c55e", "#f59e0b", "#22c55e", "#94a3b8"];
        return (
          <g key={label}>
            <rect x="270" y={40 + idx * 32} width="240" height="32" fill={idx === 0 ? "#f8fafc" : "#ffffff"} stroke="#e2e8f0" strokeWidth="0.5" />
            <circle cx="288" cy={56 + idx * 32} r="4" fill={dotColors[idx]} />
            <text x="298" y={59 + idx * 32} fontSize="8" fill="#334155" fontFamily="system-ui">{label}</text>
          </g>
        );
      })}
      {/* Gherkin editor */}
      <rect x="510" y="40" width="290" height="186" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
      <rect x="510" y="40" width="290" height="22" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="522" y="55" fontSize="8" fontWeight="600" fill="#4f46e5" fontFamily="system-ui">Gherkin</text>
      {["Feature: Login flow", "  Scenario: Valid login", "    Given I navigate to /login", '    When I enter "user@test.com"', "    And I click the login button", "    Then I see the dashboard"].map((line, idx) => (
        <text key={idx} x="520" y={76 + idx * 14} fontSize="7" fill={line.startsWith("  S") ? "#4f46e5" : "#475569"} fontFamily="monospace">{line}</text>
      ))}
      {/* Code panel */}
      <rect x="510" y="226" width="290" height="194" fill="#1e293b" />
      <rect x="510" y="226" width="290" height="22" fill="#0f172a" />
      <text x="522" y="241" fontSize="8" fontWeight="600" fill="#38bdf8" fontFamily="system-ui">Playwright</text>
      {[
        { t: "test('Valid login', async ({ page }) => {", c: "#e2e8f0" },
        { t: "  await page.goto('/login');", c: "#94a3b8" },
        { t: "  await page.fill('#email',", c: "#94a3b8" },
        { t: "    'user@test.com');", c: "#22c55e" },
        { t: "  await page.click('#login-btn');", c: "#94a3b8" },
        { t: "  await expect(page).toHaveURL(", c: "#94a3b8" },
        { t: "    /dashboard/);", c: "#22c55e" },
        { t: "});", c: "#e2e8f0" },
      ].map((line, idx) => (
        <text key={idx} x="520" y={258 + idx * 16} fontSize="7" fill={line.c} fontFamily="monospace">{line.t}</text>
      ))}
    </svg>
  );
}

/* ── Editor: BDD Gherkin left, Playwright right ── */
function EditorMockup() {
  return (
    <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="560" height="340" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      {/* Gherkin pane */}
      <rect x="0" y="0" width="270" height="340" rx="12" fill="#ffffff" />
      <rect x="0" y="0" width="270" height="32" rx="12" fill="#f8fafc" />
      <rect x="136" y="0" width="134" height="12" fill="#f8fafc" />
      <text x="16" y="21" fontSize="9" fontWeight="700" fill="#4f46e5" fontFamily="system-ui">Gherkin Editor</text>
      <rect x="196" y="8" width="60" height="16" rx="4" fill="#4f46e5" />
      <text x="206" y="20" fontSize="7" fill="#ffffff" fontWeight="600" fontFamily="system-ui">Generate</text>
      {[
        { t: "Feature: Shopping Cart", c: "#334155", fw: 600 },
        { t: "" },
        { t: "  Scenario: Add item to cart", c: "#4f46e5", fw: 600 },
        { t: "    Given I am on the product page" },
        { t: '    When I click "Add to Cart"' },
        { t: "    And I set quantity to 2" },
        { t: '    Then the cart badge shows "2"' },
        { t: "    And the total is updated" },
      ].map((line, idx) => (
        <text key={idx} x="16" y={52 + idx * 18} fontSize="8" fill={line.c || "#475569"} fontWeight={line.fw || 400} fontFamily="monospace">{line.t}</text>
      ))}
      {/* Divider */}
      <line x1="270" y1="0" x2="270" y2="340" stroke="#e2e8f0" strokeWidth="1" />
      {/* Playwright pane */}
      <rect x="270" y="0" width="290" height="340" fill="#1e293b" />
      <rect x="548" y="0" width="12" height="12" rx="12" fill="#1e293b" />
      <rect x="270" y="0" width="290" height="32" fill="#0f172a" />
      <rect x="548" y="0" width="12" height="32" fill="#0f172a" />
      <text x="286" y="21" fontSize="9" fontWeight="700" fill="#38bdf8" fontFamily="system-ui">Playwright TypeScript</text>
      {[
        { t: "import { test, expect } from", c: "#7dd3fc" },
        { t: "  '@playwright/test';", c: "#7dd3fc" },
        { t: "" },
        { t: "test('Add item to cart',", c: "#e2e8f0" },
        { t: "  async ({ page }) => {", c: "#e2e8f0" },
        { t: "  await page.goto('/products');", c: "#94a3b8" },
        { t: "  await page.click(", c: "#94a3b8" },
        { t: '    \'[data-testid="add-cart"]\');', c: "#22c55e" },
        { t: "  await page.fill(", c: "#94a3b8" },
        { t: "    '#quantity', '2');", c: "#22c55e" },
        { t: "  const badge = page.locator(", c: "#94a3b8" },
        { t: "    '.cart-badge');", c: "#22c55e" },
        { t: "  await expect(badge)", c: "#94a3b8" },
        { t: "    .toHaveText('2');", c: "#fbbf24" },
        { t: "});", c: "#e2e8f0" },
      ].map((line, idx) => (
        <text key={idx} x="286" y={52 + idx * 18} fontSize="7.5" fill={line.c || "transparent"} fontFamily="monospace">{line.t}</text>
      ))}
    </svg>
  );
}

/* ── Dashboard: cards + charts ── */
function DashboardMockup() {
  return (
    <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="560" height="340" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      {/* Summary cards */}
      {[
        { label: "Total Runs", val: "1,247", color: "#4f46e5" },
        { label: "Pass Rate", val: "94.2%", color: "#22c55e" },
        { label: "Failed", val: "73", color: "#ef4444" },
        { label: "Avg Duration", val: "2.4s", color: "#f59e0b" },
      ].map((card, idx) => (
        <g key={card.label}>
          <rect x={16 + idx * 134} y="16" width="122" height="60" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
          <circle cx={32 + idx * 134} cy="38" r="4" fill={card.color} />
          <text x={42 + idx * 134} y="35" fontSize="7" fill="#64748b" fontFamily="system-ui">{card.label}</text>
          <text x={42 + idx * 134} y="55" fontSize="14" fontWeight="700" fill="#0f172a" fontFamily="system-ui">{card.val}</text>
        </g>
      ))}
      {/* Trend chart */}
      <rect x="16" y="90" width="340" height="170" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="28" y="112" fontSize="9" fontWeight="600" fill="#334155" fontFamily="system-ui">Pass Rate Trend (30 days)</text>
      {[0, 1, 2, 3].map(idx => (
        <line key={idx} x1="28" y1={130 + idx * 30} x2="344" y2={130 + idx * 30} stroke="#f1f5f9" strokeWidth="0.5" />
      ))}
      <polyline points="28,210 60,205 90,195 120,200 150,185 180,178 210,182 240,170 270,160 300,155 330,148 344,145" stroke="#4f46e5" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="28,210 60,205 90,195 120,200 150,185 180,178 210,182 240,170 270,160 300,155 330,148 344,145 344,250 28,250" fill="#4f46e5" fillOpacity="0.06" />
      {/* Bar chart */}
      <rect x="370" y="90" width="174" height="170" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="382" y="112" fontSize="9" fontWeight="600" fill="#334155" fontFamily="system-ui">Slowest Tests</text>
      {[
        { label: "Checkout", w: 130, c: "#4f46e5" },
        { label: "Search", w: 95, c: "#818cf8" },
        { label: "Login", w: 60, c: "#a5b4fc" },
        { label: "Profile", w: 45, c: "#c7d2fe" },
      ].map((bar, idx) => (
        <g key={bar.label}>
          <text x="382" y={136 + idx * 30} fontSize="7" fill="#64748b" fontFamily="system-ui">{bar.label}</text>
          <rect x="382" y={140 + idx * 30} width={bar.w} height="10" rx="3" fill={bar.c} />
        </g>
      ))}
      {/* Flaky tests row */}
      <rect x="16" y="272" width="528" height="56" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="28" y="290" fontSize="9" fontWeight="600" fill="#334155" fontFamily="system-ui">Flaky Tests</text>
      <line x1="28" y1="296" x2="532" y2="296" stroke="#f1f5f9" strokeWidth="0.5" />
      <circle cx="34" cy="313" r="3" fill="#f59e0b" />
      <text x="44" y="316" fontSize="7" fill="#475569" fontFamily="system-ui">Search filters toggle</text>
      <text x="200" y="316" fontSize="7" fill="#94a3b8" fontFamily="system-ui">Flaky 4 of 10 runs</text>
      <text x="380" y="316" fontSize="7" fill="#f59e0b" fontWeight="600" fontFamily="system-ui">40% failure rate</text>
    </svg>
  );
}

/* ── Self-heal: modal with code diff ── */
function SelfHealMockup() {
  return (
    <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="560" height="340" rx="12" fill="#0f172a" fillOpacity="0.5" />
      {/* Modal */}
      <rect x="40" y="20" width="480" height="300" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="40" y="20" width="480" height="44" rx="12" fill="#f8fafc" />
      <rect x="40" y="52" width="480" height="12" fill="#f8fafc" />
      <circle cx="64" cy="42" r="12" fill="#fef2f2" />
      <text x="58" y="46" fontSize="12" fill="#ef4444" fontFamily="system-ui">!</text>
      <text x="84" y="39" fontSize="10" fontWeight="700" fill="#0f172a" fontFamily="system-ui">Test Failed: Login flow</text>
      <text x="84" y="53" fontSize="7.5" fill="#64748b" fontFamily="system-ui">AI analyzed the failure and suggests a fix</text>
      {/* Column headers */}
      <text x="56" y="84" fontSize="8" fontWeight="700" fill="#ef4444" fontFamily="system-ui">Original Code</text>
      <text x="300" y="84" fontSize="8" fontWeight="700" fill="#22c55e" fontFamily="system-ui">Suggested Fix</text>
      {/* Original code */}
      <rect x="52" y="92" width="218" height="160" rx="6" fill="#1e293b" />
      {[
        { t: "await page.fill(", c: "#94a3b8" },
        { t: "  '#email-input',", c: "#fca5a5", hl: true },
        { t: "  'user@test.com'", c: "#94a3b8" },
        { t: ");", c: "#94a3b8" },
        { t: "" },
        { t: "await page.click(", c: "#94a3b8" },
        { t: "  '#submit-btn');", c: "#fca5a5", hl: true },
      ].map((line, idx) => (
        <g key={idx}>
          {line.hl && <rect x="52" y={96 + idx * 18} width="218" height="18" fill="#7f1d1d" fillOpacity="0.3" />}
          <text x="64" y={108 + idx * 18} fontSize="7.5" fill={line.c || "transparent"} fontFamily="monospace">{line.t}</text>
        </g>
      ))}
      {/* Suggested code */}
      <rect x="290" y="92" width="218" height="160" rx="6" fill="#1e293b" />
      {[
        { t: "await page.fill(", c: "#94a3b8" },
        { t: '  \'[data-testid="email"]\',', c: "#86efac", hl: true },
        { t: "  'user@test.com'", c: "#94a3b8" },
        { t: ");", c: "#94a3b8" },
        { t: "" },
        { t: "await page.click(", c: "#94a3b8" },
        { t: '  \'[data-testid="login"]\');', c: "#86efac", hl: true },
      ].map((line, idx) => (
        <g key={idx}>
          {line.hl && <rect x="290" y={96 + idx * 18} width="218" height="18" fill="#14532d" fillOpacity="0.3" />}
          <text x="302" y={108 + idx * 18} fontSize="7.5" fill={line.c || "transparent"} fontFamily="monospace">{line.t}</text>
        </g>
      ))}
      {/* Explanation */}
      <rect x="52" y="260" width="456" height="20" rx="4" fill="#eff6ff" />
      <text x="64" y="274" fontSize="7" fill="#3b82f6" fontFamily="system-ui">Selector #email-input was removed. data-testid=&quot;email&quot; is the stable equivalent.</text>
      {/* Buttons */}
      <rect x="314" y="288" width="90" height="24" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="330" y="304" fontSize="8" fill="#475569" fontWeight="600" fontFamily="system-ui">Accept Fix</text>
      <rect x="412" y="288" width="100" height="24" rx="6" fill="#4f46e5" />
      <text x="421" y="304" fontSize="8" fill="#ffffff" fontWeight="600" fontFamily="system-ui">Accept &amp; Rerun</text>
    </svg>
  );
}

/* ── Documents: file list with analysis status ── */
function DocumentsMockup() {
  return (
    <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="560" height="340" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="0" y="0" width="560" height="44" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
      <rect x="0" y="32" width="560" height="12" fill="#ffffff" />
      <text x="20" y="28" fontSize="11" fontWeight="700" fill="#0f172a" fontFamily="system-ui">Documents</text>
      <rect x="438" y="12" width="104" height="22" rx="6" fill="#4f46e5" />
      <text x="456" y="27" fontSize="8" fill="#ffffff" fontWeight="600" fontFamily="system-ui">Upload Document</text>
      {[
        { name: "requirements-v2.pdf", type: "PDF", status: "Analyzed", stories: "12 stories", sc: "#22c55e" },
        { name: "sprint-14-specs.docx", type: "Word", status: "Analyzed", stories: "8 stories", sc: "#22c55e" },
        { name: "api-endpoints.md", type: "MD", status: "Analyzing...", stories: "--", sc: "#f59e0b" },
        { name: "acceptance-criteria.pdf", type: "PDF", status: "Queued", stories: "--", sc: "#94a3b8" },
      ].map((doc, idx) => {
        const iconBg = doc.type === "PDF" ? "#fef2f2" : doc.type === "Word" ? "#eff6ff" : "#f0fdf4";
        const iconBorder = doc.type === "PDF" ? "#fecaca" : doc.type === "Word" ? "#bfdbfe" : "#bbf7d0";
        const iconColor = doc.type === "PDF" ? "#ef4444" : doc.type === "Word" ? "#3b82f6" : "#22c55e";
        return (
          <g key={doc.name}>
            <rect x="16" y={56 + idx * 48} width="528" height="42" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
            <rect x="28" y={64 + idx * 48} width="22" height="26" rx="3" fill={iconBg} stroke={iconBorder} strokeWidth="0.5" />
            <text x="33" y={81 + idx * 48} fontSize="5" fontWeight="700" fill={iconColor} fontFamily="system-ui">{doc.type}</text>
            <text x="60" y={76 + idx * 48} fontSize="8.5" fontWeight="600" fill="#0f172a" fontFamily="system-ui">{doc.name}</text>
            <text x="60" y={89 + idx * 48} fontSize="7" fill="#94a3b8" fontFamily="system-ui">{doc.type} document</text>
            <circle cx="380" cy={77 + idx * 48} r="3" fill={doc.sc} />
            <text x="388" y={80 + idx * 48} fontSize="7.5" fill="#475569" fontFamily="system-ui">{doc.status}</text>
            <text x="480" y={80 + idx * 48} fontSize="8" fontWeight="600" fill={doc.stories === "--" ? "#94a3b8" : "#4f46e5"} fontFamily="system-ui">{doc.stories}</text>
          </g>
        );
      })}
      {/* Extracted scenarios preview */}
      <rect x="16" y="252" width="528" height="74" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="28" y="272" fontSize="9" fontWeight="600" fill="#334155" fontFamily="system-ui">Extracted Scenarios from requirements-v2.pdf</text>
      <line x1="28" y1="278" x2="532" y2="278" stroke="#f1f5f9" strokeWidth="0.5" />
      {["Scenario: User can reset password via email", "Scenario: Admin can bulk-assign roles"].map((label, idx) => (
        <g key={label}>
          <circle cx="34" cy={292 + idx * 14} r="3" fill="#4f46e5" />
          <text x="44" y={295 + idx * 14} fontSize="7.5" fill="#475569" fontFamily="system-ui">{label}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── API testing: Gherkin left, Playwright right ── */
function ApiTestingMockup() {
  return (
    <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="560" height="340" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="0" y="0" width="560" height="38" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
      <rect x="0" y="26" width="560" height="12" fill="#ffffff" />
      <rect x="16" y="8" width="56" height="18" rx="4" fill="#dbeafe" />
      <text x="26" y="21" fontSize="7.5" fontWeight="700" fill="#2563eb" fontFamily="system-ui">API Test</text>
      <text x="84" y="22" fontSize="9" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Create User Endpoint</text>
      <circle cx="520" cy="19" r="6" fill="#22c55e" />
      <text x="530" y="22" fontSize="7" fill="#22c55e" fontWeight="600" fontFamily="system-ui">Pass</text>
      {/* Gherkin pane */}
      <rect x="16" y="46" width="260" height="280" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="28" y="66" fontSize="9" fontWeight="700" fill="#4f46e5" fontFamily="system-ui">Gherkin</text>
      {[
        { t: "Feature: User API", c: "#334155", fw: 600 },
        { t: "" },
        { t: "Scenario: Create new user", c: "#4f46e5", fw: 600 },
        { t: "  Given the API is at" },
        { t: "    {{base_url}}/api/users", c: "#0891b2" },
        { t: "  When I send a POST with:" },
        { t: '    | name  | "John Doe"     |' },
        { t: '    | email | "john@test.com"|' },
        { t: '    | role  | "tester"       |' },
        { t: "  Then status is 201" },
        { t: '  And body contains "id"' },
        { t: "  And name equals" },
        { t: '    "John Doe"', c: "#0891b2" },
      ].map((line, idx) => (
        <text key={idx} x="28" y={84 + idx * 16} fontSize="7.5" fill={line.c || "#475569"} fontWeight={line.fw || 400} fontFamily="monospace">{line.t}</text>
      ))}
      {/* Playwright pane */}
      <rect x="284" y="46" width="260" height="280" rx="8" fill="#1e293b" />
      <text x="296" y="66" fontSize="9" fontWeight="700" fill="#38bdf8" fontFamily="system-ui">Playwright</text>
      {[
        { t: "test('Create new user',", c: "#e2e8f0" },
        { t: "  async ({ request }) => {", c: "#e2e8f0" },
        { t: "" },
        { t: "  const res = await", c: "#94a3b8" },
        { t: "    request.post(", c: "#94a3b8" },
        { t: "    `${BASE_URL}/api/users`,", c: "#7dd3fc" },
        { t: "    { data: {", c: "#94a3b8" },
        { t: '      name: "John Doe",', c: "#22c55e" },
        { t: '      email: "john@test.com",', c: "#22c55e" },
        { t: '      role: "tester"', c: "#22c55e" },
        { t: "    }});", c: "#94a3b8" },
        { t: "" },
        { t: "  expect(res.status())", c: "#94a3b8" },
        { t: "    .toBe(201);", c: "#fbbf24" },
        { t: "  const body = await", c: "#94a3b8" },
        { t: "    res.json();", c: "#94a3b8" },
        { t: "  expect(body.name)", c: "#94a3b8" },
        { t: '    .toBe("John Doe");', c: "#fbbf24" },
      ].map((line, idx) => (
        <text key={idx} x="296" y={84 + idx * 14} fontSize="7" fill={line.c || "transparent"} fontFamily="monospace">{line.t}</text>
      ))}
    </svg>
  );
}

/* ── SVG mockup renderer ── */
const mockupComponents = {
  hero: HeroMockup,
  editor: EditorMockup,
  dashboard: DashboardMockup,
  "self-heal": SelfHealMockup,
  documents: DocumentsMockup,
  "api-testing": ApiTestingMockup,
};

function ScreenshotPlaceholder({ imageKey, alt, className = "" }) {
  const Comp = mockupComponents[imageKey];
  if (!Comp) {
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
    <div className={`rounded-xl border border-slate-200 shadow-lg overflow-hidden ${className}`} role="img" aria-label={alt}>
      <Comp />
    </div>
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

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.id = "faq-schema";
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("faq-schema");
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      <SEO
        title="Our Tooling"
        description="Internal tooling we use to deliver faster results for our clients. Describe what you want to test, generate test code, run it, and review results in one place."
        path="platform"
      />
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="hero-glow-light -z-10" aria-hidden />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 mb-5">
              Our Tooling
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              The workbench behind
              <br className="hidden sm:block" />
              <span className="text-indigo-600">our delivery</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
              We built internal tooling to speed up the repetitive parts of test automation. It helps us deliver faster results for our clients. It is not a magic solution. It is a practical instrument that works best in the hands of experienced engineers.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <button
                onClick={onBook}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-base font-semibold text-white shadow-md active:scale-95 transition"
              >
                Book a Consultation
              </button>
              <a
                href={PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
              >
                Try it yourself
              </a>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-14"
          >
            <ScreenshotPlaceholder
              imageKey="hero"
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
              What the platform <span className="text-indigo-600">does best</span>
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Automates the repeatable tests so your team can focus on what matters.
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
                    imageKey={f.imageKey}
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
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl">
              {["Playwright", "Xray / Jira", "TestRail", "Confluence", "GitHub", "GitLab", "CI/CD", "OpenAI", "Ollama"].map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700"
                >
                  {name}
                </span>
              ))}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
              {[
                { label: "AES-256", sub: "Encryption" },
                { label: "JWT", sub: "HTTP-only cookies" },
                { label: "BYOAI", sub: "Your keys, your data" },
                { label: "SSRF", sub: "Protection" },
                { label: "bcrypt", sub: "Password hashing" },
                { label: "RBAC", sub: "Role-based access" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center"
                >
                  <Shield className="h-5 w-5 text-emerald-600 mb-2" />
                  <span className="text-sm font-bold text-slate-900">{item.label}</span>
                  <span className="text-xs text-slate-500 mt-0.5">{item.sub}</span>
                </div>
              ))}
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
              The platform handles regression and repetitive tests so your team can focus on what requires human judgement: exploratory testing, edge cases, and user experience.
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
              See if it fits your workflow
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Try the platform free and generate your first test in minutes.
              Not sure if automation is right for your case? Book a call and we'll help you decide.
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
