export default function Section({ eyebrow, title, intro, actions, children, id, className = '' }){
  return (
    <section id={id} className={className}>
      <div className="container">
        {(eyebrow || title || intro) && (
          <header className="reveal" style={{marginBottom: 22}}>
            {eyebrow && <span className="tag">{eyebrow}</span>}
            {title && <h2 style={{marginTop:8}}>{title}</h2>}
            {intro && <p style={{maxWidth:680, marginTop: 6}}>{intro}</p>}
            {actions && <div style={{display:'flex', gap:12, marginTop:16}}>{actions}</div>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
