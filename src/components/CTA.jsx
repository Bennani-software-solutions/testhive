// src/components/CTA.jsx
export default function CTA({ onBook }) {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Let's find the right approach for your team</h2>
        <p className="mt-3 text-lg text-slate-300">Every team's quality challenges are different. Tell us yours and we'll help you build a strategy that actually works.</p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <button onClick={onBook} className="inline-flex items-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-md active:scale-95 transition">
            Book a Free Consultation
          </button>
          <a
            href="https://app.testhive.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-slate-600 bg-transparent hover:bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white active:scale-95 transition"
          >
            Explore the Platform
          </a>
        </div>
      </div>
    </section>
  )
}
