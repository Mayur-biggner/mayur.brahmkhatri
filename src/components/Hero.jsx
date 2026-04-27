import { RESUME } from '../data/resume.js'
import { useTyping } from '../hooks/index.js'
import s from './Hero.module.css'

const TICKER_ITEMS = [
  'Node.js', '·', 'AWS Cloud', '·', 'IoT Systems', '·',
  'MQTT', '·', 'REST APIs', '·', 'NestJS', '·',
  'DynamoDB', '·', 'FFmpeg', '·', 'PostgreSQL', '·',
  'Node.js', '·', 'AWS Cloud', '·', 'IoT Systems', '·',
  'MQTT', '·', 'REST APIs', '·', 'NestJS', '·',
  'DynamoDB', '·', 'FFmpeg', '·', 'PostgreSQL', '·',
]

export default function Hero() {
  const typed = useTyping(RESUME.taglines)

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })

  return (
    <section id="home" className={s.hero}>

      {/* Top rule */}
      <div className={s.topRule} />

      <div className={`wrap ${s.content}`}>

        {/* Meta row */}
        <div className={s.metaRow}>
          <span className="mono-label">Backend Developer</span>
          <span className="mono-label">Nadiad, Gujarat · India</span>
          <span className="mono-label">Available Now</span>
        </div>

        {/* Main editorial grid */}
        <div className={s.grid} style={{marginTop:0}}>

          {/* Left — big serif name */}
          <div className={s.nameCol}>
            <h1 className={s.firstName}>Mayur</h1>
            <h1 className={s.lastName}>Brahm<span className={s.lastAccent}>khatri</span></h1>
          </div>

          {/* Right — info panel */}
          <div className={s.infoCol}>
            {/* Typing tagline */}
            <div className={s.typingWrap}>
              <span className={s.typingLabel}>Currently</span>
              <p className={s.typed}>{typed}<span className={s.cursor}>_</span></p>
            </div>

            <div className={s.divider} />

            <p className={s.intro}>{RESUME.intro}</p>

            <div className={s.divider} />

            {/* Stats */}
            <div className={s.stats}>
              {RESUME.stats.map(({ value, label }) => (
                <div key={label} className={s.stat}>
                  <span className={s.statNum}>{value}</span>
                  <span className="mono-label">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={s.actions}>
              <button className={s.btnInk} onClick={() => go('contact')}>
                Start a conversation →
              </button>
              <button className={s.btnGhost} onClick={() => go('projects')}>
                See work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker tape */}
      <div className={s.ticker}>
        <div className={s.tickerTrack}>
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className={s.tickerItem}>{item}</span>
          ))}
        </div>
      </div>

    </section>
  )
}
