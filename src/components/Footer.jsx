// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const whatsappHref =
    "https://wa.me/212715931703?text=Hi%20TestHive%2C%20I%27m%20interested%20in%20your%20QA%20services.";

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <img src="/assets/testHive.png" alt="TestHive" className="h-12 mb-3" />
          <p className="text-sm text-slate-600">
            TestHive is your partner in delivering reliable software through expert QA services, tailored to your needs.
          </p>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/automation" className="hover:text-sky-600">Automation</Link></li>
              <li><Link to="/services/functional-testing" className="hover:text-sky-600">Functional Testing</Link></li>
              <li><Link to="/services/pen-testing" className="hover:text-sky-600">Pen Testing</Link></li>
              <li><Link to="/services/mentoring" className="hover:text-sky-600">Mentoring</Link></li>
              <li><Link to="/services/qa-outsourcing" className="hover:text-sky-600">QA Outsourcing</Link></li>
              <li><Link to="/services/consulting" className="hover:text-sky-600">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/whytesthive" className="hover:text-sky-600">About</Link></li>
              <li><Link to="/blog" className="hover:text-sky-600">Blog</Link></li>
              <li><Link to="/partner" className="hover:text-sky-600">Partner Program</Link></li>
              <li><Link to="/accelerator" className="hover:text-sky-600">Accelerator</Link></li>
              <li><Link to="/faq" className="hover:text-sky-600">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-2">Get in touch</h3>
          <div className="flex items-center gap-4 mt-3">
            <a
              id="lnk-footer-linkedin"
              href="https://www.linkedin.com/company/testhive-nador"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-700 hover:text-sky-600"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              id="lnk-footer-whatsapp"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-700 hover:text-green-600"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
          <div className="mt-6">
            <a
              id="btn-footer-book"
              href="https://calendly.com/jointhehive-testhive-phr7/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-sky-500 hover:bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} TestHive. All rights reserved.
      </div>
    </footer>
  );
}
