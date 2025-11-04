import Section from '../components/Section'
import VideoHero from '../components/VideoHero'
import SEO from '../components/SEO'
import implantDentistryDetail from '../assets/images/Implant-dentistry_1.jpg'
import { Link } from 'react-router-dom'

export default function ImplantDentistry() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dental Implant Services",
    "description": "State-of-the-art dental implant solutions for missing teeth in Bangalore. Advanced 3D imaging and computer-guided implant placement for optimal results.",
    "url": "https://dentessencepro.com/implant-dentistry",
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
        title="Best clinic for Dental Implants in Bangalore | DentEssencePro"
        description="Expert dental implant services in Bangalore including single tooth implants, full arch replacements, All-on-4 implants, and bone grafting. Advanced 3D imaging and computer-guided placement."
        keywords="dental implants bangalore, tooth replacement, single tooth implants, full arch replacement, all-on-4 implants, implant dentistry, bone grafting, permanent teeth, DentEssencePro"
        canonical="/implant-dentistry"
        structuredData={structuredData}
      />
      <VideoHero
        title="Implant Dentistry"
        subtitle="State-of-the-art implant solutions for missing teeth"
      />
      <Section>
        <div className="service-page">
          <div className="service-page-header">
            <div className="service-header-image">
              <img
                src={implantDentistryDetail}
                alt="Dental Implant Treatment"
                className="service-header-img"
              />
            </div>
            <div className="service-header-content">
              <h2>Permanent Solutions for Missing Teeth</h2>
              <p className="service-page-description">
                Missing teeth can significantly impact your quality of life, affecting everything from your ability
                to eat and speak to your confidence and appearance. Dental implants offer a permanent, natural-looking
                solution that restores both function and aesthetics. At DentEssencePro, we specialize in advanced
                implant dentistry using the latest technology and techniques to deliver results that look, feel, and
                function just like natural teeth.
              </p>
            </div>
          </div>

          <div className="service-detail-layout">
            <div className="service-detail-content">
              <div className="service-features-section">
                <h3>Our Advanced Implant Technology</h3>
                <div className="feature-cards">
                  <div className="feature-card">
                    <div className="feature-icon">🚀</div>
                    <h4>Advanced Technology</h4>
                    <p>
                      We utilize cutting-edge 3D imaging and computer-guided implant placement technology to ensure
                      the highest level of precision and safety. Our CBCT (Cone Beam Computed Tomography) scans
                      provide detailed three-dimensional views of your jaw structure, allowing us to plan implant
                      placement with exceptional accuracy. This advanced technology minimizes risks and maximizes
                      success rates.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">📋</div>
                    <h4>Personalized Treatment Planning</h4>
                    <p>
                      Every implant case is unique, and our treatment plans reflect that. We conduct comprehensive
                      evaluations of your oral health, bone density, and aesthetic goals to create a customized
                      implant strategy. Our digital planning software allows us to simulate the entire procedure
                      before it begins, ensuring predictable outcomes and optimal implant positioning for long-term
                      success.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">🌟</div>
                    <h4>Minimally Invasive Techniques</h4>
                    <p>
                      Our minimally invasive implant techniques prioritize your comfort and recovery. Using guided
                      surgery and advanced surgical protocols, we can often place implants with less discomfort,
                      reduced swelling, and faster healing times. Many patients are surprised by how comfortable
                      and straightforward the implant procedure can be with our modern approach.
                    </p>
                  </div>
                </div>
              </div>

              <div className="procedures-section">
                <h3>Comprehensive Implant Solutions</h3>
                <p className="procedures-intro">
                  From single tooth replacement to full arch restoration, we offer complete implant dentistry services:
                </p>
                <div className="procedures-grid">
                  <Link to="/blog/category/dental-implants" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Single Tooth Implants</h4>
                      <p>Replace individual missing teeth without affecting adjacent healthy teeth</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/dental-implants" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Full Arch Replacements</h4>
                      <p>Complete restoration of upper or lower arch with implant-supported prosthetics</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/dental-implants" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Implant-Supported Bridges</h4>
                      <p>Replace multiple consecutive missing teeth with stable, fixed bridges</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/dental-implants" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>All-on-4 Dental Implants</h4>
                      <p>Revolutionary technique to restore a full arch with just four strategically placed implants</p>
                    </div>
                  </Link>
                  <Link to="/blog/category/dentures-prosthodontics" className="procedure-card">
                    <span className="procedure-check">✓</span>
                    <div className="procedure-info">
                      <h4>Bone Grafting</h4>
                      <p>Rebuild bone volume to create a solid foundation for successful implant placement</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="service-benefits">
                <h3>Benefits of Dental Implants</h3>
                <ul>
                  <li><strong>Permanent Solution:</strong> With proper care, dental implants can last a lifetime</li>
                  <li><strong>Natural Appearance:</strong> Custom-designed crowns match your natural teeth perfectly</li>
                  <li><strong>Preserve Bone:</strong> Implants stimulate bone growth and prevent deterioration</li>
                  <li><strong>Improved Function:</strong> Eat, speak, and smile with complete confidence</li>
                  <li><strong>Protect Adjacent Teeth:</strong> No need to grind down healthy neighboring teeth</li>
                  <li><strong>High Success Rate:</strong> Dental implants have a success rate exceeding 95%</li>
                </ul>
              </div>

              <div className="treatment-process">
                <h3>The Implant Process</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Comprehensive Evaluation</h4>
                      <p>Detailed examination, 3D imaging, and assessment of bone quality and oral health</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Treatment Planning</h4>
                      <p>Custom surgical plan created using computer-guided technology for precise placement</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Implant Placement</h4>
                      <p>Minimally invasive surgical procedure to place titanium implants in the jawbone</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Healing & Integration</h4>
                      <p>Osseointegration period (typically 3-6 months) where implant fuses with bone</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h4>Final Restoration</h4>
                      <p>Custom crown, bridge, or denture attached to create your beautiful new smile</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="candidates-section">
                <h3>Are You a Candidate for Dental Implants?</h3>
                <p>
                  Most people with missing teeth are candidates for dental implants. Ideal candidates should have:
                </p>
                <ul>
                  <li>Good overall health and oral hygiene</li>
                  <li>Sufficient bone density (or willingness to undergo bone grafting)</li>
                  <li>Healthy gums free from periodontal disease</li>
                  <li>Commitment to maintaining oral hygiene and regular dental visits</li>
                  <li>Realistic expectations about the treatment process and outcomes</li>
                </ul>
                <p>
                  Even if you've been told you're not a candidate for implants in the past, advances in technology
                  and techniques may now make treatment possible. Schedule a consultation to explore your options.
                </p>
              </div>

              <div className="service-related-blogs">
                <h3>Read Blogs from Related Topics</h3>
                <div className="related-blog-tags">
                  <Link to="/blog/category/dental-implants" className="blog-tag">
                    Dental Implants
                  </Link>
                  <Link to="/blog/category/dentures-prosthodontics" className="blog-tag">
                    Dentures & Prosthodontics
                  </Link>
                  <Link to="/blog/category/cosmetic-dentistry" className="blog-tag">
                    Cosmetic Dentistry
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
