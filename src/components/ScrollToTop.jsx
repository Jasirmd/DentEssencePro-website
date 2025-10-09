import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '10px',
        backgroundColor: '#2D3748',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        display: isVisible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
        zIndex: 1000
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-5px)'
        e.target.style.backgroundColor = '#1A202C'
        e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)'
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)'
        e.target.style.backgroundColor = '#2D3748'
        e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)'
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}
