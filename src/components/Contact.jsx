import { RESUME } from '../data/resume.js'
import { useReveal } from '../hooks/index.js'
import s from './Contact.module.css'

export default function Contact() {
  const [ref, visible] = useReveal()
  const { contact } = RESUME

  return (
    <section id="contact" className={s.section} style={{height:"100dvh"}}>

      {/* Big editorial CTA */}
      <div className="wrap">
        <div className={`reveal ${visible ? 'in' : ''} ${s.ctaBlock}`} ref={ref}>
          <span className="mono-label" style={{ color: 'rgba(249,246,240,0.35)' }}>Get in touch</span>
          <h2 className={s.ctaHead}>
            Let's build<br/>
            something<br/>
            <em className={s.ctaItalic}>together.</em>
          </h2>
          <a href={`mailto:${contact.email}`} className={s.mailLink}>
            {contact.email} ↗
          </a>
        </div>
      </div>
      {/* Bottom bar */}
      <div className={s.bottomBar} >
        <div className={`wrap ${s.bottomInner}`}>

          <div className={s.contactList} style={{}}>
            <a href={`tel:${contact.phone}`} className={s.contactItem}>
              <span className="mono-label">Phone</span>
              <span className={s.contactVal}>{contact.phone}</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className={s.contactItem}>
              <span className="mono-label">LinkedIn</span>
              <span className={s.contactVal}>View profile ↗</span>
            </a>
            <div className={s.contactItem}>
              <span className="mono-label">Location</span>
              <span className={s.contactVal}>{contact.location}</span>
            </div>
          </div>

          <div className={s.edu}>
            {RESUME.education.map(e => (
              <div key={e.degree} className={s.eduRow}>
                <span className={s.eduDeg}>{e.degree}</span>
                <span className="mono-label">{e.year}</span>
              </div>
            ))}
          </div>

        </div>

        <div className={`wrap ${s.copy}`} style={{ marginTop:"3rem", paddingTop:"0.5rem"}}>
          <span className="mono-label" style={{ color: 'rgba(249,246,240,0.2)' }}>
            © {new Date().getFullYear()} Mayur Brahmkhatri 
            {/* · Built with React + Vite */}
          </span>
          <div style={{ display:'flex', gap:'1rem', alignItems:'center' }}>
            <span className={s.accentDot} style={{ background:'var(--lime)' }} />
            <span className={s.accentDot} style={{ background:'var(--coral)' }} />
            <span className={s.accentDot} style={{ background:'var(--sky)' }} />
          </div>
        </div>
      </div>

    </section>
  )
}
