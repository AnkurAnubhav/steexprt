import { Link } from 'react-router-dom'
import './SpecialProduct.css'

const products = [
  {
    code: 'BLFOP',
    icon: '🔥',
    title: 'Blast Furnace Operation',
    desc: 'Self-correcting AI-based mobile app for real-time blast furnace operation guidance. Learns from your furnace data and continuously improves process recommendations.',
  },
  {
    code: 'COKBLD',
    icon: '🧱',
    title: 'Coal Blend Optimisation',
    desc: 'AI-based mobile app that identifies the most cost-effective coal blend for coke production, balancing quality targets with raw material availability and cost.',
  },
  {
    code: 'PRODTRA',
    icon: '📦',
    title: 'Product Process Tracking',
    desc: 'End-to-end mobile tracking of product journey through the plant — from raw material to finished product — with stage-wise process parameter visibility.',
  },
  {
    code: 'LABLINK',
    icon: '🧪',
    title: 'Online Lab Testing Reports',
    desc: 'Mobile-based platform for real-time lab testing report generation and distribution — eliminating paper-based workflows and accelerating quality decisions.',
  },
]

export default function SpecialProduct() {
  return (
    <main className="special-product-page">

      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <span className="page-header-label">Innovation in Steel Operations</span>
          <h1>AI Products</h1>
          <p>
            Purpose-built mobile AI applications for integrated steel plant operations —
            each designed around a specific process challenge.
          </p>
        </div>
      </section>

      {/* Launch Banner */}
      <section className="sp-launch-banner">
        <div className="container">
          <div className="sp-launch-inner">
            <span className="sp-launch-icon">🚀</span>
            <div>
              <h3 className="sp-launch-title">Launching January 2027</h3>
              <p className="sp-launch-sub">
                Our AI product suite is currently in development. Register your interest
                to be notified at launch and get early access.
              </p>
            </div>
            <Link to="/contact-us" className="btn btn-accent">
              Register Interest
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">AI-Based Mobile Applications</span>
            <h2 className="section-title">Our Product Suite</h2>
            <div className="accent-divider-center" />
            <p className="section-subtitle">
              Four specialised mobile AI apps, each targeting a high-impact area
              of steel plant operations. Built by domain experts, for domain experts.
            </p>
          </div>

          <div className="sp-products-grid">
            {products.map(p => (
              <div key={p.code} className="sp-product-card">
                <div className="sp-product-card__top">
                  <span className="sp-product-card__icon">{p.icon}</span>
                  <span className="sp-product-card__code">{p.code}</span>
                </div>
                <h3 className="sp-product-card__title">{p.title}</h3>
                <p className="sp-product-card__desc">{p.desc}</p>
                <div className="sp-product-card__footer">
                  <span className="sp-product-card__badge">Launching Jan 2027</span>
                </div>
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
                Request a Demo
              </Link>
              <p className="sp-cta-note">No commitment. Free initial consultation.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}