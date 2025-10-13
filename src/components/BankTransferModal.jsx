import { useState, useMemo } from "react";

export default function BankTransferModal({
    amountCents = 499900, // €4,999.00
    currency = "EUR",
    businessName = "Bennani Software Solutions",
    bankName = "Attijariwafa Bank",
    iban = "MA64 007 500 00086 75000 000072 16",
    bic = "BCMAMAMC",
    onClose,
    notifyEndpoint = "/api/notify-bank-transfer",
    customerEmailRequired = true,
}) {
    const [file, setFile] = useState(null);
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [note, setNote] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    // Unique payment reference for the transfer
    const reference = useMemo(() => {
        const ts = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
        return `QA-ACCELERATOR-${ts}`;
    }, []);

    const fmtAmount = useMemo(() => {
        return new Intl.NumberFormat(undefined, {
            style: "currency",
            currency,
        }).format(amountCents / 100);
    }, [amountCents, currency]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (customerEmailRequired && !email) {
            setError("Email is required for confirmation.");
            return;
        }

        try {
            setSubmitting(true);
            const formData = {
                email,
                company,
                note,
                reference,
                amount: fmtAmount,
                currency,
                _subject: `Bank Transfer Proof - ${reference}`,
                _replyto: email,
                _to: "support@testhive.ma",
            };

            const res = await fetch("https://formspree.io/f/mgvnzebp", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Submission failed");

            alert("Thank you! Your payment proof was sent successfully.");
            onClose?.();
        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setSubmitting(false);
        }
    };



















    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-start justify-between">
                    <h2 className="text-xl font-semibold">Pay via Bank Transfer</h2>
                    <button
                        onClick={onClose}
                        className="rounded-md p-2 text-slate-500 hover:bg-slate-100"
                    >
                        ✕
                    </button>
                </div>

                <p className="mt-3 text-sm text-slate-600">
                    Please transfer <strong>{fmtAmount}</strong> to:
                </p>
                <div className="mt-3 grid gap-2 rounded-xl bg-slate-50 p-4 text-sm ring-1 ring-slate-200">
                    <Row label="Recipient" value={businessName} />
                    <Row label="Bank" value={bankName} />
                    <Row label="IBAN" value={iban} copy />
                    <Row label="SWIFT/BIC" value={bic} copy />
                    <Row label="Reference" value={reference} copy />
                    <Row label="Description" value="Quality Accelerator Pack (one-time)" />
                </div>

                <form onSubmit={onSubmit} className="mt-5 grid gap-3">
                    <div className="grid gap-2">
                        <label className="text-sm font-medium">
                            Email for confirmation{" "}
                            {customerEmailRequired && (
                                <span className="text-rose-600">*</span>
                            )}
                        </label>
                        <input
                            type="email"
                            placeholder="you@company.com"
                            className="w-full rounded-md border p-2 text-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={customerEmailRequired}
                        />
                    </div>

                    <div className="grid gap-2">
                        <label className="text-sm font-medium">Company (optional)</label>
                        <input
                            type="text"
                            placeholder="Company Ltd."
                            className="w-full rounded-md border p-2 text-sm"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>

                    <div className="grid gap-2">
                        <label className="text-sm font-medium">Note (optional)</label>
                        <textarea
                            className="w-full rounded-md border p-2 text-sm"
                            placeholder="Additional information"
                            rows={3}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>

                    <div className="grid gap-2">
                        <label className="text-sm font-medium">
                            Upload proof of payment (PDF or image){" "}
                            <span className="text-rose-600">*</span>
                        </label>
                        <input
                            type="file"
                            accept="image/*,application/pdf"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                            className="w-full rounded-md border p-2 text-sm"
                            required
                        />
                    </div>

                    {error && (
                        <div className="rounded-lg bg-rose-50 p-3 text-sm text-rose-700 ring-1 ring-rose-200">
                            {error}
                        </div>
                    )}

                    <div className="mt-2 flex gap-3">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600 disabled:opacity-60"
                        >
                            {submitting ? "Sending…" : "Submit Proof"}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border px-4 py-2 text-sm font-semibold"
                        >
                            Cancel
                        </button>
                    </div>
                </form>

                <p className="mt-3 text-[11px] text-slate-500">
                    We verify transfers within 1–3 business days. Keep your reference
                    code safe to avoid delays.
                </p>
            </div>
        </div>
    );
}

function Row({ label, value, copy = false }) {
    const copyValue = async () => {
        try {
            await navigator.clipboard.writeText(value);
            alert(`${label} copied!`);
        } catch { }
    };
    return (
        <div className="flex items-center justify-between gap-3">
            <div className="text-slate-500">{label}</div>
            <div className="flex items-center gap-2">
                <code className="rounded-md bg-white px-2 py-1 text-[12px]">{value}</code>
                {copy && (
                    <button
                        type="button"
                        onClick={copyValue}
                        className="rounded-md border px-1.5 py-0.5 text-[11px] hover:bg-slate-100"
                    >
                        Copy
                    </button>
                )}
            </div>
        </div>
    );
}
