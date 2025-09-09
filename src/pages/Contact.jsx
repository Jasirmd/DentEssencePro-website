import Section from '../components/Section'
import VideoHero from '../components/VideoHero'
// Removed interactive Google Map; keeping only open-in-maps button

export default function Contact({ onBookAppointment }){
  const mapsLink = 'https://maps.app.goo.gl/FunowsCuuCEPxCR1A'
  const handleMapClick = () => {
    window.open(mapsLink, '_blank')
  }

  return (
    <>
      <VideoHero title="Get in Touch" subtitle="We're here to help with all your dental needs" />
    <Section>
      <div className="contact-container">
        <div className="contact-info-grid">
          {/* Contact Cards */}
          <div className="contact-card">
            <div className="contact-icon phone-icon">📞</div>
            <h3>Call Us</h3>
            <a href="tel:09742503814" className="contact-link">097425 03814</a>
            <p>Available for appointments and emergencies</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon email-icon">✉️</div>
            <h3>Email Us</h3>
            <a href="mailto:info@dentessencepro.com" className="contact-link">info@dentessencepro.com</a>
            <p>We'll respond within 24 hours</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon time-icon">🕐</div>
            <h3>Operating Hours</h3>
            <div className="hours-info">
              <strong>Daily: 9:00 AM – 9:00 PM</strong>
              <span>All 7 days of the week</span>
            </div>
            <p>Emergency services available 24/7</p>
          </div>
        </div>

        {/* Location + Appointment row */}
        <div className="contact-secondary-grid">
          <div className="location-section">
            <div className="location-info">
              <h3>📍 Our Location</h3>
              <div className="address">
                <p>
                  <strong>DentEssencePro Advanced Dental Care</strong><br/>
                  House of Hiranandani, Balaji complex 1,<br/>
                  Kodigehalli Main Rd opp Tatanagar entrance,<br/>
                  opp. Glen gate, Bhadrappa Layout,<br/>
                  Koti Hosahalli, Bengaluru, Karnataka 560094
                </p>
              </div>
              
              <button className="map-btn" onClick={handleMapClick}>
                <span className="map-icon">🗺️</span>
                <span>Open in Google Maps</span>
                <span className="external-icon">↗</span>
              </button>
            </div>
          </div>

          {/* Book Appointment card beside location */}
          <div className="action-card appointment">
            <h4>📅 Book Appointment</h4>
            <p>Schedule your visit using our online form</p>
            <button onClick={onBookAppointment} className="appointment-btn">Book Online</button>
          </div>
        </div>
      </div>
    </Section>
    </>
  )
}
