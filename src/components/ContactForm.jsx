// src/components/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const company = form.company.value;
        const message = form.message.value;

        // Simple mailto fallback (works without backend)
        const mailto = `mailto:support@testhive.ma?subject=Website Contact from ${encodeURIComponent(
            name
        )}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(
            email
        )}%0D%0ACompany: ${encodeURIComponent(
            company
        )}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

        window.location.href = mailto;
        setStatus("sent");
    };

    return (
        <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="mx-auto mt-8 max-w-xl space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow"
        >
            <h3 className="text-lg font-semibold text-slate-900">Contact Us</h3>
            <p className="text-sm text-slate-600">
                Leave us a message and we’ll get back to you shortly.
            </p>

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                />
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                    Company
                </label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                />
            </div>

            <button
                type="submit"
                id="btn-submit-contact"
                className="inline-flex w-full justify-center rounded-lg bg-sky-500 px-4 py-2 font-semibold text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
                {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "sent" && (
                <p className="mt-2 text-sm text-emerald-600">
                    Thank you! We’ll be in touch soon.
                </p>
            )}
        </form>
    );
}
