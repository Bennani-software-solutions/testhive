import React, { useState } from "react";

/**
 * Contact form for requesting more information.
 * Works with Formspree and automatically closes the modal after success.
 *
 * Props:
 *   onSuccess: optional callback (e.g. to close modal)
 */
export default function InfoRequestForm({ onSuccess }) {
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formspree.io/f/mgvnzebp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                e.target.reset();

                // ✅ Show confirmation briefly, then close modal
                setTimeout(() => {
                    onSuccess?.(); // close the modal if handler provided
                    setStatus("idle");
                }, 2000);
            } else {
                throw new Error("Failed to send message");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-3 text-left"
            id="info-request-form"
        >
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
            <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
            <textarea
                name="message"
                placeholder="Tell us what you’d like to know..."
                rows="4"
                required
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />

            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 active:scale-95 disabled:opacity-70"
            >
                {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* ✅ Inline confirmation / error messages */}
            {status === "success" && (
                <p className="text-emerald-600 text-sm mt-2">
                    ✅ Message sent successfully! We’ll get back to you shortly.
                </p>
            )}
            {status === "error" && (
                <p className="text-red-600 text-sm mt-2">
                    ⚠️ Something went wrong. Please try again or email us directly at{" "}
                    <a href="mailto:support@testhive.ma" className="underline">
                        support@testhive.ma
                    </a>
                </p>
            )}
        </form>
    );
}
