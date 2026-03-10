import styles from './About.module.css'

const skills = {
  Design: ['UX Strategy', 'Product Design', 'Design Systems', 'Prototyping', 'User Research'],
  Tools:  ['Figma', 'FigJam', 'Miro', 'Maze', 'Zeplin'],
  Code:   ['HTML', 'CSS', 'JavaScript'],
  Industries: ['Healthcare', 'Retail', 'Travel', 'Fintech'],
}

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
      <div className="section-eyebrow reveal" style={{ color: 'var(--lime)' }}>
        About me
      </div>
      <h2 className="section-title reveal" style={{ color: 'var(--paper)' }}>
        I design things<br />that <em className={styles.em}>feel obvious</em><br />in hindsight.
      </h2>

      <div className={styles.grid}>
        <div className={`${styles.text} reveal`}>
          <p>I've spent <strong>15+ years designing and shipping digital products</strong> that make people's lives a little easier. I'm at my best in the messy middle — turning complex problems into experiences that feel simple and obvious in hindsight.</p>
          <p>I'm equally comfortable <em>in Figma</em> or writing front-end code to bring an idea to life. That full-stack design perspective means I can bridge the gap between vision and execution — and actually get things <em>shipped</em>.</p>
          <p>Currently a <strong>Principal Consultant at Slalom Consulting</strong> in Dallas, leading product design across healthcare, retail, travel, and financial services. Looking for my next great challenge as a <strong>Senior Product Designer in DFW</strong>.</p>
          <br />
          <a href="/Brad_Carter_Resume.pdf" download className="btn-primary" style={{ width: 'fit-content' }}>
            Download Resume ↓
          </a>
        </div>

        <div className={`${styles.right} reveal`}>
          <div className={styles.badge}>
            <span className={styles.badgeNum}>15+</span>
            <span className={styles.badgeLbl}>Years</span>
          </div>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className={styles.pillGroup}>
              <h4 className={styles.groupLabel}>{group}</h4>
              <div className={styles.pillRow}>
                {items.map(s => <span key={s} className={styles.pill}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
