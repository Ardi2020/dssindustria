// DSS Industria — Sticky Navbar with scroll-spy + language toggle
const { useState, useEffect } = React;

function DSSNav({ lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const d = window.DSS;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = d.nav.links.map(l => l.id);
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lang]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  const switchLang = (l) => {
    setMobileOpen(false);
    window.__dssSetLang && window.__dssSetLang(l);
  };

  /* ── Language toggle pill ── */
  const LangToggle = ({ mobile }) => (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 2,
      background: 'var(--bg-gray)', borderRadius: 8, padding: 3,
      marginLeft: mobile ? 0 : 8,
    }}>
      {['id', 'en'].map(l => (
        <button key={l} onClick={() => switchLang(l)}
          style={{
            background: lang === l ? 'white' : 'transparent',
            border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
            color: lang === l ? 'var(--navy)' : 'var(--muted)',
            padding: '4px 9px', borderRadius: 6,
            boxShadow: lang === l ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
            transition: 'all 0.15s',
            textTransform: 'uppercase', letterSpacing: '0.04em',
          }}>
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 20px rgba(15,27,45,0.06)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 32px',
        height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, cursor: 'pointer' }}>
          <div style={{
            width: 38, height: 38, borderRadius: 9,
            background: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(245,158,11,0.3)', flexShrink: 0,
          }}>
            <span style={{ fontFamily: 'var(--font-head)', fontSize: 15, fontWeight: 800, color: '#1C1200', letterSpacing: '-0.02em' }}>DI</span>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: 16, fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              DSS Industria
            </div>
            <a href={d.nav.companyUrl} target="_blank" rel="noopener"
              onClick={e => e.stopPropagation()}
              style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.03em', lineHeight: 1 }}>
              {d.ui.nav.by}
            </a>
          </div>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-desktop">
          {d.nav.links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
                color: activeSection === l.id ? 'var(--navy)' : 'var(--body)',
                padding: '6px 12px', borderRadius: 6, position: 'relative',
                transition: 'color 0.2s',
              }}>
              {l.label}
              {activeSection === l.id && (
                <span style={{
                  position: 'absolute', bottom: 0, left: 12, right: 12, height: 2,
                  background: 'var(--amber)', borderRadius: 1,
                }} />
              )}
            </button>
          ))}
        </div>

        {/* Right: lang toggle + CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="nav-desktop">
            <LangToggle />
          </div>
          <a href={d.nav.waUrl} target="_blank" rel="noopener"
            className="btn btn-primary btn-sm nav-cta"
            style={{ display: 'flex' }}>
            {d.ui.nav.cta}
          </a>
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(o => !o)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 6, color: 'var(--navy)', display: 'none',
            }}>
            {mobileOpen
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: 'white', borderTop: '1px solid var(--border)',
          padding: '12px 20px 20px',
          display: 'flex', flexDirection: 'column', gap: 2,
        }}>
          {d.nav.links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              style={{
                background: activeSection === l.id ? 'var(--bg-gray)' : 'none',
                border: 'none', cursor: 'pointer', textAlign: 'left',
                fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500,
                color: activeSection === l.id ? 'var(--navy)' : 'var(--body)',
                padding: '11px 12px', borderRadius: 8,
              }}>
              {l.label}
            </button>
          ))}
          <div style={{ padding: '8px 0 4px' }}>
            <LangToggle mobile />
          </div>
          <a href={d.nav.waUrl} target="_blank" rel="noopener"
            className="btn btn-primary"
            style={{ marginTop: 4, justifyContent: 'center' }}>
            {d.ui.nav.cta}
          </a>
        </div>
      )}
    </nav>
  );
}

Object.assign(window, { DSSNav });
