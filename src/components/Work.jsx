import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import styles from './Work.module.css'

export default function Work() {
  return (
    <section id="work" className={styles.work}>
      <div className="section-eyebrow reveal">Selected work</div>
      <h2 className="section-title reveal">Things I've<br />built &amp; shipped.</h2>

      <div className={styles.grid}>
        {caseStudies.map((cs, i) => (
          <Link
            key={cs.slug}
            to={`/work/${cs.slug}`}
            className={styles.card}
            style={{ background: cs.cardBg, color: cs.cardColor }}
          >
            <div className={styles.bgText}>{cs.cardNum}</div>
            <div className={styles.cardInner}>
              <div className={styles.meta}>
                <span className={styles.tag} style={{ background: cs.cardColor === '#ffffff' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)', color: cs.cardColor }}>
                  {cs.tags[0]} · {cs.tags[1]}
                </span>
                <span className={styles.role} style={{ color: cs.cardColor, opacity: 0.6 }}>{cs.role}</span>
              </div>
              <h3 className={styles.title}>{cs.title}</h3>
              {cs.subtitle && <p className={styles.subtitle} style={{ color: cs.cardColor, opacity: 0.7 }}>{cs.subtitle}</p>}
              <p className={styles.desc} style={{ color: cs.cardColor, opacity: 0.8 }}>{cs.summary}</p>
            </div>
            <div className={styles.arrow} style={{ background: cs.cardColor === '#ffffff' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)', color: cs.cardColor }}>
              →
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
