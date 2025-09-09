import { useParams, Link } from 'react-router-dom'
import Section from '../components/Section'
import { posts } from '../data/blog'

const fallback = 'https://images.unsplash.com/photo-1612531386531-29cf3a160680?q=80&w=1200&auto=format&fit=crop'

export default function BlogPost(){
  const { slug } = useParams()
  const post = posts.find(p=> p.slug === slug)
  if(!post) return <Section title="Not found"><p>We couldn’t find that article. <Link to="/blog">Back to blog</Link></p></Section>
  return (
    <Section eyebrow="Blog" title={post.title}>
      <img src={post.cover || fallback} alt="" style={{width:'100%', maxHeight:420, objectFit:'cover', borderRadius:16, marginBottom:16}}/>
      <p style={{whiteSpace:'pre-wrap'}}>{post.content}</p>
    </Section>
  )
}
