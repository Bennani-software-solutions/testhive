// src/components/Hero.jsx
import { useState } from "react";
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
                    // Retry after a short delay if the page hasn't mounted yet
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

          {/* RIGHT IMAGE */}
          <Motion.figure initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-soft bg-slate-100 flex items-center justify-center">
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
