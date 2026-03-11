// src/components/Hero.jsx
import { motion as Motion } from "framer-motion";
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
  return (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Test automation dashboard illustration" className="w-full h-auto">
      {/* Editor window */}
      <rect x="16" y="16" width="448" height="328" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5"/>
      {/* Title bar */}
      <rect x="16" y="16" width="448" height="40" rx="16" fill="#fff"/>
      <rect x="16" y="40" width="448" height="16" fill="#fff"/>
      <circle cx="40" cy="36" r="5" fill="#EF4444"/>
      <circle cx="58" cy="36" r="5" fill="#FBBF24"/>
      <circle cx="76" cy="36" r="5" fill="#10B981"/>
      <text x="200" y="40" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600" fill="#64748B" textAnchor="middle">scenario.feature</text>
      {/* Tab bar */}
      <rect x="16" y="56" width="448" height="28" fill="#F1F5F9"/>
      <rect x="24" y="60" width="80" height="20" rx="4" fill="#E0E7FF"/>
      <text x="64" y="74" fontSize="9" fontFamily="system-ui,sans-serif" fontWeight="600" fill="#4F46E5" textAnchor="middle">Scenarios</text>
      <rect x="112" y="60" width="64" height="20" rx="4" fill="transparent"/>
      <text x="144" y="74" fontSize="9" fontFamily="system-ui,sans-serif" fontWeight="500" fill="#94A3B8" textAnchor="middle">Results</text>
      <rect x="184" y="60" width="52" height="20" rx="4" fill="transparent"/>
      <text x="210" y="74" fontSize="9" fontFamily="system-ui,sans-serif" fontWeight="500" fill="#94A3B8" textAnchor="middle">Logs</text>
      {/* BDD scenario lines */}
      <text x="40" y="108" fontSize="11" fontFamily="ui-monospace,monospace" fontWeight="700" fill="#4F46E5">Feature:</text>
      <text x="102" y="108" fontSize="11" fontFamily="ui-monospace,monospace" fill="#334155"> User Login</text>
      <text x="56" y="128" fontSize="11" fontFamily="ui-monospace,monospace" fontWeight="700" fill="#4F46E5">Scenario:</text>
      <text x="126" y="128" fontSize="11" fontFamily="ui-monospace,monospace" fill="#334155"> Valid credentials</text>
      <text x="72" y="148" fontSize="11" fontFamily="ui-monospace,monospace" fontWeight="600" fill="#7C3AED">Given</text>
      <text x="110" y="148" fontSize="11" fontFamily="ui-monospace,monospace" fill="#64748B"> user is on login page</text>
      <text x="72" y="166" fontSize="11" fontFamily="ui-monospace,monospace" fontWeight="600" fill="#7C3AED">When</text>
      <text x="105" y="166" fontSize="11" fontFamily="ui-monospace,monospace" fill="#64748B"> they enter valid credentials</text>
      <text x="72" y="184" fontSize="11" fontFamily="ui-monospace,monospace" fontWeight="600" fill="#7C3AED">Then</text>
      <text x="101" y="184" fontSize="11" fontFamily="ui-monospace,monospace" fill="#64748B"> they see the dashboard</text>
      {/* Generate button */}
      <rect x="40" y="204" width="130" height="32" rx="8" fill="#4F46E5"/>
      <text x="82" y="224" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600" fill="#fff">&#9889; Generate Tests</text>
      {/* Divider */}
      <line x1="16" y1="252" x2="464" y2="252" stroke="#E2E8F0" strokeWidth="1"/>
      {/* Results panel */}
      <text x="40" y="276" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#334155">Test Results</text>
      <text x="160" y="276" fontSize="10" fontFamily="system-ui,sans-serif" fill="#94A3B8">3 passed  &#183;  1 failed  &#183;  0.8s</text>
      {/* Pass rows */}
      <circle cx="48" cy="298" r="6" fill="#10B981"/>
      <text x="46" y="301" fontSize="8" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#fff" textAnchor="middle">&#10003;</text>
      <text x="62" y="302" fontSize="10" fontFamily="ui-monospace,monospace" fill="#334155">Login with valid credentials</text>
      <text x="420" y="302" fontSize="9" fontFamily="ui-monospace,monospace" fill="#10B981" textAnchor="end">0.3s</text>
      <circle cx="48" cy="318" r="6" fill="#10B981"/>
      <text x="46" y="321" fontSize="8" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#fff" textAnchor="middle">&#10003;</text>
      <text x="62" y="322" fontSize="10" fontFamily="ui-monospace,monospace" fill="#334155">Redirect to dashboard</text>
      <text x="420" y="322" fontSize="9" fontFamily="ui-monospace,monospace" fill="#10B981" textAnchor="end">0.2s</text>
      {/* Fail row */}
      <circle cx="48" cy="338" r="6" fill="#EF4444"/>
      <text x="46" y="341" fontSize="8" fontFamily="system-ui,sans-serif" fontWeight="700" fill="#fff" textAnchor="middle">&#10007;</text>
      <text x="62" y="342" fontSize="10" fontFamily="ui-monospace,monospace" fill="#334155">Invalid password error msg</text>
      <text x="420" y="342" fontSize="9" fontFamily="ui-monospace,monospace" fill="#EF4444" textAnchor="end">0.3s</text>
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
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="z-10">
            <Motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900"
            >
              Automate your most <br className="hidden sm:block" />
              critical tests in <span className="text-indigo-600">90 days</span>
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-xl text-lg md:text-xl text-slate-700"
            >
              with our one of a kind accelerator pack we plug into your workflow and take repetitive regression testing off your team’s plate,
              so developers and business can focus on what really moves the product forward.           </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 flex items-center gap-4 flex-wrap"
            >
              {/* Explore Packages */}
              <HashLink
                smooth to="/services/automation#automation_packages"
                scroll={el => {
                  if (el) {
                    // The element exists, scroll smoothly
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    // Retry after a short delay if the page hasn’t mounted yet
                    setTimeout(() => {
                      const element = document.getElementById("automation_packages");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 500);
                  }
                }}
                className="inline-flex items-center rounded-xl bg-indigo-500 hover:bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md"
              >
                Explore Our Packages
              </HashLink>

              {/* Book Call */}
              <button
                id="btn-book-call-hero"
                onClick={onBook}
                className="inline-flex items-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md active:scale-95"
              >
                Book a Free Consultation
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
                WhatsApp
              </a>
            </Motion.div>
          </Motion.div>

          {/* RIGHT — Inline SVG illustration */}
          <Motion.figure initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="w-full overflow-hidden rounded-3xl border border-slate-200 shadow-soft bg-white">
              <HeroIllustration />
            </div>
          </Motion.figure>
        </div>
      </div>
    </section>
  );
}
