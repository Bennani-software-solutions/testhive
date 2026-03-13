// src/components/NearshoreMorocco.jsx
import React, { useMemo, useState } from "react";
import { motion as m, useReducedMotion } from "framer-motion";
import {
  HandCoins,
  Clock,
  Languages,
  ShieldCheck,
  MapPin,
  Plane,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ContactForm from "./ContactForm";

const DEFAULTS = {
  savingRange: "30–50%",
  overlapHours: "6–8h",
  languages: "EN · FR · NL",
  flight: "2–3h to EU hubs",
  assets: {
    map: "/assets/map.png",
    cost: "/assets/money.png",
    timezone: "/assets/time.png",
    languages: "/assets/languages.png",
    security: "/assets/security.png",
  },
};

const EASE = [0.22, 1, 0.36, 1];

function useFadeUp() {
  const reduce = useReducedMotion();
  return useMemo(
    () => ({
      hidden: { opacity: 0, y: reduce ? 0 : 16 },
      show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
    }),
    [reduce]
  );
}

const group = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function Img({ src, alt, ratio = "aspect-[3/2]", fit = "object-cover", className = "" }) {
  const [ok, setOk] = useState(true);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`${ratio} w-full overflow-hidden rounded-2xl bg-white relative`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-100 to-slate-200" />
      )}
      {ok ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setOk(false)}
          className={`h-full w-full ${fit} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"
            } ${className}`}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center text-sm text-slate-500">
          Image unavailable
        </div>
      )}
    </div>
  );
}

