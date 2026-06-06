import './CompanyPolicy.css'

const policies = [
  {
    id: 'quality',
    icon: '🏅',
    title: 'Quality Policy',
    tagline: 'Excellence in Every Engagement',
    intro:
      'Steexprt is committed to delivering the highest quality consulting services by combining deep domain expertise with structured methodologies and a relentless focus on client outcomes.',
    points: [
      'All consulting deliverables are subject to internal peer review by experienced domain specialists before submission to clients.',
      'Recommendations are grounded in international best practices, industry benchmarks, and the specific operational context of each client.',
      'We maintain a continual improvement culture, regularly updating our knowledge base with evolving industry standards, new technologies, and research findings.',
      'Client feedback is systematically collected and incorporated into our service quality processes to ensure continuous enhancement.',
      'Our consultants hold themselves to the highest standards of professional conduct, accuracy, and intellectual rigor in every report, analysis, and presentation.',
    ],
  },
  {
    id: 'ethics',
    icon: '⚖️',
    title: 'Ethics Policy',
    tagline: 'Integrity as a Core Value',
    intro:
      'Ethical conduct is non-negotiable at Steexprt. Every member of our team operates with transparency, fairness, and professional integrity in all interactions.',
    points: [
      'We maintain strict independence from equipment suppliers, contractors, and vendors — our recommendations are guided solely by the best interests of our clients.',
      'No conflicts of interest are tolerated. Consultants must disclose any relationship with third parties that could influence their professional judgment.',
      'We do not engage in bribery, kickbacks, or any form of corrupt practice in any jurisdiction in which we operate.',
      'All client dealings are conducted with honesty and transparency. Scope, fees, timelines, and deliverables are clearly defined and adhered to.',
      'Our consultants treat all client personnel with respect, dignity, and without discrimination of any kind.',
    ],
  },
  {
    id: 'client',
    icon: '🤝',
    title: 'Client Commitment Policy',
    tagline: 'Your Success Is Our Metric',
    intro:
      'Our commitment to clients goes beyond deliverables. We engage as trusted partners with a genuine stake in the success of every project we undertake.',
    points: [
      'We define clear, measurable success criteria at the outset of every engagement and track progress transparently throughout.',
      'Client timelines and schedules are respected. We communicate proactively about any factors that may affect agreed deadlines.',
      'Our consultants are accessible throughout the engagement — not just at scheduled review points. Clients can reach us when it matters.',
      'Knowledge transfer is an integral part of every assignment. We ensure that client teams are equipped to sustain improvements independently.',
      'Post-engagement support is provided to address any implementation questions, ensuring that recommendations are successfully operationalized.',
      'All client concerns and escalations are addressed within 24 hours — without exception.',
    ],
  },
  {
    id: 'confidentiality',
    icon: '🔒',
    title: 'Confidentiality Policy',
    tagline: 'Your Information, Protected Always',
    intro:
      'We treat all client information as strictly confidential. Protecting the commercial, operational, and strategic information of our clients is a fundamental obligation we take seriously.',
    points: [
      'All consultants sign comprehensive Non-Disclosure Agreements (NDAs) before accessing any client data, systems, or facilities.',
      'Client information is accessed only on a need-to-know basis within our team. No information is shared beyond those directly involved in the engagement.',
      'We do not reference, publish, or present client-specific data, results, or case studies without explicit written consent from the client.',
      'All client documents, data, and work products are handled securely and returned or destroyed at the conclusion of an engagement as per agreed protocols.',
      'Our confidentiality obligations continue indefinitely after the conclusion of an engagement — there is no expiry to our commitment to protect your information.',
      'Any breach of confidentiality is treated as a serious disciplinary matter and addressed through immediate corrective action.',
    ],
  },
]

export default function CompanyPolicy() {
  return (
    <main className="company-policy">
      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <span className="page-header-label">How We Operate</span>
          <h1>Company Policy</h1>
          <p>
            Our policies define the standards of conduct, quality, and commitment
            that govern every engagement we undertake at Steexprt.
          </p>
        </div>
      </section>

      {/* Policy Intro */}
      <section className="section">
        <div className="container">
          <div className="cp-intro">
            <div className="cp-intro-text">
              <span className="section-label">Our Governing Principles</span>
              <h2 className="section-title">
                Policies Built on Trust, Quality & Integrity
              </h2>
              <div className="accent-divider" />
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '16px' }}>
                At Steexprt, we believe that exceptional consulting is as
                much about how you work as it is about what you deliver. Our company
                policies are not compliance documents — they are living commitments
                that shape every interaction, decision, and deliverable.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                These four policy pillars — Quality, Ethics, Client Commitment, and
                Confidentiality — together form the operating charter of Steexprt
                Consulting. We hold ourselves accountable to each of them without
                exception.
              </p>
            </div>
            <div className="cp-pillars">
              {policies.map(p => (
                <button
                  key={p.id}
                  className="cp-pillar-link"
                  onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="cp-pillar-icon">{p.icon}</span>
                  <span className="cp-pillar-label">{p.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      {policies.map((policy, idx) => (
        <section
          key={policy.id}
          id={policy.id}
          className={`section cp-policy-section${idx % 2 === 1 ? ' bg-off-white' : ''}`}
        >
          <div className="container">
            <div className="cp-policy-inner">
              <div className="cp-policy-header">
                <div className="cp-policy-icon-wrap">
                  <span className="cp-policy-icon">{policy.icon}</span>
                </div>
                <div>
                  <span className="section-label">{policy.tagline}</span>
                  <h2 className="section-title">{policy.title}</h2>
                  <div className="accent-divider" />
                </div>
              </div>

              <p className="cp-policy-intro">{policy.intro}</p>

              <ul className="cp-policy-points">
                {policy.points.map((point, i) => (
                  <li key={i} className="cp-policy-point">
                    <div className="cp-point-marker">
                      <span>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Footer Statement */}
      <section className="cp-footer-statement">
        <div className="container">
          <div className="cp-statement-inner">
            <span className="cp-statement-icon">📜</span>
            <blockquote className="cp-statement-quote">
              "These policies are not aspirations — they are standards. Every member
              of the Steexprt team is personally committed to upholding
              them in every engagement, every day."
            </blockquote>
            <p className="cp-statement-attr">— Steexprt Leadership</p>
          </div>
        </div>
      </section>
    </main>
  )
}
