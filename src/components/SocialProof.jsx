import { motion as m } from "framer-motion";

const stats = [
  { value: "0–1h", label: "Time difference with CET" },
  { value: "NL·FR·EN", label: "Your team's languages" },
  { value: "30d", label: "Month to month, no lock-in" },
];

export default function SocialProof() {
  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <m.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white">
                {s.value}
              </div>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
