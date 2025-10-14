
// src/components/Navbar.jsx
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui";

const base = "text-sm font-medium transition-colors";
const active = "text-sky-600 font-semibold";
const idle = "text-slate-600 hover:text-slate-900";

export default function Navbar({ onBook }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setOpenDropdown((cur) => (cur === "services" ? null : "services"));
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setTimeout(() => closeAll(), 120);
  };

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
              test<span className="text-sky-500">Hive</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/whytesthive"
              className={({ isActive }) => `${base} ${isActive ? active : idle}`}
            >
              Why TestHive?
            </NavLink>

            {/* Services dropdown */}
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
                  {[
                    ["Test Automation", "/services/automation"],
                    ["Functional Testing", "/services/functional-testing"],
                    ["Pen Testing", "/services/pen-testing"],
                    ["Mentoring", "/services/mentoring"],
                    ["QA Outsourcing", "/services/qa-outsourcing"],
                  ].map(([label, path]) => (
                    <button
                      key={path}
                      onClick={() => handleNavigate(path)}
                      className="block w-full text-left px-3 py-2 hover:bg-slate-50"
                    >
                      {label}
                    </button>
                  ))}
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

            <Button
              onClick={onBook}
              className="ml-2 bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 py-2 text-white font-semibold shadow-md hover:brightness-110 active:scale-95"
            >
              Get in Touch
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

      {/* Mobile Drawer (outside header to fix visibility issue) */}
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
                test<span className="text-sky-500">Hive</span>
              </span>
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 text-slate-700">
            <NavLink
              to="/whytesthive"
              onClick={closeAll}
              className="block rounded-md px-2.5 py-2 hover:bg-slate-50"
            >
              Why TestHive?
            </NavLink>

            <details open className="services-dropdown">
              <summary className="cursor-pointer flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-slate-50">
                <span>Services</span> <ChevronDown className="h-4 w-4" />
              </summary>
              <div className="mt-2 pl-3 space-y-1">
                <NavLink to="/services/automation" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">Test Automation</NavLink>
                <NavLink to="/services/functional-testing" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">Functional Testing</NavLink>
                <NavLink to="/services/pen-testing" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">Pen Testing</NavLink>
                <NavLink to="/services/mentoring" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">Mentoring</NavLink>
                <NavLink to="/services/qa-outsourcing" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">QA Outsourcing</NavLink>
              </div>
            </details>

            <NavLink to="/blog" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">
              Blog
            </NavLink>

            <NavLink to="/faq" onClick={closeAll} className="block rounded-md px-2.5 py-2 hover:bg-slate-50">
              FAQ
            </NavLink>

            <Button
              onClick={() => {
                closeAll();
                onBook();
              }}
              className="mt-4 bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 w-full text-white font-semibold shadow-md hover:brightness-110 active:scale-95"
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
