import { useState, useEffect, useMemo } from 'react'
import SEO from '../components/SEO'
import dentalImplantsImg from '../assets/images/dental-implants.jpg'
import cosmeticDentistryImg from '../assets/images/cosmetic-dentistry.jpg'
import alignersImg from '../assets/images/aligners.jpg'
import rootCanalImg from '../assets/images/root-canal.jpg'

const WHY_CHOOSE = [
  {
    title: 'Expert Doctors',
    description:
      'Prof. Dr. Makam Gangaiah (Implantologist) and Dr. Sowmya Gangaiah (Orthodontist) oversee every smile plan end to end.'
  },
  {
    title: 'Specialized Services',
    description:
      'Full mouth rehabilitation, advanced dental implants, smile makeovers, invisible braces, and clear aligners under one roof.'
  },
  {
    title: 'Affordable Excellence',
    description:
      'Up to 70% savings compared to the US, UK, or Middle East while meeting stringent international standards.'
  },
  {
    title: 'Advanced Technology',
    description:
      'Digital dentistry, CBCT imaging, guided implant surgery, conscious sedation, and minimally invasive protocols.'
  },
  {
    title: 'Complete Support',
    description:
      'Visa documentation, airport transfers, curated hotel stays, translators, and guided sightseeing in Bangalore.'
  }
]

const POPULAR_TREATMENTS = [
  {
    title: 'Dental Implants',
    subtitle: 'All-on-4, All-on-6, Full Mouth Rehabilitation',
    description: 'Advanced dental implant solutions for single tooth replacement to complete full mouth rehabilitation. Using premium global systems like Nobel Biocare and Straumann, our expert implantologists restore your smile with precision and care.',
    image: dentalImplantsImg
  },
  {
    title: 'Cosmetic Dentistry & Smile Design',
    subtitle: 'Transform Your Smile',
    description: 'Professional smile makeovers combining teeth whitening, veneers, bonding, and digital smile design. Our aesthetic dentistry experts create natural-looking, beautiful smiles tailored to your facial features and preferences.',
    image: cosmeticDentistryImg
  },
  {
    title: 'Invisible Braces / Clear Aligners',
    subtitle: 'Discreet Orthodontic Treatment',
    description: 'Modern orthodontic solutions with clear aligners and invisible braces for adults and teens. Straighten your teeth comfortably and discreetly without traditional metal braces, with predictable results and shorter treatment times.',
    image: alignersImg
  },
  {
    title: 'Root Canal & Restorative Dentistry',
    subtitle: 'Save Your Natural Teeth',
    description: 'Painless root canal treatments using advanced techniques and microscopic precision. Our endodontists specialize in saving damaged teeth and restoring them to full function with modern materials and technology.',
    image: rootCanalImg
  }
]

const TRAVEL_EXPERIENCE = [
  'Customised itinerary balancing treatment, recovery, and leisure',
  'Concierge desk for flights, hotels, transport, and curated tours',
  'Access to Bangalore highlights: heritage palaces, gardens, silk markets, and culinary trails',
  'Dedicated international patient coordinators for every step'
]

const IMPLANT_HIGHLIGHTS = [
  'World-renowned expertise with over two decades in advanced implantology and prosthodontics',
  'Comprehensive solutions from single-tooth restorations to full mouth rehabilitation',
  'Premium global systems including Nobel Biocare and Straumann',
  'Guided, minimally invasive implant surgeries for faster recovery',
  'Aesthetic crowns and bridges crafted for natural perfection',
  'Dedicated luxury lounge and international patient care teams'
]

const IMPLANT_SOLUTIONS = [
  'Single tooth implants with immediate aesthetic crowns',
  'All-on-4 and All-on-6 implant systems',
  'Zygomatic and pterygoid implants for severe bone loss',
  'Full mouth rehabilitation with digital planning',
  'Digital smile design previews before treatment begins'
]

const CONCIERGE_SUPPORT = [
  'Visa and travel support',
  'Airport pickup and curated hotel assistance',
  'Treatment schedules aligned with your holiday plans',
  'Post-care reviews and virtual follow-ups once you are home'
]

