import { useOutletContext } from 'react-router-dom'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import SocialProof from '../components/SocialProof'
import Logos from '../components/Logos'
import ApproachSection from '../components/ApproachSection'
import Features from '../components/Features'
import CTA from '../components/CTA'
import PlatformSection from '../components/PlatformSection'
import WhyTestHiveSection from '../components/WhyTestHive'
import QAProcessSection from '../components/QAProcessSection'
import ComparisonSection from '../components/ComparisonSection'
import CaseStudiesPreview from '../components/CaseStudiesPreview'
import Testimonials from '../components/Testimonials'
export default function Home() {
  const { onBook } = useOutletContext()

  return (
    <>
      <SEO
        description="European QA expertise at nearshore rates. Senior test automation engineers embedded in your team. Same timezone, no language barrier, up to 60% cost savings."
      />
      <Hero onBook={onBook} />
      <SocialProof />
      <Features />
      <WhyTestHiveSection onBook={onBook} />
      <ComparisonSection />
      <ApproachSection />
      <PlatformSection />
      <Logos />
      <CaseStudiesPreview />
      <QAProcessSection />
      <Testimonials />
      <CTA onBook={onBook} />
    </>
  )
}
