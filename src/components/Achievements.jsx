import { RESUME } from '../data/resume.js'
import { useReveal } from '../hooks/index.js'
import s from './Achievements.module.css'

export default function Achievements() {
  const [ref, visible] = useReveal()
  return (
    <section className={s.section}>
      <div className="wrap">
        <div className={`reveal ${visible ? 'in' : ''} ${s.header}`} ref={ref}>
          <span className="mono-label">Highlights</span>
          <h2 className={s.heading}>Key<br/><em>Achievements</em></h2>
        </div>

        <div className={s.grid}>
          {RESUME.achievements.map(({ accent, label, text }, i) => (
            <div key={i} className={s.card}>
              <div className={s.cardTop} style={{ borderLeftColor: accent }}>
                <span className={s.label} style={{ color: accent }}>{label}</span>
              </div>
              <p className={s.text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
