import { useEffect, useMemo } from 'react'
import SEO from '../components/SEO'
import antiAgingImg from '../assets/images/Anti-Ageing.png'
import skinBrighteningImg from '../assets/images/skin-brightening.jpg'
import acneTreatmentImg from '../assets/images/acne-treatment.jpg'
import medicalFacialImg from '../assets/images/medical-facial.jpg'
import hairLossImg from '../assets/images/hair-loss.jpg'
import prpHairImg from '../assets/images/prp-hair-restoration.jpg'
import hairTransplantImg from '../assets/images/hair transplant.jpg'
import scalpHealthImg from '../assets/images/Scalp-health.jpg'

const HERO_FEATURES = [
  'Advanced Dermatology',
  'Hair Restoration',
  'Aesthetic Medicine',
  'Personalized Care'
]

const WHY_CHOOSE_US = [
  {
    title: 'Expert Specialists',
    description:
      'Board-certified dermatologists and trichologists with expertise in advanced aesthetic medicine and regenerative therapies.'
  },
  {
    title: 'Cutting-Edge Technology',
    description:
      'State-of-the-art equipment including PRP therapy, microneedling devices, laser systems, and clinical-grade skincare solutions.'
  },
  {
    title: 'Personalized Treatment Plans',
    description:
      'Every treatment is customized to your unique skin type, concerns, and aesthetic goals for optimal results.'
  },
  {
    title: 'Safe & Comfortable',
    description:
      'Strict sterilization protocols, painless procedures, and comfortable clinical environment ensuring your safety and wellbeing.'
  },
  {
    title: 'Affordable Excellence',
    description:
      'World-class aesthetic outcomes with transparent pricing, making premium treatments accessible without compromising quality.'
  }
]

const SKIN_TREATMENTS = [
  {
    title: 'Anti-Aging & Wrinkle Reduction',
    description:
      'Combat signs of aging with advanced treatments including Botox, dermal fillers, chemical peels, and collagen-boosting therapies that restore youthful radiance.',
    features: ['Botox & Fillers', 'Chemical Peels', 'Microneedling', 'Collagen Induction'],
    image: antiAgingImg
  },
  {
    title: 'Skin Brightening & Pigmentation',
    description:
      'Address dark spots, melasma, and uneven skin tone with clinical-grade brightening treatments, laser therapy, and customized pigmentation correction programs.',
    features: ['Laser Therapy', 'Clinical Brightening', 'Melasma Treatment', 'Even Tone Restoration'],
    image: skinBrighteningImg
  },
  {
    title: 'Acne & Scar Treatment',
    description:
      'Comprehensive acne management and scar reduction using medical-grade facials, laser resurfacing, and advanced texture refinement protocols.',
    features: ['Acne Management', 'Scar Reduction', 'Laser Resurfacing', 'Texture Refinement'],
    image: acneTreatmentImg
  },
  {
    title: 'Medical Facials & Peels',
    description:
      'Luxurious medical-grade facials combining deep cleansing, exfoliation, and nourishment for radiant, healthy skin with visible results.',
    features: ['Deep Cleansing', 'Clinical Peels', 'Hydration Therapy', 'Skin Rejuvenation'],
    image: medicalFacialImg
  }
]

