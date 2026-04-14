import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero'
import SocialProof from '../components/SocialProof'
import Logos from '../components/Logos'
import Features from '../components/Features'
import CTA from '../components/CTA'
import WhyTestHiveSection from '../components/WhyTestHive'
import QAProcessSection from '../components/QAProcessSection'
import Testimonials from '../components/Testimonials'
import ToolPreview from '../components/ToolPreview'

export default function Home() {
  const { onBook } = useOutletContext()

  return (
    <>
      <Hero onBook={onBook} />
      <WhyTestHiveSection onBook={onBook} />
      <SocialProof />
      <Features />
      <Logos />
      <QAProcessSection />
      <ToolPreview />
      <Testimonials />
      <CTA onBook={onBook} />
    </>
  )
}
