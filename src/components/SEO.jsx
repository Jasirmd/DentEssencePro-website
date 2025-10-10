import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'

const SEO = ({
  title = 'DentEssencePro — Advanced Dental Care in Bangalore',
  description = 'DentEssencePro offers advanced, compassionate dental care in Bangalore: cosmetic dentistry, dental implants, root canals, orthodontics, and preventive care.',
  keywords = 'dental clinic bangalore, dentist bangalore, dental implants, cosmetic dentistry, root canal treatment',
  canonical = '',
  ogType = 'website',
  ogImage = 'https://dentessencepro.com/og-image.jpg',
  article = false,
  articlePublishedTime = '',
  articleModifiedTime = '',
  structuredData = null
}) => {
  const siteUrl = 'https://dentessencepro.com'
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="DentEssencePro" />
      <meta property="og:locale" content="en_IN" />

      {/* Article specific tags */}
      {article && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {article && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonical: PropTypes.string,
  ogType: PropTypes.string,
  ogImage: PropTypes.string,
  article: PropTypes.bool,
  articlePublishedTime: PropTypes.string,
  articleModifiedTime: PropTypes.string,
  structuredData: PropTypes.object
}

export default SEO
