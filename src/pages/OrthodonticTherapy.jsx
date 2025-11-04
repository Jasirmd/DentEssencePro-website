import Section from '../components/Section'
import VideoHero from '../components/VideoHero'
import SEO from '../components/SEO'
import orthodonticTherapyDetail from '../assets/images/orthodontic-therapist_1.jpg'
import { Link } from 'react-router-dom'

export default function OrthodonticTherapy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Orthodontic Therapy Services",
    "description": "Advanced orthodontic treatments and clear aligner therapy for a perfect smile in Bangalore. Custom treatment planning using 3D scanning technology.",
    "url": "https://dentessencepro.com/orthodontic-therapy",
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
        title="Best dental clinic for orthodontics in Bangalore | DentEssencePro"
        description="Expert orthodontic therapy in Bangalore including clear aligners, traditional braces, ceramic braces, and bite correction. Advanced 3D digital planning for perfect smile transformation."
        keywords="orthodontic therapy bangalore, clear aligners, invisible braces, traditional braces, ceramic braces, teeth straightening, orthodontist bangalore, bite correction, DentEssencePro"
        canonical="/orthodontic-therapy"
        structuredData={structuredData}
      />
      <VideoHero
        title="Orthodontic Therapy"
        subtitle="Advanced orthodontic treatments and clear aligner therapy for a perfect smile"
      />
      <Section>
        <div className="service-page">
          <div className="service-page-header">
            <div className="service-header-image">
              <img
                src={orthodonticTherapyDetail}
                alt="Orthodontic Therapy Treatment"
                className="service-header-img"
              />
            </div>
            <div className="service-header-content">
              <h2>Transform Your Smile with Modern Orthodontics</h2>
              <p className="service-page-description">
                A beautiful, straight smile is more than just aesthetics—it contributes to better oral health,
                improved function, and increased confidence. At DentEssencePro, we offer cutting-edge orthodontic
                solutions tailored to your lifestyle and goals. Whether you're looking for discreet clear aligners
                or traditional braces, our experienced orthodontic team will guide you through every step of your
                smile transformation journey.
              </p>
            </div>
          </div>

          <div className="service-detail-layout">
            <div className="service-detail-content">
              <div className="service-features-section">
                <h3>Our Advanced Orthodontic Approach</h3>
                <div className="feature-cards">
                  <div className="feature-card">
                    <div className="feature-icon">🎯</div>
                    <h4>3D Digital Planning</h4>
                    <p>
                      Experience the future of orthodontics with our advanced 3D scanning technology. We create
                      precise digital models of your teeth, allowing us to plan your treatment with exceptional
                      accuracy. You can even preview your final smile before treatment begins, giving you complete
                      confidence in the process and expected outcomes.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">✨</div>
                    <h4>Clear Aligners</h4>
                    <p>
                      Our clear aligner therapy offers a virtually invisible way to straighten your teeth. These
                      custom-made, removable aligners gradually shift your teeth into their ideal position without
                      the need for metal brackets or wires. Perfect for adults and teens who want discrete treatment,
                      clear aligners fit seamlessly into your lifestyle while delivering remarkable results.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">💎</div>
                    <h4>Personalized Care</h4>
                    <p>
                      No two smiles are alike, and neither are our treatment plans. We take the time to understand
                      your unique dental structure, lifestyle preferences, and aesthetic goals. Our personalized
                      approach ensures that every aspect of your treatment is optimized for your specific needs,
                      delivering results that exceed your expectations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="procedures-section">
                <h3>Available Orthodontic Treatments</h3>
                <p className="procedures-intro">
                  We offer a comprehensive range of orthodontic solutions to address various alignment and bite issues:
                </p>
                <div className="procedures-grid">
                  <Link to="/blog/category/orthodontics-braces" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Clear Aligner Therapy</h4>
                      <p>Virtually invisible aligners that straighten teeth discreetly and comfortably</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/orthodontics-braces" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Traditional Braces</h4>
                      <p>Proven metal braces for effective treatment of complex orthodontic cases</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/orthodontics-braces" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Ceramic Braces</h4>
                      <p>Tooth-colored braces that blend with your natural teeth for a more aesthetic appearance</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/orthodontics-braces" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Retainers</h4>
                      <p>Custom retainers to maintain your beautiful new smile after treatment completion</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/sleep-disorders-bruxism" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Bite Correction</h4>
                      <p>Advanced treatments to correct overbites, underbites, and crossbites for improved function</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/orthodontics-braces" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Early Intervention Treatment</h4>
                      <p>Interceptive orthodontics for children to guide proper jaw and tooth development</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="service-benefits">
                <h3>Why Choose DentEssencePro for Orthodontic Therapy?</h3>
                <ul>
                  <li><strong>Advanced Technology:</strong> State-of-the-art 3D scanning and digital treatment planning</li>
                  <li><strong>Multiple Options:</strong> From clear aligners to traditional braces, we offer solutions for every preference</li>
                  <li><strong>Expert Orthodontists:</strong> Specialized training and years of experience in orthodontic care</li>
                  <li><strong>Predictable Results:</strong> Digital planning allows you to see your expected results before starting treatment</li>
                  <li><strong>Flexible Payment Plans:</strong> Affordable orthodontic care with convenient payment options</li>
                  <li><strong>Comprehensive Care:</strong> From consultation to retention, we support you throughout your entire journey</li>
                </ul>
              </div>

              <div className="treatment-process">
                <h3>Your Orthodontic Journey</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Initial Consultation</h4>
                      <p>Comprehensive examination, 3D scanning, and discussion of your goals and treatment options</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Custom Treatment Plan</h4>
                      <p>Personalized plan created using advanced digital technology with timeline and cost estimates</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Active Treatment</h4>
                      <p>Regular check-ups to monitor progress and make adjustments for optimal results</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Retention Phase</h4>
                      <p>Custom retainers and follow-up care to maintain your beautiful new smile</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-related-blogs">
                <h3>Read Blogs from Related Topics</h3>
                <div className="related-blog-tags">
                  <Link to="/blog/category/orthodontics-braces" className="blog-tag">
                    Orthodontics & Braces
                  </Link>
                  <Link to="/blog/category/sleep-disorders-bruxism" className="blog-tag">
                    Sleep Disorders & Bruxism
                  </Link>
                  <Link to="/blog/category/dental-care-tips" className="blog-tag">
                    Dental Care Tips
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
