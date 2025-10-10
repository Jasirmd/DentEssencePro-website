import { useParams, Link, useNavigate } from 'react-router-dom'
import Section from '../components/Section'
import ScrollToTop from '../components/ScrollToTop'
import SEO from '../components/SEO'
import { posts } from '../data/blog'

const fallback = 'https://images.unsplash.com/photo-1612531386531-29cf3a160680?q=80&w=1200&auto=format&fit=crop'

// Format blog content with proper HTML structure
function formatBlogContent(content) {
  const lines = content.split('\n')
  let result = []
  let inList = false
  let tableData = []
  let inTable = false

  for (let i = 0; i < lines.length; i++) {
    let trimmed = lines[i].trim()

    // Skip empty lines
    if (!trimmed) {
      if (inList) {
        result.push('</ul>')
        inList = false
      }
      if (inTable) {
        result.push(createTable(tableData))
        tableData = []
        inTable = false
      }
      result.push('<br/>')
      continue
    }

    // Detect table rows (lines with pipe | separator)
    if (trimmed.includes('|') && !trimmed.includes('||')) {
      if (!inList && tableData.length === 0) {
        inTable = true
      }
      tableData.push(trimmed)
      continue
    }

    // End table if we were building one
    if (inTable && tableData.length > 0) {
      result.push(createTable(tableData))
      tableData = []
      inTable = false
    }

    // Purple headings with || delimiter ||
    if (trimmed.includes('||')) {
      if (inList) {
        result.push('</ul>')
        inList = false
      }
      const text = trimmed.replace(/\|\|/g, '').trim()
      result.push(`<h3 style="color: #8B5CF6; font-size: 1.35rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">${text}</h3>`)
      continue
    }

    // Main section headings with // delimiter //
    if (trimmed.includes('//')) {
      if (inList) {
        result.push('</ul>')
        inList = false
      }
      const text = trimmed.replace(/\/\//g, '').trim()
      result.push(`<h2 style="color: #2D3748; font-size: 1.6rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1.2rem; border-left: 4px solid #8B5CF6; padding-left: 1rem;">${text}</h2>`)
      continue
    }

    // Bullet points with emoji
    if (trimmed.match(/^[✅❌⚠️💎🔍✨💬⏱☎️📞]/)) {
      if (!inList) {
        result.push('<ul style="list-style: none; padding-left: 0; margin: 1rem 0;">')
        inList = true
      }
      result.push(`<li style="margin-bottom: 0.75rem; padding-left: 0.5rem;">${trimmed}</li>`)
      continue
    }

    // Lines starting with dash or bullet
    if (trimmed.match(/^[-–•]/)) {
      if (!inList) {
        result.push('<ul style="list-style: disc; padding-left: 2rem; margin: 1rem 0;">')
        inList = true
      }
      result.push(`<li style="margin-bottom: 0.6rem;">${trimmed.substring(1).trim()}</li>`)
      continue
    }

    // Regular paragraphs
    if (inList) {
      result.push('</ul>')
      inList = false
    }
    result.push(`<p style="margin-bottom: 1rem; line-height: 1.8;">${trimmed}</p>`)
  }

  // Close any open lists or tables
  if (inList) result.push('</ul>')
  if (tableData.length > 0) result.push(createTable(tableData))

  return result.join('\n')
}

// Create HTML table from data
function createTable(rows) {
  if (rows.length === 0) return ''

  let html = '<table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;">'

  rows.forEach((row, idx) => {
    const isHeader = idx === 0
    // Split by pipe and clean up the cells
    const cells = row.split('|').map(c => c.trim()).filter(c => c)

    if (cells.length > 0) {
      html += '<tr>'
      cells.forEach((cell, cellIdx) => {
        const tag = isHeader ? 'th' : 'td'
        const style = isHeader
          ? 'background: #8B5CF6; color: white; padding: 12px; text-align: left; font-weight: 600;'
          : `background: ${idx % 2 === 0 ? 'white' : '#F9FAFB'}; padding: 12px; border-bottom: 1px solid #E5E7EB;`
        html += `<${tag} style="${style}">${cell}</${tag}>`
      })
      html += '</tr>'
    }
  })

  html += '</table>'
  return html
}

export default function BlogPost(){
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = posts.find(p=> p.slug === slug)

  const handleBackClick = () => {
    sessionStorage.setItem('blogScrollPosition', window.scrollY.toString())
    navigate('/blog')
  }

  if(!post) return <Section title="Not found"><p>We couldn't find that article. <Link to="/blog">Back to blog</Link></p></Section>

  // SEO structured data for blog article
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.cover || fallback,
    "author": {
      "@type": "Organization",
      "name": "DentEssencePro Dental Clinic"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DentEssencePro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dentessencepro.com/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-10-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://dentessencepro.com/blog/${post.slug}`
    }
  }

  return (
    <>
      <SEO
        title={`${post.title} | DentEssencePro Blog`}
        description={post.excerpt}
        keywords={`${post.category}, dental care bangalore, ${post.title}, bangalore dentist, DentEssencePro, dental treatment bangalore, oral health, dental tips, dental advice, dental procedures, dental health bangalore`}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.cover || 'https://dentessencepro.com/og-image.jpg'}
        article={true}
        articlePublishedTime="2025-01-01T00:00:00Z"
        articleModifiedTime="2025-10-10T00:00:00Z"
        structuredData={structuredData}
      />
      <div style={{ paddingTop: '100px', paddingLeft: '40px', paddingRight: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Breadcrumb Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          color: 'var(--muted)',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          <Link to="/blog" style={{ color: 'var(--accent, #0066cc)', textDecoration: 'none', fontWeight: '500' }}>
            Blogs
          </Link>
          <span>›</span>
          <Link
            to={`/blog/category/${post.categorySlug}`}
            style={{ color: 'var(--accent, #0066cc)', textDecoration: 'none', fontWeight: '500' }}
          >
            {post.category}
          </Link>
          <span>›</span>
          <span style={{ color: 'var(--text)' }}>{post.title}</span>
        </nav>
      </div>
      <Section eyebrow="Blog" title={post.title}>
        <img src={post.cover || fallback} alt="" style={{width:'60%', maxHeight:350, objectFit:'cover', borderRadius:16, marginBottom:32, display:'block'}}/>
        <div
          style={{
            lineHeight: '1.8',
            fontSize: '1.05rem',
            color: 'var(--text)',
            maxWidth: '800px'
          }}
          dangerouslySetInnerHTML={{ __html: formatBlogContent(post.content) }}
        />
      </Section>
      <ScrollToTop />
    </>
  )
}
