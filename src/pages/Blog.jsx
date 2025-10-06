import { useEffect } from 'react'
import Section from '../components/Section'
import VideoHero from '../components/VideoHero'
import BlogCard from '../components/BlogCard'
import { posts } from '../data/blog'

export default function Blog(){
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('blogScrollPosition')
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition))
      sessionStorage.removeItem('blogScrollPosition')
    }
  }, [])

  return (
    <>
      <VideoHero title="Blog" subtitle="Expert dental insights and oral health tips" />
    <Section>
      <div className="grid cols-3">
        {posts.map(p=> <BlogCard key={p.slug} {...p} />)}
      </div>
    </Section>
    </>
  )
}

