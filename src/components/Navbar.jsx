import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logoUrl from '../assets/images/logo.png'

export default function Navbar({ onBookAppointment }){
  const { pathname } = useLocation()
  const videoPagesWithHero = ['/contact', '/services', '/dental-tourism', '/skin-hair-treatment']
  // Only make navbar transparent on main blog page and category pages, not on individual blog posts
  const isBlogPost = pathname.startsWith('/blog/') && !pathname.includes('/category/')
  const hasVideoHero = videoPagesWithHero.includes(pathname) || pathname === '/blog' || pathname.includes('/blog/category/')
  const [scrolled, setScrolled] = useState(pathname !== '/' && !hasVideoHero)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(()=>{
    // Show the navbar after user scrolls a bit on home and video hero pages. Always show on other inner pages.
    const onScroll = () => {
      if (pathname === '/' || hasVideoHero) {
        setScrolled(window.scrollY > 80)
        return
      }
      setScrolled(true)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname, hasVideoHero])

  return (
    <nav className={`nav ${scrolled ? 'nav--glass' : 'nav--transparent'}`} role="navigation" aria-label="Primary">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="DentEssencePro home">
          <img src={logoUrl} alt="DentEssencePro" className="brand-logo" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <NavLink to="/" end className={({isActive})=> isActive? 'active' : undefined}>Home</NavLink>
          <NavLink to="/services" className={({isActive})=> isActive? 'active' : undefined}>Services</NavLink>
          <NavLink to="/dental-tourism" className={({isActive})=> isActive? 'active' : undefined}>Dental Tourism</NavLink>
          <NavLink to="/skin-hair-treatment" className={({isActive})=> isActive? 'active' : undefined}>Skin & Hair</NavLink>
          <NavLink to="/blog" className={({isActive})=> isActive? 'active' : undefined}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive? 'active' : undefined}>Contact</NavLink>
        </div>
        
        <div className="nav-cta desktop-nav">
          <button className="btn secondary" onClick={onBookAppointment}>Book Appointment</button>
        </div>
        
        {/* Mobile Hamburger Menu */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'mobile-menu-toggle--open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu--open' : ''}`}>
          <div className="mobile-menu-header">
            <Link to="/" className="brand" aria-label="DentEssencePro home">
              <img src={logoUrl} alt="DentEssencePro" className="brand-logo" />
            </Link>
          </div>
          <div className="mobile-menu-content">
            <NavLink 
              to="/" 
              end 
              className={({isActive})=> isActive? 'active' : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({isActive})=> isActive? 'active' : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/dental-tourism"
              className={({isActive})=> isActive? 'active' : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dental Tourism
            </NavLink>
            <NavLink
              to="/skin-hair-treatment"
              className={({isActive})=> isActive? 'active' : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              Skin & Hair
            </NavLink>
            <NavLink
              to="/blog"
              className={({isActive})=> isActive? 'active' : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive})=> isActive? 'active' : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <button 
              className="btn primary mobile-book-btn" 
              onClick={() => {
                onBookAppointment();
                setMobileMenuOpen(false);
              }}
            >
              Book Appointment
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Backdrop */}
        {mobileMenuOpen && (
          <div 
            className="mobile-menu-backdrop" 
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}
