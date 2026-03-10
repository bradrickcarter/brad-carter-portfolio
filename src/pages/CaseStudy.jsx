import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import styles from './CaseStudy.module.css'

export default function CaseStudy({ study }) {
  useEffect(() => { window.scrollTo(0, 0) }, [study.slug])

  return (
    <>
      {/* Hero */}
      <div className={styles.hero} style={{ background: study.cardBg, color: study.cardColor }}>
        <div className={styles.heroInner}>
          <div className={styles.backRow}>
            <Link to="/" className={styles.back} style={{ color: study.cardColor }}>← Back to work</Link>
          </div>
          <div className={styles.tags}>
            {study.tags.map(t => (
              <span key={t} className={styles.tag} style={{
                background: study.cardColor === '#ffffff' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)',
                color: study.cardColor
              }}>{t}</span>
            ))}
          </div>
          <h1 className={styles.title}>{study.title}</h1>
          {study.subtitle && <p className={styles.subtitle} style={{ color: study.cardColor, opacity: 0.75 }}>{study.subtitle}</p>}
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel} style={{ color: study.cardColor, opacity: 0.5 }}>Role</span>
              <span style={{ color: study.cardColor }}>{study.role}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel} style={{ color: study.cardColor, opacity: 0.5 }}>Year</span>
              <span style={{ color: study.cardColor }}>{study.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>

        <section className={styles.section}>
          <div className={`${styles.eyebrow} section-eyebrow`}>Overview</div>
          <p className={styles.body}>{study.overview}</p>
        </section>

        <section className={styles.section}>
          <div className={`${styles.eyebrow} section-eyebrow`}>The Challenge</div>
          <p className={styles.body}>{study.challenge}</p>
          {study.problems && (
            <ul className={styles.problems}>
              {study.problems.map((p, i) => (
                <li key={i} className={styles.problem}>
                  <span className={styles.problemNum}>0{i + 1}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className={`${styles.section} ${styles.outcomeSection}`}>
          <div className={`${styles.eyebrow} section-eyebrow`} style={{ color: 'var(--lime)' }}>Outcome</div>
          <p className={`${styles.body} ${styles.outcomeBody}`}>{study.outcome}</p>
        </section>

        {/* Next project */}
        <div className={styles.nextRow}>
          <Link to="/" className={styles.nextBtn}>← View all projects</Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
