// src/components/Hero.jsx
import { motion as m } from "framer-motion";
import { HashLink } from "react-router-hash-link";

export default function Hero({ onBook }) {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow-light -z-10" aria-hidden />

      <div className="mx-auto max-w-7xl px-7">
        <div className="grid min-h-[70vh] items-center gap-12 py-1 md:grid-cols-2">
          {/* Left */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <m.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              A senior QA engineer in your team{" "}
              <span className="text-indigo-600">within 2 weeks.</span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-xl text-lg md:text-xl text-slate-700"
            >
              Experienced testers from Morocco who show up in your standups
              and ship work from week one. Monthly contracts, no lock-in.
              We stay because we deliver results, not because you signed a contract.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 flex items-center gap-4 flex-wrap"
            >
              <button
                id="btn-book-call-hero"
                onClick={onBook}
                className="inline-flex items-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-md active:scale-95 transition"
              >
                Book a free consultation
              </button>

              <HashLink
                smooth
                to="/#features"
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 active:scale-95 transition"
              >
                See our services
              </HashLink>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex items-center gap-6 flex-wrap text-sm text-slate-500"
            >
              <span>0–1h from CET</span>
              <span className="text-slate-300">|</span>
              <span>Dutch, English, French, Arabic</span>
              <span className="text-slate-300">|</span>
              <span>Experienced testers only</span>
            </m.div>
          </m.div>

          {/* Right — Photo */}
          <m.figure
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <img
              src="/assets/abdelaziz.jpg"
              alt="TestHive team"
              className="w-full max-w-md mx-auto rounded-3xl shadow-xl object-cover"
            />
          </m.figure>
        </div>
      </div>
    </section>
  );
}
