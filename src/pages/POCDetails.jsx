import SEO from '../components/SEO'
import POCDetails from '../components/POCDetails'

export default function Page() {
  return (
    <>
      <SEO
        title="Proof of Concept"
        description="See TestHive in action with a tailored proof of concept. We automate your real test scenarios so you can evaluate results before committing."
        path="pocdetails"
      />
      <POCDetails />
    </>
  );
}
