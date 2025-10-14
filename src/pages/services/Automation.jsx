// src/pages/services/Automation.jsx
import { Link } from "react-router-dom";
import {
    CheckCircle,
    Zap,
    Layers,
    ShieldCheck,
    Target,
    BarChart2,
    AlertTriangle,
    Ban
} from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function AutomationService() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const scrollToSection = () => {
                const element = document.querySelector(location.hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            };
            setTimeout(scrollToSection, 300);
            setTimeout(scrollToSection, 700);
        }
    }, [location]);

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
            {/* Hero / Intro */}
            <section>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
                    Test Automation Services
                </h1>
                <p className="text-lg text-slate-700 max-w-3xl">
                    Automation is not just about speed. It is about giving your team the
                    confidence to ship quality at scale. At TestHive, we keep automation
                    practical, human, and tuned to real business outcomes.
                </p>
            </section>

            {/* Why Automate */}
            <section>
                <h2 className="text-3xl font-bold mb-4 text-slate-900">
                    Why automate your tests?
                </h2>
                <ul className="grid md:grid-cols-2 gap-6">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                        <p>
                            <strong>Faster releases:</strong> Cut regression time from days to hours and move with confidence.
                        </p>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                        <p>
                            <strong>Lower costs:</strong> Catch issues earlier, reduce firefighting, and free your team to build.
                        </p>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                        <p>
                            <strong>Quality at scale:</strong> Keep standards high even as your product grows.
                        </p>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                        <p>
                            <strong>Team focus:</strong> Let engineers focus on value while stable checks run for them.
                        </p>
                    </li>
                </ul>
            </section>

            {/* What to Automate (deeper guidance) */}
            <section id="what_to_automate">
                <h2 className="text-3xl font-bold mb-4 text-slate-900">
                    What should you automate?
                </h2>

                <p className="text-slate-700 max-w-3xl mb-8">
                    Not every test is a good automation candidate. Some flows are too volatile,
                    too visual, or too low value to justify the cost. A simple way to decide is to
                    rank each test by two things: how likely it is to fail or break, and what the
                    business impact is when it does. Then you invest where the return is clear.
                </p>

                {/* Good candidates (evergreen) */}
                <div className="grid md:grid-cols-3 gap-6 text-slate-700 mb-12">
                    <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition">
                        <Zap className="h-8 w-8 text-sky-500 mb-3" />
                        <h3 className="font-semibold text-lg">Smoke and Regression</h3>
                        <p>Core flows you run often and rely on. These give fast wins and steady value.</p>
                    </div>
                    <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition">
                        <Layers className="h-8 w-8 text-violet-500 mb-3" />
                        <h3 className="font-semibold text-lg">Integration Scenarios</h3>
                        <p>Cross-module journeys that customers use daily. Great for end to end confidence.</p>
                    </div>
                    <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition">
                        <ShieldCheck className="h-8 w-8 text-emerald-500 mb-3" />
                        <h3 className="font-semibold text-lg">Risk and Compliance</h3>
                        <p>Security, payments, and data rules. Strong candidates when failure is costly.</p>
                    </div>
                </div>

                {/* Probability × Impact model */}
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 flex items-center gap-2">
                        <BarChart2 className="h-6 w-6 text-slate-700" />
                        Probability × Impact helps you pick the right tests
                    </h3>
                    <p className="text-slate-700 mb-6 max-w-3xl">
                        Score each candidate on probability of failure and business impact. Start where both are high.
                        Defer or avoid where the effort outweighs the benefit. This keeps your suite stable and your spend sensible.
                    </p>

                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="p-4 rounded-xl border">
                            <div className="flex items-center gap-2 mb-1">
                                <Target className="h-5 w-5 text-emerald-600" />
                                <span className="font-medium">High impact · High probability</span>
                            </div>
                            <p className="text-sm text-emerald-700">Automate first</p>
                            <p className="mt-2 text-sm text-slate-700">
                                Checkout, auth, pricing rules, critical reporting. Highest return on effort.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl border">
                            <div className="flex items-center gap-2 mb-1">
                                <Target className="h-5 w-5 text-sky-600" />
                                <span className="font-medium">High impact · Low probability</span>
                            </div>
                            <p className="text-sm text-sky-700">Consider with care</p>
                            <p className="mt-2 text-sm text-slate-700">
                                Stable core flows. Fewer failures, but costly when they happen. Pick the best few.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl border">
                            <div className="flex items-center gap-2 mb-1">
                                <AlertTriangle className="h-5 w-5 text-amber-600" />
                                <span className="font-medium">Low impact · High probability</span>
                            </div>
                            <p className="text-sm text-amber-700">Automate only if cheap</p>
                            <p className="mt-2 text-sm text-slate-700">
                                Noisy UI tweaks or cosmetic checks. Use lightweight tests or linting instead.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl border">
                            <div className="flex items-center gap-2 mb-1">
                                <Ban className="h-5 w-5 text-rose-600" />
                                <span className="font-medium">Low impact · Low probability</span>
                            </div>
                            <p className="text-sm text-rose-700">Do not automate</p>
                            <p className="mt-2 text-sm text-slate-700">
                                One-off flows and unstable pages. Manual is fine here. Keep the suite lean.
                            </p>
                        </div>
                    </div>

                    <p className="mt-6 text-slate-700">
                        Unsure where your tests land in this grid? Start with a free Proof of Concept and we will rank
                        your flows together, then build the first set that gives the fastest lift.
                    </p>
                </div>
            </section>

            {/* TestHive Approach */}
            <section>
                <h2 className="text-3xl font-bold mb-4 text-slate-900">
                    The TestHive approach
                </h2>
                <p className="text-slate-700 max-w-3xl">
                    Many teams hit friction because automation feels complex or brittle. We coach your team,
                    pick the right tools, and right size the scope so you get stable tests that support real work.
                    That is how you earn trust in every release.
                </p>
            </section>

            {/* Packages */}
            <section id="automation_packages">
                <h2 className="text-3xl font-bold mb-10 text-slate-900">
                    Choose your Automation Package
                </h2>
                <p className="text-slate-700 max-w-3xl mb-12">
                    Teams are at different stages. These three options meet you where you are. Each path includes
                    personal guidance, clear outcomes, and transparent communication.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* POC Package */}
                    <div className="border rounded-2xl shadow hover:shadow-lg transition bg-white overflow-hidden">
                        <div className="relative mb-4">
                            <img
                                src="/assets/whyy.png"
                                alt="Prove It Pack"
                                className="w-full h-40 object-cover rounded-t-2xl"
                            />
                            <h3 className="absolute top-5 left-10 text-xl font-semibold text-black drop-shadow-lg">
                                The prove it pack
                            </h3>
                        </div>
                        <div className="p-6 pt-0">
                            <ul className="space-y-2 text-slate-600 mb-4">
                                <li>✔️ Free Proof of Concept using real Scenarios from your app.</li>
                                <li>✔️ See value without risk and decide with data, not guesswork.</li>
                                <li>✔️ Clear next steps if you choose to scale up later.</li>
                            </ul>
                            <Link to="/pocdetails" className="text-sky-600 font-medium hover:underline">
                                Start free →
                            </Link>
                        </div>
                    </div>

                    {/* Accelerator Package */}
                    <div className="border rounded-2xl shadow hover:shadow-lg transition bg-white overflow-hidden">
                        <div className="relative mb-4">
                            <img
                                src="/assets/time.png"
                                alt="Accelerator Pack"
                                className="w-full h-40 object-cover rounded-t-2xl"
                            />
                            <h3 className="absolute top-5 left-10 text-xl font-semibold text-black drop-shadow-lg">
                                Accelerator Pack
                            </h3>
                        </div>
                        <div className="p-6 pt-0">
                            <ul className="space-y-2 text-slate-600 mb-4">
                                <li>✔️ Fixed price engagement. One clear cost and no surprises.</li>
                                <li>✔️ 10 to 20 critical tests delivered within 90 days.</li>
                                <li>✔️ Integrated into your CI/CD so it helps every release.</li>
                                <li>✔️ Hands-on support from TestHive engineers who work with your team.</li>
                                <li>✔️ Outcome focused and predictable, with care at every step.</li>
                            </ul>
                            <Link to="/accelerator" className="text-sky-600 font-medium hover:underline">
                                See how it works →
                            </Link>
                        </div>
                    </div>

                    {/* Quality Partner Program */}
                    <div className="border rounded-2xl shadow hover:shadow-lg transition bg-white overflow-hidden">
                        <div className="relative mb-4">
                            <img
                                src="/assets/languages.png"
                                alt="Quality Partner Program"
                                className="w-full h-40 object-cover rounded-t-2xl"
                            />
                            <h3 className="absolute top-5 left-10 text-xl font-semibold text-black drop-shadow-lg">
                                Quality Partner Program
                            </h3>
                        </div>
                        <div className="p-6 pt-0">
                            <ul className="space-y-2 text-slate-600 mb-4">
                                <li>✔️ A dedicated QA consultant embedded in your team.</li>
                                <li>✔️ A strategy that fits your stack and your roadmap.</li>
                                <li>✔️ Continuous improvement across automation, functional testing, and quality gates.</li>
                            </ul>
                            <Link to="/partnerprogram" className="text-sky-600 font-medium hover:underline">
                                Let’s talk →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
