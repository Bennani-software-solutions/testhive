import { useOutletContext } from "react-router-dom";
import SEO from "../../components/SEO";
import NearshoreMoroccoSection from "../../components/NearshoreMorocco";

export default function NearshorePage() {
  const { onBook } = useOutletContext();

  return (
    <>
      <SEO
        title="QA Outsourcing"
        description="Nearshore QA outsourcing from Morocco. Dedicated testers in your timezone, embedded in your team, at a fraction of onshore cost."
        path="services/qa-outsourcing"
      />
      <NearshoreMoroccoSection onBook={onBook} />
    </>
  );
}
