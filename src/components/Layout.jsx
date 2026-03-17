// src/components/Layout.jsx
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingModal from './BookingModal'
import CookieConsent from './CookieConsent'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const openBooking = () => setOpen(true)
  const closeBooking = () => setOpen(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar onBook={openBooking} />
      <ScrollToTop />

      <Outlet context={{ onBook: openBooking }} />

      <Footer />
      <BookingModal open={open} onClose={closeBooking} />
      <CookieConsent />
    </div>
  )
}
