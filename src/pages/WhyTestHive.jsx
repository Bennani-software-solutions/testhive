// src/pages/WhyTestHivePage.jsx
import { useOutletContext } from 'react-router-dom'
import SEO from '../components/SEO'
import WhyTestHive from '../components/WhyTestHive'

export default function WhyTestHivePage() {
  const { onBook } = useOutletContext()
  return (
    <>
      <SEO
        title="Why TestHive"
        description="Discover why teams choose TestHive for AI-powered test automation. Faster releases, fewer bugs, and a platform built for real QA workflows."
        path="whytesthive"
      />
      <WhyTestHive onBook={onBook} />
    </>
  )
}
