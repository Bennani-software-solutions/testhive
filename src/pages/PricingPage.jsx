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
        description="Transparent pricing for QA services. Start with a free proof-of-concept, scale with a dedicated nearshore engineer. No hidden fees."
        path="pricing"
      />
      <Pricing onBookClick={onBook} calendlyUrl={calendlyUrl} />
    </>
  );
}
