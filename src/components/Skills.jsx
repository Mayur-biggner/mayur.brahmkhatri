import { RESUME } from '../data/resume.js'
import { useReveal } from '../hooks/index.js'
import s from './Skills.module.css'

export default function Skills() {
  const [ref, visible] = useReveal()
  return (
    <section id="skills" className={s.section}>
      <div className={`wrap ${s.top}`}>
        <div className={s.numWrap} aria-hidden>
          <span className="section-num">01</span>
        </div>
        <div className={`reveal ${visible ? 'in' : ''} ${s.header}`} ref={ref}>
          <span className="mono-label">Technical expertise</span>
          <h2 className={s.heading}>Stack &amp;<br/><em>Capabilities</em></h2>
        </div>
      </div>

      {/* Dark skill matrix */}
      <div className={s.matrix}>
        <div className="wrap">
          <div className={s.grid}>
            {RESUME.skills.map(({ label, color, items }) => (
              <div key={label} className={s.group}>
                <div className={s.groupLabel} style={{ color: `var(${color.replace('var(','').replace(')','')})` }}>
                  {label}
                </div>
                <div className={s.tags}>
                  {items.map(item => (
                    <span key={item} className={s.tag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
