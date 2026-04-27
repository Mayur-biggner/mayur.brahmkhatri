import { useState } from 'react'
import { RESUME } from '../data/resume.js'
import { useReveal } from '../hooks/index.js'
import s from './Experience.module.css'

function ExpRow({ exp, idx }) {
  const [ref, visible] = useReveal(0.15)
  const [open, setOpen] = useState(false)

  return (
    <div
      ref={ref}
      className={`${s.row} reveal ${visible ? 'in' : ''}`}
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      <div className={s.rowTop} onClick={() => setOpen(o=>!o)}>
        {/* Index */}
        <span className={s.rowIdx} style={{ color: exp.color }}>
          {String(idx+1).padStart(2,'0')}
        </span>

        {/* Role + company */}
        <div className={s.rowMeta}>
          <h3 className={s.rowRole}>{exp.role}</h3>
          <p className={s.rowCompany}>{exp.company}</p>
        </div>

        {/* Period + tag */}
        <div className={s.rowRight}>
          {exp.tag && (
            <span className={s.rowTag} style={{ background: exp.color, color: exp.color === 'var(--lime)' ? 'var(--ink)' : 'var(--cream)' }}>
              {exp.tag}
            </span>
          )}
          <span className="mono-label">{exp.period}</span>
          <span className={`${s.chevron} ${open ? s.chevronOpen : ''}`}>↓</span>
        </div>
      </div>

      {/* Expandable points */}
      <div className={`${s.rowBody} ${open ? s.rowBodyOpen : ''}`}>
        <ul className={s.points}>
          {exp.points.map((p, i) => (
            <li key={i} className={s.point}>
              <span className={s.pointDash} style={{ background: exp.color }} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  const [ref, visible] = useReveal()
  return (
    <section id="experience" className={s.section}>
      <div className="wrap">
        <div className={s.top}>
          <div className={s.numWrap} aria-hidden>
            <span className="section-num">02</span>
          </div>
          <div className={`reveal ${visible ? 'in' : ''} ${s.header}`} ref={ref}>
            <span className="mono-label">Career history</span>
            <h2 className={s.heading}>Work<br/><em>Experience</em></h2>
          </div>
          <p className={s.hint}>Click any role to expand</p>
        </div>

        {/* Top rule */}
        <div className={s.tableHead}>
          <span className="mono-label">No.</span>
          <span className="mono-label">Role · Company</span>
          <span className="mono-label" style={{marginLeft:'auto'}}>Period</span>
        </div>

        <div className={s.list}>
          {RESUME.experience.map((exp, i) => (
            <ExpRow key={i} exp={exp} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
