import Section from '../components/Section'
import VideoHero from '../components/VideoHero'
import SEO from '../components/SEO'
import { services } from '../data/services'

function ServiceDetail({ service, index }) {
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

