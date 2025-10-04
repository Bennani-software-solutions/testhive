// src/components/Features.jsx
import { Link } from "react-router-dom";

const features = [
  {
    title: "Automation",
    desc: "Fast-track your test automation.",
    link: "/services/automation",
  },
  {
    title: "Functional Testing",
    desc: "Ensure critical workflows perform flawlessly.",
    link: "/services/functional-testing",
  },
  {
    title: "Pen Testing",
    desc: "Protect your systems with simulated attacks.",
    link: "/services/pen-testing",
  },
  {
    title: "Load Testing",
    desc: "Validate performance under stress.",
    link: "/services/load-testing",
  },
  {
    title: "QA Outsourcing",
    desc: "Scale your QA team flexibly.",
    link: "/services/qa-outsourcing",
  },
  {
    title: "Consulting",
    desc: "Get expert guidance tailored to your needs.",
    link: "/services/consulting",
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
            <li key={idx} className="p-6 rounded-xl border shadow-sm hover:shadow-lg transition">
              <Link to={f.link} id={`feature-${idx}`}>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {f.title}
                </h3>
                <p className="text-slate-600">{f.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
