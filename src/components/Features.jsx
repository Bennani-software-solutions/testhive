// src/components/Features.jsx
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { Zap, CheckCircle, Shield, GraduationCap, Users, Compass } from "lucide-react";

const features = [
  {
    title: "Consulting",
    desc: "Get expert guidance tailored to your stack, team, and goals. Strategy first, tools second.",
    link: "/services/consulting",
    icon: Compass,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Functional Testing",
    desc: "Ensure critical workflows perform flawlessly with dedicated testers who understand your product.",
    link: "/services/functional-testing",
    icon: CheckCircle,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Automation",
    desc: "Accelerate regression and repeatable tests with proven frameworks, where automation adds real value.",
    link: "/services/automation",
    icon: Zap,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Mentoring",
    desc: "Build lasting quality engineering skills, from test strategy and design to automation and beyond.",
    link: "/services/mentoring",
    icon: GraduationCap,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Pen Testing",
    desc: "Protect your systems with simulated attacks and vulnerability assessments.",
    link: "/services/pen-testing",
    icon: Shield,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "QA Outsourcing",
    desc: "Scale your QA capacity with senior nearshore engineers. Same timezone, embedded in your team, at a fraction of EU rates.",
    link: "/services/qa-outsourcing",
    icon: Users,
    color: "bg-amber-100 text-amber-600",
  }
];

export default function Features() {
  return (
    <section id="features" aria-label="Our QA services" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Tailored QA & Testing Services
        </h2>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <m.li
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition"
            >
              <Link to={f.link} id={`feature-${idx}`} className="block p-6">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${f.color} mb-4`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-600">{f.desc}</p>
              </Link>
            </m.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
