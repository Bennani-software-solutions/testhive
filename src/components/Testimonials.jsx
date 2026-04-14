// src/components/Testimonials.jsx
import { motion as m } from "framer-motion";
import Section from "./Section";

const testimonials = [
    {
        quote:
            "Abdel started with us as a functional tester and grew into our technical lead for test automation. He built our framework, automated regression for our key applications, and now coaches a junior automation engineer working remotely.",
        name: "Magda De Cock",
        role: "Test Manager · ISTQB & Scrum Certified",
    },
    {
        quote:
            "We migrated from a custom AS-400 application to Dynamics 365 Business. Abdel automated the testing and documented every issue along the way. What impressed me most was how he set up a solid test approach in a chaotic environment.",
        name: "Chris Bracqué",
        role: "Owner Saro-IT · Analyst at Skylux",
    },
    {
        quote: "Je AT heeft een redelijk grote gap in de sync logica blootgelegd.",
        name: "Dev Lead",
        role: "Benelux pharma distributor",
        context: "Integration tests uncovered a missing case in cross-system data sync. Logged as a Jira ticket the team would not have opened otherwise.",
    },
    {
        quote: "Als je zoveel pluimen gaat blijven verdienen, loopt hier binnenkort een kaal kieken rond.",
        name: "Business contact",
        role: "Pharma distribution",
        context: "After another production sanity test flagged an unlinked offer with no confirmed quantities, before any customer noticed.",
    },
];

export default function Testimonials() {
    return (
        <Section id="testimonials" className="bg-slate-50 border-t border-gray-200">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                    What people we work with say
                </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
                {testimonials.map((t, i) => (
                    <m.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col"
                    >
                        <p className="text-slate-700 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>

                        {t.context && (
                            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                                {t.context}
                            </p>
                        )}

                        <div className="flex items-center gap-4 mt-auto">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-sm">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">{t.name}</p>
                                <p className="text-sm text-slate-600">{t.role}</p>
                            </div>
                        </div>
                    </m.div>
                ))}
            </div>
        </Section>
    );
}
