import { Link } from 'react-router-dom'
import Section from '../components/Section'
import VideoHero from '../components/VideoHero'
import BlogCard from '../components/BlogCard'
import ScrollToTop from '../components/ScrollToTop'
import SEO from '../components/SEO'
import { blogCategories } from '../data/blog'

function BlogCategory({ category }) {
  if (category.blogs.length === 0) return null

  const blogsToShow = category.blogs.slice(0, 3)

  return (
    <div id={category.slug} style={{ marginBottom: '5rem', scrollMarginTop: '100px' }}>
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
      <div style={{
        backgroundColor: '#2d2d2d',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
      }}>
        <div className="grid cols-3">
          {blogsToShow.map(blog => <BlogCard key={blog.slug} {...blog} />)}
        </div>
      </div>
    </div>
  )
}

export default function Blog() {
  const scrollToCategory = (categorySlug) => {
    const element = document.getElementById(categorySlug)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "DentEssencePro Dental Blog",
    "description": "Expert dental insights, oral health tips, and comprehensive guides on dental treatments in Bangalore",
    "url": "https://dentessencepro.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "DentEssencePro Dental Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dentessencepro.com/logo.png"
      }
    }
  }

  return (
    <>
      <SEO
        title="Dental Blogs | Expert tips & insights | DentEssencePro"
        description="Expert dental insights, oral health tips, and comprehensive guides on dental implants, cosmetic dentistry, orthodontics, and preventive care from DentEssencePro Bangalore."
        keywords="dental blog bangalore, dental tips, oral health tips, dental care advice, dental implants guide, cosmetic dentistry tips, orthodontics information, dental health blog, bangalore dentist blog, dental care tips, oral hygiene tips, dental treatment guide, dental procedures, dental advice, dental information bangalore, dental insights, preventive dental care, dental health education"
        canonical="/blog"
        structuredData={structuredData}
      />
      <VideoHero title="Blog" subtitle="Expert dental insights and oral health tips" />

      {/* Topic Navigation Section */}
      <Section style={{ paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: '#f9fafb' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '0.5rem',
            color: '#000'
          }}>
            What Are You Looking For?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Choose a topic below to quickly navigate to relevant dental insights
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {blogCategories.filter(cat => cat.blogs.length > 0).map(category => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.slug)}
              style={{
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#fff',
                backgroundColor: '#8B5CF6',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(139, 92, 246, 0.2)',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#7C3AED'
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#8B5CF6'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 2px 8px rgba(139, 92, 246, 0.2)'
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </Section>

      <Section>
        {blogCategories.map(category => (
          <BlogCategory key={category.id} category={category} />
        ))}
      </Section>
      <ScrollToTop />
    </>
  )
}
