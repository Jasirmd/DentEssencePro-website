import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import ReviewsCarousel from '../components/ReviewsCarousel'
import { services } from '../data/services'
import { Link } from 'react-router-dom'
import TeamCarousel from '../components/TeamCarousel'

export default function Home(){
  return (
    <>
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
              <Link className="btn" to="/#contact">Book Appointment</Link>
              <Link className="btn secondary" to="/#services">Explore Services</Link>
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
        intro="Minimally invasive, aesthetic, and function‑driven dentistry. We preserve tooth structure, enhance smiles, and prioritize comfort at every step."
      >
        <div className="grid cols-3 glass-cards">
          <div className="card glass-card"><h3>Digital diagnostics</h3><p>Intraoral imaging and digital planning enhance case accuracy and patient comfort.</p></div>
          <div className="card glass-card"><h3>Strict sterilization</h3><p>Adherence to international sterilization protocols for a safe, hygienic environment.</p></div>
          <div className="card glass-card"><h3>Comfort-first care</h3><p>Transparent explanations and gentle techniques to ease anxiety at every step.</p></div>
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
        <div style={{textAlign: 'center', marginTop: '2rem'}}>
          <Link className="btn" to="/services">View All Services</Link>
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

