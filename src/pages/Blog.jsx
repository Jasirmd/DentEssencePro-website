import { Link } from 'react-router-dom'
import Section from '../components/Section'
import VideoHero from '../components/VideoHero'
import BlogCard from '../components/BlogCard'
import ScrollToTop from '../components/ScrollToTop'
import { blogCategories } from '../data/blog'

function BlogCategory({ category }) {
  if (category.blogs.length === 0) return null

  const blogsToShow = category.blogs.slice(0, 3)

  return (
    <div style={{ marginBottom: '5rem' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2.5rem',
        paddingBottom: '1rem',
        borderBottom: '3px solid #8B5CF6'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          margin: 0,
          color: '#000',
          letterSpacing: '-0.5px'
        }}>
          {category.name}
        </h2>
        {category.blogs.length > 3 && (
          <Link
            to={`/blog/category/${category.slug}`}
            className="btn primary"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 102, 204, 0.2)'
            }}
          >
            View More
            <span style={{ fontSize: '1.3rem', transition: 'transform 0.3s ease' }}>→</span>
          </Link>
        )}
      </div>
      <div className="grid cols-3">
        {blogsToShow.map(blog => <BlogCard key={blog.slug} {...blog} />)}
      </div>
    </div>
  )
}

export default function Blog() {
  return (
    <>
      <VideoHero title="Blog" subtitle="Expert dental insights and oral health tips" />
      <Section>
        {blogCategories.map(category => (
          <BlogCategory key={category.id} category={category} />
        ))}
      </Section>
      <ScrollToTop />
    </>
  )
}
