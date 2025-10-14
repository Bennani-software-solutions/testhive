import { useState } from "react";

export default function AcceleratorQualifyModal({ onClose }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        whatToAutomate: "",
        qaContext: "",
        testerProfile: "",
        bottlenecks: "",
        goals: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSubmitting(true);

        try {
            const res = await fetch("https://formspree.io/f/mgvnzebp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    _subject: "Accelerator Program Qualification",
                    ...form,
                }),
            });

            if (!res.ok) throw new Error("Submission failed");
            setSubmitted(true);
        } catch (err) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted)
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center">
                    <h2 className="text-xl font-semibold text-slate-900">
                        Thanks for sharing your context!
                    </h2>
                    <p className="mt-2 text-slate-600 text-sm">
                        We’ll review your answers and get back to you within 1-3 business days.
                    </p>
                    <button
                        onClick={onClose}
                        className="mt-4 rounded-xl bg-emerald-500 text-white px-4 py-2 text-sm font-semibold"
                    >
                        Close
                    </button>
                </div>
            </div>
        );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-start justify-between">
                    <h2 className="text-xl font-semibold">Join the Accelerator Program</h2>
                    <button
                        onClick={onClose}
                        className="rounded-md p-2 text-slate-500 hover:bg-slate-100"
                    >
                        ✕
                    </button>
                </div>

                <p className="mt-3 text-sm text-slate-600">
                    Help us understand your current QA setup and what you’d like to improve.
                </p>

                <form onSubmit={onSubmit} className="mt-5 grid gap-3">
                    {/* Basic Contact Info */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        className="w-full rounded-md border p-2 text-sm"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Work email"
                        className="w-full rounded-md border p-2 text-sm"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        className="w-full rounded-md border p-2 text-sm"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company name"
                        className="w-full rounded-md border p-2 text-sm"
                        value={form.company}
                        onChange={handleChange}
                    />

                    {/* What to Automate */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            What do you want to automate?
                        </label>
                        <select
                            name="whatToAutomate"
                            className="w-full rounded-md border p-2 text-sm"
                            value={form.whatToAutomate}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select one</option>
                            <option value="Regression suite">Regression suite</option>
                            <option value="Sanity checks">Sanity checks</option>
                            <option value="APIs">APIs</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Context & Challenges */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Context & Challenges
                        </label>
                        <textarea
                            name="qaContext"
                            rows={4}
                            placeholder="Describe your current QA setup, goals, and biggest challenges."
                            className="w-full rounded-md border p-2 text-sm"
                            value={form.qaContext}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Who is currently responsible */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Who is currently responsible for testing?
                        </label>
                        <input
                            type="text"
                            name="testerProfile"
                            placeholder="e.g. Manual tester, developer, outsourced QA..."
                            className="w-full rounded-md border p-2 text-sm"
                            value={form.testerProfile}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Additional Insight Questions */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            What slows your QA process down the most?
                        </label>
                        <textarea
                            name="bottlenecks"
                            rows={3}
                            placeholder="e.g. flaky tests, unclear ownership, lack of coverage..."
                            className="w-full rounded-md border p-2 text-sm"
                            value={form.bottlenecks}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            What would success look like for you in the next 3 months?
                        </label>
                        <textarea
                            name="goals"
                            rows={3}
                            placeholder="e.g. fully automated regression suite, CI/CD integration..."
                            className="w-full rounded-md border p-2 text-sm"
                            value={form.goals}
                            onChange={handleChange}
                        />
                    </div>

                    {error && (
                        <div className="rounded-lg bg-rose-50 p-3 text-sm text-rose-700 ring-1 ring-rose-200">
                            {error}
                        </div>
                    )}

                    <div className="mt-3 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border px-4 py-2 text-sm font-semibold"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600 disabled:opacity-60"
                        >
                            {submitting ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