const HAIR_TREATMENTS = [
  {
    title: 'Hair Loss Prevention & Growth',
    description:
      'Evidence-based hair loss solutions including FDA-approved medications, topical treatments, and growth-boosting therapies tailored to your needs.',
    features: ['Medical Treatments', 'Growth Boosters', 'Preventive Care', 'Scalp Analysis'],
    image: hairLossImg
  },
  {
    title: 'PRP Hair Regeneration',
    description:
      'Platelet-Rich Plasma therapy uses your own growth factors to stimulate hair follicles, increase density, and restore natural hair growth.',
    features: ['Natural Growth', 'Increased Density', 'Non-Surgical', 'Minimal Downtime'],
    image: prpHairImg
  },
  {
    title: 'Hair Transplant Solutions',
    description:
      'Advanced FUE and FUT hair transplant techniques performed by skilled surgeons for natural-looking, permanent hair restoration.',
    features: ['FUE Technique', 'FUT Method', 'Natural Results', 'Permanent Solution'],
    image: hairTransplantImg
  },
  {
    title: 'Scalp Health & Treatment',
    description:
      'Comprehensive scalp care including dandruff management, seborrheic dermatitis treatment, and scalp rejuvenation therapies.',
    features: ['Dandruff Control', 'Scalp Detox', 'Health Restoration', 'Maintenance Programs'],
    image: scalpHealthImg
  }
]

const TREATMENT_PROCESS = [
  {
    step: '01',
    title: 'Consultation & Assessment',
    description:
      'Comprehensive evaluation of your skin or hair condition, medical history, and aesthetic goals to create a personalized treatment roadmap.'
  },
  {
    step: '02',
    title: 'Customized Treatment Plan',
    description:
      'Our specialists design a tailored treatment protocol combining the most effective therapies for your unique needs and desired outcomes.'
  },
  {
    step: '03',
    title: 'Treatment Sessions',
    description:
      'Comfortable, professional treatment sessions in our state-of-the-art facility with continuous monitoring and adjustments as needed.'
  },
  {
    step: '04',
    title: 'Follow-Up & Maintenance',
    description:
      'Regular progress reviews, maintenance treatments, and home care guidance to ensure long-lasting results and optimal skin and hair health.'
  }
]

const TECHNOLOGY_HIGHLIGHTS = [
  'PRP (Platelet-Rich Plasma) Therapy',
  'Advanced Microneedling Systems',
  'Clinical-Grade Chemical Peels',
  'Laser & Energy-Based Devices',
  'Medical-Grade Skincare',
  'Digital Scalp Analysis'
]

