import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const STORAGE_KEY = "testhive_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 inset-x-0 z-50 bg-slate-900 text-slate-300 text-sm px-4 py-3"
        >
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-center sm:text-left">
              We use cookies for essential site functionality. See our{" "}
              <Link to="/privacy" className="text-white underline hover:text-indigo-400">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
            <button
              onClick={accept}
              className="shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-1.5 rounded transition-colors"
            >
              Accept
            </button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
