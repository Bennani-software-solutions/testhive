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
import useDevMode from '../hooks/useDevMode'

export default function Home() {
  const { onBook } = useOutletContext()
  const isDev = useDevMode()

  return (
    <>
      <SEO
        description="Write Gherkin scenarios, generate Playwright test code with AI, and run self-healing tests. The modern QA platform for teams that ship fast."
      />
      <Hero onBook={onBook} />
      <SocialProof />
      <ApproachSection />
      <Features />
      <PlatformSection />
      <WhyTestHiveSection onBook={onBook} />
      <ComparisonSection />
      <Logos />
      {isDev && <CaseStudiesPreview />}
      <QAProcessSection />
      <Testimonials />
      <CTA onBook={onBook} />
    </>
  )
}
