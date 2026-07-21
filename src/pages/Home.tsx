import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Sections from '../components/Sections'
import Footer from '../components/Footer'
import { BOOKING_URL } from '../constants/booking'

function Home() {
  const [bookingUrl, setBookingUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!bookingUrl) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setBookingUrl(null)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [bookingUrl])

  const openBookingModal = (url = BOOKING_URL) => setBookingUrl(url)

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Header />
      <main>
        <Hero onBookDemo={() => openBookingModal()} />
        <Sections onBookDemo={openBookingModal} />
      </main>
      <Footer />
      {bookingUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          <button type="button" onClick={() => setBookingUrl(null)} className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm" aria-label="Close booking modal" />
          <div role="dialog" aria-modal="true" aria-labelledby="booking-modal-title" className="relative z-10 flex h-[90vh] max-h-[850px] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
              <h2 id="booking-modal-title" className="text-xl font-semibold text-slate-900 sm:text-2xl">Book a Demo</h2>
              <button type="button" onClick={() => setBookingUrl(null)} className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Close booking modal">
                <X className="h-6 w-6" />
              </button>
            </div>
            <iframe src={bookingUrl} title="Book a demo appointment" className="min-h-0 flex-1 border-0 bg-white" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
