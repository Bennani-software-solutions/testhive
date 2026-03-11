// src/components/Testimonials.jsx
import { motion as m } from "framer-motion";
import Section from "./Section";

const testimonials = [
    {
        quote:
            "TestHive brought a real sense of ownership and precision to our QA process. Their structured approach helped us catch critical issues before release, and communication was always transparent.",
        name: "Anthony Heebeeck",
        role: "Engineering Manager at Atlas Systems",
        avatar: "/assets/clients/anthony.jpg",
    },
    {
        quote:
            "Working with TestHive felt like having an in-house QA team. They adapt fast, understand context, and care deeply about quality. Our automation coverage and confidence improved dramatically.",
        name: "Nathalie Leys",
        role: "Product Owner at NovaTech",
        avatar: "/assets/clients/nathalie.jpg",
    },
];

export default function Testimonials() {
    return (
        <Section id="testimonials" className="bg-slate-50 border-t border-gray-200">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                    What Our Clients Say
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
                        className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
                    >
                        <p className="text-slate-700 leading-relaxed mb-6 italic">“{t.quote}”</p>

                        <div className="flex items-center gap-4">
                            {t.avatar ? (
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                            ) : (
                                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">
                                    {t.name.charAt(0)}
                                </div>
                            )}
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