const DENTESSENCE_DIFFERENCE = [
  'Micron-level precision using CBCT and 3D surgical guides',
  'Bespoke prosthetics for a luxe aesthetic finish',
  'Sterilisation and safety protocols on par with elite global centres',
  'Mentorship-driven expertise with Prof. Dr. Makam Gangaiah training clinicians worldwide'
]

export default function DentalTourism() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % POPULAR_TREATMENTS.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + POPULAR_TREATMENTS.length) % POPULAR_TREATMENTS.length)
    setProgress(0)
  }

  const goToSlide = (index) => {
    setActiveSlide(index)
    setProgress(0)
  }

  // Auto-play carousel with timer
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSlide((current) => (current + 1) % POPULAR_TREATMENTS.length)
          return 0
        }
        return prev + 2 // Increment by 2% every 100ms (5 seconds total)
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [])
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "DentEssencePro Dental Tourism",
    "description": "Premium dental tourism in Bangalore, India. Affordable world-class dental care including dental implants, cosmetic dentistry, and full mouth rehabilitation for international patients.",
    "url": "https://dentessencepro.com/dental-tourism",
    "telephone": "+91-9742503814",
    "email": "info@drmakamgangaiah.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House of Hiranandani, Balaji complex 1, Kodigehalli Main Rd",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560094",
      "addressCountry": "IN"
    },
    "medicalSpecialty": "Dentistry",
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Dental Implants (All-on-4, All-on-6)",
        "description": "Advanced implant dentistry with immediate loading protocols"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "Cosmetic Dentistry & Smile Design",
        "description": "Complete smile makeovers and aesthetic dentistry"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Invisible Braces / Clear Aligners",
        "description": "Modern orthodontic treatment for teeth alignment"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Full Mouth Rehabilitation",
        "description": "Comprehensive dental restoration and rehabilitation"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dental Tourism Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complete Dental Tourism Package",
            "description": "Dental treatment + accommodation + travel assistance"
          }
        }
      ]
    }
  }

  const heroStars = useMemo(
    () =>
      Array.from({ length: 90 }, () => ({
        top: `${(Math.random() * 100).toFixed(2)}%`,
        left: `${(Math.random() * 100).toFixed(2)}%`,
        size: `${(1 + Math.random() * 2.5).toFixed(2)}px`,
        delay: `${(Math.random() * 8).toFixed(2)}s`,
        duration: `${(6 + Math.random() * 4).toFixed(2)}s`
      })),
    []
  )

  return (
    <>
      <SEO
        title="Dental Tourism in Bangalore, India | Affordable World-Class Care | DentEssencePro"
        description="Premium dental tourism in Bangalore, India. Save up to 70% on dental implants, cosmetic dentistry, and full mouth rehabilitation. Expert dentists, modern technology, complete travel support."
        keywords="dental tourism india, dental tourism bangalore, affordable dental care india, dental implants india, cosmetic dentistry bangalore, dental tourism packages, international dental patients"
        canonical="/dental-tourism"
        structuredData={structuredData}
      />
      <div className="tourism-page">
      <section className="tourism-hero">
        <div className="hero-backdrop">
          <div className="aurora-layer aurora-one"></div>
          <div className="aurora-layer aurora-two"></div>
          <div className="aurora-layer aurora-three"></div>
          <div className="aurora-layer aurora-four"></div>
          <div className="starfield">
            {heroStars.map((star, index) => (
              <span
                key={index}
                className="hero-star"
                style={{
                  top: star.top,
                  left: star.left,
                  width: star.size,
                  height: star.size,
                  animationDelay: star.delay,
                  animationDuration: star.duration
                }}
              ></span>
            ))}
          </div>
        </div>
        <div className="hero-shell">
          <div className="hero-card">
            <h1>Dental Tourism in Bangalore, India</h1>
            <p className="hero-subtitle">Affordable World-Class Dental Care at DentEssencePRO</p>
            <p className="hero-copy">
              Looking for high-quality dental treatment at international standards but at affordable prices? Welcome to
              DentEssencePRO Dental Clinic, Bangalore &mdash; a leading destination for dental tourism in India.
            </p>
          </div>
        </div>
      </section>

      <section className="tourism-section why-choose">
        <div className="section-shell">
          <div className="section-header-block">
            <span className="section-badge">Our Advantages</span>
            <h2 className="section-title">Why Choose Us?</h2>
          </div>
          <div className="card-grid card-grid--five">
            {WHY_CHOOSE.map((item, index) => (
              <div key={item.title} className="info-card elevated">
                <div className="card-icon">
                  <span className="icon-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tourism-section treatments-carousel-section">
        <div className="section-shell">
          <div className="section-header-block centered">
            <span className="section-badge">Our Specialties</span>
            <h2 className="section-title">Popular Dental Treatments for International Patients</h2>
          </div>
          <div className="carousel-wrapper">
            <button className="carousel-nav carousel-prev" onClick={prevSlide} aria-label="Previous slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="carousel-main">
              <div className="carousel-container">
                <div className="carousel-slide">
                  <div className="carousel-image">
                    <img src={POPULAR_TREATMENTS[activeSlide].image} alt={POPULAR_TREATMENTS[activeSlide].title} />
                    <div className="carousel-image-overlay"></div>
                  </div>
                  <div className="carousel-content">
                    <h3 className="carousel-title">{POPULAR_TREATMENTS[activeSlide].title}</h3>
                    <p className="carousel-subtitle">{POPULAR_TREATMENTS[activeSlide].subtitle}</p>
                    <p className="carousel-description">{POPULAR_TREATMENTS[activeSlide].description}</p>
                  </div>
                </div>
              </div>
              <div className="carousel-progress-bars">
                {POPULAR_TREATMENTS.map((_, index) => (
                  <button
                    key={index}
                    className="progress-bar-wrapper"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div className="progress-bar-bg">
                      <div
                        className="progress-bar-fill"
                        style={{
                          width: index === activeSlide ? `${progress}%` : index < activeSlide ? '100%' : '0%'
                        }}
                      ></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <button className="carousel-nav carousel-next" onClick={nextSlide} aria-label="Next slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="tourism-section travel">
        <div className="section-shell travel-shell">
          <div className="travel-copy">
            <span className="section-badge light">Experience</span>
            <h2>Dental Care + Travel Experience</h2>
            <p>
              Combine your treatment with a curated holiday in India&apos;s Garden City. Our team balances premium dental
              care with immersive experiences so you return home refreshed, relaxed, and smiling brighter.
            </p>
          </div>
          <div className="travel-list">
            {TRAVEL_EXPERIENCE.map((item, index) => (
              <div key={item} className="travel-item enhanced">
                <div className="travel-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.666 5L7.49935 14.1667L3.33268 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tourism-section implants">
        <div className="section-shell">
          <div className="section-heading enhanced">
            <span className="section-badge">Premium Care</span>
            <h2>Premium Dental Implants &amp; Full Mouth Rehabilitation</h2>
            <h3 className="subtitle-gold">Redefining Smiles. Restoring Confidence. Elevating Lives.</h3>
            <p>
              Led by Prof. Dr. Makam Gangaiah, our implantology centre blends precision, artistry, and innovation to
              deliver restorations that feel natural, look beautiful, and last a lifetime.
            </p>
          </div>
          <div className="card-grid card-grid--three">
            {IMPLANT_HIGHLIGHTS.map((item, index) => (
              <div key={item} className="info-card highlight">
                <div className="highlight-marker"></div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="panel modern">
            <div className="panel-header">
              <div className="panel-icon">⚕</div>
              <h3>Our Specialised Implant Solutions</h3>
            </div>
            <div className="pill-row">
              {IMPLANT_SOLUTIONS.map((item) => (
                <span key={item} className="pill-modern">{item}</span>
              ))}
            </div>
          </div>
          <div className="panel modern">
            <div className="panel-header">
              <div className="panel-icon">✈</div>
              <h3>Dental Tourism + Premium Implants</h3>
            </div>
            <p className="panel-intro">Travel to Bangalore for a seamless, world-class implant journey with hospitality built in.</p>
            <ul className="modern-list">
              {CONCIERGE_SUPPORT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel modern accent">
            <div className="panel-header">
              <div className="panel-icon">★</div>
              <h3>The DentEssencePRO Difference</h3>
            </div>
            <ul className="modern-list">
              {DENTESSENCE_DIFFERENCE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="tourism-section contact">
        <div className="section-shell">
          <h2 className="section-title text-center">Book Your Smile Journey Today</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>WhatsApp / Call</h3>
              <p>Connect instantly with our international care desk.</p>
              <div className="contact-actions">
                <a className="btn btn-whatsapp" href="https://wa.me/919742503814" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a className="btn btn-call" href="tel:+919742503814">
                  Call Now
                </a>
              </div>
            </div>
            <div className="contact-card">
              <h3>Email Us</h3>
              <p>Share reports or treatment plans for a personalised itinerary.</p>
              <div className="contact-actions single">
                <a className="btn btn-email" href="mailto:info@drmakamgangaiah.com">
                  Send Email
                </a>
              </div>
            </div>
          </div>
          <p className="clinic-tagline">DentEssencePRO &mdash; The trusted name in Dental Tourism, Bangalore.</p>
        </div>
      </section>

      <style jsx>{`
        .tourism-page {
          background: #f5f7fc;
          color: #0d1d35;
        }

        .tourism-hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(6rem, 9vw, 9rem) 0;
          overflow: hidden;
          background: radial-gradient(circle at 15% 15%, rgba(20, 36, 72, 0.85) 0%, rgba(5, 15, 34, 0.95) 55%, #040b1a 100%);
        }

        .hero-backdrop {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .aurora-layer {
          position: absolute;
          width: 200%;
          height: 200%;
          filter: blur(80px);
          opacity: 0.8;
          animation: aurora-flow 20s ease-in-out infinite;
        }

        .aurora-one {
          top: -30%;
          left: -50%;
          background: linear-gradient(45deg,
            rgba(91, 190, 214, 0.8) 0%,
            rgba(74, 144, 226, 0.6) 35%,
            transparent 70%
          );
          animation-duration: 25s;
        }

        .aurora-two {
          bottom: -40%;
          right: -60%;
          background: linear-gradient(135deg,
            rgba(217, 183, 105, 0.7) 0%,
            rgba(255, 154, 158, 0.5) 40%,
            transparent 75%
          );
          animation-delay: -8s;
          animation-duration: 30s;
          animation-direction: reverse;
        }

        .aurora-three {
          top: -10%;
          right: -40%;
          background: linear-gradient(225deg,
            rgba(122, 108, 232, 0.7) 0%,
            rgba(184, 93, 230, 0.6) 45%,
            transparent 80%
          );
          animation-delay: -15s;
          animation-duration: 35s;
        }

        .aurora-four {
          top: 50%;
          left: -30%;
          background: linear-gradient(315deg,
            rgba(80, 227, 194, 0.6) 0%,
            rgba(91, 190, 214, 0.5) 50%,
            transparent 85%
          );
          animation-delay: -22s;
          animation-duration: 28s;
          animation-direction: reverse;
        }

        .starfield {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero-star {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          opacity: 0.6;
          animation: star-float 8s ease-in-out infinite;
        }

        .hero-shell {
          position: relative;
          width: min(1200px, 94%);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-card {
          position: relative;
          width: 100%;
          max-width: 900px;
          padding: clamp(3rem, 5vw, 4rem);
          border-radius: 36px;
          background: linear-gradient(160deg, rgba(7, 14, 30, 0.92), rgba(4, 12, 26, 0.85));
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 40px 110px rgba(2, 8, 18, 0.65);
          text-align: center;
        }

        .hero-card::after {
          content: '';
          position: absolute;
          inset: 1.6rem;
          border-radius: 28px;
          border: 1px solid rgba(217, 183, 105, 0.28);
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 1.25rem;
          border-radius: 999px;
          background: rgba(217, 183, 105, 0.22);
          color: rgba(217, 183, 105, 0.95);
          letter-spacing: 0.18em;
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 1.8rem;
        }

        .hero-card h1 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          line-height: 1.1;
          color: #ffffff;
          margin-bottom: 1.5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-subtitle {
          color: rgba(217, 183, 105, 0.92);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 0.95rem;
          margin-bottom: 1.35rem;
        }

        .hero-copy {
          color: rgba(230, 236, 248, 0.9);
          line-height: 1.7;
          font-size: 1.1rem;
          margin: 0;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .tourism-section {
          padding: clamp(4.5rem, 7vw, 7.5rem) 0;
        }

        .section-shell {
          width: min(1140px, 92%);
          margin: 0 auto;
        }

        .section-header-block {
          margin-bottom: clamp(3rem, 4.5vw, 3.8rem);
        }

        .section-header-block.centered {
          text-align: center;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: clamp(3rem, 4.5vw, 3.8rem);
        }

        .section-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(217, 183, 105, 0.15), rgba(217, 183, 105, 0.25));
          border: 1px solid rgba(217, 183, 105, 0.4);
          color: #c89840;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .section-badge.light {
          background: linear-gradient(135deg, rgba(96, 177, 212, 0.2), rgba(96, 177, 212, 0.3));
          border: 1px solid rgba(96, 177, 212, 0.5);
          color: rgba(96, 177, 212, 0.95);
        }

        .section-title {
          font-size: clamp(2.3rem, 3.8vw, 3.2rem);
          color: #0b1e36;
          margin-bottom: clamp(2.2rem, 3.5vw, 2.8rem);
          line-height: 1.2;
        }

        .card-grid {
          display: grid;
          gap: clamp(1.6rem, 2.6vw, 2.3rem);
        }

        .card-grid--five {
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        }

        .card-grid--three {
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .info-card {
          position: relative;
          background: linear-gradient(140deg, #0e1f3a 0%, #0c1a32 100%);
          border-radius: 24px;
          padding: 2.2rem;
          box-shadow: 0 24px 60px rgba(10, 27, 54, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e8edf8;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, rgba(217, 183, 105, 0.8), rgba(96, 177, 212, 0.8));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 32px 80px rgba(10, 27, 54, 0.3);
          border-color: rgba(217, 183, 105, 0.3);
        }

        .info-card:hover::before {
          opacity: 1;
        }

        .info-card.elevated {
          background: linear-gradient(145deg, #112240 0%, #0a1628 100%);
        }

        .card-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(217, 183, 105, 0.15), rgba(217, 183, 105, 0.25));
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(217, 183, 105, 0.3);
        }

        .icon-number {
          font-size: 1.3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #d9b769, #f0d99b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .info-card h3,
        .info-card h4 {
          color: #fefefe;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .info-card.subtle {
          background: linear-gradient(150deg, #142b4b 0%, #0f233c 100%);
        }

        .info-card.highlight {
          position: relative;
          background: linear-gradient(145deg, #f8f9fc 0%, #ffffff 100%);
          color: #0b1e36;
          border: 1px solid rgba(13, 36, 66, 0.12);
          padding-left: 2.5rem;
        }

        .info-card.highlight::before {
          opacity: 1;
          height: 100%;
          width: 4px;
          background: linear-gradient(180deg, #d9b769, #c89840);
          left: 0;
          top: 0;
          border-radius: 0;
        }

        .info-card.highlight:hover {
          border-color: rgba(217, 183, 105, 0.4);
        }

        .info-card.highlight:hover::before {
          opacity: 1;
        }

        .info-card.highlight p {
          color: rgba(27, 50, 82, 0.8);
        }

        .highlight-marker {
          display: none;
        }

        .info-card p {
          margin: 0;
          color: rgba(226, 234, 248, 0.85);
          line-height: 1.7;
          font-size: 1rem;
        }

        .soft {
          background: linear-gradient(180deg, #ffffff 0%, #f3f6fc 100%);
        }

        .treatments-carousel-section {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        }

        .carousel-wrapper {
          display: flex;
          align-items: center;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .carousel-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .treatments-carousel-section .carousel-container {
          position: relative;
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(13, 36, 66, 0.15);
          border: 2px solid rgba(217, 183, 105, 0.2);
        }

        .treatments-carousel-section .carousel-slide {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
        }

        .treatments-carousel-section .carousel-image {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .treatments-carousel-section .carousel-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .treatments-carousel-section .carousel-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(248, 250, 252, 0.3) 70%,
            rgba(248, 250, 252, 0.8) 100%
          );
        }

        .treatments-carousel-section .carousel-content {
          padding: 2rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          min-height: 280px;
          height: auto;
        }

        .carousel-title {
          font-size: 1.75rem;
          color: #0b1e36;
          margin-bottom: 0.6rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .carousel-subtitle {
          color: #c89840;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .carousel-description {
          color: rgba(27, 50, 82, 0.8);
          line-height: 1.65;
          font-size: 0.95rem;
          margin: 0;
        }

        .carousel-nav {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(217, 183, 105, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #c89840;
          flex-shrink: 0;
        }

        .carousel-nav:hover {
          background: #ffffff;
          border-color: #c89840;
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(217, 183, 105, 0.3);
        }

        .carousel-progress-bars {
          display: flex;
          gap: 8px;
          justify-content: center;
          padding: 0;
        }

        .progress-bar-wrapper {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .progress-bar-bg {
          width: 60px;
          height: 4px;
          background: rgba(217, 183, 105, 0.25);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #d9b769, #c89840);
          transition: width 0.1s linear;
          border-radius: 2px;
        }

        .pill-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .pill-card {
          background: #ffffff;
          border: 1px solid rgba(14, 38, 73, 0.14);
          border-radius: 18px;
          padding: 1.3rem 1.6rem;
          box-shadow: 0 16px 40px rgba(12, 31, 57, 0.12);
          transition: all 0.3s ease;
        }

        .pill-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(12, 31, 57, 0.18);
          border-color: rgba(217, 183, 105, 0.4);
        }

        .pill-card.premium {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .pill-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d9b769, #c89840);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.95rem;
          flex-shrink: 0;
        }

        .pill-card span {
          font-weight: 600;
          color: #0d2a4b;
          font-size: 1rem;
        }

        .travel {
          background: linear-gradient(170deg, rgba(9, 24, 46, 0.95) 0%, rgba(4, 12, 24, 0.92) 85%);
          color: rgba(230, 236, 248, 0.92);
        }

        .travel-shell {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: clamp(2.2rem, 4vw, 3rem);
          align-items: center;
        }

        .travel-copy h2 {
          color: #ffffff;
          font-size: clamp(2.2rem, 3.6vw, 2.8rem);
          margin-bottom: 1.2rem;
        }

        .travel-copy p {
          margin: 0;
          line-height: 1.7;
          color: rgba(230, 236, 248, 0.95);
        }

        .travel-list {
          display: grid;
          gap: 1rem;
        }

        .travel-item {
          background: linear-gradient(140deg, rgba(13, 33, 61, 0.9), rgba(9, 22, 44, 0.9));
          border-radius: 18px;
          padding: 1.25rem 1.5rem;
          border: 1px solid rgba(96, 177, 212, 0.3);
          color: rgba(218, 229, 244, 0.94);
          transition: all 0.3s ease;
        }

        .travel-item.enhanced {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.4rem 1.6rem;
        }

        .travel-item.enhanced:hover {
          transform: translateX(8px);
          border-color: rgba(96, 177, 212, 0.6);
          background: linear-gradient(140deg, rgba(13, 33, 61, 1), rgba(9, 22, 44, 1));
        }

        .travel-icon {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: linear-gradient(135deg, rgba(96, 177, 212, 0.3), rgba(96, 177, 212, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: rgba(96, 177, 212, 0.95);
          margin-top: 2px;
        }

        .skin {
          background: #ffffff;
        }

        .section-heading {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 3.5rem;
        }

        .section-heading.enhanced {
          max-width: 900px;
          margin-bottom: 4rem;
        }

        .section-heading h2 {
          font-size: clamp(2.4rem, 3.9vw, 3.3rem);
          color: #0b1e36;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-heading h3 {
          color: #1f4b92;
          margin-bottom: 1.2rem;
          font-size: 1.3rem;
        }

        .subtitle-gold {
          background: linear-gradient(135deg, #d9b769, #c89840);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
          font-weight: 600;
        }

        .section-heading p {
          color: rgba(27, 50, 82, 0.76);
          line-height: 1.8;
          font-size: 1.08rem;
        }

        .card-grid.compact {
          margin-bottom: 3rem;
        }

        .split-lists {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: clamp(2rem, 3.5vw, 3rem);
          margin-bottom: 2.6rem;
        }

        .list-block h3 {
          font-size: 1.35rem;
          color: #0d2a4b;
          margin-bottom: 1rem;
        }

        .list-block ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 0.75rem;
        }

        .list-block li {
          position: relative;
          padding-left: 1.4rem;
          color: rgba(27, 50, 82, 0.78);
          line-height: 1.6;
        }

        .list-block li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d4a64d;
        }

        .note-card {
          background: linear-gradient(145deg, #0f2a49 0%, #0a1d34 100%);
          border-radius: 22px;
          padding: 1.9rem 2.1rem;
          text-align: center;
          color: #f2f7ff;
          box-shadow: 0 20px 52px rgba(12, 31, 58, 0.16);
        }

        .implants {
          background: #f9fbff;
        }

        .panel {
          margin-top: 2.8rem;
          background: #ffffff;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 28px 70px rgba(13, 36, 66, 0.14);
          border: 1px solid rgba(13, 36, 66, 0.1);
          transition: all 0.3s ease;
        }

        .panel:hover {
          box-shadow: 0 32px 80px rgba(13, 36, 66, 0.18);
          transform: translateY(-2px);
        }

        .panel.modern {
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          border: 2px solid rgba(217, 183, 105, 0.2);
        }

        .panel.modern.accent {
          border-color: rgba(96, 177, 212, 0.3);
        }

        .panel-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.8rem;
        }

        .panel-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(217, 183, 105, 0.2), rgba(217, 183, 105, 0.3));
          border: 1px solid rgba(217, 183, 105, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
        }

        .panel h3 {
          margin-bottom: 0;
          color: #0d2a4b;
          font-size: 1.4rem;
        }

        .panel-intro {
          color: rgba(27, 50, 82, 0.72);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
        }

        .panel ul {
          margin: 0;
          padding-left: 0;
          list-style: none;
          color: rgba(27, 50, 82, 0.78);
          line-height: 1.7;
        }

        .modern-list {
          display: grid;
          gap: 0.9rem;
        }

        .modern-list li {
          position: relative;
          padding-left: 2rem;
        }

        .modern-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55rem;
          width: 18px;
          height: 18px;
          border-radius: 4px;
          background: linear-gradient(135deg, #d9b769, #c89840);
          opacity: 0.2;
        }

        .modern-list li::after {
          content: '✓';
          position: absolute;
          left: 4px;
          top: 0.45rem;
          color: #c89840;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .panel li + li {
          margin-top: 0.55rem;
        }

        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
        }

        .pill-row span {
          padding: 0.7rem 1.4rem;
          border-radius: 999px;
          background: rgba(34, 82, 148, 0.12);
          color: #1f4b92;
          font-weight: 600;
          border: 1px solid rgba(34, 82, 148, 0.28);
          transition: all 0.3s ease;
        }

        .pill-row span:hover {
          background: rgba(34, 82, 148, 0.18);
          border-color: rgba(34, 82, 148, 0.4);
          transform: translateY(-2px);
        }

        .pill-modern {
          background: linear-gradient(135deg, rgba(217, 183, 105, 0.15), rgba(217, 183, 105, 0.2));
          border: 1px solid rgba(217, 183, 105, 0.4);
          color: #9d7b3a;
        }

        .pill-modern:hover {
          background: linear-gradient(135deg, rgba(217, 183, 105, 0.25), rgba(217, 183, 105, 0.3));
          border-color: rgba(217, 183, 105, 0.6);
        }

        .contact {
          position: relative;
          background: linear-gradient(180deg, rgba(6, 18, 38, 0.96) 0%, rgba(4, 12, 26, 0.94) 100%);
          color: #eaf2ff;
          z-index: 10;
        }

        .contact .section-title {
          color: #ffffff;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: clamp(1.8rem, 3vw, 2.6rem);
          position: relative;
          z-index: 10;
        }

        .contact-card {
          position: relative;
          background: linear-gradient(150deg, rgba(11, 28, 52, 0.92), rgba(9, 22, 44, 0.92));
          border-radius: 22px;
          padding: 2.2rem 2rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 26px 70px rgba(5, 13, 28, 0.52);
          text-align: center;
          z-index: 10;
        }

        .contact-card h3 {
          margin-bottom: 0.65rem;
          font-size: 1.4rem;
          color: #ffffff;
        }

        .contact-card p {
          margin-bottom: 1.8rem;
          color: rgba(221, 229, 245, 0.85);
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          justify-content: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.95rem 2.5rem;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          z-index: 20;
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-whatsapp {
          background: linear-gradient(135deg, #2dd36f, #189655);
          color: #04140d;
          box-shadow: 0 16px 36px rgba(45, 211, 111, 0.32);
        }

        .btn-whatsapp:hover {
          box-shadow: 0 22px 44px rgba(45, 211, 111, 0.36);
        }

        .btn-call {
          background: linear-gradient(135deg, #4c8cff, #205ee7);
          color: #f4f8ff;
          box-shadow: 0 16px 36px rgba(76, 140, 255, 0.3);
        }

        .btn-call:hover {
          box-shadow: 0 22px 46px rgba(76, 140, 255, 0.34);
        }

        .btn-email {
          background: linear-gradient(135deg, #ff7a68, #d94b3d);
          color: #fff6f4;
          box-shadow: 0 16px 36px rgba(255, 122, 104, 0.28);
        }

        .btn-email:hover {
          box-shadow: 0 22px 46px rgba(255, 122, 104, 0.34);
        }

        .clinic-tagline {
          margin-top: 3rem;
          text-align: center;
          color: rgba(217, 183, 105, 0.92);
          font-weight: 600;
        }

        .text-center {
          text-align: center;
        }

        @keyframes aurora-flow {
          0% {
            transform: translate3d(-8%, -3%, 0) rotate(0deg) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate3d(6%, -8%, 0) rotate(90deg) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translate3d(10%, 5%, 0) rotate(180deg) scale(0.9);
            opacity: 0.7;
          }
          75% {
            transform: translate3d(-4%, 12%, 0) rotate(270deg) scale(1.05);
            opacity: 0.9;
          }
          100% {
            transform: translate3d(-8%, -3%, 0) rotate(360deg) scale(1);
            opacity: 0.6;
          }
        }

        @keyframes star-float {
          0% {
            opacity: 0.4;
            transform: translate(0, 0) scale(0.8);
          }
          25% {
            opacity: 0.8;
            transform: translate(15px, -20px) scale(1.1);
          }
          50% {
            opacity: 0.6;
            transform: translate(-10px, -35px) scale(0.9);
          }
          75% {
            opacity: 0.9;
            transform: translate(-20px, -15px) scale(1.2);
          }
          100% {
            opacity: 0.4;
            transform: translate(0, 0) scale(0.8);
          }
        }

        @media (max-width: 960px) {
          .hero-card::after {
            inset: 1.2rem;
          }
        }

        @media (max-width: 720px) {
          .hero-card {
            padding: 2.1rem;
            border-radius: 26px;
          }

          .hero-card::after {
            display: none;
          }

          .card-grid--five,
          .card-grid--three {
            grid-template-columns: 1fr;
          }

          .travel-shell {
            grid-template-columns: 1fr;
          }

          .carousel-wrapper {
            flex-direction: row;
            align-items: center;
            gap: 1rem;
          }

          .carousel-main {
            gap: 1.2rem;
          }

          .treatments-carousel-section .carousel-slide {
            grid-template-columns: 1fr;
            min-height: auto;
            gap: 0;
          }

          .treatments-carousel-section .carousel-image {
            height: 220px;
          }

          .treatments-carousel-section .carousel-content {
            padding: 1.8rem 1.5rem;
            height: auto;
            min-height: auto;
          }

          .carousel-nav {
            display: none;
          }

          .carousel-wrapper {
            flex-direction: column;
          }

          .progress-bar-bg {
            width: 50px;
          }
        }

        @media (max-width: 540px) {
          .hero-card {
            max-width: 100%;
          }

          .hero-subtitle {
            letter-spacing: 0.08em;
            font-size: 0.9rem;
          }

          .pill-grid {
            flex-direction: column;
          }

          .pill-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .contact-actions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aurora-layer,
          .hero-star,
          .btn,
          .travel-item,
          .info-card,
          .panel {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
      </div>
    </>
  )
}

