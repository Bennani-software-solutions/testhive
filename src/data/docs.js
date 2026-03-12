import { Zap, Code, Settings, BarChart3, Plug, Shield } from "lucide-react";

/**
 * Each article has a slug (URL), title, description, reading time,
 * and `content` — an array of { heading, text } blocks rendered on the article page.
 * Plain language is supported but Gherkin is recommended as a scripting language
 * for unambiguous communication with the AI agent.
 */

const docs = [
  {
    title: "Getting Started",
    icon: Zap,
    articles: [
      {
        slug: "quick-start",
        title: "Quick Start Guide",
        desc: "Get up and running with TestHive Platform in under 5 minutes.",
        time: "3 min read",
        content: [
          {
            heading: "1. Create your account",
            text: "Go to platform.testhive.ma and register with your email and a password (minimum 8 characters). You'll be logged in immediately with a JWT session stored in a secure HTTP-only cookie.",
          },
          {
            heading: "2. Create a project",
            text: "Click \"New Project\" and provide a name, a URL-friendly slug (lowercase, alphanumeric + dashes), and your application's base URL. The base URL is injected into every generated test so Playwright knows where to navigate.",
          },
          {
            heading: "3. Write your first scenario",
            text: "In the scenario editor, write a test in plain language or use BDD/Gherkin syntax. We recommend Gherkin (Given/When/Then) because it communicates your requirements unambiguously to the AI agent. Example:\n\nFeature: Login\n  Scenario: Successful login\n    Given I navigate to the login page\n    When I fill in \"email\" with \"user@example.com\"\n    And I fill in \"password\" with \"secret\"\n    And I click the \"Sign in\" button\n    Then I should see the dashboard",
          },
          {
            heading: "4. Generate Playwright code",
            text: "Click \"Generate\" and the AI transforms your scenario into production-ready Playwright TypeScript code. The AI uses your project context — base URL, description, and testing knowledge — to produce accurate, ready-to-run tests with proper selectors and assertions.",
          },
          {
            heading: "5. Execute and review",
            text: "Click \"Execute\" to run your test. Choose headless or headed mode, select a browser (Chromium, Firefox, or WebKit), and watch results stream in real-time via server-sent events. Review pass/fail status, step-by-step results, and video recordings.",
          },
        ],
      },
      {
        slug: "first-test",
        title: "Creating Your First Test",
        desc: "Write a BDD scenario and generate automated Playwright test code.",
        time: "5 min read",
        content: [
          {
            heading: "Plain language vs. Gherkin",
            text: "You can describe tests in plain language — the AI understands natural instructions. However, we strongly recommend using Gherkin syntax (Given/When/Then) as a scripting language. Gherkin removes ambiguity: each step maps to a single action, making the AI agent's output more predictable and maintainable.",
          },
          {
            heading: "Writing effective scenarios",
            text: "Each scenario should test one specific flow. Use descriptive step names that clearly state what happens. You can include CSS selectors, XPath expressions, or data-testid attributes directly in your steps for precision:\n\nGiven I navigate to \"/dashboard\"\nWhen I click the element with data-testid \"create-btn\"\nThen the element \"h1\" should contain \"New Project\"",
          },
          {
            heading: "How AI generates code",
            text: "The AI receives your Gherkin scenario plus your project context (base URL, description, testing context with known selectors). It generates Playwright TypeScript using this selector priority:\n\n1. Explicit selectors from your Gherkin steps\n2. Semantic selectors: getByRole, getByLabel, getByPlaceholder, getByText\n3. data-testid selectors from your project's testing knowledge\n4. CSS selectors as a last resort\n\nThe generated code enforces best practices: page.waitForLoadState('networkidle'), proper expect() assertions, and clean async/await patterns.",
          },
          {
            heading: "Using parameters",
            text: "For dynamic data, use {{parameterName}} syntax in your scenarios. Parameters are stored encrypted (AES-256-CBC) and substituted at runtime:\n\nWhen I fill in \"email\" with \"{{testEmail}}\"\nAnd I fill in \"password\" with \"{{testPassword}}\"\n\nDefine parameters in Project Settings > Parameters. They can be global (shared across projects) or project-specific.",
          },
        ],
      },
      {
        slug: "dashboard",
        title: "Understanding the Dashboard",
        desc: "Navigate the analytics dashboard to monitor your test health.",
        time: "4 min read",
        content: [
          {
            heading: "Overview",
            text: "The dashboard gives you a real-time view of your project's test health. It aggregates data from all test runs and presents trends, failures, and performance metrics in interactive charts.",
          },
          {
            heading: "Pass rate trends",
            text: "View pass rate over 7, 14, 21, or 30 days. The trend chart shows how your test suite's reliability changes over time. A sudden drop indicates a regression that needs attention.",
          },
          {
            heading: "Flaky test detection",
            text: "Tests that sometimes pass and sometimes fail are flagged as flaky. The platform detects this automatically by comparing results across retry attempts. Flaky tests appear in a dedicated table with their stability percentage.",
          },
          {
            heading: "Slowest tests & recent failures",
            text: "Identify bottlenecks with the slowest tests panel — these are candidates for optimization. Recent failures show error snippets so you can quickly diagnose issues without opening individual test runs.",
          },
        ],
      },
      {
        slug: "teams",
        title: "Inviting Team Members",
        desc: "Set up teams and invite collaborators with role-based access.",
        time: "2 min read",
        content: [
          {
            heading: "Creating a team",
            text: "Navigate to Teams and create a new team with a name and slug. Teams are the collaboration unit — all projects owned by a team are accessible to all team members.",
          },
          {
            heading: "Inviting members",
            text: "Invite team members by email. They receive a token-based invitation link. Once accepted, they get access to all team-owned projects automatically.",
          },
          {
            heading: "Roles",
            text: "Two roles are available: member (can view and execute tests) and admin (can manage team settings, projects, and members). Project ownership determines who can modify project-level settings.",
          },
        ],
      },
    ],
  },
  {
    title: "Test Creation",
    icon: Code,
    articles: [
      {
        slug: "bdd-scenarios",
        title: "Writing BDD Scenarios",
        desc: "Use Gherkin as a scripting language for precise AI communication.",
        time: "6 min read",
        content: [
          {
            heading: "Why Gherkin?",
            text: "While the platform accepts plain language, we recommend Gherkin (Given/When/Then) as your scripting language. Gherkin provides an unambiguous structure that the AI agent can interpret consistently. Each step maps to exactly one action, reducing hallucination and improving test reliability.",
          },
          {
            heading: "Gherkin syntax",
            text: "A Gherkin scenario consists of:\n\nFeature: [Feature name]\n  Scenario: [Scenario name]\n    Given [precondition]\n    When [action]\n    Then [expected result]\n    And [additional step]\n\nEach keyword has a specific meaning:\n- Given: set up the initial state\n- When: perform an action\n- Then: verify the outcome\n- And/But: continue the previous keyword",
          },
          {
            heading: "Selector hints",
            text: "For precision, include selector information directly in your steps:\n\nWhen I click the button with data-testid \"submit-form\"\nWhen I fill in the input[name=\"email\"] with \"test@example.com\"\nThen the element \".success-message\" should be visible\n\nThe AI will use these selectors directly instead of guessing.",
          },
          {
            heading: "Dynamic data with parameters",
            text: "Reference encrypted parameters with double curly braces:\n\nWhen I fill in \"username\" with \"{{testUser}}\"\nAnd I fill in \"password\" with \"{{testPassword}}\"\n\nParameters are substituted at runtime. Define them in Project Settings > Parameters. Values are stored encrypted with AES-256-CBC.",
          },
        ],
      },
      {
        slug: "document-analysis",
        title: "Document Analysis",
        desc: "Upload requirements docs and let AI extract test scenarios.",
        time: "4 min read",
        content: [
          {
            heading: "Supported formats",
            text: "Upload PDF, DOCX, DOC, TXT, or Markdown files up to 10 MB. The platform extracts the text content and processes the first 15,000 characters for AI analysis (to stay within token budgets).",
          },
          {
            heading: "Extracting scenarios",
            text: "After uploading a document, click \"Extract Scenarios\" to let the AI analyze the requirements and generate BDD/Gherkin test scenarios. These are created as Scenario records in your project automatically.",
          },
          {
            heading: "Generating user stories",
            text: "Alternatively, click \"Generate User Stories\" to extract structured requirements as user stories with titles and descriptions. You can then link these stories to scenarios for full traceability.",
          },
          {
            heading: "Async processing",
            text: "Document analysis runs asynchronously. The document status changes from \"uploaded\" to \"processing\" to \"completed\" (or \"error\"). You can continue working while the AI processes your document.",
          },
        ],
      },
      {
        slug: "parameters",
        title: "Parameterized Tests",
        desc: "Use encrypted parameters for dynamic, reusable test data.",
        time: "5 min read",
        content: [
          {
            heading: "What are parameters?",
            text: "Parameters are key-value pairs that you can reference in your test scenarios using {{key}} syntax. They allow you to separate test data from test logic, making scenarios reusable across environments.",
          },
          {
            heading: "Encryption",
            text: "All parameter values are encrypted with AES-256-CBC before storage. The encryption uses your instance's SECRET_KEY (a base64-encoded 32-byte key). Values are only decrypted at runtime during test execution.",
          },
          {
            heading: "Global vs. project parameters",
            text: "Global parameters (no project specified) are available across all your projects. Project-specific parameters override globals if they share the same key. This lets you use different credentials per environment.",
          },
          {
            heading: "Substitution",
            text: "During test execution, {{paramName}} placeholders in the generated Playwright code are replaced with the actual decrypted values before the test file is written to disk. Special characters in values are properly escaped to prevent injection.",
          },
        ],
      },
      {
        slug: "api-testing",
        title: "API Testing with Gherkin",
        desc: "Test REST APIs using the same BDD/Gherkin workflow — no browser required.",
        time: "5 min read",
        content: [
          {
            heading: "How it works",
            text: "Write your API tests as Gherkin scenarios. The AI auto-detects API patterns (endpoints, HTTP methods, status codes) and generates Playwright tests using the request fixture instead of a browser. No configuration change needed — just write your scenario.",
          },
          {
            heading: "Example: GET request",
            text: "Feature: User API\n  Scenario: Get user by ID\n    Given the API base URL is {{baseUrl}}\n    When I send a GET request to \"/api/users/1\"\n    Then the response status should be 200\n    And the response body should contain \"email\"",
          },
          {
            heading: "Example: POST with authentication",
            text: "Scenario: Create a new item\n    Given I authenticate with bearer token {{apiKey}}\n    When I send a POST request to \"/api/items\" with body:\n      | name  | Test Item   |\n      | price | 29.99       |\n    Then the response status should be 201\n    And the response body \"id\" should not be empty",
          },
          {
            heading: "Authentication & security",
            text: "Store API keys, bearer tokens, and auth credentials as encrypted parameters (AES-256-CBC). Reference them in your Gherkin steps with {{paramName}} syntax. Values never appear in generated code — they are substituted at runtime only.",
          },
          {
            heading: "Hybrid tests (UI + API)",
            text: "You can mix UI interactions and API calls in the same scenario. For example, create test data via API, then verify it appears in the UI. The AI uses both { page, request } fixtures when it detects a hybrid scenario.",
          },
        ],
      },
      {
        slug: "tags-organization",
        title: "Tags & Organization",
        desc: "Organize scenarios with folders, tags, and bulk operations.",
        time: "3 min read",
        content: [
          {
            heading: "Folder hierarchy",
            text: "Create nested folders to organize scenarios by feature, module, or sprint. Folders are self-referential — each folder can contain subfolders. When you delete a folder, child scenarios are moved to the parent.",
          },
          {
            heading: "Tags with custom colors",
            text: "Create tags with custom colors to categorize scenarios (e.g., \"smoke\", \"regression\", \"critical\"). Tags are scoped per project with a unique constraint on name + projectId.",
          },
          {
            heading: "Bulk operations",
            text: "Select multiple scenarios to bulk-delete or bulk-tag them. This is useful for organizing large test suites or cleaning up after imports.",
          },
        ],
      },
    ],
  },
  {
    title: "Execution & CI/CD",
    icon: Settings,
    articles: [
      {
        slug: "running-tests",
        title: "Running Tests",
        desc: "Execute tests with configurable browsers, retries, and parallelism.",
        time: "5 min read",
        content: [
          {
            heading: "Creating a test run",
            text: "Create a draft test run with a title, then add scenarios to it. You can add scenarios individually or in bulk. Reorder them by drag-and-drop.",
          },
          {
            heading: "Execution options",
            text: "Configure your run:\n\n- Browser: Chromium (default), Firefox, or WebKit\n- Mode: Headless (fast, no UI) or headed (see the browser)\n- Retries: 0 to 5 retry attempts for failed tests\n- Workers: Number of parallel browser instances\n- Version: Tag the software version under test\n- Environment: Tag the environment (staging, production)",
          },
          {
            heading: "Real-time monitoring",
            text: "During execution, results stream in via Server-Sent Events (SSE). You see each test's status as it completes — no need to wait for the entire run to finish. Video recordings are captured for each test.",
          },
          {
            heading: "Retention policy",
            text: "Configure maxTestRuns per project in Project Settings. When the limit is reached, the oldest completed runs are automatically deleted. Draft runs don't count toward the limit.",
          },
        ],
      },
      {
        slug: "cicd-integration",
        title: "CI/CD Integration",
        desc: "Trigger test runs from GitHub Actions, GitLab CI, or any pipeline.",
        time: "8 min read",
        content: [
          {
            heading: "Webhook trigger",
            text: "Send a POST request to /api/webhook/trigger with your API key:\n\ncurl -X POST https://platform.testhive.ma/api/webhook/trigger \\\n  -H \"Authorization: Bearer ftk_your_key_here\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"projectSlug\": \"my-app\",\n    \"scenarioIds\": [\"cuid1\", \"cuid2\"],\n    \"headless\": true,\n    \"browser\": \"chromium\"\n  }'",
          },
          {
            heading: "Filtering scenarios",
            text: "You can select scenarios by:\n- scenarioIds: specific scenario CUIDs\n- tags: run all scenarios with given tag names\n- folderId: run all scenarios in a folder\n\nAlso set: title, version, environment, retries, and callbackUrl.",
          },
          {
            heading: "Polling for results",
            text: "After triggering, you get a runId. Poll for status:\n\nGET /api/webhook/status/:runId\n\nOr use long-polling (blocks until complete):\n\nGET /api/webhook/status/:runId/wait?timeout=60000\n\nThe response includes pass/fail counts and overall status.",
          },
          {
            heading: "Callback URL",
            text: "Provide a callbackUrl and TestHive will POST the results to your endpoint when the run completes. SSRF protection is built in: only HTTPS URLs to public IP addresses are allowed. Private IPs, localhost, and cloud metadata endpoints are blocked.",
          },
          {
            heading: "Security",
            text: "Webhook triggers are rate-limited to 10 per 15 minutes per user. API keys are SHA-256 hashed in the database. Provide your key via the Authorization header: Bearer ftk_xxx.",
          },
        ],
      },
      {
        slug: "scheduled-runs",
        title: "Scheduled Runs",
        desc: "Automate test execution with cron-based scheduling.",
        time: "4 min read",
        content: [
          {
            heading: "Creating a schedule",
            text: "Go to Schedules and create a new schedule with a title, a cron expression, and the scenarios to include. Schedules run in headless mode by default.",
          },
          {
            heading: "Cron expressions",
            text: "Standard 5-field cron format:\n\n- \"0 2 * * *\" — every day at 2:00 AM\n- \"0 */4 * * *\" — every 4 hours\n- \"0 9 * * 1-5\" — weekdays at 9:00 AM\n- \"*/30 * * * *\" — every 30 minutes\n\nThe system validates your expression and calculates the next run time.",
          },
          {
            heading: "Manual trigger",
            text: "You can manually trigger any schedule at any time using the \"Trigger Now\" button. This creates a test run with the prefix [Scheduled] in the title.",
          },
        ],
      },
      {
        slug: "api-keys",
        title: "API Keys",
        desc: "Generate and manage API keys for CI/CD authentication.",
        time: "3 min read",
        content: [
          {
            heading: "Creating a key",
            text: "Navigate to Settings > API Keys and click \"Create Key\". Provide a name and optional expiration in days. The raw key (ftk_<32-byte-hex>) is shown only once — copy it immediately.",
          },
          {
            heading: "Security model",
            text: "Keys are SHA-256 hashed before storage. Only the first 12 characters (prefix) are stored in plaintext for identification. TestHive never stores the raw key after creation.",
          },
          {
            heading: "Usage",
            text: "Include the key in the Authorization header:\n\nAuthorization: Bearer ftk_a1b2c3d4e5f6...\n\nThe key authenticates webhook triggers and API calls. Each key tracks lastUsedAt for monitoring.",
          },
          {
            heading: "Revoking keys",
            text: "Revoke a key at any time from the API Keys page. Revoked keys immediately stop working. Create a new key before revoking the old one to avoid downtime.",
          },
        ],
      },
    ],
  },
  {
    title: "AI Features",
    icon: BarChart3,
    articles: [
      {
        slug: "self-healing",
        title: "Self-Healing Tests",
        desc: "AI analyzes failures and proposes minimal fixes automatically.",
        time: "5 min read",
        content: [
          {
            heading: "How it works",
            text: "When a test fails, click \"Self-Heal\" to trigger AI analysis. The system sends the error logs (up to 5,000 characters), the current Playwright code, and the original Gherkin scenario to the AI.",
          },
          {
            heading: "What the AI fixes",
            text: "Most failures are caused by selector changes — a button moved, a class name changed, an element was restructured. The AI identifies the broken selector and proposes the minimal code change needed. It preserves all {{parameter}} placeholders exactly.",
          },
          {
            heading: "Review and accept",
            text: "The AI returns an explanation (1-3 sentences) and the complete fixed code. Review the changes and accept with one click. The scenario's Playwright code is updated immediately.",
          },
        ],
      },
      {
        slug: "test-generation",
        title: "Smart Test Generation",
        desc: "AI uses your project context to generate accurate Playwright code.",
        time: "6 min read",
        content: [
          {
            heading: "Project context",
            text: "The AI doesn't generate code in a vacuum. It receives:\n\n- Your project's base URL (so it knows where to navigate)\n- Your project description (business context)\n- Your testing context / app knowledge (known selectors, page structure, data-testid mappings)\n\nThis context makes the generated code significantly more accurate.",
          },
          {
            heading: "Safety guardrails",
            text: "The AI is instructed to only output raw TypeScript — no markdown, no explanations. Dangerous patterns are automatically blocked: eval(), child_process, fs module access, Function constructor, and execSync are all forbidden in generated code.",
          },
          {
            heading: "Best practices enforced",
            text: "Generated code follows Playwright best practices:\n\n- Uses page.waitForLoadState('networkidle') for stable navigation\n- Proper expect() assertions for verification\n- Clean async/await patterns\n- Semantic selectors prioritized over CSS\n- Each test is independent and self-contained",
          },
        ],
      },
      {
        slug: "bring-your-own-ai",
        title: "Bring Your Own AI",
        desc: "Configure custom LLM providers per project.",
        time: "4 min read",
        content: [
          {
            heading: "Supported providers",
            text: "Configure per-project AI providers:\n\n- OpenAI: Standard API with your own API key\n- Azure OpenAI: Custom Azure endpoint with deployment-specific base URL\n- Ollama: Local models (e.g., qwen2.5:7b) for air-gapped environments\n- Custom: Any OpenAI-compatible API endpoint",
          },
          {
            heading: "Purpose separation",
            text: "Set separate providers for different tasks:\n\n- codegen: Used for Gherkin → Playwright code generation\n- analysis: Used for document extraction and user story generation\n- both: Single provider for all tasks\n\nThis lets you use a powerful model for code generation and a cheaper one for analysis.",
          },
          {
            heading: "Key security",
            text: "API keys are encrypted with AES-256-CBC before storage. Only a masked prefix is displayed in the UI. The LLM client caches instances per project and purpose, and automatically invalidates the cache when providers are updated.",
          },
        ],
      },
      {
        slug: "document-driven-testing",
        title: "Document-Driven Testing",
        desc: "Go from requirements documents to test scenarios automatically.",
        time: "5 min read",
        content: [
          {
            heading: "Upload and extract",
            text: "Upload a requirements document (PDF, DOCX, TXT, or Markdown). The platform extracts text content and processes the first 15,000 characters to stay within the AI's token budget.",
          },
          {
            heading: "Scenario generation",
            text: "The AI analyzes the document and generates structured BDD/Gherkin scenarios. Each scenario is created as a record in your project, ready to generate Playwright code.",
          },
          {
            heading: "User story extraction",
            text: "Alternatively, extract user stories from documents. Stories include a title and description and are created with draft status. Link them to scenarios later for full traceability from requirement to test result.",
          },
          {
            heading: "Traceability chain",
            text: "The full chain is: Document → User Story → Scenario → Test Result. Navigate the Traceability page to see this hierarchy as an interactive tree view.",
          },
        ],
      },
    ],
  },
  {
    title: "Integrations",
    icon: Plug,
    articles: [
      {
        slug: "xray-integration",
        title: "Xray Integration",
        desc: "Push test execution results to Xray Cloud for Jira.",
        time: "5 min read",
        content: [
          {
            heading: "Configuration",
            text: "Navigate to Integrations and add Xray with:\n\n- Base URL: Your Xray Cloud API endpoint\n- API Key: Your Xray authentication token\n- Project Key: The Jira project key (e.g., \"QA\")",
          },
          {
            heading: "How it works",
            text: "After a test run completes, TestHive pushes results to Xray's /rest/api/2/import/execution endpoint. Each test result is mapped to a pass/fail status with duration and comments.",
          },
          {
            heading: "What gets pushed",
            text: "A test execution is created in Xray with:\n- Summary: The test run title\n- Project: Your configured project key\n- Individual test statuses: PASSED or FAILED\n- Duration per test\n- Executed by: \"TestHive\"",
          },
        ],
      },
      {
        slug: "testrail-integration",
        title: "TestRail Integration",
        desc: "Sync test runs and results with TestRail.",
        time: "5 min read",
        content: [
          {
            heading: "Configuration",
            text: "Add TestRail integration with:\n\n- Base URL: Your TestRail instance URL\n- User: Your TestRail email\n- API Key: Your TestRail API key\n- Project ID: The numeric project ID in TestRail",
          },
          {
            heading: "Push workflow",
            text: "TestHive creates a test run in TestRail, pushes individual results (status 1 for pass, 5 for fail with elapsed time), and auto-closes the run when all results are submitted.",
          },
        ],
      },
      {
        slug: "confluence-integration",
        title: "Confluence Integration",
        desc: "Import Confluence pages as source documents for scenario extraction.",
        time: "4 min read",
        content: [
          {
            heading: "Configuration",
            text: "Connect Confluence with:\n\n- Base URL: Your Confluence instance URL\n- Email: Your Atlassian email\n- API Key: An Atlassian API token\n- Space Key (optional): Filter to a specific space",
          },
          {
            heading: "Importing pages",
            text: "Browse available spaces and pages directly from the TestHive UI. Select a page to import it as a document. The HTML content is converted to plain text for AI analysis.",
          },
          {
            heading: "From page to tests",
            text: "Once imported, use Document Analysis to extract BDD scenarios or user stories from the Confluence content. This creates a direct link from your documentation to your test suite.",
          },
        ],
      },
      {
        slug: "webhooks-api",
        title: "Webhooks & REST API",
        desc: "Integrate TestHive into your workflow with the API and webhooks.",
        time: "7 min read",
        content: [
          {
            heading: "Authentication",
            text: "Two auth methods:\n\n1. JWT cookies: For browser-based sessions (auto-managed)\n2. API keys: For CI/CD and programmatic access\n   Authorization: Bearer ftk_your_key_here",
          },
          {
            heading: "Webhook trigger",
            text: "POST /api/webhook/trigger\n\nBody: { projectSlug, scenarioIds?, tags?, folderId?, title?, version?, environment?, headless?, browser?, callbackUrl?, retries? }\n\nReturns: { runId } — use this to poll or long-poll for results.",
          },
          {
            heading: "SSRF protection",
            text: "Callback URLs are validated for security:\n- Must use HTTPS\n- Cannot target localhost, private IPs, or cloud metadata endpoints (169.254.169.254)\n- DNS resolution is checked to prevent DNS rebinding\n- Validated both before execution and before sending the callback",
          },
          {
            heading: "Rate limits",
            text: "- Webhook trigger: 10 requests per 15 minutes per user\n- Webhook wait (long-poll): 5 requests per 5 minutes per user\n- Authentication: 20 login attempts per 15 minutes\n- Refresh token: 10 refreshes per 15 minutes",
          },
        ],
      },
    ],
  },
  {
    title: "Security & Administration",
    icon: Shield,
    articles: [
      {
        slug: "authentication",
        title: "Authentication",
        desc: "JWT tokens, refresh flow, and rate limiting.",
        time: "5 min read",
        content: [
          {
            heading: "Token lifecycle",
            text: "On login, you receive:\n- Access token: 1-hour expiry, stored in HTTP-only cookie\n- Refresh token: 7-day expiry, stored in HTTP-only cookie\n\nBoth cookies are secure (HTTPS in production), HTTP-only (no JavaScript access), and sameSite: lax.",
          },
          {
            heading: "Auto-refresh",
            text: "When an access token expires, the frontend automatically calls POST /auth/refresh. The old refresh token is invalidated (JTI rotation) and a new token pair is issued. This happens transparently — you stay logged in.",
          },
          {
            heading: "Rate limiting",
            text: "Login: 20 attempts per 15 minutes\nRefresh: 10 per 15 minutes\nForgot password: 5 per 15 minutes\n\nExceeding limits returns a 429 Too Many Requests response.",
          },
          {
            heading: "Password reset",
            text: "Request a password reset via email. A token is generated with a 1-hour expiry. Click the link in the email to set a new password (minimum 8 characters). The token is invalidated after use.",
          },
        ],
      },
      {
        slug: "access-control",
        title: "Role-Based Access Control",
        desc: "Team roles, project ownership, and API key isolation.",
        time: "4 min read",
        content: [
          {
            heading: "Team roles",
            text: "Teams have two roles:\n- Member: Can access team projects, create and run tests\n- Admin: Can manage team settings, invite/remove members, and manage projects\n\nProject ownership is separate — the owner can modify project settings regardless of team role.",
          },
          {
            heading: "API key isolation",
            text: "API keys are scoped per user. Each team member creates their own keys. This provides audit trail capability — you can see which user triggered which test run via their API key.",
          },
        ],
      },
      {
        slug: "data-retention",
        title: "Data Retention",
        desc: "Configure how many test runs to keep per project.",
        time: "3 min read",
        content: [
          {
            heading: "Retention policy",
            text: "Set maxTestRuns per project in Project Settings. When the limit is reached, the oldest completed test runs (and their results, step results, and videos) are automatically deleted during the next execution.",
          },
          {
            heading: "What counts",
            text: "Only completed runs count toward the retention limit. Draft runs (not yet executed) are excluded. This means you can prepare multiple runs without worrying about triggering cleanup.",
          },
        ],
      },
      {
        slug: "encryption",
        title: "Encryption & Security",
        desc: "AES-256-CBC encryption, SSRF protection, and secure storage.",
        time: "4 min read",
        content: [
          {
            heading: "Encryption at rest",
            text: "All sensitive values are encrypted with AES-256-CBC:\n- AI provider API keys\n- Test parameters\n- Integration credentials (via config JSON)\n\nThe encryption key is a base64-encoded 32-byte SECRET_KEY. An IV (initialization vector) is prepended to each encrypted value.",
          },
          {
            heading: "SSRF protection",
            text: "Webhook callback URLs go through multi-layer validation:\n1. Must be HTTPS\n2. Hostname resolved via DNS\n3. All resolved IPs checked against blocklist (private ranges, localhost, cloud metadata)\n4. Validated both before execution starts and before making the actual callback",
          },
          {
            heading: "Security headers",
            text: "The API uses Helmet.js for security headers (X-Frame-Options, X-Content-Type-Options, etc.) and CORS is configured to accept only the specified frontend origin.",
          },
        ],
      },
    ],
  },
];

export default docs;
