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
        title="Contact Us | DentEssencePro clinic in Kodigehalli, Bangalore"
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

        {/* Social Media Section */}
        <div className="contact-social-section">
          <div className="social-card">
            <h3>🌐 Connect With Us</h3>
            <p>Follow us on social media for updates, tips, and special offers</p>
            <div className="contact-social-links">
              <a href="https://www.facebook.com/dentessencepro/" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/dentessencepro/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/dentessencepro/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
    </>
  )
}
