// src/pages/services/FunctionalTesting.jsx
import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
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

export default function FunctionalTesting() {
    const { onBook } = useOutletContext();
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
                        Functional Testing
                    </h1>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 max-w-3xl mx-auto">
                        We test whether your software actually does what it should. Not just the happy path,
                        but the edge cases and the workflows your users depend on every day.
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
                        What we work towards
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        Fewer bugs in production, faster releases, and a team that trusts
                        the quality of what they ship.
                    </p>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        {[
                            {
                                icon: Users,
                                title: "Early collaboration with development",
                                text: "We join during refinement or before development starts. Testing is part of building, not something that happens after.",
                            },
                            {
                                icon: ClipboardCheck,
                                title: "Realistic test environments",
                                text: "We help set up staging and test environments that match production, so test results mean something.",
                            },
                            {
                                icon: FileText,
                                title: "Structured documentation & regression suites",
                                text: "We document test cases and build regression sets that grow with your product.",
                            },
                            {
                                icon: ArrowRight,
                                title: "Continuous and open feedback",
                                text: "We share findings as we go, not just at the end of a sprint. Short feedback loops catch problems early.",
                            },
                        ].map(({ icon: Icon, title, text }) => (
                            <div
                                key={title}
                                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex gap-3"
                            >
                                <Icon className="h-6 w-6 text-indigo-600 shrink-0" />
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
                            className="rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-white font-semibold shadow-md active:scale-95"
                        >
                            <PhoneCall className="inline-block mr-2 h-5 w-5" /> Talk to a QA Expert
                        </button>
                        <button
                            onClick={() => setOpenForm(true)}
                            className="rounded-xl border border-indigo-300 bg-white px-6 py-3 text-indigo-700 font-semibold hover:bg-indigo-50 active:scale-95"
                        >
                            Request More Information
                        </button>
                    </div>
                </m.section>
            </div>

            {/* Contact Form Modal */}
            {openForm && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
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
