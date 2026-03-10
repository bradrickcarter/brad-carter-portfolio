import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <div className="container">
        <Work />
      </div>
      <Contact />
      <Footer />
    </>
  )
}
