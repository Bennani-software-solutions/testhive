// src/components/Hero.jsx
import { motion as m } from "framer-motion";
import { HashLink } from "react-router-hash-link";

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.57.775 4.964 2.105 6.946L4 29l7.237-2.067A11.945 11.945 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.937 0-3.74-.567-5.257-1.544l-.377-.24-4.31 1.232 1.216-4.204-.246-.387A9.955 9.955 0 0 1 6 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.146-7.146c-.281-.141-1.657-.817-1.913-.91-.257-.094-.445-.141-.634.141-.188.281-.725.91-.889 1.099-.164.188-.329.211-.61.07-.281-.141-1.188-.437-2.263-1.392-.837-.747-1.403-1.671-1.567-1.952-.164-.282-.017-.435.123-.576.127-.126.282-.329.423-.493.141-.164.188-.282.282-.47.094-.188.047-.352-.023-.493-.07-.141-.634-1.523-.868-2.084-.229-.55-.463-.475-.634-.484-.164-.009-.352-.011-.541-.011-.188 0-.494.07-.752.352-.258.282-.99.967-.99 2.358 0 1.391 1.013 2.735 1.155 2.926.141.188 2.003 3.06 4.858 4.291.68.293 1.21.467 1.623.598.681.217 1.3.186 1.789.113.545-.081 1.657-.676 1.892-1.33.235-.655.235-1.216.164-1.33-.07-.114-.258-.188-.54-.329z" />
    </svg>
  );
}


function HeroIllustration() {
  /* Milestone positions on the timeline (x coords) */
  const m1x = 80;
  const m2x = 175;
  const m3x = 320;
  const m4x = 450;
  const lineY = 150;

  return (
    <svg viewBox="0 0 520 260" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="90-day quality accelerator timeline" className="w-full h-auto">
      {/* Background */}
      <rect x="8" y="8" width="504" height="244" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5"/>

      {/* Title bar */}
      <rect x="8" y="8" width="504" height="40" rx="16" fill="#fff"/>
      <rect x="8" y="32" width="504" height="16" fill="#fff"/>
      <circle cx="32" cy="28" r="5" fill="#EF4444"/>
      <circle cx="50" cy="28" r="5" fill="#FBBF24"/>
      <circle cx="68" cy="28" r="5" fill="#10B981"/>
      <text x="260" y="32" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600" fill="#64748B" textAnchor="middle">Quality Engineering: 90 Days</text>

      {/* Divider below title bar */}
      <line x1="8" y1="48" x2="512" y2="48" stroke="#E2E8F0" strokeWidth="1"/>

      {/* Section label */}
      <text x="260" y="80" fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#334155" textAnchor="middle">Your Roadmap to Quality at Scale</text>

      {/* Timeline connector line */}
      <line x1={m1x} y1={lineY} x2={m4x} y2={lineY} stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 4"/>

      {/* Wider segment highlight for Build & Automate (week 5-10) */}
      <rect x={m2x + 15} y={lineY - 4} width={m3x - m2x - 30} height="8" rx="4" fill="#D1FAE5" opacity="0.6"/>

      {/* ─── Milestone 1: Audit & Quick Scan ─── */}
      <circle cx={m1x} cy={lineY} r="18" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="1.5"/>
      {/* Magnifying glass icon */}
      <circle cx={m1x - 2} cy={lineY - 2} r="6" fill="none" stroke="#4F46E5" strokeWidth="1.5"/>
      <line x1={m1x + 2} y1={lineY + 2} x2={m1x + 6} y2={lineY + 6} stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round"/>
      <text x={m1x} y={lineY - 28} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#4F46E5" textAnchor="middle">Week 1-2</text>
      <text x={m1x} y={lineY + 40} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600" fill="#334155" textAnchor="middle">Audit &amp; Quick Scan</text>
      <text x={m1x} y={lineY + 54} fontSize="9" fontFamily="system-ui,sans-serif" fill="#94A3B8" textAnchor="middle">Current state analysis</text>

      {/* ─── Milestone 2: Strategy & Setup ─── */}
      <circle cx={m2x} cy={lineY} r="18" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="1.5"/>
      {/* Target / compass icon */}
      <circle cx={m2x} cy={lineY} r="7" fill="none" stroke="#7C3AED" strokeWidth="1.2"/>
      <circle cx={m2x} cy={lineY} r="3" fill="#7C3AED"/>
      <text x={m2x} y={lineY - 28} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#7C3AED" textAnchor="middle">Week 3-4</text>
      <text x={m2x} y={lineY + 40} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600" fill="#334155" textAnchor="middle">Strategy &amp; Setup</text>
      <text x={m2x} y={lineY + 54} fontSize="9" fontFamily="system-ui,sans-serif" fill="#94A3B8" textAnchor="middle">Framework &amp; tooling</text>

      {/* ─── Milestone 3: Build & Automate ─── */}
      <circle cx={m3x} cy={lineY} r="22" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5"/>
      {/* Lightning bolt icon */}
      <path d={`M${m3x - 4},${lineY - 8} L${m3x - 1},${lineY - 1} L${m3x + 3},${lineY - 1} L${m3x},${lineY + 8} L${m3x + 3},${lineY + 1} L${m3x - 1},${lineY + 1} Z`} fill="#10B981"/>
      <text x={m3x} y={lineY - 32} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#10B981" textAnchor="middle">Week 5-10</text>
      <text x={m3x} y={lineY + 44} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600" fill="#334155" textAnchor="middle">Build &amp; Validate</text>
      <text x={m3x} y={lineY + 58} fontSize="9" fontFamily="system-ui,sans-serif" fill="#94A3B8" textAnchor="middle">Testing &amp; automation</text>

      {/* ─── Milestone 4: Handover & Scale ─── */}
      <circle cx={m4x} cy={lineY} r="18" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5"/>
      {/* Rocket / checkmark icon */}
      <path d={`M${m4x - 5},${lineY + 2} L${m4x - 1},${lineY + 6} L${m4x + 6},${lineY - 5}`} fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x={m4x} y={lineY - 28} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#F59E0B" textAnchor="middle">Week 11-12</text>
      <text x={m4x} y={lineY + 40} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600" fill="#334155" textAnchor="middle">Handover &amp; Scale</text>
      <text x={m4x} y={lineY + 54} fontSize="9" fontFamily="system-ui,sans-serif" fill="#94A3B8" textAnchor="middle">Team enablement</text>

    </svg>
  );
}

