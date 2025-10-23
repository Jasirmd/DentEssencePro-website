import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import generalDentistry from '../assets/images/General-Dentistry.jpeg'
import orthodonticTherapy from '../assets/images/orthodontic therapy.jpg'
import implantDentistry from '../assets/images/implant dentistry.jpg'

const menuItems = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive dental care for your entire family',
    image: generalDentistry,
    path: '/general-dentistry'
  },
  {
    title: 'Orthodontic Therapy',
    description: 'Advanced orthodontic treatments and clear aligner therapy',
    image: orthodonticTherapy,
    path: '/orthodontic-therapy'
  },
  {
    title: 'Implant Dentistry',
    description: 'State-of-the-art implant solutions for missing teeth',
    image: implantDentistry,
    path: '/implant-dentistry'
  }
]

export default function DropdownMenu({ onItemClick }) {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="dropdown-menu">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`dropdown-item ${isActive(item.path) ? 'active' : ''}`}
          onClick={onItemClick}
        >
          <div className="dropdown-item-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="dropdown-item-content">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
