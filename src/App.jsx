import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import DentalTourism from './pages/DentalTourism'
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
        setTimeout(()=> el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="app">
      <Navbar onBookAppointment={openModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/dental-tourism" element={<DentalTourism />} />
        <Route path="/contact" element={<Contact onBookAppointment={openModal} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <AppointmentModal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default App
