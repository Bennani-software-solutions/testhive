import { useState } from "react";

export default function AcceleratorQualifyModal({ onClose }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        qaMaturity: "",
        painPoints: "",
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
                    _subject: "Accelerator Program Prospect",
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
                        Thanks for reaching out!
                    </h2>
                    <p className="mt-2 text-slate-600 text-sm">
                        We’ll review your responses and get back to you within 24h.
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
                    Tell us a bit about your QA process so we can see if the Accelerator Pack fits your needs.
                </p>

                <form onSubmit={onSubmit} className="mt-5 grid gap-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
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
                        type="text"
                        name="company"
                        placeholder="Company"
                        className="w-full rounded-md border p-2 text-sm"
                        value={form.company}
                        onChange={handleChange}
                    />

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            How would you describe your current QA process?
                        </label>
                        <select
                            name="qaMaturity"
                            className="w-full rounded-md border p-2 text-sm"
                            value={form.qaMaturity}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select one</option>
                            <option value="manual-only">Fully manual</option>
                            <option value="partial-automation">Some automation</option>
                            <option value="mature-automation">Mature automation setup</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            What are your biggest QA pain points right now?
                        </label>
                        <textarea
                            name="painPoints"
                            rows={4}
                            className="w-full rounded-md border p-2 text-sm"
                            placeholder="e.g. flaky tests, slow releases, no regression coverage..."
                            value={form.painPoints}
                            onChange={handleChange}
                            required
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
