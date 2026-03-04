import React, { useMemo } from "react";
import { motion as m, useReducedMotion } from "framer-motion";
import { Users, BookOpen, Lightbulb, Clock, CheckCircle2 } from "lucide-react";

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

const group = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Mentoring() {
    const fadeUp = useFadeUp();

    return (
        <section
            id="mentoring"
            className="relative bg-gradient-to-b from-white via-sky-50 to-emerald-50 border-t border-gray-200 py-16 sm:py-20"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Header */}
                <m.div
                    variants={group}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="mx-auto max-w-3xl text-left"
                >
                    <m.h1
                        variants={fadeUp}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900"
                    >
                        Mentoring: Grow with hands-on guidance
                    </m.h1>
                    <m.p
                        variants={fadeUp}
                        className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed"
                    >
                        Taking courses is a great start to explore a new area, but real
                        understanding comes when you apply what you’ve learned in your own
                        environment, with your own tools, data, and challenges. That’s
                        where mentoring makes the difference.
                    </m.p>
                    <m.p
                        variants={fadeUp}
                        className="mt-3 text-slate-700 text-base sm:text-lg leading-relaxed"
                    >
                        Traditional training often ends when the slides do. Our mentoring
                        program bridges that gap by working alongside you and your team to
                        build real-world solutions, tailored to your projects and context.
                        It’s not theory, it’s about turning knowledge into outcomes that
                        matter.
                    </m.p>
                </m.div>

                {/* Benefits */}
                <m.div
                    variants={group}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {[
                        {
                            icon: Users,
                            title: "Small groups, big impact",
                            text: "Up to 3 participants per mentor, ensuring personal guidance and deep interaction.",
                        },
                        {
                            icon: BookOpen,
                            title: "Real-world learning",
                            text: "You’ll work directly on your applications, not abstract exercises or pre-defined demos.",
                        },
                        {
                            icon: Lightbulb,
                            title: "Mentors who build, not just teach",
                            text: "Our mentors have decades of QA and automation experience across industries and tech stacks.",
                        },
                        {
                            icon: Clock,
                            title: "Flexible & realistic",
                            text: "Sessions run 4–8 hours per week, typically over 3–12 months, tailored to your growth pace.",
                        },
                    ].map((item) => (
                        <m.article
                            key={item.title}
                            variants={fadeUp}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                        >
                            <item.icon className="h-10 w-10 text-sky-600 mb-3" />
                            <h3 className="text-lg font-semibold text-slate-900">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm text-slate-700">{item.text}</p>
                        </m.article>
                    ))}
                </m.div>

                {/* Details */}
                <m.div
                    variants={group}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mt-16 max-w-4xl mx-auto"
                >
                    <m.h2
                        variants={fadeUp}
                        className="text-2xl font-bold text-slate-900 mb-4"
                    >
                        How it works
                    </m.h2>
                    <m.ul
                        variants={group}
                        className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed"
                    >
                        <m.li variants={fadeUp} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
                            You’ll collaborate weekly with a mentor who helps design, review,
                            and improve your real test automation work.
                        </m.li>
                        <m.li variants={fadeUp} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
                            Together, we’ll plan and build regression test suites and CI/CD
                            integration that fit your environment.
                        </m.li>
                        <m.li variants={fadeUp} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
                            You’ll document, refine, and maintain your own automation
                            framework, gaining real ownership and confidence.
                        </m.li>
                        <m.li variants={fadeUp} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
                            We stay embedded with your team, offering feedback and insights as
                            your automation maturity grows.
                        </m.li>
                    </m.ul>

                </m.div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="mailto:jointhehive@testhive.ma"
                        className="inline-block rounded-xl bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500 px-6 py-3 text-white font-semibold shadow-md hover:brightness-110 active:scale-95"
                    >
                        Start your mentoring journey
                    </a>
                    <p className="mt-2 text-xs text-slate-500">
                        Have questions first? Reach out, we’ll help you decide if mentoring
                        fits your goals.
                    </p>
                </div>
            </div>
        </section>
    );
}
