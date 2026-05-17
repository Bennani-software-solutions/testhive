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
              Senior QA in your team,{" "}
              <span className="text-indigo-600">working your hours.</span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-xl text-lg md:text-xl text-slate-700"
            >
              Experienced testers from Morocco, embedded in European product teams.
              They show up in your standups, ship from week one, and there is one
              name on the invoice you can call when something breaks.
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
                Book a 20-min call
              </button>

              <HashLink
                smooth
                to="/#process"
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 active:scale-95 transition"
              >
                See how we work
              </HashLink>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex items-center gap-6 flex-wrap text-sm text-slate-500"
            >
              <span>Same hours as you (CET)</span>
              <span className="text-slate-300">|</span>
              <span>Dutch, English, French, Arabic</span>
              <span className="text-slate-300">|</span>
              <span>Every test reviewed by an engineer</span>
            </m.div>
          </m.div>

          {/* Right — Founder photo + caption */}
          <m.figure
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex flex-col items-center"
          >
            <img
              src="/assets/abdelaziz.jpg"
              alt="Abdelaziz Bannani, founder of TestHive"
              className="w-full max-w-md rounded-3xl shadow-xl object-cover"
            />
            <figcaption className="mt-4 max-w-md text-sm text-slate-600 text-center">
              <strong className="text-slate-900">Abdelaziz Bannani</strong>
              {" · "}founder
              <br />
              <span className="text-slate-500">
                [10+ years] of QA across [previous employers].
                One owner you can call.
              </span>
              {" · "}
              <a
                href="https://www.linkedin.com/in/[linkedin-handle]/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                LinkedIn
              </a>
            </figcaption>
          </m.figure>
        </div>
      </div>
    </section>
  );
}
