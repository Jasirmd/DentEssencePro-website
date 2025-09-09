import { useEffect, useRef } from 'react'

export default function HeroVisual(){
  const ref = useRef(null)

  useEffect(()=>{
    const el = ref.current
    if(!el) return
    const onMove = (e)=>{
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      el.style.setProperty('--mx', x.toFixed(3))
      el.style.setProperty('--my', y.toFixed(3))
    }
    el.addEventListener('mousemove', onMove)
    return ()=> el.removeEventListener('mousemove', onMove)
  },[])

  return (
    <div ref={ref} className="hero-visual" aria-hidden="true">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
      <div className="grain" />
    </div>
  )
}

