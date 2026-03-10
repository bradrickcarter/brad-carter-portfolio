import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Brad Carter</span>
      <span>Senior Product Designer · DFW</span>
      <a href="mailto:brad@bradcarter.design">brad@bradcarter.design</a>
    </footer>
  )
}
