import { Link } from 'react-router-dom'

const fallback = 'https://images.unsplash.com/photo-1612531386531-29cf3a160680?q=80&w=1200&auto=format&fit=crop'

export default function BlogCard({ slug, title, excerpt, cover }){
  return (
    <article className="card" style={{display:'grid', gap:12}}>
      <img src={cover || fallback} alt="" style={{width:'100%', height:180, objectFit:'cover', borderRadius:12}}/>
      <div>
        <h3 style={{margin:'0 0 8px'}}>{title}</h3>
        <p style={{margin:0}}>{excerpt}</p>
        <div style={{marginTop:12}}>
          <Link className="btn secondary" to={`/blog/${slug}`}>Read more</Link>
        </div>
      </div>
    </article>
  )
}
