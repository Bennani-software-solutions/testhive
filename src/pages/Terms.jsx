import Section from "../components/Section";

export default function Terms() {
  return (
    <Section className="bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated: March 12, 2026
        </p>

        <div className="mt-10 space-y-8 text-sm text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using TestHive services, including the TestHive
              Platform and consulting services, you agree to be bound by these
              Terms of Service. If you are using our services on behalf of an
              organization, you represent that you have authority to bind that
              organization.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              2. Services
            </h2>
            <p>
              TestHive provides AI-powered test automation tools and QA
              consulting services. The Platform allows you to create, generate,
              execute, and manage automated tests. Consulting services include
              test automation implementation, functional testing, penetration
              testing, mentoring, and QA outsourcing.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              3. Account Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You are responsible for maintaining the security of your account credentials</li>
              <li>You must provide accurate information during registration</li>
              <li>You are responsible for all activity under your account</li>
              <li>You must notify us immediately of any unauthorized access</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              4. Acceptable Use
            </h2>
            <p>
              You may not use our services to generate or execute tests against
              systems you do not own or have explicit authorization to test. You
              may not attempt to circumvent security measures, rate limits, or
              usage quotas. Generated test code remains your intellectual
              property.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              5. Pricing & Payment
            </h2>
            <p>
              Free tier usage is subject to the limits described on our pricing
              page. Paid plans are billed monthly or annually as specified.
              Consulting services are billed as agreed in individual service
              agreements. All prices are in EUR unless stated otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              6. Data Ownership
            </h2>
            <p>
              You retain full ownership of your test scenarios, generated code,
              test results, and any data you upload to the platform. TestHive
              does not use your data to train AI models. You may export or
              delete your data at any time.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              7. Service Availability
            </h2>
            <p>
              We strive for high availability but do not guarantee uninterrupted
              service. Scheduled maintenance will be communicated in advance.
              Enterprise plans include SLA commitments as specified in
              individual agreements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              8. Limitation of Liability
            </h2>
            <p>
              TestHive is not liable for any indirect, incidental, or
              consequential damages arising from the use of our services. Our
              total liability is limited to the amount paid for services in the
              12 months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              9. Termination
            </h2>
            <p>
              Either party may terminate the agreement at any time. Upon
              termination, you may export your data within 30 days. After this
              period, your data will be permanently deleted.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              10. Contact
            </h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a
                href="mailto:support@testhive.ma"
                className="text-indigo-600 hover:underline"
              >
                support@testhive.ma
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
