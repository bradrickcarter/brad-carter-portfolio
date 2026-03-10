import styles from './Marquee.module.css'

const items = [
  'UX Strategy','Product Design','Design Systems','Figma','Prototyping',
  'User Research','HTML / CSS / JS','Agile','DesignOps','Healthcare','Retail','Fintech'
]

export default function Marquee() {
  const all = [...items, ...items]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {all.map((item, i) => (
          <span key={i}>
            {item}
            <span className={styles.sep}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
