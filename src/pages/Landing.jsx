import LandingNav from '../components/LandingNav.jsx'
import Footer from '../components/Footer.jsx'
import Hero from './landing/Hero.jsx'
import Pillars from './landing/Pillars.jsx'
import Features from './landing/Features.jsx'
import ExpertsSection from './landing/ExpertsSection.jsx'

export default function Landing() {
  return (
    <div className="min-h-screen bg-cream">
      <LandingNav />
      <main>
        <Hero />
        <Pillars />
        <Features />
        <ExpertsSection />
      </main>
      <Footer />
    </div>
  )
}
