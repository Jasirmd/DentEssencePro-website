import { Link } from 'react-router-dom'
import logoUrl from '../assets/images/logo.png'

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="cols">
          <div>
            <div className="brand" style={{marginBottom: 8}}>
              <img src={logoUrl} alt="DentEssencePro" className="brand-logo footer-logo" />
            </div>
            <p>Advanced, compassionate dental care focused on aesthetics, function, and long‑term oral health. We use modern technology and evidence‑based protocols for predictable outcomes.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <nav style={{display:'grid', gap:8, marginTop:8}}>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          <div>
            <h3>Contact</h3>
            <div style={{marginTop:8, display:'grid', gap:8}}>
              <a href="tel:09742503814">097425 03814</a>
              <a href="mailto:info@dentessencepro.com">info@dentessencepro.com</a>
              <span>Daily: 9:00 AM – 9:00 PM</span>
              <span>House of Hiranandani, Balaji complex 1</span>
              <span>Koti Hosahalli, Bengaluru - 560094</span>
            </div>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} DentEssencePro. All rights reserved.</div>
      </div>
    </footer>
  )
}
