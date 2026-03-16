// src/components/Footer.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, MessageCircle } from "lucide-react";
import useDevMode from "../hooks/useDevMode";

const services = [
  ["Test Automation", "/services/automation"],
  ["Functional Testing", "/services/functional-testing"],
  ["Pen Testing", "/services/pen-testing"],
  ["Consulting", "/services/consulting"],
  ["Mentoring", "/services/mentoring"],
  ["QA Outsourcing", "/services/qa-outsourcing"],
];

export default function Footer() {
  const isDev = useDevMode();
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState("idle"); // idle | sending | done | error

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mgvnzebp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "Newsletter signup" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubStatus("done");
      setEmail("");
    } catch {
      setSubStatus("error");
    }
  };
  const whatsappHref =
    "https://wa.me/212715931703?text=Hi%20TestHive%2C%20I%27m%20interested%20in%20your%20QA%20services.";

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <img src="/assets/testHive.png" alt="TestHive" className="h-12 mb-3" />
          <p className="text-sm text-slate-600">
            TestHive is your partner in delivering reliable software through expert QA services, tailored to your needs.
          </p>
        </div>

        {/* Product & Services */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Product</h3>
          <ul className="space-y-2 text-sm mb-5">
            <li>
              <Link to="/platform" className="text-slate-600 hover:text-indigo-600 transition-colors">
                TestHive Platform
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-slate-600 hover:text-indigo-600 transition-colors">
                Pricing
              </Link>
            </li>
          </ul>

          <h3 className="text-sm font-semibold text-slate-900 mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            {services.map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="text-slate-600 hover:text-indigo-600 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/whytesthive" className="text-slate-600 hover:text-indigo-600 transition-colors">
                Why TestHive?
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-slate-600 hover:text-indigo-600 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-slate-600 hover:text-indigo-600 transition-colors">
                FAQ
              </Link>
            </li>
            {isDev && (
              <>
                <li>
                  <Link to="/case-studies" className="text-slate-600 hover:text-indigo-600 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="text-slate-600 hover:text-indigo-600 transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-slate-600 hover:text-indigo-600 transition-colors">
                    Knowledge Base
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a href="tel:+212715931703" className="hover:text-indigo-600 transition-colors">
                +212 715 931 703
              </a>
            </li>
            <li>
              <a href="mailto:support@testhive.ma" className="hover:text-indigo-600 transition-colors">
                support@testhive.ma
              </a>
            </li>
            <li>Qtr Almatar, Nador, Morocco</li>
          </ul>

          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://www.linkedin.com/company/testhive-nador"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-green-600 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Newsletter */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">QA insights, weekly</h3>
            {subStatus === "done" ? (
              <p className="text-sm text-emerald-600">Subscribed!</p>
            ) : subStatus === "error" ? (
              <div>
                <p className="text-sm text-red-600 mb-2">Something went wrong. Please try again.</p>
                <button
                  onClick={() => setSubStatus("idle")}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300"
                />
                <button
                  type="submit"
                  disabled={subStatus === "sending"}
                  className="rounded-lg bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-sm font-semibold text-white transition disabled:opacity-70"
                >
                  {subStatus === "sending" ? "..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 px-6 max-w-7xl mx-auto">
        <span>&copy; {new Date().getFullYear()} TestHive. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
