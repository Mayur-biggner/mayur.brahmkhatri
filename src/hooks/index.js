import { useState, useEffect, useRef } from 'react'

export function useTyping(words, speed = 75, pause = 2200) {
  const [display, setDisplay] = useState('')
  const [wIdx, setWIdx]       = useState(0)
  const [cIdx, setCIdx]       = useState(0)
  const [del, setDel]         = useState(false)

  useEffect(() => {
    const word = words[wIdx]
    const t = setTimeout(() => {
      if (!del) {
        setDisplay(word.slice(0, cIdx + 1))
        if (cIdx + 1 === word.length) setTimeout(() => setDel(true), pause)
        else setCIdx(c => c + 1)
      } else {
        setDisplay(word.slice(0, cIdx - 1))
        if (cIdx - 1 === 0) { setDel(false); setWIdx(w => (w+1)%words.length); setCIdx(0) }
        else setCIdx(c => c - 1)
      }
    }, del ? speed/2 : speed)
    return () => clearTimeout(t)
  }, [cIdx, del, wIdx, words, speed, pause])

  return display
}

export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

export function useScrolled(px = 20) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > px)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [px])
  return scrolled
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const h = () => {
      let cur = ids[0]
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [ids])
  return active
}
