import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import ReviewsCarousel from '../components/ReviewsCarousel'
import { services } from '../data/services'
import { Link } from 'react-router-dom'
import TeamCarousel from '../components/TeamCarousel'
import SEO from '../components/SEO'

export default function Home(){
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "DentEssencePro - Advanced Dental Care in Bangalore",
    "description": "Leading dental clinic in Bangalore offering cosmetic dentistry, dental implants, root canals, orthodontics, and comprehensive oral health services.",
    "url": "https://dentessencepro.com",
    "mainEntity": {
      "@type": "Dentist",
      "name": "DentEssencePro Dental Clinic",
      "description": "Advanced dental care clinic in Bangalore offering cosmetic dentistry, dental implants, root canals, orthodontics, and comprehensive oral health services",
      "url": "https://dentessencepro.com",
      "telephone": "+91-9742503814",
      "email": "contact@dentessencepro.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "House of Hiranandani, Balaji complex 1, Kodigehalli Main Rd opp Tatanagar entrance, opp. Glen gate, Bhadrappa Layout, Koti Hosahalli",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560094",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.9716",
        "longitude": "77.5946"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "21:00"
        }
      ],
      "priceRange": "$$",
      "image": "https://dentessencepro.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/dentessencepro",
        "https://www.instagram.com/dentessencepro",
        "https://www.linkedin.com/company/dentessencepro"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "250"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dental Services",
        "itemListElement": services.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": service.title,
            "description": service.subtitle
          }
        }))
      }
    }
  }

  return (
    <>
      <SEO
        title="DentEssencePro — Advanced Dental Care in Bangalore | Best Dental Clinic"
        description="Expert dental care in Bangalore. Cosmetic dentistry, dental implants, root canals, orthodontics, teeth whitening & preventive care. Modern technology, experienced dentists, patient-first approach."
        keywords="dental clinic bangalore, dentist bangalore, dental implants bangalore, cosmetic dentistry bangalore, root canal treatment bangalore, teeth whitening bangalore, orthodontics bangalore, best dental clinic bangalore, DentEssencePro, dental checkup bangalore, teeth cleaning bangalore, dental tourism bangalore, emergency dentist bangalore, dental implants cost bangalore, cosmetic dentist bangalore, orthodontist bangalore, dental care bangalore, oral health bangalore, preventive dentistry bangalore"
        canonical="/"
        structuredData={structuredData}
      />
      <section className="hero hero-dark" id="home">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-noise" />
          <div className="hero-glow" />
        </div>
        <div className="container hero-inner hero-split">
          <div className="hero-copy">
            <h1 className="reveal delay-1">"Crafting Confident, Healthy Smiles."</h1>
            <p className="reveal delay-2">Aesthetic dentistry, implants, aligners, and full‑mouth rehabilitation using modern technology and evidence‑based protocols. Compassionate care, predictable outcomes.</p>
            <div className="reveal delay-3" style={{display:'flex', gap:12}}>
              <Link className="btn" to="/contact">Book Appointment</Link>
              <a className="btn secondary" href="#services">Explore Services</a>
            </div>
          </div>
          <div className="hero-photo" aria-hidden="true" />
        </div>
      </section>

      <Section
        id="about"
        className="about-section"
        eyebrow="About"
        title="DentEssencePro"
        intro="At DentEssencePro, we practice precision-driven, minimally invasive, and biomimetic dentistry—combining advanced diagnostics, digital workflows, and evidence-based techniques to preserve natural tooth structure, enhance aesthetics, and optimize long-term function. Our approach integrates technology, expertise, and patient comfort to deliver care that's as safe and predictable as it is aesthetic."
      >
        <div className="grid cols-3 glass-cards">
          <div className="card glass-card"><h3 style={{color: '#1e40af'}}>Digital Diagnostics</h3><p>State-of-the-art intraoral imaging, digital impressions, and 3D treatment planning ensure unmatched diagnostic precision. Every case is digitally analyzed to enhance clinical accuracy, minimize procedural errors, and provide predictable treatment outcomes tailored to each patient.</p></div>
          <div className="card glass-card"><h3 style={{color: '#1e40af'}}>Strict Sterilization</h3><p>Implementation of international-grade infection control systems, including Class B autoclaving, single-use disposables, and validated sterilization cycles. Every instrument and operatory follows CDC and ADA-compliant sterilization protocols to ensure uncompromising safety and hygiene.</p></div>
          <div className="card glass-card"><h3 style={{color: '#1e40af'}}>Comfort-First Care</h3><p>Integration of painless anesthesia delivery, ergonomic treatment setups, and anxiety-reduction protocols for an enhanced patient experience. Our clinicians employ behavioral comfort techniques and digital pain-mapping technologies to ensure every procedure feels gentle, predictable, and stress-free.</p></div>
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="What We Do"
        title="Comprehensive, Personalized Dentistry"
        intro="From preventive care to advanced cosmetic and implant dentistry, we combine experience with digital workflows to deliver results that look natural and last."
      >
        <div className="grid cols-3">
          {services.map((s, i)=> <ServiceCard key={i} {...s} />)}
        </div>
      </Section>

      <Section id="team" eyebrow="Our Expert Team" title="Meet Our Dental Professionals" intro="Experienced clinicians dedicated to providing exceptional dental care with modern techniques and compassionate service.">
        <div className="team-carousel">
          <TeamCarousel />
        </div>
      </Section>

      <Section
        id="why"
        className="section-dark"
        eyebrow="Why DentEssencePro"
        title="Technology, Expertise, and Empathy"
      >
        <div className="grid cols-3 floating-cards glass-cards-dark">
          <div className="card float glass-card-dark">
            <h3>Digital precision</h3>
            <p>Planning, diagnostics, and fabrication guided by modern imaging and CAD/CAM for accuracy and comfort.</p>
          </div>
          <div className="card float glass-card-dark">
            <h3>Aesthetic focus</h3>
            <p>Natural-looking restorations and smile design tailored to your face, smile line, and bite harmony.</p>
          </div>
          <div className="card float glass-card-dark">
            <h3>Patient-first protocols</h3>
            <p>Clear communication, gentle techniques, and follow‑up support to make every visit reassuring.</p>
          </div>
        </div>
        
        <div className="patient-testimonials">
          <div className="testimonials-header">
            <div className="google-rating">
              <div className="rating-badge">
                <span className="google-icon">G</span>
                <div className="rating-info">
                  <div className="stars">★★★★★</div>
                  <div className="rating-text">
                    <strong>4.9/5</strong> on Google Maps
                  </div>
                </div>
              </div>
            </div>
            <h3>Loved by Our Patients</h3>
            <p>Hear success stories from our happy patients</p>
          </div>
          <ReviewsCarousel />
        </div>
      </Section>

    </>
  )
}

