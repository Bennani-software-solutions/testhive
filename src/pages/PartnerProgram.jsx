// src/pages/QualityPartnerPage.jsx
import { useOutletContext } from "react-router-dom";
import SEO from "../components/SEO";
import QualityPartnerProgram from "../components/QualityPartnerProgram";

export default function QualityPartnerPage() {
  const { onBook, calendlyUrl } = useOutletContext();
  return (
    <>
      <SEO
        title="Partner Program"
        description="Join the TestHive Quality Partner Program. Offer AI-powered test automation to your clients and grow your QA consultancy."
        path="partnerprogram"
      />
      <QualityPartnerProgram onBook={onBook} calendlyUrl={calendlyUrl} />
    </>
  );
}
