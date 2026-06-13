import { Link } from 'react-router-dom'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Background layers */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-pattern" />
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          {/* Eyebrow */}
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Steel Manufacturing Domain Experts
          </div>

          {/* Heading */}
          <h1 className="hero__title">
            Transforming Steel Plants<br />
            <span className="hero__title-accent">Through Expert Technical Consultancy</span>
          </h1>

          {/* Body */}
          <p className="hero__description">
            We are steel manufacturing domain experts supporting every stage of the production
            journey — from DRI (Gas & Coal Based) and Liquid Iron routes, through Sinter &
            Coke making, Raw Material management, Iron & Steel making, Rolling, and Finished
            Product quality control. We develop stage-wise process management systems that drive
            operator-led productivity and AI-based decision making, alongside support systems for
            Logistics, Procurement, Inventory, and Maintenance. We also help organisations design
            closed-loop ERP systems that capture real-time manufacturing and commercial data for
            cost visibility and customer order management.
          </p>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <Link to="/about-us" className="btn btn-accent btn-lg">
              Meet Our Experts
            </Link>
            <Link to="/contact-us" className="btn btn-outline btn-lg">
              Get In Touch
            </Link>
          </div>

          {/* Stats Strip */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">10+</span>
              <span className="hero__stat-label">Domain Experts</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">35+</span>
              <span className="hero__stat-label">Years Avg. Experience</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">9</span>
              <span className="hero__stat-label">Core Specializations</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">360°</span>
              <span className="hero__stat-label">Plant Coverage</span>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card hero__card-1">
            <span className="hero__card-icon">⚙️</span>
            <span className="hero__card-text">Process Optimization</span>
          </div>
          <div className="hero__card hero__card-2">
            <span className="hero__card-icon">📊</span>
            <span className="hero__card-text">ERP & MIS Systems</span>
          </div>
          <div className="hero__card hero__card-3">
            <span className="hero__card-icon">🤖</span>
            <span className="hero__card-text">AI-Powered Solutions</span>
          </div>
          <div className="hero__badge">
            <div className="hero__badge-ring" />
            <div className="hero__badge-inner">
              <span className="hero__badge-num">360°</span>
              <span className="hero__badge-sub">Coverage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
