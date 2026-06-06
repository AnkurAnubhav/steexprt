import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import './Home.css'

const overviewCards = [
  {
    icon: '🎯',
    title: 'Company Objective',
    description:
      'Our mission is to elevate steel manufacturing operations through expert domain knowledge, process optimization, and strategic consulting across all plant functions.',
    path: '/company-objective',
    cta: 'View Objectives',
  },
  {
    icon: '🤖',
    title: 'Special Product',
    description:
      'Our AI-Based Smart Plant Operations App delivers self-learning AI with voice-guided process control, custom for specific plant operations on a mobile-first platform.',
    path: '/special-product',
    cta: 'Explore Product',
  },
  {
    icon: '✉️',
    title: 'Get In Touch',
    description:
      'Ready to modernize your steel plant operations? Reach out to our team of domain experts for a detailed consultation tailored to your specific requirements.',
    path: '/contact-us',
    cta: 'Contact Us',
  },
]

const expertiseAreas = [
  { icon: '🏭', label: 'Coke Making' },
  { icon: '🔩', label: 'Sinter Making' },
  { icon: '⚙️', label: 'Iron Making' },
  { icon: '🔥', label: 'Steel Making' },
  { icon: '🔄', label: 'Rolling Mills' },
  { icon: '🚚', label: 'Logistics' },
  { icon: '📦', label: 'Procurement' },
  { icon: '💻', label: 'ERP Systems' },
  { icon: '📊', label: 'MIS & IT' },
  { icon: '🤖', label: 'Automation' },
]

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <HeroSection />

      {/* Expertise Strip */}
      <section className="home__expertise-strip">
        <div className="container">
          <p className="home__strip-label">Areas of Expertise</p>
          <div className="home__strip-items">
            {expertiseAreas.map(item => (
              <div key={item.label} className="home__strip-item">
                <span className="home__strip-icon">{item.icon}</span>
                <span className="home__strip-text">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Comprehensive Steel Industry Consulting</h2>
            <div className="accent-divider-center" />
            <p className="section-subtitle">
              From coke ovens to finished product dispatch, our experts cover every
              dimension of your integrated steel plant with hands-on domain knowledge
              built over decades.
            </p>
          </div>

          <div className="home__cards-grid">
            {overviewCards.map(card => (
              <div key={card.path} className="home__overview-card">
                <div className="home__card-icon-wrap">
                  <span className="home__card-icon">{card.icon}</span>
                </div>
                <h3 className="home__card-title">{card.title}</h3>
                <p className="home__card-desc">{card.description}</p>
                <Link to={card.path} className="home__card-cta">
                  {card.cta}
                  <span className="home__card-arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section home__why">
        <div className="container">
          <div className="home__why-grid">
            <div className="home__why-content">
              <span className="section-label">Why Steexprt</span>
              <h2 className="section-title">Unmatched Domain Depth in Steel Manufacturing</h2>
              <div className="accent-divider" />
              <p className="section-subtitle">
                Unlike generalist consultancies, every member of our team is a
                steel-industry veteran with decades of hands-on experience in
                integrated steel plants. We speak the language of the shop floor
                and the boardroom alike.
              </p>

              <div className="home__why-list">
                {[
                  'Hands-on experts, not just advisors',
                  'Full plant lifecycle coverage',
                  'Technology-led solutions with AI & ERP',
                  'Measurable productivity & cost outcomes',
                  'Flexible engagement models',
                ].map(item => (
                  <div key={item} className="home__why-item">
                    <span className="home__why-check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="home__why-actions">
                <Link to="/about-us" className="btn btn-primary">
                  Meet Our Team
                </Link>
              </div>
            </div>

            <div className="home__why-visual">
              <div className="home__why-card">
                <div className="home__why-card-top">
                  <div className="home__why-badge">
                    <span className="home__why-badge-num">25+</span>
                    <span className="home__why-badge-label">Yrs Avg. Experience</span>
                  </div>
                </div>
                <div className="home__why-pillars">
                  {[
                    { icon: '📈', title: 'Productivity Boost' },
                    { icon: '💰', title: 'Cost Reduction' },
                    { icon: '🔧', title: 'Process Mastery' },
                    { icon: '📱', title: 'Digital Solutions' },
                  ].map(p => (
                    <div key={p.title} className="home__why-pillar">
                      <span className="home__why-pillar-icon">{p.icon}</span>
                      <span className="home__why-pillar-title">{p.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="home__cta-banner">
        <div className="container">
          <div className="home__cta-content">
            <h2 className="home__cta-title">
              Ready to Optimize Your Steel Plant Operations?
            </h2>
            <p className="home__cta-sub">
              Connect with our domain experts today for a no-obligation consultation.
            </p>
            <Link to="/contact-us" className="btn btn-accent btn-lg">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
