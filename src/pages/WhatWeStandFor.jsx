import './WhatWeStandFor.css'

const pillars = [
  {
    num: '01',
    icon: '📈',
    title: 'Raising Productivity',
    tagline: 'Performance Above All',
    description:
      'We place productivity at the center of everything we do. Our experts conduct systematic assessments of all plant units, benchmarking output against international standards and identifying specific levers for improvement.',
    details: [
      'Unit-wise productivity analysis using global benchmarks',
      'Identification of bottlenecks through process mapping and time-motion studies',
      'Structured productivity improvement programs with defined KPIs and review cadence',
    ],
  },
  {
    num: '02',
    icon: '⚙️',
    title: 'Process Control & Manpower Productivity',
    tagline: 'Control + People = Excellence',
    description:
      'Effective process control and high manpower productivity are two sides of the same coin. We help plants implement robust process monitoring frameworks while simultaneously improving how people work within them.',
    details: [
      'Process parameter monitoring frameworks with defined control limits and escalation protocols',
      'Shift-wise manpower productivity tracking and incentive-linked performance systems',
      'Cross-training and multi-skilling programs to enhance workforce versatility',
    ],
  },
  {
    num: '03',
    icon: '💰',
    title: 'Cost Optimization',
    tagline: 'Efficiency Without Compromise',
    description:
      'Cost optimization is not about cutting corners — it is about eliminating waste, improving yields, and making smarter decisions at every step of the manufacturing process.',
    details: [
      'Comprehensive cost analysis across raw materials, energy, consumables, and manpower',
      'Yield improvement initiatives from raw material intake to finished product dispatch',
      'Total Cost of Ownership (TCO) analysis for major capital and operational decisions',
    ],
  },
  {
    num: '04',
    icon: '🚚',
    title: 'Easing Logistics',
    tagline: 'Right Material, Right Place, Right Time',
    description:
      'Logistics inefficiency is a hidden cost that compounds across the entire steel manufacturing value chain. We design streamlined logistics systems that reduce delays, cut costs, and improve plant throughput.',
    details: [
      'Internal plant logistics mapping and route optimization studies',
      'Raw material yard management and stacking strategy improvements',
      'Finished product dispatch planning, fleet management, and customer delivery optimization',
    ],
  },
  {
    num: '05',
    icon: '👥',
    title: 'Manpower Optimization',
    tagline: 'The Right People in the Right Roles',
    description:
      'Steel plants are often either over-staffed in low-value areas or under-staffed in critical ones. We design optimal workforce structures that balance cost efficiency with operational reliability.',
    details: [
      'Staffing level analysis and right-sizing recommendations for all departments',
      'Job evaluation and grade structuring aligned with plant complexity and scale',
      'Contract workforce rationalization and insourcing/outsourcing decision frameworks',
    ],
  },
  {
    num: '06',
    icon: '🏗️',
    title: 'Organization Structure Design',
    tagline: 'Clarity from Top to Bottom',
    description:
      'A well-designed organization structure is the backbone of an efficient steel plant. We design structures with crystal-clear accountability, authority, and reporting relationships at every level.',
    details: [
      'End-to-end organization design from CEO to operator level',
      'Detailed job descriptions including responsibilities, authority, and performance metrics',
      'Governance frameworks: RACI matrices, escalation protocols, and decision rights',
    ],
  },
  {
    num: '07',
    icon: '💻',
    title: 'ERP System Design & Development',
    tagline: 'Digital Infrastructure for Modern Steel Plants',
    description:
      'Generic ERP systems fall short in steel plant environments. We design and deploy ERP systems purpose-built for integrated steel manufacturing — with mobile-first architecture for real-time plant management.',
    details: [
      'Steel-specific ERP modules: production planning, raw materials, maintenance, quality, dispatch',
      'Mobile-based ERP platforms for real-time data entry and supervisory control from the shop floor',
      'Integration with existing Level 1/2 automation systems and third-party applications',
    ],
  },
  {
    num: '08',
    icon: '🔒',
    title: 'Security System & Material Tracking',
    tagline: 'Zero Leakage, Full Accountability',
    description:
      'Material leakage and security lapses are significant, often underestimated costs in steel plants. We implement comprehensive security and material tracking systems that ensure full accountability at every point.',
    details: [
      'End-to-end material tracking from truck in-weighment to final dispatch documentation',
      'Gate security systems integrating RFID, weighbridge automation, and camera surveillance',
      'Exception reporting and alert systems for unauthorized material movement or discrepancies',
    ],
  },
  {
    num: '09',
    icon: '📊',
    title: 'MIS Design & Integration',
    tagline: 'Data That Drives Decisions',
    description:
      'Management Information Systems in steel plants must bridge the gap between shop-floor reality and executive decision-making. We design MIS frameworks that deliver the right information to the right level at the right time.',
    details: [
      'Multi-level MIS dashboards: operational (shift/day), tactical (weekly/monthly), strategic (quarterly/annual)',
      'Integration of plant control system data with business ERP for seamless production reporting',
      'Automated exception reporting, trend analysis, and predictive KPI alerts',
    ],
  },
]

