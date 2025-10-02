// src/components/Features.jsx
import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ClipboardList,
  Bot,
  Gauge,
  Users,
  Lightbulb,
} from "lucide-react";

const tabs = [{ key: "services", label: "Services" }];

const services = [
  {
    icon: Bot,
    title: "Test Automation",
    text: "Accelerate delivery with robust automation frameworks for web, mobile, APIs, and CI/CD pipelines.",
    href: "/services/automation",
    tint: "from-emerald-50 to-teal-50",
    iconTint: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: ClipboardList,
    title: "Functional Testing",
    text: "Ensure your critical flows work as intended with structured functional test design and execution.",
    href: "/services/functional-testing",
    tint: "from-amber-50 to-orange-50",
    iconTint: "bg-amber-50 text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Pen Testing",
    text: "Identify vulnerabilities with penetration testing to secure your systems against real-world threats.",
    href: "/services/pen-testing",
    tint: "from-rose-50 to-red-50",
    iconTint: "bg-rose-50 text-rose-600",
  },
  {
    icon: Gauge,
    title: "Load Testing",
    text: "Validate performance and scalability by simulating high traffic and measuring system resilience.",
    href: "/services/load-testing",
    tint: "from-sky-50 to-cyan-50",
    iconTint: "bg-sky-50 text-sky-600",
  },
  {
    icon: Users,
    title: "QA Outsourcing",
    text: "Scale your QA capacity flexibly while we handle your testing needs end-to-end.",
    href: "/services/qa-outsourcing",
    tint: "from-violet-50 to-indigo-50",
    iconTint: "bg-violet-50 text-violet-600",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    text: "Get strategic QA insights, process audits, and tailored solutions from our experts.",
    href: "/services/consulting",
    tint: "from-fuchsia-50 to-pink-50",
    iconTint: "bg-fuchsia-50 text-fuchsia-600",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  const [active, setActive] = useState("services");

  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Tailored QA & Software Testing Services
          </Motion.h2>
          <Motion.p variants={fadeUp} className="mt-3 text-gray-600">
            Explore our services designed to fit your QA needs — from quick
            automation wins to full QA partnerships.
          </Motion.p>
        </Motion.div>

        {/* Tabs */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm font-medium">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-full border px-4 py-2 transition ${active === t.key
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
              type="button"
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <Motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ icon: Icon, title, text, tint, iconTint, href }) => (
            <Link key={title} to={href} className="group">
              <Motion.li
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition cursor-pointer hover:shadow-md"
              >
                {/* soft background tint */}
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${tint} blur-2xl`}
                />

                {/* icon */}
                <div
                  className={`mb-4 inline-flex items-center justify-center rounded-xl ${iconTint} p-3`}
                >
                  <Icon className="h-6 w-6" aria-hidden />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{text}</p>
              </Motion.li>
            </Link>
          ))}
        </Motion.ul>
      </div>
    </section>
  );
}
