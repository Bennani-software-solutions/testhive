import { useMemo } from "react";

/**
 * Activate dev mode by visiting any page with ?dev=true
 * Deactivate with ?dev=false
 * Persists in localStorage so you stay in dev mode across navigations.
 */
export default function useDevMode() {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("dev") === "true") {
      localStorage.setItem("testhive_dev", "1");
    } else if (params.get("dev") === "false") {
      localStorage.removeItem("testhive_dev");
    }

    return localStorage.getItem("testhive_dev") === "1";
  }, []);
}
