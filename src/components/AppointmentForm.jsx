import { useState } from 'react'

export default function AppointmentForm() {
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

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const services = [
    { id: 'general', name: 'General Dentistry', icon: '🫧', color: '#10B981' },
    { id: 'orthodontic', name: 'Orthodontic Therapy', icon: '⚡', color: '#8B5CF6' },
    { id: 'implant', name: 'Implant Dentistry', icon: '🦾', color: '#F59E0B' },
    { id: 'cosmetic', name: 'Cosmetic Dentistry', icon: '✨', color: '#EC4899' },
    { id: 'emergency', name: 'Emergency Care', icon: '🚨', color: '#EF4444' }
  ]

  const doctors = [
    { id: 'dr-gangaiah', name: 'Dr. Makam Gangaiah', specialty: 'Prosthodontist & Implantologist' },
    { id: 'dr-sowmya', name: 'Prof. Dr. Sowmya Gangaiah', specialty: 'Orthodontist' },
    { id: 'dr-praveen', name: 'Dr. G Praveen Kumar', specialty: 'Dental Surgeon' }
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ]

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Appointment Data:', formData)
    alert('Appointment request submitted! We will confirm within 24 hours.')
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-step">
            <h3 className="step-title">👋 Let's start with your details</h3>
            <div className="form-group">
              <div className="input-group">
                <div className="input-icon">👤</div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="creative-input"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <div className="input-group">
                  <div className="input-icon">📧</div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="creative-input"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-icon">📱</div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="creative-input"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="form-step">
            <h3 className="step-title">🦷 Choose your service</h3>
            <div className="service-grid">
              {services.map(service => (
                <div
                  key={service.id}
                  className={`service-option ${formData.service === service.id ? 'selected' : ''}`}
                  onClick={() => handleInputChange('service', service.id)}
                  style={{'--service-color': service.color}}
                >
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-name">{service.name}</div>
                </div>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="form-step">
            <h3 className="step-title">👨‍⚕️ Select your preferred doctor & time</h3>
            <div className="doctor-selection">
              {doctors.map(doctor => (
                <div
                  key={doctor.id}
                  className={`doctor-option ${formData.doctor === doctor.id ? 'selected' : ''}`}
                  onClick={() => handleInputChange('doctor', doctor.id)}
                >
                  <div className="doctor-info">
                    <div className="doctor-name">{doctor.name}</div>
                    <div className="doctor-specialty">{doctor.specialty}</div>
                  </div>
                  <div className="doctor-check">
                    {formData.doctor === doctor.id ? '✓' : ''}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="datetime-selection">
              <div className="form-group">
                <label className="creative-label">📅 Preferred Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="creative-input"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="creative-label">🕐 Preferred Time</label>
                <div className="time-slots">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      type="button"
                      className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                      onClick={() => handleInputChange('time', time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="form-step">
            <h3 className="step-title">📝 Any additional notes?</h3>
            <div className="form-group">
              <textarea
                placeholder="Please share any specific concerns, dental history, or special requirements..."
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                className="creative-textarea"
                rows={6}
              />
            </div>
            
            <div className="appointment-summary">
              <h4>📋 Appointment Summary</h4>
              <div className="summary-item">
                <strong>Service:</strong> {services.find(s => s.id === formData.service)?.name || 'Not selected'}
              </div>
              {formData.doctor && (
                <div className="summary-item">
                  <strong>Doctor:</strong> {doctors.find(d => d.id === formData.doctor)?.name}
                </div>
              )}
              <div className="summary-item">
                <strong>Date & Time:</strong> {formData.date && formData.time ? `${formData.date} at ${formData.time}` : 'Not selected'}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="creative-form-container">
      <form className="creative-form" onSubmit={handleSubmit}>
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <div className="step-indicator">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        {/* Form Content */}
        <div className="form-content">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="form-navigation">
          {currentStep > 1 && (
            <button type="button" className="nav-btn prev-btn" onClick={handlePrev}>
              ← Previous
            </button>
          )}
          
          {currentStep < totalSteps ? (
            <button 
              type="button" 
              className="nav-btn next-btn" 
              onClick={handleNext}
              disabled={
                (currentStep === 1 && (!formData.fullName || !formData.email || !formData.phone)) ||
                (currentStep === 2 && !formData.service) ||
                (currentStep === 3 && (!formData.date || !formData.time))
              }
            >
              Next →
            </button>
          ) : (
            <button type="submit" className="nav-btn submit-btn">
              📅 Book Appointment
            </button>
          )}
        </div>
      </form>
    </div>
  )
}