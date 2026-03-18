// src/pages/PricingPage.jsx
import { useOutletContext } from "react-router-dom";
import SEO from "../components/SEO";
import Pricing from "../components/Pricing";

export default function PricingPage() {
  const { onBook, calendlyUrl } = useOutletContext();
  return (
    <>
      <SEO
        title="Pricing"
        description="Start free, scale when ready. Transparent pricing for AI-powered test automation — no hidden fees, no per-seat charges."
        path="pricing"
      />
      <Pricing onBookClick={onBook} calendlyUrl={calendlyUrl} />
    </>
  );
}
