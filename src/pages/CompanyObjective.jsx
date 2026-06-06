import './CompanyObjective.css'

const objectives = [
  {
    id: '01',
    icon: '🎯',
    title: 'Domain Expert-Led Consulting',
    description:
      'Deliver steel manufacturing consulting exclusively through seasoned domain experts who have spent decades on plant floors — not generalists, not theorists.',
    bullets: [
      'Experts with 18–30+ years of hands-on steel plant experience',
      'Specialists covering every major process unit in an integrated steel plant',
      'Knowledge transfer that sticks — building internal capability at client sites',
    ],
  },
  {
    id: '02',
    icon: '📈',
    title: 'Improve Productivity Across All Units',
    description:
      'Systematically identify and eliminate productivity bottlenecks across all plant units — from raw material handling to finished product dispatch.',
    bullets: [
      'Detailed process audits and productivity benchmarking against global standards',
      'Unit-wise action plans with measurable KPIs and timelines',
      'Manpower productivity analysis and optimized shift management practices',
    ],
  },
  {
    id: '03',
    icon: '💰',
    title: 'Cost Optimization & Resource Efficiency',
    description:
      'Drive sustained cost reduction through process rationalization, energy efficiency improvements, and smarter procurement practices.',
    bullets: [
      'Raw material cost analysis: blending, yield improvement, reject minimization',
      'Energy consumption benchmarking and reduction roadmaps',
      'Inventory rationalization to reduce carrying costs and obsolescence',
    ],
  },
  {
    id: '04',
    icon: '🚀',
    title: 'Modernize & Digitize Operations',
    description:
      'Bridge the gap between traditional steel plant operations and Industry 4.0 standards through tailored digital transformation consulting.',
    bullets: [
      'ERP systems designed specifically for steel plant workflows (mobile-based)',
      'MIS dashboards integrating shop-floor data with management reporting',
      'AI-based process control solutions with self-learning capability',
    ],
  },
  {
    id: '05',
    icon: '🏗️',
    title: 'Organization & Process Structure Design',
    description:
      'Design lean, effective organizational structures with clear accountability at every level — from shop floor operators to plant directors.',
    bullets: [
      'Org structure design aligned with plant scale and complexity',
      'Detailed job descriptions for each role across all departments',
      'Standard Operating Procedures (SOPs) and process control guidelines',
    ],
  },
  {
    id: '06',
    icon: '🔒',
    title: 'Security, Tracking & Compliance',
    description:
      'Implement robust material tracking, security systems, and compliance frameworks to eliminate leakages and improve governance.',
    bullets: [
      'End-to-end material tracking from raw material gate-in to dispatch',
      'Security system design for plant entry, exit, and material movement',
      'Regulatory compliance guidance for environmental and safety standards',
    ],
  },
]

export default function CompanyObjective() {
  return (
    <main className="company-objective">
      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <span className="page-header-label">Who We Are & What We Aim For</span>
          <h1>Company Objective</h1>
          <p>
            Our objectives define the purpose and direction of Steexprt —
            guiding every engagement we undertake with our clients.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="co-intro">
            <div className="co-intro-text">
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">
                To Be the Most Trusted Name in<br />Steel Manufacturing Consulting
              </h2>
              <div className="accent-divider" />
              <p className="co-intro-body">
                Steexprt was founded on a singular conviction: that the steel
                industry deserves consulting services delivered by people who have
                actually worked in steel plants — not just studied them. Our team brings
                collective experience spanning every major process unit of an integrated
                steel plant, enabling us to provide actionable, practical, and
                commercially sensible recommendations.
              </p>
              <p className="co-intro-body mt-16">
                Our objective is not merely to advise, but to drive measurable
                transformation — improving productivity, reducing costs, modernizing
                operations, and empowering your workforce with knowledge and tools that
                sustain improvements long after our engagement concludes.
              </p>
            </div>
            <div className="co-intro-stats">
              {[
                { value: '10+', label: 'Domain Specialists' },
                { value: '25+', label: 'Avg. Years Experience' },
                { value: '6', label: 'Strategic Objectives' },
                { value: '360°', label: 'Plant Coverage' },
              ].map(s => (
                <div key={s.label} className="co-stat">
                  <span className="co-stat-value">{s.value}</span>
                  <span className="co-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Grid */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Our Strategic Objectives</span>
            <h2 className="section-title">What We Set Out to Achieve</h2>
            <div className="accent-divider-center" />
          </div>

          <div className="co-objectives-grid">
            {objectives.map(obj => (
              <div key={obj.id} className="co-objective-card">
                <div className="co-objective-header">
                  <span className="co-objective-num">{obj.id}</span>
                  <span className="co-objective-icon">{obj.icon}</span>
                </div>
                <h3 className="co-objective-title">{obj.title}</h3>
                <p className="co-objective-desc">{obj.description}</p>
                <ul className="co-objective-bullets">
                  {obj.bullets.map(b => (
                    <li key={b} className="co-bullet">
                      <span className="co-bullet-dot" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="co-commitment">
        <div className="container">
          <div className="co-commitment-inner">
            <span className="section-label" style={{ color: 'var(--accent)' }}>Our Commitment</span>
            <h2 className="section-title-white">
              Every Objective Is Backed by a Promise of Results
            </h2>
            <div className="accent-divider-center" />
            <p className="co-commitment-text">
              We measure our success by the success of our clients. Every consulting
              engagement is delivered with accountability, transparency, and a
              relentless focus on outcomes that matter to your business.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