export default function WhatWeStandFor() {
  return (
    <main className="wwsf-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <span className="page-header-label">Our Values & Approach</span>
          <h1>What We Stand For</h1>
          <p>
            Nine foundational pillars that define our consulting approach and
            the commitments we make to every steel plant we partner with.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="wwsf-intro">
            <div>
              <span className="section-label">Our Guiding Principles</span>
              <h2 className="section-title">
                Nine Pillars of Steel Manufacturing Excellence
              </h2>
              <div className="accent-divider" />
              <p className="section-subtitle">
                These nine pillars represent the core areas where Steexprt
                delivers measurable, sustainable impact. They are not abstract values —
                they are the specific domains in which our experts have spent careers
                driving real improvements at real steel plants.
              </p>
            </div>
            <div className="wwsf-pillars-nav">
              {pillars.map(p => (
                <a key={p.num} href={`#pillar-${p.num}`} className="wwsf-nav-item">
                  <span className="wwsf-nav-icon">{p.icon}</span>
                  <span className="wwsf-nav-num">{p.num}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="wwsf-pillars-grid">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.num}
                id={`pillar-${pillar.num}`}
                className={`wwsf-pillar-card${idx % 2 === 0 ? ' wwsf-pillar-card--even' : ''}`}
              >
                <div className="wwsf-pillar-header">
                  <div className="wwsf-pillar-num-wrap">
                    <span className="wwsf-pillar-num">{pillar.num}</span>
                  </div>
                  <div className="wwsf-pillar-icon-wrap">
                    <span className="wwsf-pillar-icon">{pillar.icon}</span>
                  </div>
                </div>
                <div className="wwsf-pillar-body">
                  <span className="wwsf-pillar-tagline">{pillar.tagline}</span>
                  <h3 className="wwsf-pillar-title">{pillar.title}</h3>
                  <p className="wwsf-pillar-desc">{pillar.description}</p>
                  <ul className="wwsf-pillar-details">
                    {pillar.details.map(d => (
                      <li key={d} className="wwsf-detail-item">
                        <span className="wwsf-detail-icon">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Banner */}
      <section className="wwsf-summary">
        <div className="container">
          <div className="wwsf-summary-inner">
            <span className="section-label" style={{ color: 'var(--accent)' }}>Our Commitment</span>
            <h2 className="section-title-white">
              Nine Pillars. One Goal: Your Plant's Best Performance.
            </h2>
            <div className="accent-divider-center" />
            <p className="wwsf-summary-text">
              Whether you need help with a single pillar or a comprehensive transformation
              across all nine, Steexprt has the domain expertise, the
              methodology, and the commitment to deliver results that last.
            </p>
            <a href="#/contact-us" className="btn btn-accent btn-lg mt-32">
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
