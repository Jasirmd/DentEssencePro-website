import Section from '../components/Section'
import VideoHero from '../components/VideoHero'
import SEO from '../components/SEO'
import { services } from '../data/services'
import { Link } from 'react-router-dom'

// Mapping of services to related blog categories
const serviceToBlogs = {
  'General Dentistry': [
    { name: 'Root Canal Treatment', slug: 'root-canal-treatment' },
    { name: 'Cavities & Fillings', slug: 'cavities-fillings' },
    { name: 'Teeth Cleaning & Scaling', slug: 'teeth-cleaning-scaling' },
    { name: 'Periodontics & Gum Health', slug: 'periodontics-gum-health' },
    { name: 'Tooth Pain & Sensitivity', slug: 'tooth-pain-sensitivity' },
    { name: 'Wisdom Teeth', slug: 'wisdom-teeth' },
    { name: 'Dental Care Tips', slug: 'dental-care-tips' },
    { name: 'Oral Hygiene Care', slug: 'oral-hygiene-care' }
  ],
  'Orthodontic Therapy': [
    { name: 'Orthodontics & Braces', slug: 'orthodontics-braces' },
    { name: 'Sleep Disorders & Bruxism', slug: 'sleep-disorders-bruxism' },
    { name: 'Dental Care Tips', slug: 'dental-care-tips' }
  ],
  'Implant Dentistry': [
    { name: 'Dental Implants', slug: 'dental-implants' },
    { name: 'Dentures & Prosthodontics', slug: 'dentures-prosthodontics' },
    { name: 'Cosmetic Dentistry', slug: 'cosmetic-dentistry' },
    { name: 'Dental Care Tips', slug: 'dental-care-tips' }
  ]
}

function ServiceDetail({ service, index }) {
  const relatedBlogs = serviceToBlogs[service.title] || []

  return (
    <div className="service-detail-compact">
      <div className="service-content-row">
        <div className="service-info">
          <div className="service-header">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-subtitle">{service.subtitle}</p>
          </div>

          <div className="service-features-compact">
            {service.features.map((feature, idx) => (
              <div key={idx} className="feature-item-compact">
                <span className="feature-icon-compact">{feature.icon}</span>
                <div className="feature-content-compact">
                  <h4>{feature.name}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="service-image-side">
          <img
            src={service.detailImage}
            alt={service.title}
            className="service-image-compact"
          />
        </div>
      </div>

      <div className="service-procedures-compact">
        <h3>Available Procedures</h3>
        <div className="procedures-grid-compact">
          {service.procedures.map((proc, idx) => (
            <div key={idx} className="procedure-item-compact">
              <span className="procedure-check-compact">✓</span>
              <span>{proc}</span>
            </div>
          ))}
        </div>
      </div>

      {relatedBlogs.length > 0 && (
        <div className="service-related-blogs">
          <h3>Read Blogs from Related Topics</h3>
          <div className="related-blog-tags">
            {relatedBlogs.map((blog, idx) => (
              <Link
                key={idx}
                to={`/blog/category/${blog.slug}`}
                className="blog-tag"
              >
                {blog.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "DentEssencePro Dental Clinic",
    "description": "Comprehensive dental care services including dental implants, cosmetic dentistry, root canal treatment, orthodontics, and preventive care in Bangalore",
    "url": "https://dentessencepro.com/services",
    "telephone": "+91-9742503814",
    "email": "contact@dentessencepro.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House of Hiranandani, Balaji complex 1, Kodigehalli Main Rd",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560094",
      "addressCountry": "IN"
    },
    "medicalSpecialty": "Dentistry",
    "availableService": services.map(service => ({
      "@type": "MedicalProcedure",
      "name": service.title,
      "description": service.subtitle
    }))
  }

  return (
    <>
      <SEO
        title="Dental Services - Comprehensive Care | DentEssencePro Bangalore"
        description="Expert dental services in Bangalore: dental implants, cosmetic dentistry, root canal treatment, orthodontics, teeth whitening, and preventive care. Advanced technology, experienced dentists."
        keywords="dental services bangalore, dental implants, cosmetic dentistry, root canal treatment, orthodontics, teeth whitening, dental care, DentEssencePro, best dentist bangalore"
        canonical="/services"
        structuredData={structuredData}
      />
      <VideoHero title="Services" subtitle="Comprehensive dental care solutions tailored to your needs" />
      <Section>
        <div className="services-detailed-compact">
          {services.map((service, index) => (
            <ServiceDetail key={index} service={service} index={index} />
          ))}
        </div>
      </Section>
    </>
  )
}

