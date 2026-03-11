import { useState } from "react";
import { X, Video, Calendar, Clock, Copy, Check } from "lucide-react";

function generateRoomId() {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const seg = () =>
    Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `testhive-${seg()}-${seg()}`;
}

export default function BookingModal({ open, onClose }) {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [roomUrl, setRoomUrl] = useState("");
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    const room = generateRoomId();
    const jitsiUrl = `https://meet.jit.si/${room}`;

    try {
      const res = await fetch("https://formspree.io/f/mgvnzebp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `New consultation booking from ${data.name}`,
          meetingLink: jitsiUrl,
        }),
      });

      if (res.ok) {
        setRoomUrl(jitsiUrl);
        setStatus("success");
      } else {
        throw new Error("Submit failed");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(roomUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setStatus("idle");
    setRoomUrl("");
    setCopied(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl">
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6">
          {status === "success" ? (
            <div className="text-center py-4">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                <Video className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Booking Confirmed</h3>
              <p className="mt-2 text-sm text-slate-600">
                We've received your request and will confirm the time via email. Use the link below to join the call.
              </p>

              <div className="mt-5 flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <Video className="h-4 w-4 text-indigo-600 shrink-0" />
                <a
                  href={roomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:underline truncate flex-1 text-left"
                >
                  {roomUrl}
                </a>
                <button
                  onClick={handleCopy}
                  className="shrink-0 rounded-lg p-1.5 hover:bg-slate-200 transition"
                  aria-label="Copy link"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-slate-400" />
                  )}
                </button>
              </div>

              <button
                onClick={handleClose}
                className="mt-6 w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white transition"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
                    <Calendar className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Book a Free Consultation
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> 30 minutes via Jitsi Meet
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred date & time
                  </label>
                  <input
                    type="datetime-local"
                    name="preferredTime"
                    required
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    What would you like to discuss?
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us about your project or testing needs..."
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition active:scale-95 disabled:opacity-70 mt-2"
                >
                  {status === "sending" ? "Booking..." : "Book Consultation"}
                </button>

                {status === "error" && (
                  <p className="text-red-600 text-sm mt-2">
                    Something went wrong. Please try again or email us at{" "}
                    <a
                      href="mailto:support@testhive.ma"
                      className="underline"
                    >
                      support@testhive.ma
                    </a>
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
