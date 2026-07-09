import { experts } from '../data/experts'
import './AboutUs.css'

function ExpertCardFeatured({ expert }) {
  return (
    <div className="about-expert-featured">
      <div className="about-expert-photo-wrap">
        <img
          src={expert.photo || 'https://via.placeholder.com/220'}
          alt={expert.name}
          className="about-expert-photo"
          loading="lazy"
        />
        <div className="about-expert-exp-badge">{expert.experience}</div>
      </div>
      <div className="about-expert-body">
        <h3 className="about-expert-name">{expert.name}</h3>
        <p className="about-expert-designation">{expert.designation}</p>
        <span className="badge badge-accent about-expert-specialty">{expert.specialty}</span>
        <p className="about-expert-bio">{expert.bio}</p>
      </div>
    </div>
  )
}

function ExpertCardGrid({ expert }) {
  return (
    <div className="about-expert-card">
      <div className="about-expert-photo-wrap">
        <img
          src={expert.photo || 'https://via.placeholder.com/400x240'}
          alt={expert.name}
          className="about-expert-photo"
          loading="lazy"
        />
        <div className="about-expert-exp-badge">{expert.experience}</div>
      </div>
      <div className="about-expert-body">
        <h3 className="about-expert-name">{expert.name}</h3>
        <p className="about-expert-designation">{expert.designation}</p>
        <span className="badge badge-accent about-expert-specialty">{expert.specialty}</span>
        <p className="about-expert-bio">{expert.bio}</p>
      </div>
    </div>
  )
}

export default function AboutUs() {
  return (
    <main className="about-us">
      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <span className="page-header-label">Who We Are</span>
          <h1>About Us</h1>
          <p>
            A team of steel manufacturing domain experts united by a shared mission:
            to transform the way integrated steel plants operate.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-content">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">
                Born from the Shop Floor,<br />Built for the Boardroom
              </h2>
              <div className="accent-divider" />
              <p className="about-story-body">
                Steexpert was established by a group of seasoned steel manufacturing 
                professionals who collectively spent decades working in integrated 
                steel plants across India and internationally. We saw firsthand how 
                valuable domain expertise — the kind you can only gain from years on 
                the shop floor — could transform plant performance.
              </p>
              <p className="about-story-body mt-16">
                We founded "Steexpert" to make that expertise accessible to steel 
                producers of all sizes of operation and steel project management: from 
                greenfield projects seeking to establish best practices from conceptualisation 
                stage, to legacy plants needing modernization, Manpower optimisation through 
                automation and process efficiency improvements for significant cost advantage.
              </p>
              <p className="about-story-body mt-16">
                Today, our team covers every major domain of integrated steel manufacturing 
                — from mining of Raw Material, coke ovens, Sinter plant and blast furnaces or 
                DRI route to rolling mills, logistics, ERP systems, and AI-powered process control.
                We are not who advices from air-conditioned conference room we are ready to roll up 
                our sleeve and join hand in all aspects of field activities. We engage with the deep 
                practical knowledge sharing and hand holding that only can comes from having lived 
                these challenges ourselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <section className="about-values-strip">
        <div className="container">
          <div className="about-values-grid">
            {[
              { icon: '🔬', title: 'Domain Depth', desc: 'Real plant experience, not just academic knowledge' },
              { icon: '🤝', title: 'Partnership', desc: 'We work alongside your team, not above them' },
              { icon: '📊', title: 'Results Focus', desc: 'Measurable outcomes, not just recommendations' },
              { icon: '💡', title: 'Innovation', desc: 'Embracing AI and digital tools for modern steel plants' },
            ].map(v => (
              <div key={v.title} className="about-value-item">
                <span className="about-value-icon">{v.icon}</span>
                <h4 className="about-value-title">{v.title}</h4>
                <p className="about-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">The People Behind Steexpert</span>
            <h2 className="section-title">Meet Our Expert Team</h2>
            <div className="accent-divider-center" />
            <p className="section-subtitle">
              Each member of our team brings decades of hands-on experience in a
              specific domain of steel manufacturing — forming a comprehensive,
              fully-integrated consulting capability.
            </p>
          </div>

          {experts.length === 1 ? (
            <ExpertCardFeatured expert={experts[0]} />
          ) : (
            <div className="about-experts-grid">
              {experts.map(expert => (
                <ExpertCardGrid key={expert.id} expert={expert} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-inner">
            <h2 className="section-title-white">
              Ready to Work with Our Experts?
            </h2>
            <p className="about-cta-sub">
              Tell us about your steel plant challenges, and we'll match you with
              the right specialists for your needs.
            </p>
            <a href="#/contact-us" className="btn btn-accent btn-lg">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}