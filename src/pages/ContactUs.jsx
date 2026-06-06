import { config } from '../data/config'
import './ContactUs.css'

const contactDetails = [
  {
    icon: '✉️',
    title: 'Email Us',
    primary: config.contactEmail,
    secondary: 'We respond within 24 hours',
    isEmail: true,
  },
  {
    icon: '💬',
    title: 'Consultation',
    primary: 'Request a Free Consultation',
    secondary: 'Send us your requirements via email',
    isEmail: false,
  },
  {
    icon: '🌐',
    title: 'Coverage',
    primary: 'Global Steel Industry',
    secondary: 'Serving integrated steel plants worldwide',
    isEmail: false,
  },
  {
    icon: '⏱️',
    title: 'Response Time',
    primary: 'Within 24 Hours',
    secondary: 'For all enquiries and project proposals',
    isEmail: false,
  },
]

export default function ContactUs() {
  return (
    <main className="contact-page">

      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <span className="page-header-label">Reach Out to Us</span>
          <h1>Contact Us</h1>
          <p>
            Whether you have a specific challenge or just want to explore how our
            domain expertise can benefit your steel plant — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">How to Reach Us</h2>
            <div className="accent-divider-center" />
            <p className="section-subtitle">
              Our team of steel manufacturing experts is ready to discuss your
              plant's challenges and how we can help.
            </p>
          </div>

          <div className="contact-cards-grid">
            {contactDetails.map(c => (
              <div key={c.title} className="contact-info-card">
                <span className="contact-info-icon">{c.icon}</span>
                <div className="contact-info-body">
                  <h3 className="contact-info-title">{c.title}</h3>
                  {c.isEmail ? (
                    <a
                      href={`mailto:${c.primary}`}
                      className="contact-info-primary contact-info-email-link"
                    >
                      {c.primary}
                    </a>
                  ) : (
                    <p className="contact-info-primary">{c.primary}</p>
                  )}
                  <p className="contact-info-secondary">{c.secondary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="section">
        <div className="container">
          <div className="contact-email-cta-block">
            <div className="contact-cta-text">
              <span className="section-label">Direct Contact</span>
              <h2 className="section-title">Ready to Start a Conversation?</h2>
              <div className="accent-divider" />
              <p className="section-subtitle">
                Send us an email and one of our domain experts will get back to
                you within 24 hours. We're happy to discuss your specific
                requirements and how we can support your steel plant.
              </p>
            </div>
            <div className="contact-cta-action">
              <div className="contact-cta-card">
                <span className="contact-cta-icon">✉️</span>
                <h3 className="contact-cta-card-title">Email Our Team</h3>
                <p className="contact-cta-card-sub">
                  Click below to send us an email directly. Your enquiry will be
                  reviewed by the right specialist for your needs.
                </p>
                <a
                  href={`mailto:${config.contactEmail}?subject=Consulting%20Enquiry%20-%20Steexprt&body=Dear%20Steexprt%20Consulting%20Team%2C%0A%0AI%20am%20reaching%20out%20regarding%20...%0A%0AName%3A%0ACompany%3A%0ARequirements%3A%0A`}
                  className="btn btn-accent btn-lg"
                  style={{ justifyContent: 'center', width: '100%' }}
                >
                  {config.contactEmail}
                </a>
                <p className="contact-cta-note">
                  🔒 All enquiries are treated as strictly confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}