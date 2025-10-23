import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import GeneralDentistry from './pages/GeneralDentistry'
import OrthodonticTherapy from './pages/OrthodonticTherapy'
import ImplantDentistry from './pages/ImplantDentistry'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import CategoryPage from './pages/CategoryPage'
import Contact from './pages/Contact'
import DentalTourism from './pages/DentalTourism'
import SkinHairTreatment from './pages/SkinHairTreatment'
import NotFound from './pages/NotFound'
import AppointmentModal from './components/AppointmentModal'
import { useAppointmentModal } from './hooks/useAppointmentModal'
import { useEffect } from 'react'

function App() {
  const location = useLocation()
  const { isOpen, openModal, closeModal } = useAppointmentModal()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        setTimeout(()=> el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="app">
      <Navbar onBookAppointment={openModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Services route kept for reference but commented out - can be uncommented if needed */}
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/general-dentistry" element={<GeneralDentistry />} />
        <Route path="/orthodontic-therapy" element={<OrthodonticTherapy />} />
        <Route path="/implant-dentistry" element={<ImplantDentistry />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/dental-tourism" element={<DentalTourism />} />
        <Route path="/skin-hair-treatment" element={<SkinHairTreatment />} />
        <Route path="/contact" element={<Contact onBookAppointment={openModal} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <AppointmentModal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default App
