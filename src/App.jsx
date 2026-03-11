import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import { caseStudies } from './data/caseStudies'

export default function App() {
  const location = useLocation()

  // Scroll reveal observer — keyed to route so it re-runs on navigation
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible')
        } else {
          io.observe(el)
        }
      })
    }, 50)

    return () => { clearTimeout(timer); io.disconnect() }
  }, [location.pathname])

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
