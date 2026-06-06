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
  { label: 'Special Product',    path: '/special-product' },
  { label: 'Contact Us',         path: '/contact-us' },
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
