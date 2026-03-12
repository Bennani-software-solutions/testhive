import Section from "../components/Section";

export default function Privacy() {
  return (
    <Section className="bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated: March 12, 2026
        </p>

        <div className="mt-10 space-y-8 text-sm text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly: name, email address,
              company name, and any message content submitted through our contact
              forms. When you use the TestHive Platform, we also collect account
              credentials (hashed), project configurations, and test execution
              metadata.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and maintain our services</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To send service-related communications (e.g., test run notifications)</li>
              <li>To improve our platform and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              3. Data Security
            </h2>
            <p>
              All sensitive data, including API keys and test parameters, is
              encrypted using AES-256-CBC. Authentication tokens are stored in
              HTTP-only cookies. Passwords are hashed using bcrypt. We implement
              rate limiting and SSRF protection on all external-facing endpoints.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              4. Data Retention
            </h2>
            <p>
              Test execution data is retained according to your project
              configuration (configurable per project). Account data is retained
              as long as your account is active. You may request deletion of your
              data at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              5. Third-Party Services
            </h2>
            <p>
              We use Formspree for contact form processing and Jitsi Meet for
              consultation calls. When you configure integrations (Xray,
              TestRail, Confluence), data is shared with those services per your
              configuration. If you use the "Bring Your Own AI" feature, test
              scenarios are sent to your chosen LLM provider.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              data. You may export your test data at any time via CSV export. To
              exercise these rights, contact us at{" "}
              <a
                href="mailto:support@testhive.ma"
                className="text-indigo-600 hover:underline"
              >
                support@testhive.ma
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              7. Cookies
            </h2>
            <p>
              The TestHive Platform uses HTTP-only session cookies for
              authentication (JWT access and refresh tokens). The marketing site
              does not use tracking cookies or third-party analytics.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              8. Contact
            </h2>
            <p>
              For privacy-related inquiries, contact us at{" "}
              <a
                href="mailto:support@testhive.ma"
                className="text-indigo-600 hover:underline"
              >
                support@testhive.ma
              </a>
              .
            </p>
            <p className="mt-1">
              TestHive — Qtr Almatar, Nador, Morocco
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
