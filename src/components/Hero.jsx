// src/components/Hero.jsx
import { useState } from "react";
import { motion as Motion } from "framer-motion";

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19.11 17.33c-.31-.16-1.8-.89-2.07-.99..."></path>
    </svg>
  );
}

export default function Hero({ onBook }) {
  const [imgOk, setImgOk] = useState(true);

  const whatsappHref =
    "https://wa.me/212715931703?text=Hi%20TestHive%2C%20I%27m%20interested%20in%20automating%20our%20critical%20tests%20in%2090%20days.";

  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow-light -z-10" aria-hidden />

      <div className="mx-auto max-w-7xl px-7">
        <div className="grid min-h-[70vh] items-center gap-12 py-1 md:grid-cols-2">
          {/* LEFT COPY */}
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="z-10">
            <Motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900"
            >
              Automate your most <br className="hidden sm:block" />
              critical tests in <span className="text-sky-600">90 days</span>
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-xl text-lg md:text-xl text-slate-700"
            >
              We automate approximately 10–20 of your highest-priority test
              scenarios and integrate them into your CI/CD pipeline, enabling
              faster releases and greater confidence in each deployment.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 flex items-center gap-4 flex-wrap"
            >
              {/* Explore Packages */}
              <a
                id="btn-explore-packages"
                href="/services/automation#packages"
                className="inline-flex items-center rounded-xl bg-sky-500 hover:bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md"
              >
                Explore Packages
              </a>

              {/* Book Call */}
              <button
                id="btn-book-call-hero"
                onClick={onBook}
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:brightness-110 active:scale-95"
              >
                Let's Talk
              </button>

              {/* WhatsApp */}
              <a
                id="btn-whatsapp-hero"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
              >
                <WhatsAppIcon className="h-5 w-5 text-green-500" />
                WhatsApp us
              </a>
            </Motion.div>
          </Motion.div>

          {/* RIGHT IMAGE */}
          <Motion.figure initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-soft bg-gradient-to-br from-sky-100 via-violet-100 to-amber-100 flex items-center justify-center">
              {imgOk && (
                <img src="/assets/HERO.png" alt="TestHive hero illustration" className="h-full w-full object-contain" onError={() => setImgOk(false)} />
              )}
            </div>
            <img src="/assets/testHive.png" alt="TestHive mark" className="absolute -bottom-6 -right-6 w-20 h-20 rounded-xl shadow-soft border border-slate-200 bg-white p-2" />
          </Motion.figure>
        </div>
      </div>
    </section>
  );
}
