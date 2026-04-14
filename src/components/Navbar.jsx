
// src/components/Navbar.jsx
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui";
import useDevMode from "../hooks/useDevMode";

const base = "text-sm font-medium transition-colors";
const active = "text-indigo-600 font-semibold";
const idle = "text-slate-600 hover:text-slate-900";

const services = [
  ["Test Automation", "/services/automation"],
  ["Functional Testing", "/services/functional-testing"],
  ["Pen Testing", "/services/pen-testing"],
  ["Consulting & Nearshoring", "/services/consulting"],
  ["Mentoring", "/services/mentoring"],
];

export default function Navbar({ onBook }) {
  const isDev = useDevMode();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown((cur) => (cur === name ? null : name));
  };

  const handleNavigate = (path) => {
    navigate(path);
    setTimeout(() => closeAll(), 120);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const resources = [
    ["Why TestHive?", "/whytesthive"],
    ["Blog", "/blog"],
    ["FAQ", "/faq"],
    ["Careers", "/careers"],
    ...(isDev
      ? [
          ["Case Studies", "/case-studies"],
          ["Integrations", "/integrations"],
          ["Knowledge Base", "/docs"],
        ]
      : []),
  ];

  return (
    <>
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
              test<span className="text-indigo-600">Hive</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-7" ref={dropdownRef}>
            {/* Services dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className={`${base} ${idle} flex items-center gap-1`}
                aria-haspopup="menu"
                aria-expanded={openDropdown === "services"}
              >
                Services{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}
                />
              </button>

              {openDropdown === "services" && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg p-2 z-50"
                >
                  {services.map(([label, path]) => (
                    <button
                      key={path}
                      role="menuitem"
                      onClick={() => handleNavigate(path)}
                      className="block w-full text-left rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/pricing"
              className={({ isActive: a }) => `${base} ${a ? active : idle}`}
            >
              Pricing
            </NavLink>

            {/* Resources dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("resources")}
                className={`${base} ${idle} flex items-center gap-1`}
                aria-haspopup="menu"
                aria-expanded={openDropdown === "resources"}
              >
                Resources{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openDropdown === "resources" ? "rotate-180" : ""}`}
                />
              </button>

              {openDropdown === "resources" && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg p-2 z-50"
                >
                  {resources.map(([label, path]) => (
                    <button
                      key={path}
                      role="menuitem"
                      onClick={() => handleNavigate(path)}
                      className="block w-full text-left rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              onClick={onBook}
              className="ml-2 bg-indigo-600 hover:bg-indigo-700 px-5 py-2 text-white font-semibold shadow-md active:scale-95"
            >
              Book a Free Consultation
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-[9999] p-6 overflow-y-auto animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <Link to="/" onClick={closeAll} className="flex items-center gap-3">
              <img
                src="/assets/testHive.png"
                width={36}
                height={36}
                alt="TestHive"
              />
              <span className="text-xl font-bold tracking-tight">
                test<span className="text-indigo-600">Hive</span>
              </span>
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 text-slate-700">
            <details className="group">
              <summary className="cursor-pointer flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50">
                <span>Services</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-1 ml-3 border-l border-slate-200 pl-3 space-y-0.5">
                {services.map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={closeAll}
                    className={({ isActive: a }) =>
                      `block rounded-lg px-3 py-2 text-sm ${a ? "bg-indigo-50 text-indigo-600 font-medium" : "text-slate-600 hover:bg-slate-50"}`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </details>

            <NavLink
              to="/pricing"
              onClick={closeAll}
              className={({ isActive: a }) =>
                `block rounded-lg px-3 py-2.5 text-sm font-medium ${a ? "bg-indigo-50 text-indigo-600" : "hover:bg-slate-50"}`
              }
            >
              Pricing
            </NavLink>

            <details className="group">
              <summary className="cursor-pointer flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-1 ml-3 border-l border-slate-200 pl-3 space-y-0.5">
                {resources.map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={closeAll}
                    className={({ isActive: a }) =>
                      `block rounded-lg px-3 py-2 text-sm ${a ? "bg-indigo-50 text-indigo-600 font-medium" : "text-slate-600 hover:bg-slate-50"}`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </details>

            <Button
              onClick={() => {
                closeAll();
                onBook();
              }}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 w-full text-white font-semibold shadow-md active:scale-95"
            >
              Book a Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
