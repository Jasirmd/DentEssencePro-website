import { Link } from 'react-router-dom'

export default function ServiceCard({ title, backgroundImage }){
  // Map service titles to their routes
  const getServiceRoute = (title) => {
    const routes = {
      'General Dentistry': '/general-dentistry',
      'Orthodontic Therapy': '/orthodontic-therapy',
      'Implant Dentistry': '/implant-dentistry'
    }
    return routes[title] || '/services'
  }

  return (
    <Link to={getServiceRoute(title)} className="service-card">
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
    </Link>
  )
}

