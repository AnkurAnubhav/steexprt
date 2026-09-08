import './Solutions.css'

const solutions = [
  {
    id: 1,
    icon: '🏗️',
    title: 'Setting Up Steel Projects',
    desc: 'End-to-end support from concept to commissioning.',
    items: [
      'Identifying the best production route',
      'Feasibility reports and layout preparation',
      'Environmental clearance applications',
      'Technology and project partner identification',
    ],
  },
  {
    id: 2,
    icon: '📋',
    title: 'Project Site Management',
    desc: 'CCPM-based monitoring for fastest execution.',
    items: [
      'Weekly action points and activity tracking',
      'Resource allocation for critical path activities',
      'Real-time site visibility and bottleneck resolution',
    ],
  },
  {
    id: 3,
    icon: '🚀',
    title: 'Project Start-Up',
    desc: 'Structured commissioning for earliest revenue generation.',
    items: [
      'Optimal start-up sequencing for early commissioning',
      'Revenue-maximising ramp-up strategy',
      'Reaching targeted plant capacity',
    ],
  },
  {
    id: 4,
    icon: '🎓',
    title: 'Team Training',
    desc: 'Building coherent, high-performing plant teams.',
    items: [
      'Team coherence and coordination training',
      'Subject matter training for new entrants',
      'Hand-holding and on-site support during start-up',
    ],
  },
  {
    id: 5,
    icon: '⚙️',
    title: 'Operations Excellence',
    desc: 'Standardised operations for consistent performance.',
    items: [
      'SOP-based operations framework',
      'SOP formulation and implementation',
      'ISO certification hand-holding',
      'Process optimisation and audit support',
    ],
  },
  {
    id: 6,
    icon: '📊',
    title: 'MIS & Cost Visibility',
    desc: 'Data-driven decision making across the plant.',
    items: [
      'Process monitoring linked to MIS dashboards',
      'Stage-wise product costing',
      'Cost generation and variance tracking',
    ],
  },
  {
    id: 7,
    icon: '🧱',
    title: 'Raw Material Optimisation',
    desc: 'Selecting the most cost-effective input mix.',
    items: [
      'Best-suited raw material identification',
      'IBRM burden optimisation (pellets and sinter mix)',
      'Fuel mix and fuel rate optimisation',
    ],
  },
  {
    id: 8,
    icon: '🔥',
    title: 'Operational Solutions',
    desc: 'Unit-level improvements across the production chain.',
    items: [
      'Blast Furnace — burden & IBRM mix optimisation',
      'Sinter Plant — chemistry optimisation & productivity',
      'Coke Plant — blend optimisation & max production',
      'Steel Making — input mix for highest productivity & yield',
      'Rolling — product development & process charting',
      'Logistics — lowest-cost material handling & dispatch',
    ],
  },
]

export default function Solutions() {
  return (
    <main className="solutions-page">

      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <span className="page-header-label">What We Do</span>
          <h1>Our Solutions</h1>
          <p>
            We work with plant teams to identify the most cost-optimal operational
            regime through Value-in-Use modelling — covering every stage from project
            concept to sustained operational excellence.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="solutions-intro">
            <div className="solutions-intro__text">
              <span className="section-label">Our Approach</span>
              <h2 className="section-title">
                Practical Expertise,<br />Measurable Results
              </h2>
              <div className="accent-divider" />
              <p className="about-story-body">
                We work with plant teams to identify the best operational regime
                suited to their assets, equipment, and raw materials — shifting
                them toward the most cost-effective performance regime possible.
              </p>
              <p className="about-story-body mt-16">
                <strong>We create value by sharing in new opportunities,
                recovered losses, and additional productivity gains.</strong>
              </p>
              <p className="about-story-body mt-16">
                Our programmes build team coherence at every level, with built-in
                knowledge assessments that identify gaps and drive targeted
                capability upgrades.
              </p>
            </div>
            <div className="solutions-intro__stats">
              {[
                { value: '10+', label: 'Solution Areas' },
                { value: '360°', label: 'Plant Coverage' },
                { value: '35+', label: 'Yrs Avg. Experience' },
              ].map(s => (
                <div key={s.label} className="solutions-stat">
                  <span className="solutions-stat__value">{s.value}</span>
                  <span className="solutions-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Specialised Solutions</span>
            <h2 className="section-title">What We Cover</h2>
            <div className="accent-divider-center" />
            <p className="section-subtitle">
              From greenfield projects to legacy plant modernisation, our solutions
              span every critical domain of integrated steel manufacturing.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((s, index) => (
              <div key={s.id} className="solutions-card">
                <div className="solutions-card__header">
                  <span className="solutions-card__num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="solutions-card__icon">{s.icon}</span>
                </div>
                <h3 className="solutions-card__title">{s.title}</h3>
                <p className="solutions-card__desc">{s.desc}</p>
                <ul className="solutions-card__list">
                  {s.items.map(item => (
                    <li key={item} className="solutions-card__item">
                      <span className="solutions-card__bullet">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-inner">
            <h2 className="section-title-white">
              Ready to Optimise Your Plant Operations?
            </h2>
            <p className="about-cta-sub">
              Tell us about your challenges and we'll match you with the right solution.
            </p>
            <a href="#/contact-us" className="btn btn-accent btn-lg">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}