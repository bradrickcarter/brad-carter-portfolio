import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
      <div className={styles.left}>
        <div className={styles.tag}>
          <span className={styles.dot} />
          Available for new roles · DFW
        </div>
        <h1 className={styles.headline}>
          <span className={styles.accent}>Design</span><br />
          that<br />
          <span className={styles.outline}>ships.</span>
        </h1>
        <p className={styles.sub}>
          I'm Brad Carter — a Senior Product Designer with 15+ years turning messy, complex problems into products people actually love using.
        </p>
        <div className={styles.ctas}>
          <a href="#work" className="btn-primary">See my work ↓</a>
          <a href="#contact" className="btn-outline">Get in touch</a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.blob} />
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.card1}`}>
            <div className={styles.cardNum}>15+</div>
            <div className={styles.cardLabel}>Years of experience</div>
          </div>
          <div className={`${styles.card} ${styles.card2}`}>
            <div className={styles.cardNum}>∞</div>
            <div className={styles.cardLabel}>Problems solved</div>
          </div>
          <div className={`${styles.card} ${styles.card3}`}>
            <div className={styles.cardNum}>UX →<br />Code</div>
            <div className={styles.cardLabel}>Full-stack perspective</div>
          </div>
          <div className={`${styles.card} ${styles.card4}`}>
            <div className={styles.cardNum}>🚀</div>
            <div className={styles.cardLabel}>Ships, always</div>
          </div>
        </div>
      </div>
      </div>

      <div className={styles.scroll}>
        <span className={styles.scrollLine} />
        Scroll to explore
      </div>
    </section>
  )
}
