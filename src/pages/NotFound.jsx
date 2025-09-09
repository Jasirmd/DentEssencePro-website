import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section>
      <div className="container">
        <div className="card" style={{textAlign:'center'}}>
          <h2>Page not found</h2>
          <p>Let’s get you back on track.</p>
          <Link to="/" className="btn">Go home</Link>
        </div>
      </div>
    </section>
  )
}

