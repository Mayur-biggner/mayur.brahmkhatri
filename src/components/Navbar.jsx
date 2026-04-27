import { useState } from 'react'
import { useScrolled, useActiveSection } from '../hooks/index.js'
import s from './Navbar.module.css'

const LINKS = ['home','skills','experience','projects','contact']

export default function Navbar() {
  const scrolled = useScrolled(40)
  const active   = useActiveSection(LINKS)
  const [open, setOpen] = useState(false)

  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); setOpen(false) }

  return (
    <nav className={`${s.nav} ${scrolled ? s.solid : ""}`}>
      <div className={`${s.inner} wrap`}>
        {/* Wordmark */}
        <button className={s.mark} onClick={() => go("home")}>
          <span className={s.markM}>M</span>
          <span className={s.markB}>B</span>
          <span className={s.markDot} />
        </button>

        {/* Desktop nav */}
        <ul className={s.links}>
          {LINKS.map((l) => (
            <li key={l}>
              <button
                className={`${s.link} ${active === l ? s.linkOn : ""}`}
                onClick={() => go(l)}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Hire CTA */}
        <a href="mailto:mayurkhatri80@gmail.com" className={s.hire}>
          Hire me ↗
        </a>

        {/* Hamburger */}
        <button
          className={s.burger}
          onClick={() => setOpen((o) => !o)}
          aria-label="menu"
        >
          <span className={`${s.bar} ${open ? s.barX1 : ""}`} />
          <span className={`${s.bar} ${open ? s.barX2 : ""}`} />
        </button>
      </div>

      {/* Mobile panel */}
      <div className={`${s.panel} ${open ? s.panelOpen : ""}`}>
        {LINKS.map((l) => (
          <button key={l} className={s.panelLink} onClick={() => go(l)}>
            {l}
          </button>
        ))}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mayurkhatri80@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={s.panelHire}
        >
          Hire me ↗
        </a>
      </div>
    </nav>
  );
}