export default function SkinHairTreatment() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "DentEssencePro Skin & Hair Treatment",
    "description": "Advanced dermatology and hair restoration services in Bangalore. Expert skin treatments, hair loss solutions, aesthetic medicine, and cosmetic procedures.",
    "url": "https://dentessencepro.com/skin-hair-treatment",
    "telephone": "+91-9742503814",
    "email": "info@dentessencepro.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House of Hiranandani, Balaji complex 1, Kodigehalli Main Rd",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560094",
      "addressCountry": "IN"
    },
    "medicalSpecialty": "Dermatology",
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Anti-Aging & Wrinkle Reduction",
        "description": "Botox, fillers, chemical peels, and collagen-boosting therapies"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Skin Brightening & Pigmentation",
        "description": "Laser therapy, clinical brightening, and melasma treatment"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Hair Loss Prevention & Growth",
        "description": "PRP therapy, hair transplant solutions, and scalp treatments"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Medical Facials & Peels",
        "description": "Clinical-grade facials and professional skincare treatments"
      }
    ]
  }

  const sparkles = useMemo(
    () =>
      Array.from({ length: 120 }, () => ({
        top: `${(Math.random() * 100).toFixed(2)}%`,
        left: `${(Math.random() * 100).toFixed(2)}%`,
        size: `${(0.5 + Math.random() * 1.2).toFixed(2)}px`,
        delay: `${(Math.random() * 5).toFixed(2)}s`,
        duration: `${(2 + Math.random() * 3).toFixed(2)}s`
      })),
    []
  )

  return (
    <>
      <SEO
        title="Skin & Hair Treatment - Advanced Dermatology | DentEssencePro Bangalore"
        description="Expert skin and hair treatments in Bangalore: anti-aging, hair restoration, skin brightening, PRP therapy, and aesthetic medicine. Advanced dermatology and trichology services."
        keywords="skin treatment bangalore, hair restoration bangalore, dermatology bangalore, PRP therapy, botox, hair transplant, skin brightening, aesthetic medicine bangalore"
        canonical="/skin-hair-treatment"
        structuredData={structuredData}
      />
      <div className="skin-hair-page">
      <section className="skin-hero">
        <div className="sparkle-container">
          {sparkles.map((sparkle, index) => (
            <div
              key={index}
              className="sparkle"
              style={{
                top: sparkle.top,
                left: sparkle.left,
                width: sparkle.size,
                height: sparkle.size,
                animationDelay: sparkle.delay,
                animationDuration: sparkle.duration
              }}
            ></div>
          ))}
        </div>
        <div className="hero-content-wrap">
          <div className="hero-content-box">
            <h1>Skin &amp; Hair Treatment Excellence</h1>
            <div className="gradient-underline">
              <div className="gradient-line primary"></div>
              <div className="gradient-line secondary"></div>
              <div className="gradient-accent accent-1"></div>
              <div className="gradient-accent accent-2"></div>
            </div>
            <p className="hero-subtitle">
              Transform your confidence with world-class dermatology and hair restoration solutions at DentEssencePRO,
              Bangalore.
            </p>
            <div className="hero-stats">
              {HERO_FEATURES.map((feature) => (
                <div key={feature} className="stat-badge">
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section intro-section">
        <div className="content-container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Your Journey to Radiant Skin &amp; Healthy Hair</h2>
              <p>
                At DentEssencePRO, we believe that true confidence comes from looking and feeling your best. Our
                comprehensive skin and hair aesthetics studio offers cutting-edge treatments that go beyond surface-level
                care to deliver transformative, lasting results.
              </p>
              <p>
                Whether you&apos;re seeking to restore youthful radiance, address specific concerns, or enhance your natural
                beauty, our expert team combines advanced medical technology with personalized care to help you achieve
                your aesthetic goals.
              </p>
            </div>
            <div className="intro-visual">
              <div className="visual-card">
                <div className="visual-icon">✨</div>
                <h3>Holistic Approach</h3>
                <p>
                  We treat the root cause, not just symptoms, combining medical expertise with aesthetic artistry for
                  comprehensive care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section why-choose-section">
        <div className="content-container">
          <div className="section-header">
            <h2>Why Choose DentEssencePRO for Skin &amp; Hair Care?</h2>
            <p>Experience the perfect blend of medical expertise, advanced technology, and personalized attention.</p>
          </div>
          <div className="feature-grid">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section treatments-section">
        <div className="content-container">
          <div className="section-header centered">
            <h2>Comprehensive Skin Treatments</h2>
            <p>
              Advanced dermatological solutions for every skin concern, from aging and pigmentation to acne and texture
              refinement.
            </p>
          </div>
          <div className="treatment-cards">
            {SKIN_TREATMENTS.map((treatment) => (
              <div key={treatment.title} className="treatment-card">
                <h3>{treatment.title}</h3>
                <div className="treatment-image">
                  <img src={treatment.image} alt={treatment.title} />
                </div>
                <div className="treatment-content">
                  <p>{treatment.description}</p>
                  <div className="treatment-features">
                    {treatment.features.map((feature) => (
                      <span key={feature} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section hair-treatments-section">
        <div className="content-container">
          <div className="section-header centered">
            <h2>Advanced Hair Restoration Solutions</h2>
            <p>
              From prevention to regeneration, our comprehensive hair treatments address all aspects of hair health and
              restoration.
            </p>
          </div>
          <div className="hair-treatment-grid">
            {HAIR_TREATMENTS.map((treatment, index) => (
              <div key={treatment.title} className={`hair-card hair-card-${index + 1}`}>
                <div className="hair-card-image">
                  <img src={treatment.image} alt={treatment.title} />
                  <div className="hair-card-overlay"></div>
                </div>
                <div className="hair-card-body">
                  <h3>{treatment.title}</h3>
                  <p>{treatment.description}</p>
                  <div className="hair-features">
                    {treatment.features.map((feature) => (
                      <span key={feature} className="hair-feature-badge">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section process-section">
        <div className="content-container">
          <div className="section-header centered">
            <h2>Your Treatment Journey</h2>
            <p>A seamless, professional experience from consultation to long-term care and maintenance.</p>
          </div>
          <div className="process-timeline">
            {TREATMENT_PROCESS.map((item) => (
              <div key={item.step} className="process-step">
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section technology-section">
        <div className="content-container">
          <div className="tech-content">
            <div className="tech-text">
              <h2>Advanced Technology &amp; Techniques</h2>
              <p>
                We invest in the latest dermatological and trichological technology to ensure you receive the most
                effective, safe, and comfortable treatments available. Our equipment meets global standards and is
                operated by trained specialists who prioritize your safety and results.
              </p>
            </div>
            <div className="tech-grid">
              {TECHNOLOGY_HIGHLIGHTS.map((tech) => (
                <div key={tech} className="tech-item">
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section cta-section">
        <div className="content-container">
          <div className="cta-card">
            <h2>Ready to Transform Your Appearance?</h2>
            <p>
              Book a consultation with our expert dermatology and hair restoration team. Let us create a personalized
              treatment plan that brings out your natural beauty and confidence.
            </p>
            <div className="cta-actions">
              <a className="cta-btn primary" href="https://wa.me/919742503814" target="_blank" rel="noopener noreferrer">
                WhatsApp Consultation
              </a>
              <a className="cta-btn secondary" href="tel:+919742503814">
                Call Now
              </a>
            </div>
            <p className="clinic-note">
              Perfect for international visitors: Combine your dental care with skin and hair treatments for a complete
              aesthetic transformation during your visit to Bangalore.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .skin-hair-page {
          background: #fafbfd;
          color: #0f1d30;
        }

        .skin-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(6rem, 8vw, 8rem) 0 clamp(3rem, 5vw, 5rem);
          overflow: hidden;
          background: #000000;
        }

        .sparkle-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .sparkle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          pointer-events: none;
          animation: sparkle-twinkle 3s ease-in-out infinite;
        }

        .hero-content-wrap {
          position: relative;
          width: min(1280px, 94%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }

        .hero-content-box {
          width: 100%;
          max-width: 1000px;
          text-align: center;
        }

        .hero-content-box h1 {
          font-size: clamp(2.8rem, 5.5vw, 4.5rem);
          line-height: 1.1;
          color: #ffffff;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }

        .gradient-underline {
          position: relative;
          width: 100%;
          max-width: 640px;
          height: 100px;
          margin: 0 auto 1.5rem;
        }

        .gradient-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 2px;
          border-radius: 2px;
        }

        .gradient-line.primary {
          top: 0;
          width: 75%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(99, 102, 241, 0.4) 20%,
            rgba(99, 102, 241, 0.8) 50%,
            rgba(99, 102, 241, 0.4) 80%,
            transparent 100%
          );
          filter: blur(1px);
        }

        .gradient-line.secondary {
          top: 0;
          width: 75%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 20%,
            rgba(99, 102, 241, 1) 50%,
            transparent 80%,
            transparent 100%
          );
        }

        .gradient-accent {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 5px;
          border-radius: 3px;
        }

        .gradient-accent.accent-1 {
          top: -2px;
          width: 25%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(14, 165, 233, 0.6) 50%,
            transparent 100%
          );
          filter: blur(2px);
        }

        .gradient-accent.accent-2 {
          top: -2px;
          width: 25%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 35%,
            rgba(14, 165, 233, 1) 50%,
            transparent 65%,
            transparent 100%
          );
        }

        .hero-subtitle {
          color: rgba(226, 232, 240, 0.88);
          line-height: 1.75;
          font-size: clamp(1.08rem, 1.5vw, 1.25rem);
          margin: 0 0 2rem 0;
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
          justify-content: center;
        }

        .stat-badge {
          position: relative;
          padding: 1rem 2rem;
          border-radius: 16px;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(147, 51, 234, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .stat-badge:hover {
          transform: translateY(-4px);
          border-color: rgba(236, 72, 153, 0.5);
          box-shadow: 0 12px 40px rgba(147, 51, 234, 0.3);
        }

        .stat-badge span {
          color: rgba(226, 232, 240, 0.95);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .content-section {
          padding: clamp(4.5rem, 7vw, 7rem) 0;
        }

        .content-container {
          width: min(1180px, 92%);
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: clamp(3rem, 4.5vw, 3.8rem);
        }

        .section-header.centered {
          text-align: center;
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: clamp(3rem, 4.5vw, 3.8rem);
        }

        .section-header h2 {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          color: #0a1628;
          margin-bottom: 1.2rem;
        }

        .section-header p {
          font-size: 1.1rem;
          color: rgba(15, 29, 48, 0.72);
          line-height: 1.7;
        }

        .intro-section {
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fc 100%);
        }

        .intro-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: clamp(2.5rem, 4vw, 3.5rem);
          align-items: center;
        }

        .intro-text h2 {
          font-size: clamp(2.2rem, 3.5vw, 2.8rem);
          color: #0a1628;
          margin-bottom: 1.5rem;
        }

        .intro-text p {
          color: rgba(15, 29, 48, 0.78);
          line-height: 1.8;
          font-size: 1.08rem;
          margin-bottom: 1.3rem;
        }

        .intro-text p:last-child {
          margin-bottom: 0;
        }

        .intro-visual {
          display: flex;
          justify-content: center;
        }

        .visual-card {
          background: linear-gradient(145deg, #0f1f3b 0%, #0a1728 100%);
          border-radius: 28px;
          padding: 2.5rem;
          color: #e8eef8;
          max-width: 420px;
          box-shadow: 0 28px 70px rgba(10, 22, 40, 0.24);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .visual-icon {
          font-size: 3.5rem;
          margin-bottom: 1.2rem;
        }

        .visual-card h3 {
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 0.9rem;
        }

        .visual-card p {
          margin: 0;
          color: rgba(226, 232, 240, 0.85);
          line-height: 1.7;
        }

        .why-choose-section {
          background: #ffffff;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: clamp(2rem, 3vw, 2.5rem);
        }

        .feature-card {
          background: linear-gradient(150deg, #f8f9fc 0%, #ffffff 100%);
          border-radius: 24px;
          padding: 2.2rem;
          box-shadow: 0 18px 48px rgba(10, 22, 48, 0.12);
          border: 1px solid rgba(147, 51, 234, 0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(147, 51, 234, 0.18);
        }

        .feature-card h3 {
          font-size: 1.35rem;
          color: #0a1628;
          margin-bottom: 1rem;
        }

        .feature-card p {
          margin: 0;
          color: rgba(15, 29, 48, 0.76);
          line-height: 1.7;
        }

        .treatments-section {
          background: #f8f9fc;
        }

        .treatments-section.dark {
          background: linear-gradient(170deg, rgba(10, 22, 48, 0.97) 0%, rgba(6, 14, 28, 0.95) 100%);
        }

        .treatments-section.dark .section-header h2 {
          color: #ffffff;
        }

        .treatments-section.dark .section-header p {
          color: rgba(226, 232, 240, 0.85);
        }

        .treatment-cards {
          display: grid;
          gap: clamp(2.2rem, 3.5vw, 2.8rem);
        }

        .treatment-card {
          background: #ffffff;
          border-radius: 26px;
          padding: 2.5rem;
          box-shadow: 0 22px 56px rgba(10, 22, 48, 0.14);
          border: 1px solid rgba(147, 51, 234, 0.1);
          display: grid;
          grid-template-columns: 1fr 300px;
          grid-template-rows: auto auto;
          gap: 2rem;
        }

        .treatments-section.dark .treatment-card {
          background: linear-gradient(145deg, rgba(15, 31, 59, 0.95), rgba(10, 22, 44, 0.92));
          border: 1px solid rgba(147, 51, 234, 0.25);
        }

        .treatment-card h3 {
          font-size: 1.6rem;
          color: #0a1628;
          margin-bottom: 0;
          grid-column: 1 / -1;
        }

        .treatments-section.dark .treatment-card h3 {
          color: #ffffff;
        }

        .treatment-content {
          display: flex;
          flex-direction: column;
          grid-column: 1 / 2;
          grid-row: 2 / 3;
        }

        .treatment-image {
          width: 100%;
          height: 250px;
          border-radius: 16px;
          overflow: hidden;
          grid-column: 2 / 3;
          grid-row: 2 / 3;
        }

        .treatment-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .treatment-card p {
          color: rgba(15, 29, 48, 0.78);
          line-height: 1.75;
          margin-bottom: 1.6rem;
        }

        .treatments-section.dark .treatment-card p {
          color: rgba(226, 232, 240, 0.85);
        }

        .treatment-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .feature-tag {
          padding: 0.55rem 1.1rem;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.12), rgba(236, 72, 153, 0.12));
          color: #7c3aed;
          font-weight: 600;
          font-size: 0.88rem;
          border: 1px solid rgba(147, 51, 234, 0.2);
        }

        .treatments-section.dark .feature-tag {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.25), rgba(236, 72, 153, 0.25));
          color: rgba(196, 181, 253, 0.95);
          border: 1px solid rgba(147, 51, 234, 0.4);
        }

        /* Hair Treatments Section - Unique Layout */
        .hair-treatments-section {
          background: linear-gradient(170deg, rgba(10, 22, 48, 0.97) 0%, rgba(6, 14, 28, 0.95) 100%);
          position: relative;
          overflow: hidden;
        }

        .hair-treatments-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .hair-treatments-section .section-header h2 {
          color: #ffffff;
        }

        .hair-treatments-section .section-header p {
          color: rgba(226, 232, 240, 0.85);
        }

        .hair-treatment-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          position: relative;
          z-index: 1;
        }

        .hair-card {
          background: linear-gradient(145deg, rgba(15, 31, 59, 0.95), rgba(10, 22, 44, 0.92));
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(147, 51, 234, 0.25);
          display: flex;
          flex-direction: column;
        }

        .hair-card-image {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }

        .hair-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hair-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(10, 22, 44, 0.3) 50%,
            rgba(10, 22, 44, 0.85) 100%
          );
          pointer-events: none;
        }

        .hair-card-body {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .hair-card h3 {
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .hair-card p {
          color: rgba(226, 232, 240, 0.85);
          line-height: 1.75;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .hair-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .hair-feature-badge {
          padding: 0.5rem 1rem;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2));
          color: rgba(196, 181, 253, 0.95);
          font-weight: 600;
          font-size: 0.85rem;
          border: 1px solid rgba(147, 51, 234, 0.35);
        }

        .process-section {
          background: #ffffff;
        }

        .process-timeline {
          display: grid;
          gap: clamp(2.5rem, 4vw, 3.2rem);
        }

        .process-step {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2rem;
          align-items: start;
        }

        .step-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #9333ea, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.5;
          min-width: 100px;
          min-height: 60px;
          display: inline-block;
        }

        .step-content h3 {
          font-size: 1.5rem;
          color: #0a1628;
          margin-bottom: 0.8rem;
        }

        .step-content p {
          margin: 0;
          color: rgba(15, 29, 48, 0.78);
          line-height: 1.75;
          font-size: 1.05rem;
        }

        .technology-section {
          background: linear-gradient(180deg, #f8f9fc 0%, #ffffff 100%);
        }

        .tech-content {
          display: grid;
          gap: clamp(2.8rem, 4.5vw, 3.5rem);
        }

        .tech-text h2 {
          font-size: clamp(2.2rem, 3.5vw, 2.8rem);
          color: #0a1628;
          margin-bottom: 1.2rem;
        }

        .tech-text p {
          color: rgba(15, 29, 48, 0.78);
          line-height: 1.8;
          font-size: 1.08rem;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.2rem;
        }

        .tech-item {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(236, 72, 153, 0.08));
          border-radius: 18px;
          padding: 1.4rem 1.6rem;
          border: 1px solid rgba(147, 51, 234, 0.2);
          text-align: center;
        }

        .tech-item span {
          color: #7c3aed;
          font-weight: 700;
          font-size: 1rem;
        }

        .cta-section {
          background: linear-gradient(170deg, rgba(10, 22, 48, 0.98) 0%, rgba(6, 14, 28, 0.96) 100%);
        }

        .cta-card {
          background: linear-gradient(145deg, rgba(15, 31, 59, 0.95), rgba(10, 22, 44, 0.92));
          border-radius: 32px;
          padding: clamp(3rem, 5vw, 4rem);
          text-align: center;
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(147, 51, 234, 0.3);
        }

        .cta-card h2 {
          font-size: clamp(2.2rem, 3.8vw, 3rem);
          color: #ffffff;
          margin-bottom: 1.2rem;
        }

        .cta-card p {
          color: rgba(226, 232, 240, 0.88);
          line-height: 1.75;
          font-size: 1.12rem;
          margin-bottom: 2.2rem;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1.1rem 2.8rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 1.05rem;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, #2dd36f, #189655);
          color: #041c0e;
          box-shadow: 0 18px 42px rgba(45, 211, 111, 0.35);
        }

        .cta-btn.primary:hover {
          box-shadow: 0 24px 52px rgba(45, 211, 111, 0.42);
        }

        .cta-btn.secondary {
          background: linear-gradient(135deg, #9333ea, #ec4899);
          color: #ffffff;
          box-shadow: 0 18px 42px rgba(147, 51, 234, 0.35);
        }

        .cta-btn.secondary:hover {
          box-shadow: 0 24px 52px rgba(147, 51, 234, 0.42);
        }

        .clinic-note {
          color: rgba(196, 181, 253, 0.85);
          font-size: 0.98rem;
          font-style: italic;
          margin-top: 2rem;
          margin-bottom: 0;
        }

        @keyframes sparkle-twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 960px) {
          .skin-hero {
            min-height: 90vh;
            padding: clamp(7rem, 10vw, 10rem) 0 clamp(4rem, 6vw, 6rem);
          }

          .hero-content-box h1 {
            font-size: clamp(3rem, 6vw, 4.5rem);
          }

          .process-step {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .step-number {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 720px) {
          .skin-hero {
            min-height: 85vh;
          }

          .hero-content-box h1 {
            margin-bottom: 1.2rem;
          }

          .gradient-underline {
            height: 80px;
            max-width: 90%;
            margin-bottom: 1.2rem;
          }

          .hero-subtitle {
            font-size: 1.05rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 0.9rem;
          }

          .stat-badge {
            width: 100%;
            text-align: center;
          }

          .intro-grid {
            grid-template-columns: 1fr;
          }

          .treatment-card {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            gap: 1.5rem;
          }

          .treatment-card h3 {
            grid-column: 1;
            grid-row: 1;
          }

          .treatment-image {
            grid-column: 1;
            grid-row: 2;
            height: 200px;
          }

          .treatment-content {
            grid-column: 1;
            grid-row: 3;
          }

          .hair-treatment-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hair-card-image {
            height: 220px;
          }

          .hair-card-body {
            padding: 1.5rem;
          }

          .tech-grid {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: column;
          }

          .cta-btn {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sparkle,
          .feature-card,
          .stat-badge,
          .cta-btn {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
      </div>
    </>
  )
}
