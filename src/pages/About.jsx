import Section from '../components/Section'

export default function About(){
  return (
    <>
      <Section eyebrow="About" title="DentEssencePro">
        <div className="grid cols-2">
          <div className="card">
            <h3>Our philosophy</h3>
            <p>We practice dentistry that is minimally invasive, aesthetic, and function-driven. Our goal is to preserve tooth structure, enhance your smile, and ensure comfortable chewing and speaking. Every treatment plan is tailored to your needs and lifestyle.</p>
          </div>
          <div className="card">
            <h3>Experience & education</h3>
            <p>Our clinicians bring years of experience across cosmetic dentistry, implantology, and endodontics. We stay updated with global best practices and modern materials to deliver predictable outcomes.</p>
          </div>
        </div>
      </Section>

      <Section title="Clinic highlights">
        <div className="grid cols-3">
          <div className="card"><h3>Digital diagnostics</h3><p>Intraoral imaging and digital planning enhance case accuracy and patient comfort.</p></div>
          <div className="card"><h3>Strict sterilization</h3><p>Adherence to international sterilization protocols for a safe, hygienic environment.</p></div>
          <div className="card"><h3>Comfort-first care</h3><p>Transparent explanations and gentle techniques to ease anxiety at every step.</p></div>
        </div>
      </Section>
    </>
  )
}

