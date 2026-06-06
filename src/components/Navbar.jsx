import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { config } from '../data/config'
import './Navbar.css'

const navLinks = [
  { label: 'Home',               path: '/' },
  { label: 'About Us',           path: '/about-us' },
  { label: 'Company Objective',  path: '/company-objective' },
  { label: 'Company Policy',     path: '/company-policy' },
  { label: 'Special Product',    path: '/special-product' },
  { label: 'Contact Us',         path: '/contact-us' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const location                  = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <NavLink to="/" className="navbar__logo" aria-label="Steexprt Home">
          <div className="navbar__logo-icon">
            <span>S</span>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-primary">{config.companyName}</span>
            <span className="navbar__logo-sub">Steel Manufacturing Consultancy</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="navbar__drawer-nav" aria-label="Mobile navigation">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar__drawer-link${isActive ? ' navbar__drawer-link--active' : ''}`
              }
              end={link.path === '/'}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="navbar__drawer-footer">
          <a href={`mailto:${config.contactEmail}`} className="navbar__drawer-email">
            {config.contactEmail}
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
