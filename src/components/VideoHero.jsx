import videoUrl from '../assets/videos/background_video.mp4'

export default function VideoHero({ title, subtitle }) {
  return (
    <section className="video-hero">
      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="video-hero-content">
        <div className="container">
          <div className="hero-text">
            {title && <h1 className="hero-title">{title}</h1>}
            {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}