export default function Hero({ onBook }) {
  const whatsappHref =
    "https://wa.me/212715931703?text=Hi%20TestHive%2C%20I%27m%20interested%20in%20automating%20our%20critical%20tests%20in%2090%20days.";

  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow-light -z-10" aria-hidden />

      <div className="mx-auto max-w-7xl px-7">
        <div className="grid min-h-[70vh] items-center gap-12 py-1 md:grid-cols-2">
          {/* LEFT COPY */}
          <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="z-10">
            <m.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900"
            >
              Build the QA strategy <br className="hidden sm:block" />
              your team <span className="text-indigo-600">actually needs</span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-xl text-lg md:text-xl text-slate-700"
            >
              Whether you need hands-on testing, a tailored automation strategy, or AI-powered tooling — we help you invest in quality where it matters most. No silver bullets, just the right approach for your context.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 flex items-center gap-4 flex-wrap"
            >
              {/* Primary: Book Call */}
              <button
                id="btn-book-call-hero"
                onClick={onBook}
                className="inline-flex items-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-md active:scale-95 transition"
              >
                Book a Free Consultation
              </button>

              {/* Secondary: Platform */}
              <a
                href="https://app.testhive.ma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 active:scale-95 transition"
              >
                Explore the Platform
              </a>

              {/* WhatsApp */}
              <a
                id="btn-whatsapp-hero"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
              >
                <WhatsAppIcon className="h-5 w-5 text-green-500" />
                WhatsApp
              </a>
            </m.div>

            {/* Social proof */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex items-center gap-6 flex-wrap text-sm text-slate-500"
            >
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                <span>Assessment-first approach</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                <span>6+ QA disciplines</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                <span>Platform + human expertise</span>
              </div>
            </m.div>
          </m.div>

          {/* RIGHT — Inline SVG illustration */}
          <m.figure initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="w-full overflow-hidden rounded-3xl border border-slate-200 shadow-soft bg-white">
              <HeroIllustration />
            </div>
          </m.figure>
        </div>
      </div>
    </section>
  );
}
