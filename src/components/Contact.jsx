import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`section-eyebrow reveal ${styles.eyebrow}`}>Let's talk</div>
      <h2 className={`section-title reveal ${styles.title}`}>Ready for<br />what's next.</h2>
      <p className={`${styles.sub} reveal`}>Senior Product Designer · Dallas / Fort Worth · Open to hybrid &amp; remote</p>
      <div className={`${styles.links} reveal`}>
        <a href="mailto:brad@bradcarter.design" className={styles.link}>✉ brad@bradcarter.design</a>
        <a href="https://www.linkedin.com/in/brad-carter-work" target="_blank" rel="noreferrer" className={styles.link}>in LinkedIn</a>
        <a href="/Brad_Carter_Resume.pdf" download className={`${styles.link} ${styles.outline}`}>↓ Download Resume</a>
      </div>
    </section>
  )
}