export default function NearshoreMoroccoSection({ onBook, metrics, assets }) {
  const fadeUp = useFadeUp();
  const [showForm, setShowForm] = useState(false);

  const M = { ...DEFAULTS, ...(metrics || {}) };
  const A = { ...DEFAULTS.assets, ...(assets || {}) };

  return (
    <section
      id="nearshore"
      className="relative border-t border-gray-200 bg-white
      py-12 sm:py-16 md:py-20
      [background-image:radial-gradient(900px_500px_at_5%_-10%,#ecfeff_35%,transparent_70%),radial-gradient(700px_400px_at_95%_0%,#eef2ff_30%,transparent_70%)]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <m.div
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-left"
        >
          <m.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100"
          >
            <MapPin className="h-4 w-4" /> Nearshoring Advantage
          </m.p>
          <m.h2
            variants={fadeUp}
            className="mt-3 text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Why Nearshoring to Morocco Could Be the Smartest Move for Your QA Team
          </m.h2>

          <m.div
            variants={fadeUp}
            className="mt-4 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed"
          >
            <p>
              Many European tech teams face growing challenges: the demand for skilled QA engineers keeps
              rising while local talent becomes harder to find and more expensive each year. This often forces
              companies to choose between keeping up with delivery speed or maintaining software quality.
            </p>

            <p>
              Nearshoring to Morocco offers a practical and sustainable alternative. You gain access to senior
              test automation specialists who work in the same time zone and communicate fluently in English,
              French, or Dutch. During the winter, Morocco and most of Europe share the same time. In summer,
              the difference is just one hour, which means daily collaboration stays smooth and natural
              throughout the year.
            </p>

            <p>
              Morocco’s technology ecosystem has grown rapidly thanks to long-term investment in education,
              research, and digital infrastructure. The country now produces thousands of software engineers
              each year, and its teams have earned international recognition in areas such as robotics, AI,
              and automation.
            </p>

            <p>
              For European companies looking to strengthen their QA capabilities without losing proximity,
              control, or culture, Morocco offers a unique opportunity. It combines technical excellence,
              cultural alignment, and cost efficiency in a way that feels close to home.
            </p>
          </m.div>
        </m.div>

        {/* Visual + Proofs */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <m.figure
            initial={{ opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="relative rounded-3xl border border-gray-200 bg-slate-50 p-4 shadow-sm"
          >
            {/* EU–Morocco connection illustration */}
            <div className="aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-emerald-50 flex items-center justify-center">
              <svg viewBox="0 0 400 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* EU region */}
                <rect x="40" y="30" width="120" height="80" rx="12" className="fill-white stroke-indigo-200" strokeWidth="1.5"/>
                <text x="100" y="55" textAnchor="middle" className="fill-indigo-700 text-[11px] font-bold">Europe</text>
                <text x="100" y="72" textAnchor="middle" className="fill-slate-500 text-[8px]">NL  BE  DE  FR  UK</text>
                <circle cx="65" cy="90" r="4" className="fill-indigo-400"/>
                <circle cx="82" cy="85" r="4" className="fill-indigo-400"/>
                <circle cx="100" cy="88" r="4" className="fill-indigo-300"/>
                <circle cx="118" cy="86" r="4" className="fill-indigo-400"/>
                <circle cx="135" cy="90" r="4" className="fill-indigo-300"/>
                {/* Morocco region */}
                <rect x="240" y="120" width="120" height="80" rx="12" className="fill-white stroke-emerald-200" strokeWidth="1.5"/>
                <text x="300" y="148" textAnchor="middle" className="fill-emerald-700 text-[11px] font-bold">Morocco</text>
                <text x="300" y="165" textAnchor="middle" className="fill-slate-500 text-[8px]">Casablanca  Rabat</text>
                <circle cx="280" cy="180" r="4" className="fill-emerald-400"/>
                <circle cx="300" cy="178" r="4" className="fill-emerald-500"/>
                <circle cx="320" cy="180" r="4" className="fill-emerald-400"/>
                {/* Connection lines */}
                <path d="M160 80 C200 80, 200 160, 240 160" className="stroke-indigo-300" strokeWidth="2" strokeDasharray="6 4"/>
                <path d="M160 70 C210 70, 210 150, 240 150" className="stroke-emerald-300" strokeWidth="2" strokeDasharray="6 4"/>
                {/* Labels */}
                <rect x="175" y="105" width="55" height="22" rx="6" className="fill-indigo-600"/>
                <text x="202" y="119" textAnchor="middle" className="fill-white text-[8px] font-semibold">Same TZ</text>
                {/* Plane icon */}
                <text x="195" y="100" textAnchor="middle" className="fill-slate-400 text-[14px]">✈</text>
                <text x="195" y="145" textAnchor="middle" className="fill-slate-400 text-[7px]">2-3h flight</text>
              </svg>
            </div>
            <div className="pointer-events-none absolute left-4 sm:left-6 top-4 sm:top-6 inline-flex items-center gap-2 rounded-full bg-white/85 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium text-indigo-700 ring-1 ring-indigo-100 backdrop-blur">
              <Clock className="h-4 w-4" /> 6–8 h CET / UK overlap (seasonal)
            </div>
            <div className="pointer-events-none absolute right-4 sm:right-6 bottom-4 sm:bottom-6 inline-flex items-center gap-2 rounded-full bg-white/85 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium text-emerald-700 ring-1 ring-emerald-100 backdrop-blur">
              <Plane className="h-4 w-4" /> {M.flight}
            </div>
          </m.figure>

          {/* Stats + bullets */}
          <m.div
            variants={group}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col gap-6"
          >
            <m.ul variants={group} className="grid gap-4 sm:grid-cols-3">
              {[
                { k: M.savingRange, v: "Cost efficiency" },
                { k: M.overlapHours, v: "CET/UK overlap" },
                { k: M.languages, v: "Multilingual" },
              ].map(({ k, v }) => (
                <m.li
                  key={v}
                  variants={fadeUp}
                  className="rounded-2xl border border-gray-200 bg-gray-50 px-4 sm:px-6 py-4 sm:py-5 text-center"
                >
                  <div className="text-2xl font-extrabold text-slate-900">{k}</div>
                  <div className="mt-1 text-xs font-medium tracking-wide text-slate-600 uppercase">
                    {v}
                  </div>
                </m.li>
              ))}
            </m.ul>

            <m.ul variants={group} className="grid gap-3 text-[13px] sm:text-sm">
              {[
                "We embed with your developers, not just testing, but helping shape quality decisions from the start.",
                "Our engineers bring structure and rhythm: stable test runs, clear dashboards, and no last-minute release chaos.",
                "All collaboration happens under NDA, with strict access control and secure pipelines you can trust.",
              ].map((t) => (
                <m.li
                  key={t}
                  variants={fadeUp}
                  className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span className="text-slate-700">{t}</span>
                </m.li>
              ))}
            </m.ul>

          </m.div>
        </div>

        {/* Nice to Know Section */}
        <m.section
          id="morocco-it-landscape"
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mt-14 max-w-5xl text-left space-y-6"
        >
          <m.h3
            variants={fadeUp}
            className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900"
          >
            Morocco’s Tech Momentum: A Rising Hub for Digital Excellence
          </m.h3>

          <m.div
            variants={fadeUp}
            className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4"
          >
            <p>
              Morocco’s journey toward becoming a leading nearshore destination didn’t happen by chance.
              Over the past decade, the country has invested heavily in education, infrastructure,
              and innovation to nurture a thriving digital economy.
            </p>

            <p>
              Through government-backed programs like the{" "}
              <a
                href="https://www.moroccoworldnews.com/2023/11/358708/morocco-digital-2030-strategy-aims-to-strengthen-it-sector"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-800"
              >
                Digital 2030 Strategy
              </a>
              , Morocco is training thousands of engineers and creating tech parks that attract both startups
              and global players. Cities such as Casablanca, Rabat, and Tangier have become regional centers
              for software development and quality assurance.
            </p>

            <p>
              Universities are aligning their programs with international standards, while local tech
              initiatives encourage hands-on innovation. Moroccan students have repeatedly earned recognition
              in international robotics and artificial intelligence competitions, showing the depth of local
              talent and creativity.
            </p>

            <p>
              Combined with a European-friendly time zone, multilingual teams, and strong cultural alignment,
              Morocco offers a dependable foundation for sustainable QA partnerships that balance cost,
              collaboration, and quality.
            </p>
          </m.div>

          <m.ul
            variants={group}
            className="grid gap-4 sm:grid-cols-2 text-sm sm:text-base"
          >
            {[
              {
                title: "Digital 2030 Vision",
                text: "A long-term government strategy focused on digital transformation, education reform, and cloud infrastructure investments.",
                link: "https://www.moroccoworldnews.com/2023/11/358708/morocco-digital-2030-strategy-aims-to-strengthen-it-sector",
              },
              {
                title: "Education and Talent Growth",
                text: "National programs and coding schools like 1337 and YouCode produce thousands of skilled developers and QA engineers every year.",
                link: "https://www.moroccoworldnews.com/2024/04/365112/moroccos-youcode-and-1337-coding-schools-train-next-generation-of-tech-talent",
              },
              {
                title: "Innovation Recognized Internationally",
                text: "Moroccan teams have earned global awards for robotics and AI, proving the country’s commitment to research and innovation.",
                link: "https://www.moroccoworldnews.com/2023/06/355991/moroccan-students-win-international-robotics-prize",
              },
              {
                title: "Global Tech Investments",
                text: "International firms including Capgemini, Dell, and Sopra Steria have established nearshore centers in Morocco, validating its strategic position.",
                link: "https://northafricapost.com/72317-capgemini-expands-operations-in-morocco-as-it-invests-in-digital-skills.html",
              },
            ].map((c) => (
              <m.li
                key={c.title}
                variants={fadeUp}
                whileHover={{ y: -2 }}
                className="rounded-xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white px-4 py-4 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-slate-900">{c.title}</h4>
                <p className="mt-1 text-slate-600">{c.text}</p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Read more →
                </a>
              </m.li>
            ))}
          </m.ul>
        </m.section>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBook}
            className="rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md transition active:scale-95"
          >
            Book a 30-min Nearshore Fit Call
          </button>
          <button
            onClick={() => setShowForm(true)}
            className="rounded-xl border border-indigo-400 px-6 py-3 text-sm sm:text-base font-semibold text-indigo-700 hover:bg-indigo-50 active:scale-95"
          >
            Request More Information
          </button>
        </div>

        {/* Contact Form Modal */}
        {showForm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          >
            <div
              className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
                aria-label="Close form"
              >
                ✕
              </button>
              <ContactForm
                onClose={() => setShowForm(false)}
                endpoint="https://formspree.io/f/mgvnzebp"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
