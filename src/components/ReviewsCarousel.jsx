import { useState, useEffect } from 'react'
import { reviews } from '../data/reviews'

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ))
  }

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="reviews-carousel">
      <div className="reviews-slides-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <h4 className="reviewer-name">{review.name}</h4>
              <div className="rating">
                {renderStars(review.rating)}
              </div>
            </div>
            <p className="review-text">"{review.review}"</p>
          </div>
        ))}
      </div>
      
      <div className="carousel-indicators">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}