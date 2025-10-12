// src/pages/services/FunctionalTesting.jsx
import React, { useMemo, useState } from "react";
import { motion as m, useReducedMotion } from "framer-motion";
import { Users, ClipboardCheck, FileText, ArrowRight, PhoneCall } from "lucide-react";
import ContactForm from "../../components/ContactForm";

const EASE = [0.22, 1, 0.36, 1];

function useFadeUp() {
    const reduce = useReducedMotion();
    return useMemo(
        () => ({
            hidden: { opacity: 0, y: reduce ? 0 : 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
        }),
        [reduce]
    );
}

export default function FunctionalTesting({ onBook }) {
    const fadeUp = useFadeUp();
    const [openForm, setOpenForm] = useState(false);

    return (
        <section id="functional-testing" className="bg-white text-slate-800">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
                {/* Hero Section */}
                <m.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="text-center"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
                        Real Testing, Real Confidence
                    </h1>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 max-w-3xl mx-auto">
                        Functional testing is about more than just finding bugs. It’s about making sure your
                        software truly works for your users and supports your business goals. We combine
                        hands-on expertise with clear structure so your product performs exactly as intended,
                        release after release.
                    </p>
                </m.div>

                {/* Why You Need Dedicated Testers */}
                <m.section
                    id="why-dedicated-tester"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mt-16 space-y-4"
                >
                    <h2 className="text-2xl font-bold text-slate-900">
                        Why you need dedicated functional testers
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        Developers and product owners live close to the code. That’s a strength, but it can also
                        make it harder to see where things break for real users. Independent testers bring
                        a fresh perspective. They validate assumptions, connect business logic to real behavior,
                        and keep releases honest.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        A dedicated tester focuses on consistency and long-term quality. They know your
                        application, track regression areas, and build a safety net that prevents critical
                        issues from slipping through.
                    </p>
                </m.section>

                {/* QA as Part of the Team */}
                <m.section
                    id="qa-in-team"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mt-14 space-y-4"
                >
                    <h2 className="text-2xl font-bold text-slate-900">
                        QA should be part of your development team
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        The best results happen when testers and developers work side by side. We integrate
                        directly into your team’s rituals, stand-ups, sprint planning, and refinements, so we
                        understand the “why” behind every feature.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        We also believe in testing early. By getting involved before code is written, during
                        story refinement or even design discussions, we help catch gaps in logic or unclear
                        requirements before they turn into rework later. This “shift-left” mindset saves time,
                        money, and frustration.
                    </p>
                </m.section>

                {/* What We Want to Achieve for You */}
                <m.section
                    id="what-we-want-to-achieve"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mt-14 space-y-4"
                >
                    <h2 className="text-2xl font-bold text-slate-900">
                        What We Want to Achieve for You
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        Our goal is simple: to help your team deliver faster and more confidently.
                        Functional testing is not just about catching bugs; it’s about building trust in your product and
                        giving your developers and business teams space to focus on progress, not firefighting.
                    </p>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        {[
                            {
                                icon: Users,
                                title: "Early collaboration with development",
                                text: "We join your team early in the process — during refinement or even before development starts — so testing becomes a natural part of building, not an afterthought.",
                            },
                            {
                                icon: ClipboardCheck,
                                title: "Realistic test environments",
                                text: "We help set up or improve staging and test environments that reflect real-world usage, so test results truly represent your users’ experience.",
                            },
                            {
                                icon: FileText,
                                title: "Structured documentation & regression suites",
                                text: "We document test cases clearly and build or expand regression sets that grow with your product, keeping your releases consistent and predictable.",
                            },
                            {
                                icon: ArrowRight,
                                title: "Continuous and open feedback",
                                text: "We share insights continuously, not just at the end of a sprint — creating a transparent feedback loop that helps your team improve faster and smarter.",
                            },
                        ].map(({ icon: Icon, title, text }) => (
                            <div
                                key={title}
                                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex gap-3"
                            >
                                <Icon className="h-6 w-6 text-sky-600 shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-slate-900">{title}</h3>
                                    <p className="mt-1 text-sm text-slate-700">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </m.section>


                {/* Closing CTA */}
                <m.section
                    id="functional-cta"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mt-16 text-center"
                >
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={onBook}
                            className="rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-6 py-3 text-white font-semibold shadow-md hover:brightness-110 active:scale-95"
                        >
                            <PhoneCall className="inline-block mr-2 h-5 w-5" /> Talk to a QA Expert
                        </button>
                        <button
                            onClick={() => setOpenForm(true)}
                            className="rounded-xl border border-sky-300 bg-white px-6 py-3 text-sky-700 font-semibold hover:bg-sky-50 active:scale-95"
                        >
                            Request More Information
                        </button>
                    </div>
                </m.section>
            </div>

            {/* Contact Form Modal */}
            {openForm && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative">
                        <button
                            onClick={() => setOpenForm(false)}
                            className="absolute top-3 right-4 text-slate-400 hover:text-slate-600"
                        >
                            ✕
                        </button>
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">
                            Request More Information
                        </h3>
                        <ContactForm
                            formEndpoint="https://formspree.io/f/mgvnzebp"
                            title="Tell us about your QA needs"
                            subtitle="We’ll reach out within one business day to discuss your challenges and goals."
                            onSuccess={() => setOpenForm(false)}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
