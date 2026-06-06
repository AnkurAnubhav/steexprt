import { Link } from 'react-router-dom'
import './SpecialProduct.css'

const features = [
  {
    icon: '🧠',
    title: 'Self-Learning AI',
    description:
      'The app continuously learns from historical plant data, operator decisions, and process outcomes — improving its guidance and predictions over time without manual retraining.',
  },
  {
    icon: '🎤',
    title: 'Voice Guided Process Control',
    description:
      'Inbuilt voice-guided support provides real-time verbal instructions to operators during critical process steps, reducing errors and improving response time during process deviations.',
  },
  {
    icon: '🏭',
    title: 'Custom Plant Operations',
    description:
      'Fully configurable for the specific processes, equipment, and operating parameters of your plant — not a generic solution, but one built around your operational context.',
  },
  {
    icon: '📱',
    title: 'Mobile-First Design',
    description:
      'Designed from the ground up for mobile devices — enabling operators, supervisors, and managers to access real-time plant data and controls from anywhere on the shop floor.',
  },
  {
    icon: '📡',
    title: 'Real-Time Monitoring',
    description:
      'Live dashboards pulling data directly from plant control systems provide up-to-the-minute visibility of all critical process parameters across every plant unit.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description:
      'Built-in analytics engine processes historical and real-time data to identify trends, predict equipment issues, optimize process parameters, and generate actionable management reports.',
  },
]

const benefits = [
  {
    metric: '↑ 15–25%',
    label: 'Productivity Improvement',
    desc: 'Typical productivity gains from AI-guided process optimization',
  },
  {
    metric: '↓ 10–20%',
    label: 'Cost Reduction',
    desc: 'Reduction in process-related costs through AI-driven decisions',
  },
  {
    metric: '↓ 40%',
    label: 'Process Deviation Alerts',
    desc: 'Reduction in undetected process deviations with real-time monitoring',
  },
  {
    metric: '↑ 30%',
    label: 'Operator Efficiency',
    desc: 'Improvement in operator decision speed with voice-guided support',
  },
]

const useCases = [
  {
    icon: '🔥',
    unit: 'Blast Furnace',
    applications: [
      'Burden distribution optimization',
      'Hot metal temperature & composition prediction',
      'Tapping practice guidance',
      'Coke rate minimization AI',
    ],
  },
  {
    icon: '⚗️',
    unit: 'Steel Making',
    applications: [
      'BOF end-point prediction',
      'Slag practice optimization',
      'Ladle treatment guidance',
      'Heat cycle time minimization',
    ],
  },
  {
    icon: '🔩',
    unit: 'Sinter Plant',
    applications: [
      'Raw mix optimization AI',
      'Bed permeability prediction',
      'Sinter quality index forecasting',
      'Return fines reduction guidance',
    ],
  },
  {
    icon: '🔄',
    unit: 'Rolling Mills',
    applications: [
      'Roll pass schedule optimization',
      'Surface quality anomaly detection',
      'Cobble prediction & prevention',
      'Yield improvement recommendations',
    ],
  },
]

export default function SpecialProduct() {
  return (
    <main className="special-product-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <span className="page-header-label">Innovation in Steel Operations</span>
          <h1>Special Product</h1>
          <p>
            Our flagship AI-powered solution for next-generation steel plant
            operations management.
          </p>
        </div>
      </section>

      {/* Product Hero */}
      <section className="sp-product-hero">
        <div className="container">
          <div className="sp-hero-content">
            <div className="sp-hero-badge">
              <span className="sp-hero-badge-dot" />
              AI-Powered Solution
            </div>
            <h2 className="sp-product-title">
              AI-Based Smart Plant<br />
              <span className="sp-title-accent">Operations App</span>
            </h2>
            <div className="accent-divider" />
            <p className="sp-product-desc">
              Customized AI applications with self-learning ability for defined and
              specific plant operations, with inbuilt process control voice-guided
              support. Designed to bring the intelligence of decades of expert
              knowledge into the hands of every operator on the shop floor.
            </p>
            <p className="sp-product-desc mt-16">
              Unlike generic industrial software, our Smart Plant Operations App
              is built around the specific processes, equipment, and operating
              conditions of your plant — and it gets smarter with every shift.
            </p>
            <div className="sp-hero-actions">
              <Link to="/contact-us" className="btn btn-accent btn-lg">
                Request a Demo
              </Link>
              <Link to="/contact-us" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Core Capabilities</span>
            <h2 className="section-title">Key Features</h2>
            <div className="accent-divider-center" />
            <p className="section-subtitle">
              Six foundational capabilities that make the Smart Plant Operations App
              a transformative solution for integrated steel plants.
            </p>
          </div>

          <div className="sp-features-grid">
            {features.map(f => (
              <div key={f.title} className="sp-feature-card">
                <div className="sp-feature-icon-wrap">
                  <span className="sp-feature-icon">{f.icon}</span>
                </div>
                <h3 className="sp-feature-title">{f.title}</h3>
                <p className="sp-feature-desc">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="sp-benefits">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label" style={{ color: 'var(--accent)' }}>
              Measurable Impact
            </span>
            <h2 className="section-title-white">Expected Benefits</h2>
            <div className="accent-divider-center" />
          </div>
          <div className="sp-benefits-grid">
            {benefits.map(b => (
              <div key={b.label} className="sp-benefit-card">
                <div className="sp-benefit-metric">{b.metric}</div>
                <h3 className="sp-benefit-label">{b.label}</h3>
                <p className="sp-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Where It Works</span>
            <h2 className="section-title">Use Cases by Plant Unit</h2>
            <div className="accent-divider-center" />
            <p className="section-subtitle">
              The Smart Plant Operations App can be configured for any major process
              unit in an integrated steel plant. Here are some examples:
            </p>
          </div>

          <div className="sp-usecases-grid">
            {useCases.map(u => (
              <div key={u.unit} className="sp-usecase-card">
                <div className="sp-usecase-header">
                  <span className="sp-usecase-icon">{u.icon}</span>
                  <h3 className="sp-usecase-unit">{u.unit}</h3>
                </div>
                <ul className="sp-usecase-apps">
                  {u.applications.map(a => (
                    <li key={a} className="sp-usecase-app">
                      <span className="sp-usecase-dot" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta">
        <div className="container">
          <div className="sp-cta-inner">
            <div className="sp-cta-text">
              <h2 className="section-title-white">
                Ready to Transform Your Plant Operations with AI?
              </h2>
              <p className="sp-cta-sub">
                Contact our team to discuss a custom AI solution for your specific
                plant operations. We'll design, configure, and deploy an app that
                learns and grows with your plant.
              </p>
            </div>
            <div className="sp-cta-action">
              <Link to="/contact-us" className="btn btn-accent btn-lg">
                Request a Consultation
              </Link>
              <p className="sp-cta-note">No commitment. Free initial consultation.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
