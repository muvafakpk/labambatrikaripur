import { useEffect, useState } from 'react'
import { FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa'
import './App.css'

const collections = [
  {
    name: 'Wedding & functions',
    detail: 'Styles for the days worth dressing up for',
    image:
      'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&w=1000&q=80',
    alt: 'A man dressed in a tailored black suit',
    className: 'collection-card--essentials',
  },
  {
    name: 'Coats & smart wear',
    detail: 'Classic layers for celebrations and everyday',
    image:
      'https://images.unsplash.com/photo-1619603364937-8d7af41ef206?auto=format&fit=crop&w=1000&q=80',
    alt: 'A man wearing a refined brown overcoat',
    className: 'collection-card--occasion',
  },
  {
    name: 'Stitching & tailoring',
    detail: 'Stitching for everyday and occasion wear',
    image:
      'https://images.unsplash.com/photo-1606501126768-b78d4569d3f9?auto=format&fit=crop&w=1000&q=80',
    alt: 'Hands guiding fabric through a sewing machine',
    className: 'collection-card--everyone',
  },
]

const navigation = [
  { label: 'Collections', href: '#collections' },
  { label: 'Our story', href: '#about' },
  { label: 'Visit us', href: '#visit' },
  { label: 'Contact', href: '#contact' },
]

const googleMapsUrl =
  'https://www.google.com/maps/place/Labamba+Trikaripur/@12.1414587,75.1743913,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba46fb375250aa9:0xa72a265b4260080b!8m2!3d12.1414587!4d75.1769662!16s%2Fg%2F11v3x1jnqy'
const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=12.1414587%2C75.1769662'
const phoneNumber = '+917902809705'
const whatsappUrl = 'https://wa.me/917902809705'
const instagramUrl = 'https://www.instagram.com/labamba_tkr/'
const developerPhoneNumber = '+918129886664'

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loaderLeaving, setLoaderLeaving] = useState(false)

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLoaderLeaving(true), 2000)
    const removeTimer = window.setTimeout(() => setIsLoading(false), 2450)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {isLoading && (
        <div
          className={`page-loader${loaderLeaving ? ' is-leaving' : ''}`}
          role="status"
          aria-label="Loading Labamba Trikaripur"
        >
          <img
            className="loader-image"
            src="/image.png"
            alt="Labamba Trikaripur"
            width="1536"
            height="1024"
          />
        </div>
      )}

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="Labamba, home">
            <img
              className="wordmark-mark"
              src="/labamba-logo.png"
              alt=""
              width="52"
              height="52"
            />
            <span className="wordmark-name">Labamba</span>
            <span className="wordmark-place">MEN’S WEDDING STUDIO</span>
          </a>

          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav
            className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-visit" href="#visit" onClick={closeMenu}>
              Find our store <ArrowIcon diagonal />
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              A little style, a lot of you
            </p>
            <h1 id="hero-title">
              Style that
              <br />
              feels like <em>you.</em>
            </h1>
            <p className="hero-description">
              A warm welcome, men’s styles for special days and every day,
              right here in Trikaripur.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#visit">
                Visit us <ArrowIcon />
              </a>
              <a className="text-link" href="#collections">
                Explore collections <ArrowIcon />
              </a>
            </div>
            <div className="hero-location">
              <span className="location-dot" />
              <span>Raza Complex</span>
              <span className="location-divider" />
              <span>Trikaripur, Kerala</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1400&q=85"
                alt="A man in a smart blue suit"
                fetchPriority="high"
              />
              <div className="hero-image-caption">
                <span className="caption-mark" aria-hidden="true">
                  L
                </span>
                <span>Find your kind of lovely</span>
              </div>
            </div>
            <div className="hero-stamp" aria-label="Made for your big days">
              <span>MADE FOR</span>
              <span className="stamp-heart" aria-hidden="true">
                ✳
              </span>
              <span>YOUR BIG DAYS</span>
            </div>
            <span className="hero-side-note">From the everyday to the extraordinary.</span>
          </div>

          <a className="scroll-cue" href="#collections" aria-label="Scroll to collections">
            <span />
            Scroll to explore
          </a>
          <span className="hero-index" aria-hidden="true">
            01 <span /> 04
          </span>
        </section>

        <section className="collections-section" id="collections">
          <div className="section-shell">
            <div className="section-heading collections-heading">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-line" />
                  A little something for everyone
                </p>
                <h2>
                  Find your <em>favourite.</em>
                </h2>
              </div>
              <p className="section-intro">
                Men’s styles for weddings, functions, and everyday wear. Come
                by and find what feels like you.
              </p>
            </div>

            <div className="collection-grid">
              {collections.map((collection, index) => (
                <a
                  className={`collection-card ${collection.className}`}
                  href="#visit"
                  key={collection.name}
                >
                  <div className="collection-image-wrap">
                    <img
                      src={collection.image}
                      alt={collection.alt}
                      loading="lazy"
                    />
                    <span className="collection-number">
                      0{index + 1}
                    </span>
                    <span className="collection-arrow" aria-hidden="true">
                      <ArrowIcon diagonal />
                    </span>
                  </div>
                  <div className="collection-copy">
                    <h3>{collection.name}</h3>
                    <p>{collection.detail}</p>
                  </div>
                </a>
              ))}
            </div>
            <p className="collection-note">
              Our collections are always changing — there’s more to discover
              in store.
            </p>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-shell about-layout">
            <div className="about-visual">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1100&q=80"
                alt="A men's shirt presented against a simple backdrop"
                loading="lazy"
              />
              <div className="about-photo-note">
                <span className="note-sparkle" aria-hidden="true">
                  ✳
                </span>
                <span>Come as you are</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                A good place to find your style
              </p>
              <h2>
                More than a
                <br />
                shopping trip.
              </h2>
              <p className="about-description">
                Labamba is a men’s clothing store in Trikaripur, with styles
                for weddings, functions, and everyday wear. We welcome friends
                and families with quality products, friendly service, and a
                pleasant place to take your time.
              </p>
              <p className="about-description about-description-secondary">
                Looking for a smart coat, an outfit for a celebration, or
                stitching? Come by and say hello — we’re happy you’re here.
              </p>
              <a className="text-link" href="#visit">
                Come say hello <ArrowIcon />
              </a>
              <span className="about-decoration" aria-hidden="true">
                L
              </span>
            </div>
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="visit-inner section-shell">
            <div className="visit-copy">
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-line" />
                Your neighbourhood men’s clothing store
              </p>
              <h2>
                We’ll save
                <br />
                you a <em>welcome.</em>
              </h2>
              <p className="visit-description">
                Drop by for men’s fashion in Kasaragod, wedding and function
                wear, coats, and stitching in Trikaripur. We’d love to see you.
              </p>
              <a
                className="button button-light"
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Get directions <ArrowIcon diagonal />
              </a>
            </div>
            <div className="address-card">
              <div className="address-card-top">
                <span className="address-pin" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span>Come find us</span>
              </div>
              <address>
                <strong>Labamba Trikaripur</strong>
                Raza Complex,
                <br />
                Thrikaripur, North Thrikkaripur,
                <br />
                Kerala 671310
              </address>
              <div className="address-card-bottom">
                <span>Trikaripur, Kasaragod</span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Labamba's location in Google Maps"
                >
                  <ArrowIcon diagonal />
                </a>
              </div>
            </div>
            <span className="visit-outline" aria-hidden="true">
              L
            </span>
          </div>
        </section>

        <section className="promise-section" aria-label="Our promise">
          <div className="promise-inner section-shell">
            <span className="promise-sparkle" aria-hidden="true">
              ✳
            </span>
            <p>Customer satisfaction is our priority. We look forward to serving you.</p>
            <span className="promise-sparkle" aria-hidden="true">
              ✳
            </span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-layout">
            <div className="contact-heading">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                We’d love to hear from you
              </p>
              <h2>
                Let’s keep
                <br />
                <em>in touch.</em>
              </h2>
              <p className="contact-intro">
                Have a question? Give us a visit or find us through the
                channels below.
              </p>
            </div>
            <div className="contact-details">
              <div className="contact-social-links" aria-label="Contact links">
                <a
                  className="contact-social-link contact-social-link--phone"
                  href={`tel:${phoneNumber}`}
                  aria-label="Call Labamba at +91 7902809705"
                >
                  <FaPhone aria-hidden="true" />
                </a>
                <a
                  className="contact-social-link contact-social-link--whatsapp"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Message Labamba on WhatsApp"
                >
                  <FaWhatsapp aria-hidden="true" />
                </a>
                <a
                  className="contact-social-link contact-social-link--instagram"
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Labamba on Instagram"
                >
                  <FaInstagram aria-hidden="true" />
                </a>
              </div>
              <div className="contact-row">
                <span className="contact-label">Opening hours</span>
                <span className="contact-value">Monday–Saturday, 9:30 AM–9:30 PM</span>
              </div>
              <a
                className="contact-address"
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Get directions to Raza Complex, Trikaripur, Kerala"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <path d="M19 10.2c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z" />
                  <circle cx="12" cy="10" r="2.3" />
                </svg>
                Raza Complex, Trikaripur, Kerala <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <div className="footer-brand">
            <a className="wordmark footer-wordmark" href="#home" aria-label="Labamba, back to top">
              <img
                className="wordmark-mark"
                src="/labamba-logo.png"
                alt=""
                width="52"
                height="52"
              />
              <span className="wordmark-name">Labamba</span>
              <span className="wordmark-place">MEN’S WEDDING STUDIO</span>
            </a>
            <a
              className="footer-location"
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Raza Complex, Trikaripur
              <br />
              Kerala 671310 <ArrowIcon diagonal />
            </a>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">Explore</h2>
            <nav className="footer-nav" aria-label="Footer navigation">
              {navigation.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="footer-bottom section-shell">
          <span className="footer-copyright">© 2026 Labamba Trikaripur</span>
          <span className="footer-credit">
            Website by <a href={`tel:${developerPhoneNumber}`}>mofzzx</a>
            <span aria-hidden="true"> · </span>
            <a href={`tel:${developerPhoneNumber}`}>8129886664</a>
          </span>
          <a className="footer-back-to-top" href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
