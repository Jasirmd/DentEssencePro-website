import Section from '../components/Section'
import VideoHero from '../components/VideoHero'
import SEO from '../components/SEO'
import generalDentistryDetail from '../assets/images/General-Dentistry_1.jpg'
import { Link } from 'react-router-dom'

export default function GeneralDentistry() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "General Dentistry Services",
    "description": "Comprehensive dental care for your entire family including preventive care, diagnostic services, and restorative treatments in Bangalore",
    "url": "https://dentessencepro.com/general-dentistry",
    "provider": {
      "@type": "MedicalClinic",
      "name": "DentEssencePro Dental Clinic",
      "telephone": "+91-9742503814",
      "email": "contact@dentessencepro.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "House of Hiranandani, Balaji complex 1, Kodigehalli Main Rd",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560094",
        "addressCountry": "IN"
      }
    }
  }

  return (
    <>
      <SEO
        title="General Dental Care in Bangalore | DentEssencePro"
        description="Expert general dentistry services in Bangalore including dental cleanings, cavity fillings, root canal therapy, gum disease treatment, and emergency dental care. Comprehensive care for your entire family."
        keywords="general dentistry bangalore, dental cleanings, cavity fillings, root canal therapy, gum disease treatment, emergency dental care, family dentist bangalore, preventive dental care, DentEssencePro"
        canonical="/general-dentistry"
        structuredData={structuredData}
      />
      <VideoHero
        title="General Dentistry"
        subtitle="Comprehensive dental care for your entire family"
      />
      <Section>
        <div className="service-page">
          <div className="service-page-header">
            <div className="service-header-image">
              <img
                src={generalDentistryDetail}
                alt="General Dentistry Treatment"
                className="service-header-img"
              />
            </div>
            <div className="service-header-content">
              <h2>Exceptional General Dental Care</h2>
              <p className="service-page-description">
                At DentEssencePro, we believe that maintaining optimal oral health is the foundation of overall well-being.
                Our general dentistry services are designed to provide comprehensive care for patients of all ages,
                from routine check-ups to advanced restorative treatments. With our experienced team and state-of-the-art
                technology, we ensure every visit is comfortable, efficient, and effective.
              </p>
            </div>
          </div>

          <div className="service-detail-layout">
            <div className="service-detail-content">
              <div className="service-features-section">
                <h3>Our Approach to General Dentistry</h3>
                <div className="feature-cards">
                  <div className="feature-card">
                    <div className="feature-icon">🛡️</div>
                    <h4>Preventive Care</h4>
                    <p>
                      Prevention is at the heart of what we do. Regular check-ups and professional cleanings help us
                      detect dental issues early, often before they become painful or costly. Our preventive care
                      includes thorough examinations, digital X-rays, oral cancer screenings, and personalized oral
                      hygiene education to keep your smile healthy for years to come.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">🔬</div>
                    <h4>Diagnostic Services</h4>
                    <p>
                      Accurate diagnosis is crucial for effective treatment. We utilize advanced imaging technology,
                      including digital X-rays and intraoral cameras, to get a complete picture of your oral health.
                      Our comprehensive examinations assess not just your teeth, but also your gums, jaw joints, and
                      soft tissues to ensure nothing is overlooked.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">⚡</div>
                    <h4>Restorative Treatments</h4>
                    <p>
                      When dental issues arise, our restorative treatments are designed to restore both function and
                      aesthetics. From tooth-colored fillings and dental crowns to bridges and dentures, we use
                      premium materials and proven techniques to ensure durable, natural-looking results that stand
                      the test of time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="procedures-section">
                <h3>Available Procedures</h3>
                <p className="procedures-intro">
                  Our comprehensive general dentistry services cover all aspects of oral health care:
                </p>
                <div className="procedures-grid">
                  <Link to="/blog/category/teeth-cleaning-scaling" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Dental Cleanings</h4>
                      <p>Professional teeth cleaning and polishing to remove plaque, tartar, and surface stains</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/cavities-fillings" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Cavity Fillings</h4>
                      <p>Tooth-colored composite fillings that blend naturally with your teeth</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/root-canal-treatment" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Root Canal Therapy</h4>
                      <p>Pain-free endodontic treatment to save infected or damaged teeth</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/periodontics-gum-health" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Gum Disease Treatment</h4>
                      <p>Comprehensive periodontal care to treat and prevent gum disease</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/dental-care-tips" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Emergency Dental Care</h4>
                      <p>Prompt treatment for dental emergencies including toothaches, broken teeth, and trauma</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="service-benefits">
                <h3>Why Choose DentEssencePro for General Dentistry?</h3>
                <ul>
                  <li><strong>Experienced Team:</strong> Our dentists have years of experience in providing comprehensive dental care</li>
                  <li><strong>Advanced Technology:</strong> We use the latest dental technology for accurate diagnosis and effective treatment</li>
                  <li><strong>Patient Comfort:</strong> Your comfort is our priority, with gentle techniques and a welcoming environment</li>
                  <li><strong>Personalized Care:</strong> Every treatment plan is tailored to your unique needs and goals</li>
                  <li><strong>Family-Friendly:</strong> We provide care for patients of all ages, from children to seniors</li>
                </ul>
              </div>

              <div className="service-related-blogs">
                <h3>Read Blogs from Related Topics</h3>
                <div className="related-blog-tags">
                  <Link to="/blog/category/root-canal-treatment" className="blog-tag">
                    Root Canal Treatment
                  </Link>
                  <Link to="/blog/category/cavities-fillings" className="blog-tag">
                    Cavities & Fillings
                  </Link>
                  <Link to="/blog/category/teeth-cleaning-scaling" className="blog-tag">
                    Teeth Cleaning & Scaling
                  </Link>
                  <Link to="/blog/category/periodontics-gum-health" className="blog-tag">
                    Periodontics & Gum Health
                  </Link>
                  <Link to="/blog/category/tooth-pain-sensitivity" className="blog-tag">
                    Tooth Pain & Sensitivity
                  </Link>
                  <Link to="/blog/category/wisdom-teeth" className="blog-tag">
                    Wisdom Teeth
                  </Link>
                  <Link to="/blog/category/dental-care-tips" className="blog-tag">
                    Dental Care Tips
                  </Link>
                  <Link to="/blog/category/oral-hygiene-care" className="blog-tag">
                    Oral Hygiene Care
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
