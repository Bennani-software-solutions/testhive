// src/components/ToolPreview.jsx
import { motion as m } from "framer-motion";
import { useState } from "react";

const screenshots = [
  {
    src: "/assets/platform/app-test-panel.png",
    alt: "TestHive Platform: test scenario management with BDD descriptions and one-click execution",
    caption: "Manage and run test scenarios per project",
  },
  {
    src: "/assets/platform/app-dashboard.png",
    alt: "TestHive Platform: test dashboard with pass rate, duration and flaky test tracking",
    caption: "Track pass rates, duration and flaky tests over time",
  },
];

export default function ToolPreview() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 border-t border-slate-200 bg-slate-50/50">
      <div className="mx-auto max-w-5xl px-6">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            Internal tooling
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Our test management platform
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed text-sm">
            We have built our own test platform. When it makes sense for the
            project, we configure it as part of the engagement. It helps structure
            scenarios and gives your team visibility into what is actually tested.
            The tool supports AI-assisted scenario generation, but every test is
            reviewed by an engineer. AI saves time. It does not replace judgement.
          </p>
          <p className="mt-2 text-slate-500 text-sm">
            Each setup is tailored to the project. Not every engagement needs it,
            and we will say so when it does not.
          </p>
        </m.div>

        {/* Screenshot viewer */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-8"
        >
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <img
              src={screenshots[active].src}
              alt={screenshots[active].alt}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Tabs */}
          <div className="mt-3 flex gap-2">
            {screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  active === i
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {s.caption}
              </button>
            ))}
          </div>
        </m.div>

        <p className="mt-6 text-xs text-slate-400">
          Demo available at{" "}
          <a
            href="https://app.testhive.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-600"
          >
            app.testhive.ma
          </a>
        </p>
      </div>
    </section>
  );
}
