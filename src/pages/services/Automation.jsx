// src/pages/services/Automation.jsx
import {
    Zap,
    Layers,
    ShieldCheck,
    Workflow,
    Gauge,
    LineChart,
    Smile,
    Rocket,
    Users,
} from "lucide-react";
import { Button } from "../../components/ui";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function AutomationService() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.replace("#", ""));
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-sky-50 to-emerald-50 py-20 border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-6">
                        Test Automation <span className="text-sky-500">with TestHive</span>
                    </h1>
                    <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                        Automation doesn’t have to be cold or complicated. At{" "}
                        <span className="font-semibold">TestHive</span>, we believe everyone
                        should be able to enjoy its benefits. That’s why we designed three
                        unique paths—from a free proof of concept to a full QA partnership—
                        so you can start where it feels right.
                    </p>
                    <div className="mt-8">
                        <Button className="rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-8 py-3 text-white font-semibold shadow-md hover:brightness-110 active:scale-95">
                            Book a Call
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Test Automation with TestHive */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Why TestHive Automation?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                            <Zap className="h-10 w-10 text-sky-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Faster Releases</h3>
                            <p className="text-slate-600">
                                Automate regression and smoke tests to ship confidently and
                                reduce manual overhead.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                            <Layers className="h-10 w-10 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Scalable Frameworks</h3>
                            <p className="text-slate-600">
                                Modular, maintainable frameworks that grow with your product and
                                team needs.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                            <ShieldCheck className="h-10 w-10 text-violet-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Higher Quality</h3>
                            <p className="text-slate-600">
                                Catch defects earlier with continuous testing integrated
                                directly into your CI/CD pipeline.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Our Automation Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <Workflow className="h-10 w-10 text-sky-500 mx-auto mb-4" />
                            <h3 className="font-semibold mb-2">1. Planning</h3>
                            <p className="text-slate-600">
                                We identify critical scenarios and define a roadmap for
                                automation.
                            </p>
                        </div>
                        <div className="p-6">
                            <Gauge className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
                            <h3 className="font-semibold mb-2">2. Framework Setup</h3>
                            <p className="text-slate-600">
                                Tailored automation frameworks leveraging modern tools &
                                languages.
                            </p>
                        </div>
                        <div className="p-6">
                            <LineChart className="h-10 w-10 text-violet-500 mx-auto mb-4" />
                            <h3 className="font-semibold mb-2">3. Integration</h3>
                            <p className="text-slate-600">
                                Seamless integration into your CI/CD pipelines for continuous
                                validation.
                            </p>
                        </div>
                        <div className="p-6">
                            <ShieldCheck className="h-10 w-10 text-rose-500 mx-auto mb-4" />
                            <h3 className="font-semibold mb-2">4. Reporting</h3>
                            <p className="text-slate-600">
                                Rich dashboards and reports ensure visibility and actionable
                                insights.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section id="automation_packages" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-6">
                        Our Test Automation Packages
                    </h2>
                    <p className="text-lg text-slate-700 max-w-3xl mx-auto text-center mb-12">
                        We designed these packages because we know automation can feel
                        overwhelming at first. Whether you’re just exploring, ready to
                        accelerate, or looking for a dedicated partner—there’s a path for
                        you.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pack 1 - Free POC */}
                        <div className="p-6 rounded-2xl border border-slate-200 shadow hover:shadow-lg transition">
                            <div className="flex items-center gap-2 mb-4">
                                <Smile className="h-6 w-6 text-sky-500" />
                                <h3 className="text-2xl font-semibold">“Proof It!” Pack</h3>
                            </div>
                            <p className="text-slate-600 mb-4">
                                Not sure automation fits? Try our{" "}
                                <span className="font-semibold">Free POC</span>. We’ll automate
                                1–2 test cases and deliver a demo report—no cost, no
                                commitment.
                            </p>
                            <ul className="text-slate-700 mb-6 space-y-2 text-sm">
                                <li>✔ 1–2 automated test cases</li>
                                <li>✔ Minimal CI hookup</li>
                                <li>✔ Demo run + short report</li>
                                <li>✔ 100% free, no strings attached</li>
                            </ul>
                            <Button className="w-full rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2">
                                Try the Free POC
                            </Button>
                        </div>

                        {/* Pack 2 - Accelerator */}
                        <div className="p-6 rounded-2xl border-2 border-emerald-500 shadow-lg bg-gradient-to-b from-emerald-50 to-white">
                            <div className="flex items-center gap-2 mb-4">
                                <Rocket className="h-6 w-6 text-emerald-600" />
                                <h3 className="text-2xl font-semibold">Accelerator Pack</h3>
                            </div>
                            <p className="text-slate-600 mb-4">
                                Ready to go further? In about 90 days, we set up a full
                                framework and automate 10–20 business-critical tests for your
                                CI/CD pipeline.
                            </p>
                            <ul className="text-slate-700 mb-6 space-y-2 text-sm">
                                <li>✔ 10–20 regression scenarios automated</li>
                                <li>✔ Full CI/CD wiring & dashboards</li>
                                <li>✔ Executable docs & commands</li>
                                <li>✔ Demo report & next steps plan</li>
                            </ul>
                            <Button className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2">
                                Choose Accelerator
                            </Button>
                        </div>

                        {/* Pack 3 - Partner Program */}
                        <div className="p-6 rounded-2xl border border-slate-200 shadow hover:shadow-lg transition">
                            <div className="flex items-center gap-2 mb-4">
                                <Users className="h-6 w-6 text-violet-600" />
                                <h3 className="text-2xl font-semibold">QA Partner Program</h3>
                            </div>
                            <p className="text-slate-600 mb-4">
                                When a one-size-fits-all pack doesn’t cut it, we embed a
                                dedicated QA consultant in your team. Strategy, coaching,
                                automation, governance—tailored to your needs.
                            </p>
                            <ul className="text-slate-700 mb-6 space-y-2 text-sm">
                                <li>✔ Dedicated QA advisor</li>
                                <li>✔ Flexible scope & engagement</li>
                                <li>✔ Outcome-driven collaboration</li>
                                <li>✔ Long-term partnership</li>
                            </ul>
                            <Button className="w-full rounded-xl bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-2">
                                Talk to Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
