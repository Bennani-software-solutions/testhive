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
                    We set up and maintain automated tests that run in your CI/CD pipeline.
                    The goal is simple: fewer surprises after a release.
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
                        <Zap className="h-8 w-8 text-indigo-600 mb-3" />
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
                                <Target className="h-5 w-5 text-indigo-600" />
                                <span className="font-medium">High impact · Low probability</span>
                            </div>
                            <p className="text-sm text-indigo-700">Consider with care</p>
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
                    Many teams hit friction because automation feels complex or brittle. We pick the
                    right tools, right-size the scope, and build tests that stay stable as your product changes.
                </p>
            </section>

            {/* Packages */}
            <section id="automation_packages">
                <h2 className="text-3xl font-bold mb-10 text-slate-900">
                    Choose your Automation Package
                </h2>
                <p className="text-slate-700 max-w-3xl mb-12">
                    Three options depending on where your team is right now.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* POC Package */}
                    <div className="border rounded-2xl shadow hover:shadow-lg transition bg-white overflow-hidden">
                        <div className="h-40 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center rounded-t-2xl relative">
                            <svg viewBox="0 0 120 100" className="h-24 w-28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="20" width="60" height="45" rx="4" className="fill-white stroke-emerald-400" strokeWidth="2"/>
                                <rect x="16" y="28" width="20" height="3" rx="1.5" className="fill-emerald-300"/>
                                <rect x="16" y="35" width="35" height="2" rx="1" className="fill-slate-200"/>
                                <rect x="16" y="41" width="30" height="2" rx="1" className="fill-slate-200"/>
                                <rect x="16" y="47" width="25" height="2" rx="1" className="fill-slate-200"/>
                                <circle cx="85" cy="42" r="22" className="fill-emerald-500" opacity="0.15"/>
                                <path d="M78 42l5 5 10-10" className="stroke-emerald-600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h3 className="absolute bottom-3 left-5 text-lg font-semibold text-slate-800">
                                The Prove It Pack
                            </h3>
                        </div>
                        <div className="p-6 pt-4">
                            <ul className="space-y-2 text-slate-600 mb-4 text-sm">
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Free Proof of Concept using real scenarios from your app.</li>
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" /> See value without risk. Decide with data, not guesswork.</li>
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Clear next steps if you choose to scale up later.</li>
                            </ul>
                            <Link to="/pocdetails" className="text-indigo-600 font-medium hover:underline">
                                Start free →
                            </Link>
                        </div>
                    </div>

                    {/* Accelerator Package */}
                    <div className="border rounded-2xl shadow hover:shadow-lg transition bg-white overflow-hidden">
                        <div className="h-40 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center rounded-t-2xl relative">
                            <svg viewBox="0 0 120 100" className="h-24 w-28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="15" y="15" width="55" height="55" rx="6" className="fill-white stroke-indigo-300" strokeWidth="2"/>
                                <path d="M28 55V35" className="stroke-indigo-400" strokeWidth="6" strokeLinecap="round"/>
                                <path d="M40 55V30" className="stroke-indigo-500" strokeWidth="6" strokeLinecap="round"/>
                                <path d="M52 55V25" className="stroke-indigo-600" strokeWidth="6" strokeLinecap="round"/>
                                <path d="M75 20l15 15-15 15" className="stroke-indigo-500" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="95" cy="35" r="3" className="fill-indigo-500"/>
                            </svg>
                            <h3 className="absolute bottom-3 left-5 text-lg font-semibold text-slate-800">
                                Accelerator Pack
                            </h3>
                        </div>
                        <div className="p-6 pt-4">
                            <ul className="space-y-2 text-slate-600 mb-4 text-sm">
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" /> Fixed price engagement. One clear cost and no surprises.</li>
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" /> 10 to 20 critical tests delivered within 90 days.</li>
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" /> Integrated into your CI/CD so it helps every release.</li>
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" /> Hands-on support from TestHive engineers.</li>
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" /> Outcome focused and predictable.</li>
                            </ul>
                            <Link to="/accelerator" className="text-indigo-600 font-medium hover:underline">
                                See how it works →
                            </Link>
                        </div>
                    </div>

                    {/* Quality Partner Program */}
                    <div className="border rounded-2xl shadow hover:shadow-lg transition bg-white overflow-hidden">
                        <div className="h-40 bg-gradient-to-br from-violet-50 to-violet-100 flex items-center justify-center rounded-t-2xl relative">
                            <svg viewBox="0 0 120 100" className="h-24 w-28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="45" cy="38" r="12" className="fill-violet-200 stroke-violet-400" strokeWidth="2"/>
                                <circle cx="45" cy="34" r="5" className="fill-violet-400"/>
                                <path d="M35 48c0-5.5 4.5-10 10-10s10 4.5 10 10" className="stroke-violet-400" strokeWidth="2" fill="none"/>
                                <circle cx="78" cy="38" r="12" className="fill-violet-200 stroke-violet-400" strokeWidth="2"/>
                                <circle cx="78" cy="34" r="5" className="fill-violet-400"/>
                                <path d="M68 48c0-5.5 4.5-10 10-10s10 4.5 10 10" className="stroke-violet-400" strokeWidth="2" fill="none"/>
                                <path d="M55 55h12" className="stroke-violet-500" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3"/>
                                <path d="M58 62l5-5 5 5" className="stroke-violet-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h3 className="absolute bottom-3 left-5 text-lg font-semibold text-slate-800">
                                Quality Partner Program
                            </h3>
                        </div>
                        <div className="p-6 pt-4">
                            <ul className="space-y-2 text-slate-600 mb-4 text-sm">
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-violet-500 mt-0.5 flex-shrink-0" /> A dedicated QA consultant embedded in your team.</li>
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-violet-500 mt-0.5 flex-shrink-0" /> A strategy that fits your stack and your roadmap.</li>
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-violet-500 mt-0.5 flex-shrink-0" /> Continuous improvement across automation and quality gates.</li>
                            </ul>
                            <Link to="/partnerprogram" className="text-indigo-600 font-medium hover:underline">
                                Let’s talk →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
