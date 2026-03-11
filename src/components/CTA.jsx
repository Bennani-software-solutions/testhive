// src/components/CTA.jsx
import { Button, ALink } from "./ui"

export default function CTA({ onBook }) {
  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Ready to ship confidently?</h2>
        <p className="mt-3 text-lg text-gray-600">Let us guide you on your path to a reliable product</p>

        <div className="mt-8 flex items-center justify-center gap-5">
          <button onClick={onBook} className="inline-flex items-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md active:scale-95">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
