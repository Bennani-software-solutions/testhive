// src/components/Navbar.jsx
import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui";

const base = "text-sm font-medium transition-colors";
const active = "text-sky-600 font-semibold";
const idle = "text-slate-600 hover:text-slate-900";

export default function Navbar({ onBook }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef(null);

  // sluit dropdown bij klik buiten services-menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".services-dropdown")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setOpenDropdown((cur) => (cur === "services" ? null : "services"));
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={closeAll}>
          <img
            src="/assets/testHive.png"
            width={40}
            height={40}
            alt="TestHive"
            className="rounded-md"
          />
          <span className="text-xl font-bold tracking-tight">
            test<span className="text-sky-500">Hive</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/whytesthive"
            className={({ isActive }) => `${base} ${isActive ? active : idle}`}
          >
            Why TestHive?
          </NavLink>

          {/* Services dropdown (CLICK only) */}
          <div className="relative services-dropdown">
            <button
              onClick={toggleDropdown}
              className={`${base} ${idle} flex items-center gap-1`}
              aria-haspopup="menu"
              aria-expanded={openDropdown === "services"}
            >
              Services <ChevronDown className="h-4 w-4" />
            </button>

            {openDropdown === "services" && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg p-2 z-50"
              >
                <NavLink to="/services/automation" onClick={closeAll} className="block px-3 py-2 hover:bg-slate-50">
                  Test Automation
                </NavLink>
                <NavLink to="/services/functional-testing" onClick={closeAll} className="block px-3 py-2 hover:bg-slate-50">
                  Functional Testing
                </NavLink>
                <NavLink to="/services/pen-testing" onClick={closeAll} className="block px-3 py-2 hover:bg-slate-50">
                  Pen Testing
                </NavLink>
                <NavLink to="/services/mentoring" onClick={closeAll} className="block px-3 py-2 hover:bg-slate-50">
                  Mentoring
                </NavLink>
                <NavLink to="/services/qa-outsourcing" onClick={closeAll} className="block px-3 py-2 hover:bg-slate-50">
                  QA Outsourcing
                </NavLink>
                <NavLink to="/services/consulting" onClick={closeAll} className="block px-3 py-2 hover:bg-slate-50">
                  QA Consulting
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/blog"
            className={({ isActive }) => `${base} ${isActive ? active : idle}`}
          >
            Blog
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) => `${base} ${isActive ? active : idle}`}
          >
            FAQ
          </NavLink>

          {/* CTA */}
          <Button
            onClick={() => {
              closeAll();
              onBook?.();
            }}
            className="ml-2 rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 py-2 text-white font-semibold shadow-md hover:brightness-110 active:scale-95"
          >
            Get in Touch
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 shadow-sm text-slate-700"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && <div className="fixed inset-0 z-40 bg-black/40" />}

      {/* Mobile drawer */}
      <div
        ref={mobileRef}
        className={`fixed inset-x-0 top-0 z-50 origin-top rounded-b-2xl border-b border-slate-200 bg-white p-4 shadow-xl md:hidden transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3" onClick={closeAll}>
              <img src="/assets/testHive.png" width={36} height={36} alt="TestHive" className="rounded-md" />
              <span className="text-lg font-bold tracking-tight">
                test<span className="text-sky-500">Hive</span>
              </span>
            </Link>
            <button
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 shadow-sm text-slate-700"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile links */}
          <nav className="mt-6 space-y-1">
            <NavLink to="/whytesthive" onClick={closeAll} className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50">
              Why TestHive?
            </NavLink>

            {/* Mobile services as collapsible */}
            <div className="border rounded-lg">
              <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-700"
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {openDropdown === "services" && (
                <div className="px-1 pb-2">
                  <NavLink to="/services/automation" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">
                    Test Automation
                  </NavLink>
                  <NavLink to="/services/functional-testing" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">
                    Functional Testing
                  </NavLink>
                  <NavLink to="/services/pen-testing" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">
                    Pen Testing
                  </NavLink>
                  <NavLink to="/services/mentoring" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">
                    Mentoring
                  </NavLink>
                  <NavLink to="/services/qa-outsourcing" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">
                    QA Outsourcing
                  </NavLink>
                  <NavLink to="/services/consulting" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">
                    QA Consulting
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/blog" onClick={closeAll} className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50">
              Blog
            </NavLink>

            <NavLink to="/faq" onClick={closeAll} className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50">
              FAQ
            </NavLink>

            <Button
              onClick={() => {
                closeAll();
                onBook?.();
              }}
              className="mt-3 w-full rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 py-2 text-white font-semibold shadow-md hover:brightness-110 active:scale-95"
            >
              Book a Call
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
