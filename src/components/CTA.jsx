// src/components/CTA.jsx
export default function CTA({ onBook }) {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Want to talk about your testing situation?
        </h2>
        <p className="mt-3 text-lg text-slate-300">
          20 minutes on a call. No pitch, no slides. Just an honest conversation.
        </p>

        <div className="mt-8">
          <button
            onClick={onBook}
            className="inline-flex items-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-md active:scale-95 transition"
          >
            Book a free consultation
          </button>
        </div>
      </div>
    </section>
  );
}
