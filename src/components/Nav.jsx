import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>BC</Link>
      <ul className={styles.links}>
        {isHome ? (
          <>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </>
        ) : (
          <>
            <li><Link to="/">← Home</Link></li>
            <li><Link to="/#work">Work</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </>
        )}
      </ul>
    </nav>
  )
}
