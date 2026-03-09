import { navigationItems } from '../content'

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#hero" aria-label="Back to top">
        <span className="brand-mark" />
        <span>Ammar</span>
      </a>

      <nav className="site-nav" aria-label="Section navigation">
        {navigationItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default SiteHeader
