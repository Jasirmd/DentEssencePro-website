import Section from '../components/Section'
import VideoHero from '../components/VideoHero'
import SEO from '../components/SEO'
// Removed interactive Google Map; keeping only open-in-maps button

export default function Contact({ onBookAppointment }){
  const mapsLink = 'https://maps.app.goo.gl/FunowsCuuCEPxCR1A'
  const handleMapClick = () => {
    window.open(mapsLink, '_blank')
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact DentEssencePro - Book Appointment",
    "description": "Contact DentEssencePro Dental Clinic in Bangalore. Book appointments, get dental consultations, emergency care. Located in RMV 2nd Stage, Bangalore.",
    "url": "https://dentessencepro.com/contact",
    "mainEntity": {
      "@type": "Dentist",
      "name": "DentEssencePro Dental Clinic",
      "telephone": "+91-9742503814",
      "email": "info@dentessencepro.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "House of Hiranandani, Balaji complex 1, Kodigehalli Main Rd opp Tatanagar entrance, opp. Glen gate, Bhadrappa Layout, Koti Hosahalli",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560094",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "21:00"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.9716",
        "longitude": "77.5946"
      }
    }
  }

  return (
    <>
      <SEO
        title="Contact Us - Book Dental Appointment | DentEssencePro Bangalore"
        description="Contact DentEssencePro Dental Clinic in Bangalore. Book appointments, get consultations, emergency dental care. Call +91-9742503814 or visit us at RMV 2nd Stage."
        keywords="contact dentist bangalore, book dental appointment, dental clinic bangalore, emergency dentist, DentEssencePro contact, dental consultation bangalore"
        canonical="/contact"
        structuredData={structuredData}
      />
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
