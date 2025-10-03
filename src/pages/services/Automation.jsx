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
import { Link } from "react-router-dom";

export default function AutomationService() {
    const calendlyUrl =
        "https://calendly.com/jointhehive-testhive-phr7/30min";

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Page Intro */}
            <h1 className="text-4xl font-bold mb-4">Test Automation</h1>
            <p className="text-lg text-slate-700 mb-10">
                At TestHive, we believe automation doesn’t have to be complicated.
                That’s why we created tailored packages so every team—from unsure
                first-timers to enterprises—can benefit from automation.
            </p>

            {/* Packages Section */}
            <section id="packages" className="grid gap-8 md:grid-cols-3">
                {/* POC / Starter Pack */}
                <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2">
                        How’s This Supposed to Work? Pack
                    </h2>
                    <p className="text-sm text-slate-600 mb-4">
                        Not sure yet? Request a **free POC** and see automation in action
                        before committing.
                    </p>
                    <div className="flex flex-col gap-3">
                        <a
                            id="btn-pack-poc"
                            href={calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Book a free POC call with TestHive"
                            aria-label="Book a free POC call with TestHive"
                            className="inline-flex justify-center rounded-lg bg-sky-500 hover:bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow"
                        >
                            Try the POC Pack
                        </a>
                        <Link
                            id="lnk-pack-pocdetails"
                            to="/pocdetails"
                            className="text-sm font-semibold text-sky-600 hover:text-sky-700"
                            title="Learn more about the POC Pack"
                        >
                            Learn more →
                        </Link>
                    </div>
                </div>

                {/* Accelerator Pack */}
                <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2">Accelerator Pack</h2>
                    <p className="text-sm text-slate-600 mb-4">
                        Our flagship pack: automate 10–20 of your highest-priority tests
                        within 90 days and integrate them into your CI/CD pipeline.
                    </p>
                    <div className="flex flex-col gap-3">
                        <a
                            id="btn-pack-accelerator"
                            href={calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Book a call for Accelerator Pack with TestHive"
                            aria-label="Book a call for Accelerator Pack with TestHive"
                            className="inline-flex justify-center rounded-lg bg-emerald-500 hover:bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow"
                        >
                            Boost with Accelerator
                        </a>
                        <Link
                            id="lnk-pack-accelerator"
                            to="/accelerator"
                            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                            title="Learn more about the Accelerator Pack"
                        >
                            Learn more →
                        </Link>
                    </div>
                </div>

                {/* Partner Pack */}
                <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2">Quality Partner Program</h2>
                    <p className="text-sm text-slate-600 mb-4">
                        For teams with custom needs: embed a dedicated QA consultant into
                        your team for long-term success.
                    </p>
                    <div className="flex flex-col gap-3">
                        <a
                            id="btn-pack-partner"
                            href={calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Book a call for Quality Partner Program with TestHive"
                            aria-label="Book a call for Quality Partner Program with TestHive"
                            className="inline-flex justify-center rounded-lg bg-violet-500 hover:bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow"
                        >
                            Talk to a QA Partner
                        </a>
                        <Link
                            id="lnk-pack-partner"
                            to="/partnerprogram"
                            className="text-sm font-semibold text-violet-600 hover:text-violet-700"
                            title="Learn more about the Quality Partner Program"
                        >
                            Learn more →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
