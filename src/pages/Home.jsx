import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Features from '../components/Features'
import CTA from '../components/CTA'
import PlatformSection from '../components/PlatformSection'
import WhyTestHiveSection from '../components/WhyTestHive'
import QAProcessSection from '../components/QAProcessSection'
import CaseStudiesPreview from '../components/CaseStudiesPreview'
import useDevMode from '../hooks/useDevMode'

export default function Home() {
  const { onBook } = useOutletContext()
  const isDev = useDevMode()

  return (
    <>
      <Hero onBook={onBook} />
      <Features />
      <PlatformSection />
      <WhyTestHiveSection onBook={onBook} />
      <Logos />
      {isDev && <CaseStudiesPreview />}
      <QAProcessSection />
      <CTA onBook={onBook} />
    </>
  )
}
