// src/pages/QualityAcceleratorPage.jsx
import { useOutletContext } from "react-router-dom";
import SEO from "../components/SEO";
import QualityAcceleratorPack from "../components/QualityAcceleratorPack";

export default function QualityAcceleratorPage() {
  const { onBook, calendlyUrl } = useOutletContext();
  return (
    <>
      <SEO
        title="Quality Accelerator"
        description="Fast-track your QA maturity with TestHive's Quality Accelerator. Get automation, strategy, and mentoring in one intensive engagement."
        path="accelerator"
      />
      <QualityAcceleratorPack onBook={onBook} calendlyUrl={calendlyUrl} />
    </>
  );
}
