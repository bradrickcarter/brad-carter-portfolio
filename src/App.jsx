import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import { caseStudies } from './data/caseStudies'

export default function App() {
  // Scroll reveal observer
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })

    const attach = () => {
      document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    }
    attach()
    // re-attach on route change via small delay
    const timer = setTimeout(attach, 100)
    return () => clearTimeout(timer)
  })

  return (
    <>
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {caseStudies.map(cs => (
          <Route key={cs.slug} path={`/work/${cs.slug}`} element={<CaseStudy study={cs} />} />
        ))}
      </Routes>
    </>
  )
}
