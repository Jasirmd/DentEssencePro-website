import { useParams, Link } from 'react-router-dom'
import Section from '../components/Section'
import VideoHero from '../components/VideoHero'
import BlogCard from '../components/BlogCard'
import ScrollToTop from '../components/ScrollToTop'
import { blogCategories } from '../data/blog'

export default function CategoryPage() {
  const { categorySlug } = useParams()
  const category = blogCategories.find(cat => cat.slug === categorySlug)

  if (!category) {
    return (
      <Section title="Category not found">
        <p>We couldn't find that category. <Link to="/blog">Back to blog</Link></p>
      </Section>
    )
  }

  if (category.blogs.length === 0) {
    return (
      <>
        <VideoHero title={category.name} subtitle="Expert dental insights and oral health tips" />
        <Section>
          <p>No blogs available in this category yet. <Link to="/blog">Back to all blogs</Link></p>
        </Section>
      </>
    )
  }

  return (
    <>
      <VideoHero title={category.name} subtitle="Expert dental insights and oral health tips" />

      <div style={{ paddingTop: '40px', paddingLeft: '40px', paddingRight: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Breadcrumb Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          color: 'var(--muted)',
          marginBottom: '20px'
        }}>
          <Link to="/blog" style={{ color: 'var(--accent, #0066cc)', textDecoration: 'none', fontWeight: '500' }}>
            Blogs
          </Link>
          <span>›</span>
          <span style={{ color: 'var(--text)' }}>{category.name}</span>
        </nav>
      </div>

      <Section>
        <div className="grid cols-3">
          {category.blogs.map(blog => <BlogCard key={blog.slug} {...blog} />)}
        </div>
      </Section>
      <ScrollToTop />
    </>
  )
}
