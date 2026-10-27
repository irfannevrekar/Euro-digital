import Header from '../components/Header'
import Hero from '../components/Hero'
import Sections from '../components/Sections'
import Footer from '../components/Footer'
import { openBookingModal } from '../constants/booking'

function Home() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Header />
      <main>
        <Hero />
        <Sections onBookDemo={() => openBookingModal()} />
      </main>
      <Footer />
    </div>
  )
}

export default Home
