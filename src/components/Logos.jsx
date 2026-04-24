// src/components/Assets.jsx
import { motion as m } from "framer-motion";

 const items = [
    { name: "AWS", src: "/assets/aws.png" },
    { name: "Azure", src: "/assets/azure.png" },
    { name: "GCP", src: "/assets/GCP.png" },
    { name: "Playwright", src: "/assets/Playwright.png" },
    { name: "Cypress", src: "/assets/cypress.png" },
    { name: "Selenium", src: "/assets/selenium.png" },
    { name: "JMeter", src: "/assets/jmeter.svg" },
    { name: "Burp Suite", src: "/assets/burpsuite.svg" },
    { name: "Jira", src: "/assets/jira.svg" },
    { name: "Xray", src: "/assets/xray.svg" },
    { name: "Asana", src: "/assets/asana.svg" },
  ]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function Assets() {
  return (
    <section aria-label="ecosystem" className="py-14 bg-gray-50 border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-center text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Trusted tooling & platforms
        </h3>

        <m.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6"
        >
          {items.map(({ name, src }) => (
            <m.li key={name} variants={fadeUp} whileHover={{ y: -2, scale: 1.03 }}>
              <div className="group w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition">
                <img
                  src={src}
                  alt={name}
                  loading="lazy"
                  className="mx-auto h-8 w-auto opacity-95 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </m.li>
          ))}
        </m.ul>
      </div>
    </section>
  );
}
