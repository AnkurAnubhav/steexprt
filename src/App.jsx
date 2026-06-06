import { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import Navbar   from './components/Navbar'
import Footer   from './components/Footer'

import Home             from './pages/Home'
import AboutUs          from './pages/AboutUs'
import CompanyObjective from './pages/CompanyObjective'
import CompanyPolicy    from './pages/CompanyPolicy'
import SpecialProduct   from './pages/SpecialProduct'
import ContactUs        from './pages/ContactUs'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/about-us"          element={<AboutUs />} />
        <Route path="/company-objective" element={<CompanyObjective />} />
        <Route path="/company-policy"    element={<CompanyPolicy />} />
        <Route path="/special-product"   element={<SpecialProduct />} />
        <Route path="/contact-us"        element={<ContactUs />} />
        {/* Fallback to Home for unmatched routes */}
        <Route path="*"                  element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  )
}
