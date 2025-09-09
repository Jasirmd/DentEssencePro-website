import generalDentistry from '../assets/images/General-Dentistry.jpeg'
import orthodonticTherapy from '../assets/images/orthodontic therapy.jpg'
import implantDentistry from '../assets/images/implant dentistry.jpg'

// Detailed images for services page
import generalDentistryDetail from '../assets/images/General-Dentistry_1.jpg'
import orthodonticTherapyDetail from '../assets/images/orthodontic-therapist_1.jpg'
import implantDentistryDetail from '../assets/images/Implant-dentistry_1.jpg'

export const services = [
  {
    title: 'General Dentistry',
    backgroundImage: generalDentistry,
    detailImage: generalDentistryDetail,
    subtitle: 'Comprehensive dental care for your entire family',
    features: [
      { icon: '🛡️', name: 'Preventive Care', desc: 'Regular check-ups, cleanings, and early detection of dental issues' },
      { icon: '🔬', name: 'Diagnostic Services', desc: 'Advanced imaging and comprehensive oral examinations' },
      { icon: '⚡', name: 'Restorative Treatments', desc: 'Fillings, crowns, and bridges using premium materials' }
    ],
    procedures: [
      'Dental Cleanings',
      'Cavity Fillings',
      'Root Canal Therapy',
      'Gum Disease Treatment',
      'Emergency Dental Care'
    ]
  },
  {
    title: 'Orthodontic Therapy',
    backgroundImage: orthodonticTherapy,
    detailImage: orthodonticTherapyDetail,
    subtitle: 'Advanced orthodontic treatments and clear aligner therapy for a perfect smile',
    features: [
      { icon: '🎯', name: '3D Digital Planning', desc: 'Custom treatment planning using advanced 3D scanning technology' },
      { icon: '✨', name: 'Clear Aligners', desc: 'Invisible alignment solution for discrete teeth straightening' },
      { icon: '💎', name: 'Personalized Care', desc: 'Treatment plans tailored to your unique dental needs' }
    ],
    procedures: [
      'Clear Aligner Therapy',
      'Traditional Braces',
      'Ceramic Braces',
      'Retainers',
      'Bite Correction',
      'Early Intervention Treatment'
    ]
  },
  {
    title: 'Implant Dentistry',
    backgroundImage: implantDentistry,
    detailImage: implantDentistryDetail,
    subtitle: 'State-of-the-art implant solutions for missing teeth',
    features: [
      { icon: '🚀', name: 'Advanced Technology', desc: '3D imaging and computer-guided implant placement' },
      { icon: '📋', name: 'Treatment Planning', desc: 'Personalized implant strategies for optimal results' },
      { icon: '🌟', name: 'Efficient Recovery', desc: 'Minimally invasive techniques for faster healing' }
    ],
    procedures: [
      'Single Tooth Implants',
      'Full Arch Replacements',
      'Implant-Supported Bridges',
      'All-on-4 Dental Implants',
      'Bone Grafting'
    ]
  }
]

