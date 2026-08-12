import { useCallback, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Sections from '../components/Sections'
import Footer from '../components/Footer'
import BookingModal from '../components/BookingModal'
import { BOOKING_URL } from '../constants/booking'

function Home() {
  const [bookingUrl, setBookingUrl] = useState<string | null>(null)

  const openBookingModal = (url = BOOKING_URL) => setBookingUrl(url)
  const closeBookingModal = useCallback(() => setBookingUrl(null), [])

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Header />
      <main>
        <Hero onBookDemo={() => openBookingModal()} />
        <Sections onBookDemo={openBookingModal} />
      </main>
      <Footer />
      <BookingModal url={bookingUrl} onClose={closeBookingModal} />
    </div>
  )
}

export default Home
