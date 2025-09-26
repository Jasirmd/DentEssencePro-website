import { useEffect, useMemo } from 'react'

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
  'Dental Implants (All-on-4, All-on-6, Full Mouth Rehabilitation)',
  'Cosmetic Dentistry & Smile Design',
  'Invisible Braces / Clear Aligners',
  'Root Canal & Restorative Dentistry'
]

const TRAVEL_EXPERIENCE = [
  'Customised itinerary balancing treatment, recovery, and leisure',
  'Concierge desk for flights, hotels, transport, and curated tours',
  'Access to Bangalore highlights: heritage palaces, gardens, silk markets, and culinary trails',
  'Dedicated international patient coordinators for every step'
]

const SKIN_HAIR_HIGHLIGHTS = [
  { title: 'Expert Team', text: 'Dermatology and trichology specialists trained in advanced aesthetic medicine.' },
  { title: 'Advanced Technology', text: 'PRP, microneedling, clinical peels, and energy-based devices of global standards.' },
  { title: 'Personalised Care', text: 'Programs customised to suit your skin type, age, and restoration goals.' },
  { title: 'Safety First', text: 'Strict hygiene and sterilisation protocols for comfortable, painless sessions.' },
  { title: 'Affordable Luxury', text: 'World-class aesthetic outcomes with transparent Indian pricing.' }
]

const SKIN_TREATMENTS = [
  'Anti-ageing and wrinkle reduction therapies',
  'Skin brightening and pigmentation correction',
  'Acne, scar, and texture refinement programs',
  'Medical facials and chemical peels'
]

