export default function ServiceCard({ title, backgroundImage }){
  return (
    <div className="service-card">
      <div 
        className="service-card-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="service-card-overlay">
          <h3 className="service-card-title">{title}</h3>
        </div>
      </div>
    </div>
  )
}

