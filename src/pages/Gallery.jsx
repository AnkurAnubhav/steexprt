import { useState } from 'react'
import './Gallery.css'

const galleryItems = [
  {
    id: 1,
    src: 'https://picsum.photos/600/400?random=1',
    category: 'Blast Furnace',
    caption: 'Blast Furnace Operations — Iron Making Unit',
  },
  {
    id: 2,
    src: 'https://picsum.photos/600/400?random=2',
    category: 'Coke Oven',
    caption: 'Coke Oven Battery — By-Product Recovery Plant',
  },
  {
    id: 3,
    src: 'https://picsum.photos/600/400?random=3',
    category: 'Rolling Mill',
    caption: 'Hot Rolling Mill — Long Products Division',
  },
  {
    id: 4,
    src: 'https://picsum.photos/600/400?random=4',
    category: 'Steel Making',
    caption: 'BOF Steel Making — Converter Shop',
  },
  {
    id: 5,
    src: 'https://picsum.photos/600/400?random=5',
    category: 'Raw Materials',
    caption: 'Raw Material Yard — Stockpile Management',
  },
  {
    id: 6,
    src: 'https://picsum.photos/600/400?random=6',
    category: 'Sinter Plant',
    caption: 'Sinter Plant — Raw Mix Preparation',
  },
  {
    id: 7,
    src: 'https://picsum.photos/600/400?random=7',
    category: 'Control Room',
    caption: 'Integrated Process Control Room — Level 2 Automation',
  },
  {
    id: 8,
    src: 'https://picsum.photos/600/400?random=8',
    category: 'Logistics',
    caption: 'Finished Product Dispatch — Logistics Hub',
  },
  {
    id: 9,
    src: 'https://picsum.photos/600/400?random=9',
    category: 'Continuous Casting',
    caption: 'Continuous Casting Machine — Slab Casting',
  },
  {
    id: 10,
    src: 'https://picsum.photos/600/400?random=10',
    category: 'Cold Rolling',
    caption: 'Cold Rolling Mill — Flat Products Division',
  },
  {
    id: 11,
    src: 'https://picsum.photos/600/400?random=11',
    category: 'Consulting',
    caption: 'On-Site Consulting — Process Audit in Progress',
  },
  {
    id: 12,
    src: 'https://picsum.photos/600/400?random=12',
    category: 'ERP Systems',
    caption: 'Digital Transformation — ERP Implementation',
  },
]

const categories = ['All', ...Array.from(new Set(galleryItems.map(i => i.category)))]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox]             = useState(null)

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter(i => i.category === activeCategory)

  const openLightbox  = item => setLightbox(item)
  const closeLightbox = ()   => setLightbox(null)

  const navigateLightbox = dir => {
    if (!lightbox) return
    const idx     = filtered.findIndex(i => i.id === lightbox.id)
    const nextIdx = (idx + dir + filtered.length) % filtered.length
    setLightbox(filtered[nextIdx])
  }

  return (
    <main className="gallery-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <span className="page-header-label">Visual Portfolio</span>
          <h1>Gallery</h1>
          <p>
            A visual window into the world of steel manufacturing — from blast furnaces
            to control rooms and consulting engagements.
          </p>
        </div>
      </section>

      {/* Notice Banner */}
      <div className="gallery-notice">
        <div className="container">
          <div className="gallery-notice-inner">
            <span className="gallery-notice-icon">📸</span>
            <p>
              <strong>Gallery photos coming soon.</strong> The images shown are
              representative placeholders. Our team is curating an authentic gallery
              showcasing real steel plant operations and consulting work. Check back soon.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`gallery-filter-btn${activeCategory === cat ? ' gallery-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="gallery-count">
            Showing <strong>{filtered.length}</strong> of{' '}
            <strong>{galleryItems.length}</strong> images
          </p>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map(item => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => openLightbox(item)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.caption}`}
                onKeyDown={e => e.key === 'Enter' && openLightbox(item)}
              >
                <div className="gallery-item-img-wrap">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="gallery-item-img"
                    loading="lazy"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-zoom">🔍</span>
                  </div>
                </div>
                <div className="gallery-item-caption">
                  <span className="gallery-item-category badge badge-accent">
                    {item.category}
                  </span>
                  <p className="gallery-item-text">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={e => e.target === e.currentTarget && closeLightbox()}
        >
          <div className="gallery-lightbox-inner">
            <button
              className="gallery-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ✕
            </button>
            <button
              className="gallery-lightbox-nav gallery-lightbox-nav--prev"
              onClick={() => navigateLightbox(-1)}
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="gallery-lightbox-content">
              <img
                src={lightbox.src.replace('600/400', '1200/800')}
                alt={lightbox.caption}
                className="gallery-lightbox-img"
              />
              <div className="gallery-lightbox-meta">
                <span className="badge badge-accent">{lightbox.category}</span>
                <p className="gallery-lightbox-caption">{lightbox.caption}</p>
              </div>
            </div>
            <button
              className="gallery-lightbox-nav gallery-lightbox-nav--next"
              onClick={() => navigateLightbox(1)}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
