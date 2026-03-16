import { motion as m } from "framer-motion";

export default function ToAutomateOrNotToAutomate() {
    return (
        <section
            id="blog-to-automate"
            className="relative py-16 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200"
        >
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        To Automate or Not to Automate
                    </h1>
                    <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Lessons from the field on when automation truly adds value
                    </p>
                </m.div>

                {/* Article Body */}
                <article className="max-w-3xl mx-auto text-slate-700 leading-relaxed text-lg space-y-6">
                    <p>
                        Many teams embrace test automation with great enthusiasm. They invest in tools,
                        build frameworks, and start converting manual tests into automated ones. The intention
                        is solid: reduce repetitive work and increase release confidence. Yet, the results often
                        fall short of expectations. Test runs take too long, maintenance grows out of control,
                        and the actual risks remain poorly understood.
                    </p>

                    <p>
                        Automation is not just about speed or coverage. It is about
                        <strong> making deliberate choices on where testing brings the most return. </strong>
                        When automation aligns with real business value, it becomes a multiplier for quality
                        and efficiency. When it does not, it quickly turns into expensive noise.
                    </p>

                    <h2 className="text-2xl font-semibold text-slate-900 mt-8">The temptation to automate everything</h2>
                    <p>
                        Once the first automated tests succeed, it’s tempting to automate every possible flow.
                        It feels productive, measurable, and reassuring. But without context, this can
                        lead to waste. Teams end up automating tests that rarely fail or cover functionality
                        users barely touch. By the time the scripts stabilize, the product has already moved on.
                        That’s not progress, that’s busywork.
                    </p>

                    <h2 className="text-2xl font-semibold text-slate-900 mt-8">Where automation truly shines</h2>
                    <p>
                        When done right, automation is one of the best long-term investments in software
                        quality. It adds the most value in areas that are stable, repeatable, and business-critical:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Regression and sanity checks:</strong> ensuring critical flows still work after every release.
                        </li>
                        <li>
                            <strong>Repeatable, data-driven tests:</strong> API or integration-level checks that validate core behavior.
                        </li>
                        <li>
                            <strong>Monitoring and early detection:</strong> identifying issues fast before users even notice.
                        </li>
                    </ul>

                    <p>
                        These areas are predictable, impactful, and maintainable. They protect business value
                        while freeing people to focus on creative testing and innovation.
                    </p>

                    <h2 className="text-2xl font-semibold text-slate-900 mt-8">What makes it work</h2>
                    <p>
                        The difference between a successful automation effort and a frustrating one usually
                        comes down to one key principle: <strong>analysis before action.</strong>
                    </p>

                    <p>
                        Effective automation starts with clarity about goals and priorities. Ask yourself:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>What are we trying to achieve, faster releases, fewer bugs, more confidence?</li>
                        <li>Which parts of the system are most critical or risky?</li>
                        <li>How often do these tests need to run and who will maintain them?</li>
                    </ul>

                    <p>
                        Without this reflection, teams end up with large, unstable suites and little insight.
                        Automation should amplify thoughtful QA, not replace it.
                    </p>
                </article>
            </div>
        </section>
    );
}
