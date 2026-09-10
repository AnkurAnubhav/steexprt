import { Link } from 'react-router-dom'
import { config } from '../data/config'
import './Footer.css'

const quickLinks = [
  { label: 'Home',               path: '/' },
  { label: 'About Us',           path: '/about-us' },
  { label: 'Company Objective',  path: '/company-objective' },
  { label: 'Company Policy',     path: '/company-policy' },
]

const moreLinks = [
  { label: 'Services & Solutions', path: '/solutions' },
  { label: 'AI Product',           path: '/special-product' },
  { label: 'Contact Us',           path: '/contact-us' },
]

const socialLinks = [
  {
    label: 'X (Twitter)',
    handle: '@steelsolusn',
    url: 'https://x.com/steelsolusn',
    icon: '𝕏',
  },
  {
    label: 'Instagram',
    handle: '@steelsolusn',
    url: 'https://www.instagram.com/steelsolusn',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-icon">S</div>
                <span className="footer__logo-name">{config.companyName}</span>
              </div>
              <p className="footer__brand-tagline">{config.companyTagline}</p>
              <p className="footer__brand-desc">
                A group of seasoned steel manufacturing domain experts delivering
                comprehensive consulting across all facets of integrated steel plants.
              </p>

              {/* Social Links */}
              <div className="footer__social">
                <p className="footer__social-label">Follow Us</p>
                <div className="footer__social-links">
                  {socialLinks.map(s => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__social-link"
                      aria-label={s.label}
                    >
                      <span className="footer__social-icon">{s.icon}</span>
                      <span className="footer__social-handle">{s.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h3 className="footer__heading">Quick Links</h3>
              <ul className="footer__links">
                {quickLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">
                      <span className="footer__link-arrow">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div className="footer__col">
              <h3 className="footer__heading">Explore</h3>
              <ul className="footer__links">
                {moreLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">
                      <span className="footer__link-arrow">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h3 className="footer__heading">Contact</h3>
              <div className="footer__contact-items">
                <div className="footer__contact-item">
                  <span className="footer__contact-icon">✉</span>
                  <div>
                    <p className="footer__contact-label">Email Us</p>
                    <a
                      href={`mailto:${config.contactEmail}`}
                      className="footer__contact-link"
                    >
                      {config.contactEmail}
                    </a>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <span className="footer__contact-icon">🏭</span>
                  <div>
                    <p className="footer__contact-label">Specialization</p>
                    <p className="footer__contact-text">Steel Manufacturing Consulting</p>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <span className="footer__contact-icon">🌐</span>
                  <div>
                    <p className="footer__contact-label">Reach</p>
                    <p className="footer__contact-text">Global Steel Industry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              &copy; {year} {config.companyName}. All rights reserved.
            </p>
            <p className="footer__disclaimer">
              Domain expertise across all aspects of steel manufacturing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}