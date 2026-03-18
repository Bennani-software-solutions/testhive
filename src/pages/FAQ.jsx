import SEO from '../components/SEO'
import FAQ from '../components/FAQ'

export default function Page() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Common questions about TestHive's AI test automation platform, pricing, integrations, and QA consulting services."
        path="faq"
      />
      <FAQ />
    </>
  );
}
