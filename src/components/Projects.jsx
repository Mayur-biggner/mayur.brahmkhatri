import { useState } from 'react'
import { RESUME } from '../data/resume.js'
import { useReveal } from '../hooks/index.js'
import s from './Projects.module.css'

function ProjectCard({ project, idx }) {
  const [ref, visible] = useReveal(0.1)
  const [hov, setHov] = useState(false)

  return (
    <div
      ref={ref}
      className={`${s.card} reveal ${visible ? 'in' : ''}`}
      style={{
        transitionDelay: `${idx * 100}ms`,
        '--accent': project.color,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Big project number */}
      <div className={s.cardNum} style={{ color: hov ? project.color : 'transparent', WebkitTextStroke: `1px ${hov ? 'transparent' : 'rgba(13,27,42,0.12)'}` }}>
        {project.num}
      </div>

      <div className={s.cardBody}>
        {/* Accent bar */}
        <div className={s.accentBar} style={{ background: project.color }} />

        <h3 className={s.cardName}>{project.name}</h3>
        <p className={s.cardDesc}>{project.desc}</p>

        <div className={s.techRow}>
          {project.tech.map(t => (
            <span key={t} className={s.techTag}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, visible] = useReveal()
  return (
    <section id="projects" className={s.section}>
      <div className="wrap">
        <div className={s.top}>
          <div className={s.numWrap} aria-hidden>
            <span className="section-num">03</span>
          </div>
          <div className={`reveal ${visible ? 'in' : ''} ${s.header}`} ref={ref}>
            <span className="mono-label">Selected work</span>
            <h2 className={s.heading}>Featured<br/><em>Projects</em></h2>
          </div>
        </div>

        <div className={s.grid}>
          {RESUME.projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
