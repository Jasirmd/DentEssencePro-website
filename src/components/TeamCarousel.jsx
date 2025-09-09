import { useState, useEffect } from 'react'
import { team } from '../data/team'

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const intervalTime = 10000 // 10 seconds

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % team.length)
      setProgress(0)
    }, intervalTime)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + (100 / (intervalTime / 100))
      })
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [])

  const nextDoctor = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length)
    setProgress(0)
  }

  const prevDoctor = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length)
    setProgress(0)
  }

  const goToDoctor = (index) => {
    setCurrentIndex(index)
    setProgress(0)
  }

  const openDoctorModal = (doctor) => {
    setSelectedDoctor(doctor)
  }

  const closeDoctorModal = () => {
    setSelectedDoctor(null)
  }

  // Mobile layout
  if (isMobile) {
    return (
      <div className="team-carousel-container mobile-team-grid">
        <div className="mobile-team-cards">
          {team.map((doctor, index) => (
            <div 
              key={index} 
              className="mobile-doctor-card"
              onClick={() => openDoctorModal(doctor)}
            >
              <div className="mobile-doctor-image">
                <img src={doctor.img} alt={doctor.name} />
              </div>
              <div className="mobile-doctor-info">
                <h3 className="mobile-doctor-name">{doctor.name}</h3>
                <p className="mobile-doctor-role">{doctor.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Modal */}
        {selectedDoctor && (
          <div className="doctor-modal-overlay" onClick={closeDoctorModal}>
            <div className="doctor-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <button className="modal-close" onClick={closeDoctorModal}>×</button>
              </div>
              <div className="modal-content">
                <div className="modal-doctor-image">
                  <img src={selectedDoctor.img} alt={selectedDoctor.name} />
                </div>
                <h2 className="modal-doctor-name">{selectedDoctor.name}</h2>
                <p className="modal-doctor-role">{selectedDoctor.role}</p>
                <p className="modal-doctor-specialization">{selectedDoctor.specialization}</p>
                
                {selectedDoctor.bio && (
                  <div className="modal-section">
                    <p className="modal-bio">{selectedDoctor.bio}</p>
                  </div>
                )}
                
                {selectedDoctor.education && (
                  <div className="modal-section">
                    <h4>🎓 Education & Qualifications</h4>
                    <ul>
                      {selectedDoctor.education.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedDoctor.experience && (
                  <div className="modal-section">
                    <h4>💼 Professional Experience</h4>
                    <ul>
                      {selectedDoctor.experience.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedDoctor.achievements && (
                  <div className="modal-section">
                    <h4>🏆 Teaching Excellence</h4>
                    <ul>
                      {selectedDoctor.achievements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Desktop layout (unchanged)
  return (
    <div className="team-carousel-container">
      {/* Progress indicators */}
      <div className="carousel-indicators">
        {team.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToDoctor(index)}
          >
            <div className="indicator-progress">
              <div 
                className="progress-fill"
                style={{
                  width: index === currentIndex ? `${progress}%` : '0%'
                }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Main carousel content */}
      <div className="carousel-content">
        {/* Navigation arrows */}
        <button className="nav-arrow nav-arrow-left" onClick={prevDoctor}>
          <span>‹</span>
        </button>
        
        <button className="nav-arrow nav-arrow-right" onClick={nextDoctor}>
          <span>›</span>
        </button>

        {/* Carousel slides container */}
        <div className="carousel-slides-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {team.map((doctor, index) => (
            <div key={index} className="doctor-showcase">
              {/* Left side: Image, Name, Role */}
              <div className="doctor-basic-info">
                <div className="doctor-image-container">
                  <img 
                    src={doctor.img} 
                    alt={doctor.name}
                    className="doctor-image"
                  />
                </div>
                <div className="doctor-header">
                  <h2 className="doctor-name">{doctor.name}</h2>
                  <p className="doctor-role">{doctor.role}</p>
                  <p className="doctor-specialization">{doctor.specialization}</p>
                </div>
              </div>
              
              {/* Right side: Detailed Info */}
              <div className="doctor-details">
                {doctor.bio && (
                  <p className="doctor-bio">{doctor.bio}</p>
                )}
                
                {doctor.education && (
                  <div className="doctor-section">
                    <h4>🎓 Education & Qualifications</h4>
                    <ul className="doctor-list">
                      {doctor.education.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {doctor.experience && (
                  <div className="doctor-section">
                    <h4>💼 Professional Experience</h4>
                    <ul className="doctor-list">
                      {doctor.experience.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {doctor.achievements && (
                  <div className="doctor-section">
                    <h4>🏆 Teaching Excellence</h4>
                    <ul className="doctor-list">
                      {doctor.achievements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}