const HAIR_TREATMENTS = [
  'Hair loss prevention and growth boosters',
  'PRP (Platelet-Rich Plasma) hair regeneration',
  'Microneedling to improve scalp density',
  'Advanced hair transplant techniques',
  'Dandruff and scalp health management'
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
  useEffect(() => {
    document.title = 'Dental Tourism in Bangalore | DentEssencePro'
  }, [])

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

      <section className="tourism-section">
        <div className="section-shell">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="card-grid card-grid--five">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tourism-section soft">
        <div className="section-shell">
          <h2 className="section-title">Popular Dental Treatments for International Patients</h2>
          <div className="pill-grid">
            {POPULAR_TREATMENTS.map((item) => (
              <div key={item} className="pill-card">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tourism-section travel">
        <div className="section-shell travel-shell">
          <div className="travel-copy">
            <h2>Dental Care + Travel Experience</h2>
            <p>
              Combine your treatment with a curated holiday in India&apos;s Garden City. Our team balances premium dental
              care with immersive experiences so you return home refreshed, relaxed, and smiling brighter.
            </p>
          </div>
          <div className="travel-list">
            {TRAVEL_EXPERIENCE.map((item) => (
              <div key={item} className="travel-item">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tourism-section skin">
        <div className="section-shell">
          <div className="section-heading">
            <h2>Skin &amp; Hair Aesthetics in Bangalore</h2>
            <h3>Advanced Cosmetic Solutions at DentEssencePRO</h3>
            <p>
              At DentEssencePRO, we do more than craft beautiful smiles &mdash; we elevate your overall confidence. Our
              skin and hair aesthetics studio delivers globally benchmarked therapies designed to rejuvenate, restore,
              and revitalise your look.
            </p>
          </div>
          <div className="card-grid card-grid--five compact">
            {SKIN_HAIR_HIGHLIGHTS.map((item) => (
              <div key={item.title} className="info-card subtle">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="split-lists">
            <div className="list-block">
              <h3>Our Specialised Skin Treatments</h3>
              <ul>
                {SKIN_TREATMENTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="list-block">
              <h3>Our Hair Restoration Solutions</h3>
              <ul>
                {HAIR_TREATMENTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="note-card">
            <h3>Perfect for International Guests</h3>
            <p>
              Visiting Bangalore for dental care? Extend your transformation with skin and hair enhancements for a
              complete aesthetic upgrade before you fly back.
            </p>
          </div>
        </div>
      </section>

      <section className="tourism-section implants">
        <div className="section-shell">
          <div className="section-heading">
            <h2>Premium Dental Implants &amp; Full Mouth Rehabilitation</h2>
            <h3>Redefining Smiles. Restoring Confidence. Elevating Lives.</h3>
            <p>
              Led by Prof. Dr. Makam Gangaiah, our implantology centre blends precision, artistry, and innovation to
              deliver restorations that feel natural, look beautiful, and last a lifetime.
            </p>
          </div>
          <div className="card-grid card-grid--three">
            {IMPLANT_HIGHLIGHTS.map((item) => (
              <div key={item} className="info-card">
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="panel">
            <h3>Our Specialised Implant Solutions</h3>
            <div className="pill-row">
              {IMPLANT_SOLUTIONS.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="panel">
            <h3>Dental Tourism + Premium Implants</h3>
            <p>Travel to Bangalore for a seamless, world-class implant journey with hospitality built in.</p>
            <ul>
              {CONCIERGE_SUPPORT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h3>The DentEssencePRO Difference</h3>
            <ul>
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
          padding: clamp(3.8rem, 6vw, 6.2rem) 0;
        }

        .section-shell {
          width: min(1140px, 92%);
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(2.1rem, 3.6vw, 2.9rem);
          color: #0b1e36;
          margin-bottom: clamp(2.2rem, 3.5vw, 2.8rem);
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
          background: linear-gradient(140deg, #0e1f3a 0%, #0c1a32 100%);
          border-radius: 22px;
          padding: 1.9rem;
          box-shadow: 0 22px 55px rgba(10, 27, 54, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: #e8edf8;
        }

        .info-card h3,
        .info-card h4 {
          color: #fefefe;
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }

        .info-card.subtle {
          background: linear-gradient(150deg, #142b4b 0%, #0f233c 100%);
        }

        .info-card p {
          margin: 0;
          color: rgba(226, 234, 248, 0.82);
          line-height: 1.6;
        }

        .soft {
          background: linear-gradient(180deg, #ffffff 0%, #f3f6fc 100%);
        }

        .pill-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .pill-card {
          background: #ffffff;
          border: 1px solid rgba(14, 38, 73, 0.14);
          border-radius: 16px;
          padding: 1.1rem 1.4rem;
          box-shadow: 0 14px 32px rgba(12, 31, 57, 0.12);
        }

        .pill-card span {
          font-weight: 600;
          color: #0d2a4b;
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
        }

        .skin {
          background: #ffffff;
        }

        .section-heading {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 3.1rem;
        }

        .section-heading h2 {
          font-size: clamp(2.2rem, 3.7vw, 3rem);
          color: #0b1e36;
          margin-bottom: 0.8rem;
        }

        .section-heading h3 {
          color: #1f4b92;
          margin-bottom: 1rem;
        }

        .section-heading p {
          color: rgba(27, 50, 82, 0.72);
          line-height: 1.7;
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
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 24px 60px rgba(13, 36, 66, 0.12);
          border: 1px solid rgba(13, 36, 66, 0.08);
        }

        .panel h3 {
          margin-bottom: 1.2rem;
          color: #0d2a4b;
        }

        .panel ul {
          margin: 0;
          padding-left: 1.2rem;
          color: rgba(27, 50, 82, 0.76);
          line-height: 1.6;
        }

        .panel li + li {
          margin-top: 0.55rem;
        }

        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .pill-row span {
          padding: 0.6rem 1.2rem;
          border-radius: 999px;
          background: rgba(34, 82, 148, 0.12);
          color: #1f4b92;
          font-weight: 600;
          border: 1px solid rgba(34, 82, 148, 0.28);
        }

        .contact {
          background: linear-gradient(180deg, rgba(6, 18, 38, 0.96) 0%, rgba(4, 12, 26, 0.94) 100%);
          color: #eaf2ff;
        }

        .contact .section-title {
          color: #ffffff;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: clamp(1.8rem, 3vw, 2.6rem);
        }

        .contact-card {
          background: linear-gradient(150deg, rgba(11, 28, 52, 0.92), rgba(9, 22, 44, 0.92));
          border-radius: 22px;
          padding: 2.2rem 2rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 26px 70px rgba(5, 13, 28, 0.52);
          text-align: center;
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
  )
}

