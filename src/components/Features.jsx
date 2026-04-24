// src/components/Features.jsx
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { Zap, CheckCircle, Shield, GraduationCap, Users, Compass } from "lucide-react";

const features = [
  {
    title: "Automation",
    desc: "We build and maintain your automated tests. Playwright, Cypress, Selenium, whatever fits your stack.",
    link: "/services/automation",
    icon: Zap,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Functional Testing",
    desc: "Dedicated testers who know your application and catch issues before your users do.",
    link: "/services/functional-testing",
    icon: CheckCircle,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Pen Testing",
    desc: "We test your web apps and APIs for security holes before someone else does.",
    link: "/services/pen-testing",
    icon: Shield,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Mentoring",
    desc: "Hands-on coaching for your team. Small groups, real projects, practical skills.",
    link: "/services/mentoring",
    icon: GraduationCap,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Nearshore QA",
    desc: "Senior testers from Morocco, embedded in your team. Same hours, same language.",
    link: "/services/consulting",
    icon: Users,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Consulting",
    desc: "Independent advice on test strategy, tool selection and team organization.",
    link: "/services/consulting",
    icon: Compass,
    color: "bg-amber-100 text-amber-600",
  }
];

export default function Features() {
  return (
    <section id="features" aria-label="Our QA services" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          What we do
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
