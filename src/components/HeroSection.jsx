import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { experts } from '../data/experts'
import './HeroSection.css'

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (experts.length <= 1) return
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % experts.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const expert = experts[current]

  return (
    <section className="hero">
      {/* Background layers */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-pattern" />
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__container container">

        {/* Left Expert Carousel */}
        <div className="hero__left">
          {expert && (
            <div className="hero__expert-carousel">
              <div className="hero__ec-photo-wrap">
                <img
                  src={expert.photo || 'https://via.placeholder.com/300x340'}
                  alt={expert.name}
                  className="hero__ec-photo"
                />
                <div className="hero__ec-exp-badge">{expert.experience}</div>
              </div>
              <div className="hero__ec-info">
                <h3 className="hero__ec-name">{expert.name}</h3>
                <p className="hero__ec-role">{expert.designation}</p>
                <span className="hero__ec-specialty">{expert.specialty}</span>
                <p className="hero__ec-bio" title={expert.bio}>{expert.bio}</p>
              </div>
              {experts.length > 1 && (
                <div className="hero__ec-dots">
                  {experts.map((_, i) => (
                    <button
                      key={i}
                      className={`hero__ec-dot ${i === current ? 'active' : ''}`}
                      onClick={() => setCurrent(i)}
                      aria-label={`Expert ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Center Content */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Steel Manufacturing Domain Experts
          </div>

          <h1 className="hero__title">
            Transforming Steel Plants<br />
            <span className="hero__title-accent">Through Expert Technical Consultancy</span>
          </h1>

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

          <div className="hero__actions">
            <Link to="/about-us" className="btn btn-accent btn-lg">
              Meet Our Experts
            </Link>
            <Link to="/contact-us" className="btn btn-outline btn-lg">
              Get In Touch
            </Link>
          </div>

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

        {/* Right Floating Cards */}
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

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}