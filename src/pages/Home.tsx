import Header from '../components/Header'
import Hero from '../components/Hero'
import Sections from '../components/Sections'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Header />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  )
}

export default Home

