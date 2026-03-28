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
        description="European QA expertise at nearshore rates from Morocco. Same timezone, multilingual engineers, up to 60% cost savings. Embedded in your team, not outsourced to a call center."
        path="whytesthive"
      />
      <WhyTestHive onBook={onBook} />
    </>
  )
}
