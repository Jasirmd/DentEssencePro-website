export default function TeamCard({ name, role, specialization, img, bio, education, experience }){
  return (
    <article className="card team-card" style={{display:'grid', gap:12}}>
      <img src={img} alt={name} style={{width:'100%', height:200, objectFit:'cover', borderRadius:12}}/>
      <div>
        <h3 style={{margin:'0 0 4px 0', color: '#0c2340'}}>{name}</h3>
        <p style={{margin:'0 0 4px 0', fontWeight:600, color:'#1a73e8'}}>{role}</p>
        <p style={{margin:'0 0 8px 0', fontWeight:500, color:'#0c2340', fontSize:'0.9rem'}}>{specialization}</p>
        
        {bio && (
          <p style={{margin:'0 0 12px 0', fontSize:'0.9rem', lineHeight:'1.4', color:'#6b7280'}}>{bio}</p>
        )}
        
        {education && (
          <div style={{marginBottom:'8px'}}>
            <h4 style={{margin:'0 0 6px 0', fontSize:'0.9rem', color:'#0c2340'}}>🎓 Education</h4>
            <ul style={{margin:0, paddingLeft:'16px', fontSize:'0.85rem', color:'#6b7280'}}>
              {education.map((item, idx) => (
                <li key={idx} style={{marginBottom:'2px', lineHeight:'1.3'}}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {experience && (
          <div>
            <h4 style={{margin:'0 0 6px 0', fontSize:'0.9rem', color:'#0c2340'}}>💼 Experience</h4>
            <ul style={{margin:0, paddingLeft:'16px', fontSize:'0.85rem', color:'#6b7280'}}>
              {experience.map((item, idx) => (
                <li key={idx} style={{marginBottom:'2px', lineHeight:'1.3'}}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}

