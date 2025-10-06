import { useParams, Link, useNavigate } from 'react-router-dom'
import Section from '../components/Section'
import { posts } from '../data/blog'

const fallback = 'https://images.unsplash.com/photo-1612531386531-29cf3a160680?q=80&w=1200&auto=format&fit=crop'

export default function BlogPost(){
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = posts.find(p=> p.slug === slug)

  const handleBackClick = () => {
    sessionStorage.setItem('blogScrollPosition', window.scrollY.toString())
    navigate('/blog')
  }

  if(!post) return <Section title="Not found"><p>We couldn't find that article. <Link to="/blog">Back to blog</Link></p></Section>

  return (
    <>
      <div style={{ paddingTop: '80px', paddingLeft: '20px' }}>
        <button
          onClick={handleBackClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            color: 'var(--accent, #0066cc)',
            cursor: 'pointer',
            fontSize: '16px',
            padding: '8px 0',
            fontWeight: '500'
          }}
        >
          ← Back to Blogs
        </button>
      </div>
      <Section eyebrow="Blog" title={post.title}>
        <img src={post.cover || fallback} alt="" style={{width:'60%', maxHeight:350, objectFit:'cover', borderRadius:16, marginBottom:16, display:'block'}}/>
        <p style={{whiteSpace:'pre-wrap'}}>{post.content}</p>
      </Section>
    </>
  )
}
