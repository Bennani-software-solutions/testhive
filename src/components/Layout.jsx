// src/components/Layout.jsx
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CalendlyModal from './CalendlyModal'
import ScrollToTop from './ScrollToTop'

const CALENDLY_URL = 'https://calendly.com/jointhehive-testhive-phr7/30min'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const openCalendly = () => setOpen(true)
  const closeCalendly = () => setOpen(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar onBook={openCalendly} />
      <ScrollToTop />

      {/* 👇 expose onBook + url to ALL routes */}
      <Outlet context={{ onBook: openCalendly, calendlyUrl: CALENDLY_URL }} />

      <Footer />
      <CalendlyModal url={CALENDLY_URL} open={open} onClose={closeCalendly} />
    </div>
  )
}
