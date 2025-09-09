import { useState, useEffect } from 'react'

const AppointmentModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    doctor: '',
    date: '',
    time: '',
    notes: ''
  })

  const totalSteps = 5

  const services = [
    'General checkup',
    'Dental implants', 
    'Orthodontic treatment',
    'Root canal treatment',
    'Teeth whitening',
    'Dental Crown'
  ]

  const doctors = [
    'Dr.Makam Gangaiah',
    'Prof.Dr.Sowmya Gangaiah', 
    'Dr.G Praveen Kumar'
  ]

  // Generate time slots from 9:00 AM to 8:30 PM with 30-minute intervals
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 9; hour <= 20; hour++) {
      const time12h = hour > 12 ? hour - 12 : hour
      const ampm = hour >= 12 ? 'PM' : 'AM'
      const displayHour = time12h === 0 ? 12 : time12h
      
      slots.push(`${displayHour}:00 ${ampm}`)
      if (hour <= 20) {
        slots.push(`${displayHour}:30 ${ampm}`)
      }
    }
    return slots
  }

  const timeSlots = generateTimeSlots()

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://n8n.aakeeocrm.com/webhook/71aaba57-7333-4cdc-9b68-adb57d8fcfc3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        alert('Appointment request submitted successfully! We will confirm within 24 hours.')
      } else {
        alert('There was an error submitting your appointment. Please try again or call us directly.')
      }
    } catch (error) {
      console.error('Error submitting appointment:', error)
      alert('There was an error submitting your appointment. Please try again or call us directly.')
    }

    onClose()
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      doctor: '',
      date: '',
      time: '',
      notes: ''
    })
    setCurrentStep(1)
  }

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData.fullName && formData.email && formData.phone
      case 2:
        return formData.service
      case 3:
        return formData.doctor
      case 4:
        return formData.date && formData.time
      default:
        return true
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="modal-step">
            <h3>Personal Information</h3>
            <div className="form-fields">
              <div className="field-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="field-row">
                <div className="field-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="field-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="modal-step">
            <h3>Select Service</h3>
            <div className="form-fields">
              <div className="service-options">
                {services.map(service => (
                  <div
                    key={service}
                    className={`service-choice ${formData.service === service ? 'selected' : ''}`}
                    onClick={() => handleInputChange('service', service)}
                  >
                    <div className="service-radio">
                      <div className="radio-dot"></div>
                    </div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="modal-step">
            <h3>Preferred Doctor</h3>
            <div className="form-fields">
              <div className="doctor-options">
                {doctors.map(doctor => (
                  <div
                    key={doctor}
                    className={`doctor-choice ${formData.doctor === doctor ? 'selected' : ''}`}
                    onClick={() => handleInputChange('doctor', doctor)}
                  >
                    <div className="doctor-info">
                      <span className="doctor-name">{doctor}</span>
                    </div>
                    <div className="choice-check">✓</div>
                  </div>
                ))}
                <div className="no-preference">
                  <div
                    className={`doctor-choice ${formData.doctor === 'No preference' ? 'selected' : ''}`}
                    onClick={() => handleInputChange('doctor', 'No preference')}
                  >
                    <div className="doctor-info">
                      <span className="doctor-name">No preference</span>
                      <span className="doctor-subtitle">Let us assign the best available doctor</span>
                    </div>
                    <div className="choice-check">✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="modal-step">
            <h3>Preferred Date & Time</h3>
            <div className="form-fields">
              <div className="field-row">
                <div className="field-group">
                  <label>Preferred Date *</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div className="field-group">
                  <label>Preferred Time *</label>
                  <select
                    value={formData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="field-group">
                <label>Additional Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Any specific concerns, medical conditions, or special requests..."
                  rows={3}
                />
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="modal-step">
            <h3>Review Your Appointment</h3>
            <div className="appointment-review">
              <div className="review-item">
                <span className="review-label">Name:</span>
                <span className="review-value">{formData.fullName}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Email:</span>
                <span className="review-value">{formData.email}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Phone:</span>
                <span className="review-value">{formData.phone}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Service:</span>
                <span className="review-value">{formData.service}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Doctor:</span>
                <span className="review-value">{formData.doctor}</span>
              </div>
              <div className="review-item">
                <span className="review-label">Date & Time:</span>
                <span className="review-value">{formData.date} at {formData.time}</span>
              </div>
              {formData.notes && (
                <div className="review-item">
                  <span className="review-label">Notes:</span>
                  <span className="review-value">{formData.notes}</span>
                </div>
              )}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="appointment-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Book Appointment</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <span className="step-counter">Step {currentStep} of {totalSteps}</span>
        </div>

        <div className="modal-content">
          {renderStep()}
        </div>

        <div className="modal-footer">
          {currentStep > 1 && (
            <button type="button" className="btn-secondary" onClick={handlePrev}>
              Previous
            </button>
          )}
          
          <div className="footer-spacer"></div>
          
          {currentStep < totalSteps ? (
            <button 
              type="button" 
              className="btn-primary" 
              onClick={handleNext}
              disabled={!isStepValid(currentStep)}
            >
              Next
            </button>
          ) : (
            <button 
              type="button" 
              className="btn-primary" 
              onClick={handleSubmit}
            >
              Submit Appointment
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppointmentModal